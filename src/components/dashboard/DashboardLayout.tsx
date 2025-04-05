
import { ReactNode } from "react";
import { 
  SidebarProvider, 
  Sidebar, 
  SidebarContent,
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
        <Sidebar className="border-r border-gray-100">
          <SidebarContent>
            <div className="px-6 py-10">
              <div className="flex items-center gap-2 mb-1">
                <Link to="/dashboard" className="flex items-center">
                  <span className="text-3xl font-bold">Neuronote</span>
                  <span className="text-[#eb4899] text-2xl ml-1">🧠</span>
                </Link>
              </div>
              <p className="text-sm text-gray-500 italic ml-1">propulsé par l'IA</p>
            </div>
            
            <div className="mt-8 flex flex-col space-y-2 px-4">
              <SidebarMenu>
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`flex items-center rounded-full py-3.5 pl-3 pr-4 text-lg transition-colors ${isActive("/dashboard") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
                    <Link to="/dashboard" className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 ${isActive("/dashboard") ? "bg-gray-200" : ""}`}>
                        <Home className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Accueil</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`flex items-center rounded-full py-3.5 pl-3 pr-4 text-lg transition-colors ${isActive("/dashboard/guide") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
                    <Link to="/dashboard/guide" className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 ${isActive("/dashboard/guide") ? "bg-gray-200" : ""}`}>
                        <Info className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Guide</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`flex items-center rounded-full py-3.5 pl-3 pr-4 text-lg transition-colors ${isActive("/dashboard/support") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
                    <Link to="/dashboard/support" className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 ${isActive("/dashboard/support") ? "bg-gray-200" : ""}`}>
                        <HelpCircle className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Support</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
                
                <SidebarMenuItem>
                  <SidebarMenuButton asChild className={`flex items-center rounded-full py-3.5 pl-3 pr-4 text-lg transition-colors ${isActive("/dashboard/settings") ? "bg-gray-100 font-semibold" : "hover:bg-gray-50"}`}>
                    <Link to="/dashboard/settings" className="flex items-center gap-3">
                      <div className={`flex h-11 w-11 items-center justify-center rounded-full bg-gray-100 ${isActive("/dashboard/settings") ? "bg-gray-200" : ""}`}>
                        <Settings className="h-5 w-5 text-gray-600" />
                      </div>
                      <span className="text-gray-700">Paramètres</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </div>
            
            <div className="mt-auto px-5 py-10">
              <Link to="/dashboard/premium" className={`group w-full transition-colors`}>
                <div className="bg-[#eb4899] hover:bg-[#d93f87] rounded-xl p-3 text-white">
                  <div className="flex items-center justify-center gap-2 mb-1">
                    <Zap className="w-5 h-5" />
                    <span className="font-semibold">Notes illimitées</span>
                  </div>
                  <div className="text-sm text-center">Essai gratuit</div>
                </div>
              </Link>
            </div>
          </SidebarContent>
        </Sidebar>
        
        <div className="flex-1 overflow-auto bg-gray-50">
          {children}
        </div>
      </div>
    </SidebarProvider>
  );
};

export default DashboardLayout;
