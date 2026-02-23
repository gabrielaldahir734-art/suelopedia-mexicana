export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.1"
  }
  public: {
    Tables: {
      soil_overrides: {
        Row: {
          clasificacion_usda: string | null
          clasificacion_wrb: string | null
          clima: string | null
          color_estructura: string | null
          distribucion_geografica: string | null
          drenaje: string | null
          id: string
          limitantes: string | null
          material_parental: string | null
          nombre: string | null
          recomendaciones: string | null
          relieve: string | null
          retencion_agua: string | null
          riesgos: string | null
          soil_id: string
          tagline: string | null
          updated_at: string
          usos_suelo: string | null
          vegetacion: string | null
        }
        Insert: {
          clasificacion_usda?: string | null
          clasificacion_wrb?: string | null
          clima?: string | null
          color_estructura?: string | null
          distribucion_geografica?: string | null
          drenaje?: string | null
          id?: string
          limitantes?: string | null
          material_parental?: string | null
          nombre?: string | null
          recomendaciones?: string | null
          relieve?: string | null
          retencion_agua?: string | null
          riesgos?: string | null
          soil_id: string
          tagline?: string | null
          updated_at?: string
          usos_suelo?: string | null
          vegetacion?: string | null
        }
        Update: {
          clasificacion_usda?: string | null
          clasificacion_wrb?: string | null
          clima?: string | null
          color_estructura?: string | null
          distribucion_geografica?: string | null
          drenaje?: string | null
          id?: string
          limitantes?: string | null
          material_parental?: string | null
          nombre?: string | null
          recomendaciones?: string | null
          relieve?: string | null
          retencion_agua?: string | null
          riesgos?: string | null
          soil_id?: string
          tagline?: string | null
          updated_at?: string
          usos_suelo?: string | null
          vegetacion?: string | null
        }
        Relationships: []
      }
      user_research: {
        Row: {
          altitud: number | null
          autor: string
          clima_tipico: string
          color_tipico: string
          created_at: string
          distribucion: string
          drenaje: string
          fecha: string
          id: string
          imagenes: string[]
          latitud: number | null
          limitantes: string
          longitud: number | null
          material_parental: string
          nombre_investigacion: string
          notas_adicionales: string
          retencion_agua: string
          soil_id: string
          ubicacion_timestamp: string | null
          uso_comun: string
          vegetacion: string
        }
        Insert: {
          altitud?: number | null
          autor: string
          clima_tipico?: string
          color_tipico?: string
          created_at?: string
          distribucion?: string
          drenaje?: string
          fecha: string
          id?: string
          imagenes?: string[]
          latitud?: number | null
          limitantes?: string
          longitud?: number | null
          material_parental?: string
          nombre_investigacion: string
          notas_adicionales?: string
          retencion_agua?: string
          soil_id: string
          ubicacion_timestamp?: string | null
          uso_comun?: string
          vegetacion?: string
        }
        Update: {
          altitud?: number | null
          autor?: string
          clima_tipico?: string
          color_tipico?: string
          created_at?: string
          distribucion?: string
          drenaje?: string
          fecha?: string
          id?: string
          imagenes?: string[]
          latitud?: number | null
          limitantes?: string
          longitud?: number | null
          material_parental?: string
          nombre_investigacion?: string
          notas_adicionales?: string
          retencion_agua?: string
          soil_id?: string
          ubicacion_timestamp?: string | null
          uso_comun?: string
          vegetacion?: string
        }
        Relationships: []
      }
      user_roles: {
        Row: {
          id: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Insert: {
          id?: string
          role: Database["public"]["Enums"]["app_role"]
          user_id: string
        }
        Update: {
          id?: string
          role?: Database["public"]["Enums"]["app_role"]
          user_id?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      has_role: {
        Args: {
          _role: Database["public"]["Enums"]["app_role"]
          _user_id: string
        }
        Returns: boolean
      }
    }
    Enums: {
      app_role: "admin" | "user"
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {
      app_role: ["admin", "user"],
    },
  },
} as const
