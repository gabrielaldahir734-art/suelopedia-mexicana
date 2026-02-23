
-- User roles enum and table
CREATE TYPE public.app_role AS ENUM ('admin', 'user');

CREATE TABLE public.user_roles (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  role app_role NOT NULL,
  UNIQUE (user_id, role)
);

ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

-- Security definer function to check roles (avoids RLS recursion)
CREATE OR REPLACE FUNCTION public.has_role(_user_id uuid, _role app_role)
RETURNS boolean
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- Users can view their own roles
CREATE POLICY "Users can view own roles"
ON public.user_roles FOR SELECT
TO authenticated
USING (auth.uid() = user_id);

-- Admins can manage all roles
CREATE POLICY "Admins can manage roles"
ON public.user_roles FOR ALL
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Soil overrides table (admin edits to static soil data)
CREATE TABLE public.soil_overrides (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  soil_id text NOT NULL UNIQUE,
  nombre text,
  tagline text,
  clasificacion_wrb text,
  clasificacion_usda text,
  distribucion_geografica text,
  material_parental text,
  relieve text,
  clima text,
  vegetacion text,
  usos_suelo text,
  limitantes text,
  color_estructura text,
  retencion_agua text,
  drenaje text,
  riesgos text,
  recomendaciones text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

ALTER TABLE public.soil_overrides ENABLE ROW LEVEL SECURITY;

-- Anyone can read soil overrides
CREATE POLICY "Anyone can view soil overrides"
ON public.soil_overrides FOR SELECT
USING (true);

-- Only admins can insert
CREATE POLICY "Admins can insert soil overrides"
ON public.soil_overrides FOR INSERT
TO authenticated
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can update
CREATE POLICY "Admins can update soil overrides"
ON public.soil_overrides FOR UPDATE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'))
WITH CHECK (public.has_role(auth.uid(), 'admin'));

-- Only admins can delete
CREATE POLICY "Admins can delete soil overrides"
ON public.soil_overrides FOR DELETE
TO authenticated
USING (public.has_role(auth.uid(), 'admin'));

-- Trigger to update timestamp
CREATE OR REPLACE FUNCTION public.update_soil_overrides_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

CREATE TRIGGER update_soil_overrides_timestamp
BEFORE UPDATE ON public.soil_overrides
FOR EACH ROW
EXECUTE FUNCTION public.update_soil_overrides_updated_at();
