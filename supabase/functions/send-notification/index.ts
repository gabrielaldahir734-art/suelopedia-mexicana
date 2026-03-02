import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type, x-supabase-client-platform, x-supabase-client-platform-version, x-supabase-client-runtime, x-supabase-client-runtime-version",
};

const ADMIN_EMAIL = "gabrielaldahir286@gmail.com";

interface NotificationPayload {
  type: "new_submission" | "approved" | "rejected";
  research: {
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
  };
  adminComment?: string;
  userEmail?: string;
}

function buildNewSubmissionHtml(r: NotificationPayload["research"]): string {
  const fields = [
    ["Material Parental", r.materialParental],
    ["Color Típico", r.colorTipico],
    ["Retención de Agua", r.retencionAgua],
    ["Drenaje", r.drenaje],
    ["Clima Típico", r.climaTipico],
    ["Vegetación", r.vegetacion],
    ["Uso Común", r.usoComun],
    ["Limitantes", r.limitantes],
    ["Distribución", r.distribucion],
    ["Notas Adicionales", r.notasAdicionales],
  ].filter(([, v]) => v);

  const fieldsHtml = fields
    .map(([label, value]) => `<tr><td style="padding:6px 12px;font-weight:600;color:#374151;border-bottom:1px solid #e5e7eb">${label}</td><td style="padding:6px 12px;color:#6b7280;border-bottom:1px solid #e5e7eb">${value}</td></tr>`)
    .join("");

  const imagesHtml = r.imagenes?.length
    ? `<div style="margin-top:16px">${r.imagenes.map((url, i) => `<img src="${url}" alt="Foto ${i + 1}" style="width:200px;height:150px;object-fit:cover;border-radius:8px;margin-right:8px" />`).join("")}</div>`
    : "";

  const locationHtml = r.ubicacion
    ? `<p style="color:#6b7280;font-size:14px">📍 Lat: ${r.ubicacion.latitude.toFixed(4)}, Lng: ${r.ubicacion.longitude.toFixed(4)}${r.ubicacion.altitude != null ? ` · Alt: ${r.ubicacion.altitude.toFixed(0)}m` : ""}</p>`
    : "";

  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;padding:24px;border-radius:12px">
      <h1 style="color:#16a34a;font-size:20px">🔬 Nueva investigación enviada</h1>
      <p style="color:#374151"><strong>${r.nombreInvestigacion}</strong></p>
      <p style="color:#6b7280;font-size:14px">Por: ${r.autor} · Tipo de suelo: ${r.soilName} · Fecha: ${r.fecha}</p>
      ${locationHtml}
      ${imagesHtml}
      <table style="width:100%;border-collapse:collapse;margin-top:16px;font-size:14px">${fieldsHtml}</table>
      <p style="margin-top:24px;color:#6b7280;font-size:13px">Revisa esta investigación en el panel de administración.</p>
    </div>
  `;
}

function buildStatusHtml(type: "approved" | "rejected", researchName: string, comment?: string): string {
  const isApproved = type === "approved";
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#ffffff;padding:24px;border-radius:12px">
      <h1 style="color:${isApproved ? "#16a34a" : "#dc2626"};font-size:20px">${isApproved ? "✅ Tu investigación fue aprobada" : "❌ Tu investigación fue rechazada"}</h1>
      <p style="color:#374151"><strong>${researchName}</strong></p>
      <p style="color:#6b7280;font-size:14px">${isApproved ? "¡Felicidades! Tu investigación ya está publicada y visible para la comunidad." : "Lamentablemente tu investigación no fue aprobada en esta ocasión."}</p>
      ${comment ? `<div style="background:#f3f4f6;border-radius:8px;padding:12px;margin-top:12px"><p style="color:#374151;font-size:14px;margin:0"><strong>Comentario del revisor:</strong></p><p style="color:#6b7280;font-size:14px;margin:4px 0 0">${comment}</p></div>` : ""}
      <p style="margin-top:24px;color:#9ca3af;font-size:12px">Suelopedia Mexicana</p>
    </div>
  `;
}

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");
    if (!RESEND_API_KEY) {
      throw new Error("RESEND_API_KEY is not configured");
    }

    const payload: NotificationPayload = await req.json();
    const { type, research, adminComment, userEmail } = payload;

    let to: string;
    let subject: string;
    let html: string;

    if (type === "new_submission") {
      to = ADMIN_EMAIL;
      subject = `🔬 Nueva investigación: ${research.nombreInvestigacion} (${research.soilName})`;
      html = buildNewSubmissionHtml(research);
    } else if (type === "approved") {
      to = userEmail || ADMIN_EMAIL;
      subject = `✅ Tu investigación "${research.nombreInvestigacion}" fue aprobada`;
      html = buildStatusHtml("approved", research.nombreInvestigacion, adminComment);
    } else if (type === "rejected") {
      to = userEmail || ADMIN_EMAIL;
      subject = `❌ Tu investigación "${research.nombreInvestigacion}" fue rechazada`;
      html = buildStatusHtml("rejected", research.nombreInvestigacion, adminComment);
    } else {
      throw new Error("Invalid notification type");
    }

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "Suelopedia <onboarding@resend.dev>",
        to: [to],
        subject,
        html,
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      throw new Error(`Resend API error [${res.status}]: ${JSON.stringify(data)}`);
    }

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  } catch (error: unknown) {
    console.error("Notification error:", error);
    const msg = error instanceof Error ? error.message : "Unknown error";
    return new Response(JSON.stringify({ success: false, error: msg }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
