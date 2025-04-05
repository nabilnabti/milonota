
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import Affiliation from "./pages/Affiliation";
import NotFound from "./pages/NotFound";
import Login from "./pages/Login";
import DashboardLayout from "./components/dashboard/DashboardLayout";
import Dashboard from "./pages/dashboard/Dashboard";
import Guide from "./pages/dashboard/Guide";
import Support from "./pages/dashboard/Support";
import Settings from "./pages/dashboard/Settings";
import Premium from "./pages/dashboard/Premium";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          {/* Public routes */}
          <Route path="/" element={<Index />} />
          <Route path="/affiliation" element={<Affiliation />} />
          <Route path="/histoire" element={<NotFound />} />
          <Route path="/recrutement" element={<NotFound />} />
          <Route path="/login" element={<Login />} />
          
          {/* Dashboard routes - wrapped in the DashboardLayout */}
          <Route path="/dashboard" element={<DashboardLayout><Dashboard /></DashboardLayout>} />
          <Route path="/dashboard/guide" element={<DashboardLayout><Guide /></DashboardLayout>} />
          <Route path="/dashboard/support" element={<DashboardLayout><Support /></DashboardLayout>} />
          <Route path="/dashboard/settings" element={<DashboardLayout><Settings /></DashboardLayout>} />
          <Route path="/dashboard/premium" element={<DashboardLayout><Premium /></DashboardLayout>} />
          
          {/* Redirect /dashboard/home to /dashboard */}
          <Route path="/dashboard/home" element={<Navigate to="/dashboard" replace />} />
          
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
