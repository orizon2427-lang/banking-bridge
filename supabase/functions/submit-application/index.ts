const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

interface ApplicationData {
  name: string;
  email: string;
  university: string;
  major: string;
  division: string;
  motivation: string;
  experience: string;
}

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, {
      status: 200,
      headers: corsHeaders,
    });
  }

  try {
    const applicationData: ApplicationData = await req.json();

    const emailBody = `
New Application to BankingBridge

===================
Applicant Information
===================
Name: ${applicationData.name}
Email: ${applicationData.email}
University: ${applicationData.university}
Major: ${applicationData.major}
Division: ${applicationData.division || 'Not specified'}

===================
Motivation
===================
${applicationData.motivation}

===================
Relevant Experience
===================
${applicationData.experience || 'Not provided'}

===================
Submitted: ${new Date().toLocaleString()}
===================
    `.trim();

    const response = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${Deno.env.get('RESEND_API_KEY')}`,
      },
      body: JSON.stringify({
        from: 'BankingBridge Applications <applications@bankingbridge.org>',
        to: ['jules.van.remoortere@gmail.com'],
        subject: `New Application: ${applicationData.name} - ${applicationData.division || 'General'}`,
        text: emailBody,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error('Resend API error:', error);
      throw new Error('Failed to send email');
    }

    return new Response(
      JSON.stringify({ success: true, message: 'Application submitted successfully' }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 200,
      }
    );
  } catch (error) {
    console.error('Error processing application:', error);

    return new Response(
      JSON.stringify({
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error'
      }),
      {
        headers: {
          ...corsHeaders,
          'Content-Type': 'application/json',
        },
        status: 500,
      }
    );
  }
});
