
-- Add moderation columns to user_research
ALTER TABLE public.user_research
ADD COLUMN status text NOT NULL DEFAULT 'pendiente',
ADD COLUMN admin_comment text;

-- Drop old permissive SELECT policy and create filtered one
DROP POLICY IF EXISTS "Anyone can view research" ON public.user_research;

-- Public users only see approved research
CREATE POLICY "Anyone can view approved research"
ON public.user_research
FOR SELECT
USING (status = 'aprobada' OR has_role(auth.uid(), 'admin'::app_role));

-- Admins can update research (approve/reject)
CREATE POLICY "Admins can update research"
ON public.user_research
FOR UPDATE
USING (has_role(auth.uid(), 'admin'::app_role))
WITH CHECK (has_role(auth.uid(), 'admin'::app_role));
