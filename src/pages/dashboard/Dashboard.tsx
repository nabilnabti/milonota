
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Mic, Upload, FileText, Link as LinkIcon, Type } from "lucide-react";

const Dashboard = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Les événements clés de la Révolution française",
      date: "05/04/2025",
      content: "La Révolution française, déclenchée à la fin du 18ème siècle, est marquée par des événements cruciaux tels que la réunion des États Généraux et la prise de la Bastille. Les idées des philosophes et les inégalités sociales ont provoqué un mécontentement général."
    }
  ]);
  
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <section className="mb-12">
        <h1 className="text-3xl font-bold border-l-4 border-pink-500 pl-4 mb-4">Nouvelle note</h1>
        <p className="text-gray-600 mb-8">Enregistrez de l'audio, importez un fichier audio ou utilisez une URL YouTube</p>
        
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 mt-8">
          <Card className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <Type className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm text-center">Écrire une note</span>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <Upload className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm text-center">Importer un audio</span>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <Mic className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm text-center">Enregistrer un audio</span>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <FileText className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm text-center">Importer un PDF</span>
            </CardContent>
          </Card>
          
          <Card className="flex flex-col items-center justify-center p-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="flex flex-col items-center justify-center p-4">
              <div className="bg-gray-100 rounded-full p-4 mb-2">
                <LinkIcon className="h-6 w-6 text-gray-700" />
              </div>
              <span className="text-sm text-center">Importer un lien</span>
            </CardContent>
          </Card>
        </div>
      </section>
      
      <section>
        <div className="flex flex-wrap justify-between items-center mb-6">
          <h2 className="text-2xl font-bold border-l-4 border-pink-500 pl-4">Mes notes</h2>
          <div className="flex gap-4 mt-4 sm:mt-0">
            <Button variant="outline" className="bg-black text-white hover:bg-gray-800">
              Toutes les notes
            </Button>
            <Button variant="outline">
              Mes dossiers
            </Button>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <Input
                placeholder="Rechercher"
                className="pl-10 w-full sm:w-auto"
              />
            </div>
          </div>
        </div>
        
        {notes.map((note) => (
          <Card key={note.id} className="mb-4 hover:shadow-md transition-shadow cursor-pointer">
            <CardContent className="p-6">
              <div className="flex gap-4">
                <div className="shrink-0">
                  <div className="bg-amber-100 rounded-full p-3">
                    <FileText className="h-6 w-6 text-amber-600" />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-1">{note.title}</h3>
                  <p className="text-gray-500 text-sm mb-3">{note.date}</p>
                  <p className="text-gray-700">{note.content}</p>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </section>
    </div>
  );
};

export default Dashboard;
