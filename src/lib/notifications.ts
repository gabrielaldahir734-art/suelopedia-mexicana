import { supabase } from "@/integrations/supabase/client";

interface ResearchNotificationData {
  nombreInvestigacion: string;
  autor: string;
  soilName: string;
  fecha: string;
  materialParental?: string;
  colorTipico?: string;
  retencionAgua?: string;
  drenaje?: string;
  climaTipico?: string;
  vegetacion?: string;
  usoComun?: string;
  limitantes?: string;
  distribucion?: string;
  notasAdicionales?: string;
  imagenes?: string[];
  ubicacion?: { latitude: number; longitude: number; altitude?: number | null } | null;
}

export async function notifyNewSubmission(research: ResearchNotificationData) {
  try {
    await supabase.functions.invoke("send-notification", {
      body: { type: "new_submission", research },
    });
  } catch (e) {
    console.error("Failed to send new submission notification:", e);
  }
}

export async function notifyResearchStatus(
  type: "approved" | "rejected",
  researchName: string,
  adminComment?: string,
  userEmail?: string
) {
  try {
    await supabase.functions.invoke("send-notification", {
      body: {
        type,
        research: { nombreInvestigacion: researchName, autor: "", soilName: "", fecha: "" },
        adminComment,
        userEmail,
      },
    });
  } catch (e) {
    console.error("Failed to send status notification:", e);
  }
}
