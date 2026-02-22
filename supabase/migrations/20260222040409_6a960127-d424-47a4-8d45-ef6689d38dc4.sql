
-- Create table for user research/investigations
CREATE TABLE public.user_research (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  soil_id TEXT NOT NULL,
  fecha TEXT NOT NULL,
  autor TEXT NOT NULL,
  nombre_investigacion TEXT NOT NULL,
  material_parental TEXT NOT NULL DEFAULT '',
  color_tipico TEXT NOT NULL DEFAULT '',
  retencion_agua TEXT NOT NULL DEFAULT '',
  drenaje TEXT NOT NULL DEFAULT '',
  clima_tipico TEXT NOT NULL DEFAULT '',
  vegetacion TEXT NOT NULL DEFAULT '',
  uso_comun TEXT NOT NULL DEFAULT '',
  limitantes TEXT NOT NULL DEFAULT '',
  distribucion TEXT NOT NULL DEFAULT '',
  notas_adicionales TEXT NOT NULL DEFAULT '',
  latitud DOUBLE PRECISION,
  longitud DOUBLE PRECISION,
  altitud DOUBLE PRECISION,
  ubicacion_timestamp TEXT,
  imagenes TEXT[] NOT NULL DEFAULT '{}',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_research ENABLE ROW LEVEL SECURITY;

-- Anyone can read research (public data)
CREATE POLICY "Anyone can view research"
  ON public.user_research FOR SELECT
  USING (true);

-- Anyone can insert research (no auth required for community contributions)
CREATE POLICY "Anyone can add research"
  ON public.user_research FOR INSERT
  WITH CHECK (true);
