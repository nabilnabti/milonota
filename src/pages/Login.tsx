
import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Apple, ArrowRight, Facebook, Mail } from "lucide-react";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSignUp, setIsSignUp] = useState(false);
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would handle the authentication logic
    console.log("Login attempt with:", { email, password });
  };
  
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center px-4 py-20">
        <div className="w-full max-w-md bg-white rounded-xl shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold mb-2">
              {isSignUp ? "Créer un compte" : "Connexion à Neuronote"}
            </h1>
            <p className="text-gray-600">
              {isSignUp 
                ? "Rejoins des milliers d'étudiants qui réussissent" 
                : "Booste ta scolarité avec l'IA"}
            </p>
          </div>
          
          <div className="flex flex-col gap-6 mb-6">
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
          </div>
          
          <div className="relative mb-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-200"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">ou</span>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="nom@exemple.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="password">Mot de passe</Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>
            
            {!isSignUp && (
              <div className="text-right">
                <Link to="/forgot-password" className="text-sm text-pink-500 hover:underline">
                  Mot de passe oublié?
                </Link>
              </div>
            )}
            
            <Button 
              type="submit" 
              className="w-full bg-pink-500 hover:bg-pink-600 text-white p-6 flex items-center justify-center gap-2"
            >
              <span>{isSignUp ? "S'inscrire" : "Se connecter"}</span>
              <ArrowRight className="h-5 w-5" />
            </Button>
          </form>
          
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isSignUp 
                ? "Déjà un compte?" 
                : "Pas encore de compte?"} 
              <button 
                onClick={() => setIsSignUp(!isSignUp)} 
                className="text-pink-500 hover:underline ml-1"
              >
                {isSignUp ? "Se connecter" : "S'inscrire"}
              </button>
            </p>
          </div>
          
          <div className="text-xs text-center text-gray-500 mt-6">
            En continuant, vous acceptez les <a href="#" className="text-pink-500 hover:underline">Conditions d'utilisation</a> et la <a href="#" className="text-pink-500 hover:underline">Politique de confidentialité</a> de Neuronote.
          </div>
        </div>
      </main>
    </div>
  );
};

export default Login;
