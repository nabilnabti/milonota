
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ChevronRight, Share2, Lock, FileText, File, User } from "lucide-react";

const Settings = () => {
  const settingsItems = [
    {
      id: 1,
      title: "Partager à un ami",
      icon: Share2,
      link: "#"
    },
    {
      id: 2,
      title: "Politique de confidentialité",
      icon: Lock,
      link: "#"
    },
    {
      id: 3,
      title: "Mentions légales",
      icon: FileText,
      link: "#"
    },
    {
      id: 4,
      title: "CGV",
      subtitle: "Conditions générales de vente",
      icon: File,
      link: "#"
    },
    {
      id: 5,
      title: "Mon compte",
      icon: User,
      link: "#"
    }
  ];
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <h1 className="text-3xl font-bold border-l-4 border-pink-500 pl-4 mb-10">Paramètres</h1>

      <div className="grid grid-cols-1 gap-4">
        {settingsItems.map((item) => (
          <Card key={item.id} className="hover:shadow-sm transition-shadow">
            <CardContent className="p-0">
              <Button 
                variant="ghost" 
                className="w-full justify-between text-left p-4 rounded-none h-auto"
                asChild
              >
                <a href={item.link} className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="bg-gray-100 p-3 rounded-full">
                      <item.icon className="h-5 w-5 text-gray-700" />
                    </div>
                    <div>
                      <span className="font-medium">{item.title}</span>
                      {item.subtitle && (
                        <p className="text-sm text-gray-500">{item.subtitle}</p>
                      )}
                    </div>
                  </div>
                  <ChevronRight className="h-5 w-5" />
                </a>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
      
      {/* Share section for the "Partager à un ami" view */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">Partager à un ami</h2>
        
        <Card className="mb-6">
          <CardContent className="p-6">
            <Button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-6">
              Cliquez ici pour copier le lien
            </Button>
          </CardContent>
        </Card>
        
        <div className="flex justify-center gap-4 mt-8">
          <a href="#" className="bg-blue-600 text-white p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          
          <a href="#" className="bg-black text-white p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
            </svg>
          </a>
          
          <a href="#" className="bg-green-500 text-white p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
            </svg>
          </a>
          
          <a href="#" className="bg-blue-600 text-white p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
              <rect x="2" y="9" width="4" height="12"></rect>
              <circle cx="4" cy="4" r="2"></circle>
            </svg>
          </a>
          
          <a href="#" className="bg-black text-white p-4 rounded-full">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <circle cx="12" cy="12" r="10"></circle>
              <path d="M12 16a4 4 0 1 0 0-8 4 4 0 0 0 0 8z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Settings;
