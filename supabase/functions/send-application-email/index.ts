import "jsr:@supabase/functions-js/edge-runtime.d.ts";
import { createClient } from "npm:@supabase/supabase-js@2.57.4";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "POST, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ApplicationData {
  name: string;
  email: string;
  university: string;
  major: string;
  division: string;
  motivation: string;
  experience?: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const supabaseUrl = Deno.env.get("SUPABASE_URL")!;
    const supabaseKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY")!;
    const supabase = createClient(supabaseUrl, supabaseKey);

    const applicationData: ApplicationData = await req.json();

    const { data, error } = await supabase
      .from("applications")
      .insert([
        {
          name: applicationData.name,
          email: applicationData.email,
          university: applicationData.university,
          major: applicationData.major,
          division: applicationData.division,
          motivation: applicationData.motivation,
          experience: applicationData.experience || null,
        },
      ])
      .select()
      .single();

    if (error) {
      throw error;
    }

    const emailBody = `
New Application to BankingBridge

Name: ${applicationData.name}
Email: ${applicationData.email}
University: ${applicationData.university}
Major: ${applicationData.major}
Division: ${applicationData.division}

Motivation:
${applicationData.motivation}

Relevant Experience:
${applicationData.experience || 'Not provided'}

Application ID: ${data.id}
Submitted: ${new Date(data.created_at).toLocaleString()}
    `.trim();

    const subject = `New Application: ${applicationData.name} - ${applicationData.division}`;
    const mailtoLink = `mailto:jules.van.remoortere@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(emailBody)}`;

    return new Response(
      JSON.stringify({
        success: true,
        message: "Application submitted successfully",
        mailtoLink: mailtoLink,
        applicationId: data.id,
      }),
      {
        status: 200,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    console.error("Error processing application:", error);
    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : "Unknown error occurred",
      }),
      {
        status: 500,
        headers: {
          ...corsHeaders,
          "Content-Type": "application/json",
        },
      }
    );
  }
});
