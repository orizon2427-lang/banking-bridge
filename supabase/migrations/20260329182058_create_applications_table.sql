/*
  # Create Applications Table

  1. New Tables
    - `applications`
      - `id` (uuid, primary key) - Unique identifier for each application
      - `name` (text) - Applicant's full name
      - `email` (text) - Applicant's email address
      - `university` (text) - University name
      - `major` (text) - Field of study
      - `division` (text) - Division of interest
      - `motivation` (text) - Why they want to join
      - `experience` (text, nullable) - Relevant experience
      - `created_at` (timestamptz) - Submission timestamp
      - `status` (text) - Application status (pending, reviewed, accepted, rejected)

  2. Security
    - Enable RLS on `applications` table
    - Add policy for anyone to insert applications (public submission form)
    - No read access needed for applicants (internal use only)
*/

CREATE TABLE IF NOT EXISTS applications (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  university text NOT NULL,
  major text NOT NULL,
  division text NOT NULL,
  motivation text NOT NULL,
  experience text,
  created_at timestamptz DEFAULT now(),
  status text DEFAULT 'pending'
);

ALTER TABLE applications ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit applications"
  ON applications
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);