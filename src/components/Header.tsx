
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="w-full py-4 px-6 md:px-12 flex items-center justify-between">
      <div className="flex items-center gap-2">
        <span className="text-2xl font-bold">Neuronote</span>
        <span className="text-pink-500">🧠</span>
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
      
      <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-6">
        Essayer Gratuitement
      </Button>
    </header>
  );
};

export default Header;
