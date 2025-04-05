
import { ReactNode } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton
} from "@/components/ui/sidebar";
import { Home, Info, HelpCircle, Settings, Zap } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

interface DashboardLayoutProps {
  children: ReactNode;
}

const DashboardLayout = ({ children }: DashboardLayoutProps) => {
  const location = useLocation();
  
  const isActive = (path: string) => {
    return location.pathname === path;
  };
  
  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar>
          <SidebarContent>
            <div className="px-4 py-6">
              <div className="flex items-center gap-2">
                <Link to="/dashboard" className="flex items-center">
                  <span className="text-2xl font-bold">Neuronote</span>
                  <span className="text-pink-500">🧠</span>
                </Link>
              </div>
              <p className="text-sm text-gray-500 italic">propulsé par l'IA</p>
            </div>
            
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard")}>
                    <Link to="/dashboard">
                      <Home />
                      <span>Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/guide")}>
                    <Link to="/dashboard/guide">
                      <Info />
                      <span>Guide</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/support")}>
                    <Link to="/dashboard/support">
                      <HelpCircle />
                      <span>Support</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild isActive={isActive("/dashboard/settings")}>
                    <Link to="/dashboard/settings">
                      <Settings />
                      <span>Paramètres</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
            
            <div className="mt-auto px-4 py-4">
              <Link to="/dashboard/premium" className="flex flex-col items-center gap-2 bg-pink-500 text-white rounded-lg p-4 hover:bg-pink-600 transition-colors">
                <Zap className="w-6 h-6" />
                <span className="font-semibold">Notes illimitées</span>
                <span className="text-sm">Essai gratuit</span>
              </Link>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 overflow-auto">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
