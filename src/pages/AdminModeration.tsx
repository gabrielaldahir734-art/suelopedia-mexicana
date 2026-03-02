import { useNavigate } from "react-router-dom";
import { soils } from "@/data/soils";
import { getAllResearch, updateResearchStatus, UserResearch, ResearchStatus } from "@/lib/userResearch";
import { notifyResearchStatus } from "@/lib/notifications";
import { ArrowLeft, Loader2, Check, X, Clock, Eye, MessageSquare } from "lucide-react";
import { useEffect, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";

const statusConfig: Record<ResearchStatus, { label: string; icon: string; color: string }> = {
  pendiente: { label: "Pendientes", icon: "🟡", color: "bg-yellow-500/10 text-yellow-700 border-yellow-500/30" },
  aprobada: { label: "Aprobadas", icon: "🟢", color: "bg-green-500/10 text-green-700 border-green-500/30" },
  rechazada: { label: "Rechazadas", icon: "🔴", color: "bg-red-500/10 text-red-700 border-red-500/30" },
};

const AdminModeration = () => {
  const navigate = useNavigate();
  const { toast } = useToast();
  const [researches, setResearches] = useState<UserResearch[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<ResearchStatus>("pendiente");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [comment, setComment] = useState("");
  const [actionLoading, setActionLoading] = useState<string | null>(null);

  const loadResearches = async () => {
    setLoading(true);
    const data = await getAllResearch(activeTab);
    setResearches(data);
    setLoading(false);
  };

  useEffect(() => {
    loadResearches();
  }, [activeTab]);

  const handleAction = async (research: UserResearch, newStatus: ResearchStatus) => {
    setActionLoading(research.id);
    const success = await updateResearchStatus(research.id, newStatus, comment || undefined);
    setActionLoading(null);

    if (success) {
      // Notify user via email (fire-and-forget)
      notifyResearchStatus(
        newStatus === "aprobada" ? "approved" : "rejected",
        research.nombreInvestigacion,
        comment || undefined,
      );
      toast({
        title: newStatus === "aprobada" ? "✅ Investigación aprobada" : "❌ Investigación rechazada",
        description: `"${research.nombreInvestigacion}" de ${research.autor}`,
      });
      setExpandedId(null);
      setComment("");
      loadResearches();
    } else {
      toast({ title: "Error", description: "No se pudo actualizar el estado.", variant: "destructive" });
    }
  };

  const getSoilName = (soilId: string) => soils.find((s) => s.id === soilId)?.nombre || soilId;

  return (
    <div className="app-shell flex flex-col">
      <header className="gradient-header pt-safe flex-shrink-0">
        <div className="flex items-center gap-3 px-4 py-4">
          <button
            onClick={() => navigate("/admin")}
            className="no-tap w-9 h-9 rounded-full bg-white/10 flex items-center justify-center active:scale-90 transition-transform flex-shrink-0"
          >
            <ArrowLeft className="w-5 h-5 text-primary-foreground" />
          </button>
          <div className="flex-1 min-w-0">
            <h2 className="font-display text-lg font-bold text-primary-foreground leading-tight">
              📋 Moderación
            </h2>
            <p className="text-primary-foreground/70 text-xs font-body">Revisar investigaciones</p>
          </div>
        </div>
      </header>

      {/* Tabs */}
      <div className="flex gap-1 px-3 py-3 bg-card border-b border-border">
        {(Object.keys(statusConfig) as ResearchStatus[]).map((status) => (
          <button
            key={status}
            onClick={() => { setActiveTab(status); setExpandedId(null); }}
            className={`flex-1 py-2 rounded-lg text-xs font-body font-semibold transition-all ${
              activeTab === status
                ? "bg-primary text-primary-foreground shadow-sm"
                : "bg-muted text-muted-foreground"
            }`}
          >
            {statusConfig[status].icon} {statusConfig[status].label}
          </button>
        ))}
      </div>

      <main className="flex-1 overflow-y-auto scrollbar-hide">
        <div className="px-3 py-4 pb-safe">
          {loading ? (
            <div className="text-center py-12">
              <Loader2 className="w-8 h-8 animate-spin text-primary mx-auto mb-3" />
              <p className="text-muted-foreground text-xs font-body">Cargando...</p>
            </div>
          ) : researches.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-4xl mb-3">{statusConfig[activeTab].icon}</p>
              <p className="text-foreground font-body font-semibold text-sm">
                No hay investigaciones {statusConfig[activeTab].label.toLowerCase()}
              </p>
            </div>
          ) : (
            <div className="flex flex-col gap-3">
              {researches.map((r) => {
                const isExpanded = expandedId === r.id;
                return (
                  <div key={r.id} className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
                    {/* Header */}
                    <button
                      onClick={() => { setExpandedId(isExpanded ? null : r.id); setComment(r.adminComment || ""); }}
                      className="w-full text-left px-4 py-3 flex items-start gap-3"
                    >
                      {r.imagenes?.[0] ? (
                        <img src={r.imagenes[0]} alt="" className="w-14 h-14 rounded-lg object-cover flex-shrink-0" />
                      ) : (
                        <div className="w-14 h-14 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                          <span className="text-2xl">🔬</span>
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <p className="font-body font-semibold text-foreground text-sm leading-tight line-clamp-1">
                          {r.nombreInvestigacion}
                        </p>
                        <p className="text-muted-foreground text-xs font-body mt-0.5">
                          por {r.autor} · {r.fecha}
                        </p>
                        <div className="flex items-center gap-2 mt-1">
                          <Badge variant="outline" className="text-[10px] px-1.5 py-0">
                            {getSoilName(r.soilId)}
                          </Badge>
                          <Badge variant="outline" className={`text-[10px] px-1.5 py-0 border ${statusConfig[r.status].color}`}>
                            {statusConfig[r.status].icon} {r.status}
                          </Badge>
                        </div>
                      </div>
                      <Eye className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                    </button>

                    {/* Expanded details */}
                    {isExpanded && (
                      <div className="border-t border-border px-4 py-3 space-y-3">
                        {/* Images */}
                        {r.imagenes?.length > 0 && (
                          <div className="flex gap-2 overflow-x-auto scrollbar-hide">
                            {r.imagenes.map((img, i) => (
                              <img key={i} src={img} alt={`Foto ${i + 1}`} className="w-24 h-24 rounded-lg object-cover flex-shrink-0" />
                            ))}
                          </div>
                        )}

                        {/* Location */}
                        {r.ubicacion && (
                          <div className="bg-muted rounded-lg px-3 py-2">
                            <p className="text-xs font-body text-muted-foreground">
                              📍 Lat: {r.ubicacion.latitude.toFixed(4)}, Lng: {r.ubicacion.longitude.toFixed(4)}
                              {r.ubicacion.altitude != null && ` · Alt: ${r.ubicacion.altitude.toFixed(0)}m`}
                            </p>
                          </div>
                        )}

                        {/* All fields */}
                        <div className="space-y-2">
                          {[
                            { label: "Material Parental", value: r.materialParental },
                            { label: "Color Típico", value: r.colorTipico },
                            { label: "Retención de Agua", value: r.retencionAgua },
                            { label: "Drenaje", value: r.drenaje },
                            { label: "Clima Típico", value: r.climaTipico },
                            { label: "Vegetación", value: r.vegetacion },
                            { label: "Uso Común", value: r.usoComun },
                            { label: "Limitantes", value: r.limitantes },
                            { label: "Distribución", value: r.distribucion },
                            { label: "Notas Adicionales", value: r.notasAdicionales },
                          ].filter(f => f.value).map((f) => (
                            <div key={f.label}>
                              <p className="text-xs font-body font-semibold text-foreground">{f.label}</p>
                              <p className="text-xs font-body text-muted-foreground">{f.value}</p>
                            </div>
                          ))}
                        </div>

                        {/* Admin comment */}
                        {activeTab === "pendiente" && (
                          <>
                            <div>
                              <label className="text-xs font-body font-semibold text-foreground mb-1 flex items-center gap-1">
                                <MessageSquare className="w-3 h-3" /> Comentario (opcional)
                              </label>
                              <textarea
                                value={comment}
                                onChange={(e) => setComment(e.target.value)}
                                placeholder="Motivo de rechazo o comentario..."
                                rows={2}
                                className="w-full bg-muted border border-border rounded-lg px-3 py-2 text-foreground text-xs font-body placeholder:text-muted-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                              />
                            </div>

                            <div className="flex gap-2">
                              <Button
                                size="sm"
                                onClick={() => handleAction(r, "aprobada")}
                                disabled={!!actionLoading}
                                className="flex-1 gap-1 bg-green-600 hover:bg-green-700 text-white"
                              >
                                {actionLoading === r.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <Check className="w-3 h-3" />}
                                Aprobar
                              </Button>
                              <Button
                                size="sm"
                                variant="destructive"
                                onClick={() => handleAction(r, "rechazada")}
                                disabled={!!actionLoading}
                                className="flex-1 gap-1"
                              >
                                {actionLoading === r.id ? <Loader2 className="w-3 h-3 animate-spin" /> : <X className="w-3 h-3" />}
                                Rechazar
                              </Button>
                            </div>
                          </>
                        )}

                        {/* Show admin comment for already reviewed */}
                        {activeTab !== "pendiente" && r.adminComment && (
                          <div className="bg-muted rounded-lg px-3 py-2">
                            <p className="text-xs font-body font-semibold text-foreground mb-0.5">💬 Comentario del admin:</p>
                            <p className="text-xs font-body text-muted-foreground">{r.adminComment}</p>
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </main>
    </div>
  );
};

export default AdminModeration;
