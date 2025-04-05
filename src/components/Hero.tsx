import { Button } from "@/components/ui/button";
import { useState } from "react";
import LoginModal from "./LoginModal";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const navigate = useNavigate();
  
  const handleTryForFree = () => {
    setIsLoginModalOpen(true);
  };
  
  return (
    <section className="py-12 md:py-24 text-center grid-bg min-h-[70vh] flex flex-col items-center justify-center">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8">
          <span>Créez des</span><br />
          <span className="text-[#925dc6]">fiches de Révision</span><br />
          <span>depuis </span>
          <span className="text-[#925dc6]">votre micro</span><br />
          <span>avec L'IA</span>
        </h1>
        
        <p className="text-lg md:text-xl text-gray-700 mb-8 max-w-3xl mx-auto">
          🎓 Harvard, MIT, Stanford... Leurs étudiants ont un secret ! 🇺🇸 Ils utilisent l'IA pour apprendre plus vite et mieux retenir leurs cours. Pourquoi pas toi ? 🚀
        </p>
        
        <div className="bg-white/80 backdrop-blur-sm rounded-full py-3 px-6 inline-flex items-center mb-12 border border-gray-200">
          <span className="text-violet font-semibold">150,000+ Quiz et fiches de révisions générés</span>
        </div>
        
        <Button 
          className="bg-[#925dc6] hover:bg-[#7a4ea5] text-white rounded-full px-10 py-6 text-lg"
          onClick={handleTryForFree}
        >
          Essayer Gratuitement
        </Button>
        
        <p className="text-gray-600 mt-12">Utilisés par des étudiants de</p>
      </div>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </section>
  );
};

export default Hero;
