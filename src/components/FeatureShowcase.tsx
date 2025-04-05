
import React from "react";
import { Button } from "@/components/ui/button";
import { Folder, Mic, Clock, AlarmClock, FileCheck } from "lucide-react";

const FeatureShowcase = () => {
  return (
    <section className="py-24 px-6 bg-black text-white">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <p className="text-sm font-medium mb-6">Découvrez Neuronote</p>
          
          <h2 className="text-4xl md:text-5xl font-bold mb-10">
            L'IA pour booster tes<br />notes.
          </h2>
          
          <Button className="bg-pink-500 hover:bg-pink-600 text-white rounded-full px-8 py-6 text-base font-medium">
            Essayer Gratuitement
          </Button>
        </div>
        
        {/* App Screenshot */}
        <div className="relative mx-auto max-w-4xl my-16">
          <img 
            src="/lovable-uploads/45e44048-2e4d-4290-bf40-21bc4e9b158c.png" 
            alt="Neuronote interface" 
            className="w-full h-auto rounded-lg shadow-2xl"
          />
        </div>
        
        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mt-20 border-t border-gray-800 pt-12">
          {/* Feature 1 */}
          <div className="p-4">
            <div className="flex flex-col">
              <div className="mb-4">
                <Folder className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Stockez vos cours</h3>
              <p className="text-gray-400 text-sm">
                Gardez vos cours en sécurité dans notre application, accédez-y facilement et entraînez-vous à tout moment, où que vous soyez.
              </p>
            </div>
          </div>
          
          {/* Feature 2 */}
          <div className="p-4">
            <div className="flex flex-col">
              <div className="mb-4">
                <Mic className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Prise de note du cours automatique avec L'IA</h3>
              <p className="text-gray-400 text-sm">
                Activez le micro, Neuronote écoute et prend des notes pour vous en temps réel.
              </p>
            </div>
          </div>
          
          {/* Feature 3 */}
          <div className="p-4">
            <div className="flex flex-col">
              <div className="mb-4">
                <AlarmClock className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Créez des Quiz basés sur vos cours</h3>
              <p className="text-gray-400 text-sm">
                Testez vos connaissances sans limite grâce à des quiz interactifs.
              </p>
            </div>
          </div>
          
          {/* Feature 4 */}
          <div className="p-4">
            <div className="flex flex-col">
              <div className="mb-4">
                <FileCheck className="text-white" size={24} />
              </div>
              <h3 className="text-lg font-bold mb-2">Générez des fiches de révision parfaites et des flashcards</h3>
              <p className="text-gray-400 text-sm">
                Pour réviser efficacement et organiser vos idées en un clin d'œil.
              </p>
            </div>
          </div>
        </div>
        
        {/* Import Options */}
        <div className="mt-16 text-center">
          <p className="mb-6 text-gray-400">Importez vos cours depuis :</p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm">
              <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
              Wikipedia
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Un PDF
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              Votre Micro
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-purple-400">
              <span className="w-2 h-2 rounded-full bg-purple-500 mr-2"></span>
              YouTube
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-blue-400">
              <span className="w-2 h-2 rounded-full bg-blue-500 mr-2"></span>
              Un Site Web
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm">
              <span className="w-2 h-2 rounded-full bg-gray-500 mr-2"></span>
              Wikipedia
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-red-400">
              <span className="w-2 h-2 rounded-full bg-red-500 mr-2"></span>
              Un PDF
            </div>
            <div className="px-3 py-2 bg-gray-900 rounded-md flex items-center text-sm text-yellow-400">
              <span className="w-2 h-2 rounded-full bg-yellow-500 mr-2"></span>
              Votre Micro
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeatureShowcase;
