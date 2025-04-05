
import React from "react";
import { Link } from "react-router-dom";
import { Mail, Instagram } from "lucide-react";

// Creating a custom TiktokIcon component
const TiktokIcon = (props: React.SVGProps<SVGSVGElement> & { size?: number }) => {
  // Convert size prop to width/height if provided
  const svgProps = {...props};
  if (props.size) {
    svgProps.width = props.size;
    svgProps.height = props.size;
    delete svgProps.size;
  }
  
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...svgProps}
    >
      <path d="M9 12a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z" />
      <path d="M15 8h.01" />
      <path d="M20 12a8 8 0 1 1-16 0 8 8 0 0 1 16 0Z" />
    </svg>
  );
};

const Footer = () => {
  return (
    <footer className="bg-black text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Logo and info */}
          <div className="flex flex-col">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Neuronote</span>
              <span className="text-pink-500">🧠</span>
            </div>
            <p className="flex items-center mb-6">
              Développé avec <span className="text-red-500 mx-1">❤️</span> à Lyon
            </p>
            <a
              href="mailto:contact@neuronote.app"
              className="flex items-center gap-2 bg-gray-900 hover:bg-gray-800 transition-colors p-3 rounded-md w-fit text-sm"
            >
              <Mail size={16} />
              <span>contact@neuronote.app</span>
            </a>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-medium mb-4">Accueil</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/affiliation" className="text-gray-400 hover:text-white transition-colors">
                  Affiliation
                </Link>
              </li>
              <li>
                <Link to="/histoire" className="text-gray-400 hover:text-white transition-colors">
                  Notre histoire
                </Link>
              </li>
              <li>
                <Link to="/recrutement" className="text-gray-400 hover:text-white transition-colors">
                  Nous recrutons
                </Link>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="font-medium mb-4">Retrouvez-nous</h3>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <Instagram size={18} />
                  <span>Instagram</span>
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center gap-2">
                  <TiktokIcon size={18} />
                  <span>TikTok</span>
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom footer */}
        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-gray-500">© 2025 Neuronote. Tous droits réservés.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-300">
              Mention Légale
            </Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-300">
              CGV
            </Link>
            <Link to="#" className="text-sm text-gray-500 hover:text-gray-300">
              Politique de Confidentialité
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
