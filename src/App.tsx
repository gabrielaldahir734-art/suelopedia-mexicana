import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import Index from "./pages/Index";
import SoilMenu from "./pages/SoilMenu";
import SoilInfo from "./pages/SoilInfo";
import SoilResearchList from "./pages/SoilResearchList";
import SoilResearchForm from "./pages/SoilResearchForm";
import ResearchMenu from "./pages/ResearchMenu";
import ResearchInfo from "./pages/ResearchInfo";
import Auth from "./pages/Auth";
import AdminPanel from "./pages/AdminPanel";
import AdminSoilEdit from "./pages/AdminSoilEdit";
import AdminModeration from "./pages/AdminModeration";
import OptionsMenu from "./pages/OptionsMenu";
import Glossary from "./pages/Glossary";
import SoilMap from "./pages/SoilMap";
import QuizMenu from "./pages/QuizMenu";
import QuizPlay from "./pages/QuizPlay";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function AdminRoute({ children }: { children: React.ReactNode }) {
  const { user, loading, isAdmin } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;
  if (!isAdmin) return <Navigate to="/" replace />;
  return <>{children}</>;
}

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (!user) return <Navigate to="/auth" replace />;
  return <>{children}</>;
}

function AuthRoute({ children }: { children: React.ReactNode }) {
  const { user, loading } = useAuth();
  if (loading) return null;
  if (user) return <Navigate to="/" replace />;
  return <>{children}</>;
}

const AppRoutes = () => (
  <div className="min-h-dvh bg-earth-dark flex items-start justify-center">
    <Routes>
      <Route path="/auth" element={<AuthRoute><Auth /></AuthRoute>} />
      <Route path="/" element={<ProtectedRoute><Index /></ProtectedRoute>} />
      <Route path="/soil/:id" element={<ProtectedRoute><SoilMenu /></ProtectedRoute>} />
      <Route path="/soil/:id/investigaciones" element={<ProtectedRoute><SoilResearchList /></ProtectedRoute>} />
      <Route path="/soil/:id/investigaciones/nueva" element={<ProtectedRoute><SoilResearchForm /></ProtectedRoute>} />
      <Route path="/soil/:id/investigaciones/:researchId" element={<ProtectedRoute><ResearchMenu /></ProtectedRoute>} />
      <Route path="/soil/:id/investigaciones/:researchId/:fieldId" element={<ProtectedRoute><ResearchInfo /></ProtectedRoute>} />
      <Route path="/soil/:id/:optionId" element={<ProtectedRoute><SoilInfo /></ProtectedRoute>} />
      <Route path="/opciones" element={<ProtectedRoute><OptionsMenu /></ProtectedRoute>} />
      <Route path="/opciones/glosario" element={<ProtectedRoute><Glossary /></ProtectedRoute>} />
      <Route path="/opciones/mapa-suelos" element={<ProtectedRoute><SoilMap /></ProtectedRoute>} />
      <Route path="/opciones/quiz" element={<ProtectedRoute><QuizMenu /></ProtectedRoute>} />
      <Route path="/opciones/quiz/:quizId" element={<ProtectedRoute><QuizPlay /></ProtectedRoute>} />
      <Route path="/admin" element={<AdminRoute><AdminPanel /></AdminRoute>} />
      <Route path="/admin/soil/:id" element={<AdminRoute><AdminSoilEdit /></AdminRoute>} />
      <Route path="/admin/moderacion" element={<AdminRoute><AdminModeration /></AdminRoute>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </div>
);

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AuthProvider>
          <AppRoutes />
        </AuthProvider>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
