
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Apple, ArrowRight, Facebook, Mail } from "lucide-react";

interface LoginModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const LoginModal = ({ isOpen, onClose }: LoginModalProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  
  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        <DialogHeader className="text-center">
          <DialogTitle className="text-3xl font-bold mb-2">Bienvenue sur Neuronote!</DialogTitle>
          <p className="text-gray-600 text-lg">Booste ta scolarité avec l'IA</p>
        </DialogHeader>
        
        <div className="flex flex-col gap-6 py-6">
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-3 p-6 text-black border border-gray-200 hover:bg-gray-50"
          >
            <img 
              src="/lovable-uploads/0c4d618a-7472-4aac-a23e-08a5ab0bbe05.png" 
              alt="Google" 
              className="w-6 h-6" 
            />
            <span className="text-base font-medium">Continuer avec Google</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-3 p-6 text-black border border-gray-200 hover:bg-gray-50"
          >
            <Apple className="w-6 h-6" />
            <span className="text-base font-medium">Continuer avec Apple</span>
          </Button>
          
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-3 p-6 text-black border border-gray-200 hover:bg-gray-50"
          >
            <Facebook className="w-6 h-6 text-blue-600" />
            <span className="text-base font-medium">Continuer avec Facebook</span>
          </Button>
          
          <div className="relative">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>
          
          <Button 
            variant="outline" 
            className="flex items-center justify-center gap-3 p-6 text-black border border-gray-200 hover:bg-gray-50"
            onClick={() => window.location.href = "/login"}
          >
            <Mail className="w-6 h-6 text-pink-500" />
            <span className="text-base font-medium">Continuer avec Email</span>
          </Button>
        </div>
        
        <div className="text-xs text-center text-gray-500 mt-2">
          En continuant, vous acceptez les <a href="#" className="text-pink-500 hover:underline">Conditions d'utilisation</a> et la <a href="#" className="text-pink-500 hover:underline">Politique de confidentialité</a> de Neuronote.
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default LoginModal;
