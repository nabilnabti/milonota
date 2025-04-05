import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import LoginModal from "./LoginModal";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 100;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  const handleTryForFree = () => {
    setIsLoginModalOpen(true);
  };

  return (
    <header className={`w-full py-4 px-6 md:px-12 flex items-center justify-between fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled ? "bg-white shadow-md" : "bg-transparent"
    }`}>
      <div className="flex items-center gap-2">
        <Link to="/">
          <span className="text-2xl font-bold">Neuronote</span>
          <span className="text-[#925dc6]">🧠</span>
        </Link>
      </div>
      
      <nav className="hidden md:flex items-center space-x-10">
        <Link to="/affiliation" className="text-gray-600 hover:text-violet">
          Affiliation
        </Link>
        <Link to="/histoire" className="text-gray-600 hover:text-violet">
          Notre histoire
        </Link>
        <Link to="/recrutement" className="text-gray-600 hover:text-violet">
          Nous recrutons
        </Link>
      </nav>
      
      <Button 
        className="bg-[#925dc6] hover:bg-[#7a4ea5] text-white rounded-full px-6"
        onClick={handleTryForFree}
      >
        Essayer Gratuitement
      </Button>
      
      <LoginModal 
        isOpen={isLoginModalOpen} 
        onClose={() => setIsLoginModalOpen(false)} 
      />
    </header>
  );
};

export default Header;
