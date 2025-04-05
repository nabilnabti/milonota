
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Search, Type, FileAudio, Mic, FileText, Link as LinkIcon, ScrollText } from "lucide-react";
import NoteManager, { NoteType } from "@/components/notes/NoteManager";

const Dashboard = () => {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "Les événements clés de la Révolution française",
      date: "05/04/2025",
      content: "La Révolution française, déclenchée à la fin du 18ème siècle, est marquée par des événements cruciaux tels que la réunion des États Généraux et la prise de la Bastille. Les idées des philosophes et les inégalités sociales ont provoqué un mécontentement général."
    }
  ]);
  
  const [activeNote, setActiveNote] = useState<NoteType>(null);
  const [activeTab, setActiveTab] = useState<"all" | "folders">("all");
  
  const handleOpenNote = (type: NoteType) => {
    setActiveNote(type);
  };
  
  const handleCloseNote = () => {
    setActiveNote(null);
  };
  
  return (
    <>
      <div className="p-6 max-w-7xl mx-auto">
        <section className="mb-12">
          <div className="flex items-center gap-3">
            <div className="w-1 bg-[#925dc6] h-10"></div>
            <h1 className="text-3xl font-bold">Nouvelle note</h1>
          </div>
          <p className="text-gray-600 mt-2 mb-8 ml-4">Enregistrez de l'audio, importez un fichier audio ou utilisez une URL YouTube</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-6 mt-8">
            <Card 
              className="flex flex-col items-center justify-center hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white"
              onClick={() => handleOpenNote("text")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-medium mb-4">Écrire une note</h3>
                <div className="bg-gray-100 rounded-full p-5 my-3">
                  <Type className="h-8 w-8 text-gray-700" />
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="flex flex-col items-center justify-center hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white"
              onClick={() => handleOpenNote("audio-import")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-medium mb-4">Importer un audio</h3>
                <div className="bg-gray-100 rounded-full p-5 my-3">
                  <FileAudio className="h-8 w-8 text-gray-700" />
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="flex flex-col items-center justify-center hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white"
              onClick={() => handleOpenNote("audio-record")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-medium mb-4">Enregistrer un audio</h3>
                <div className="bg-gray-100 rounded-full p-5 my-3">
                  <Mic className="h-8 w-8 text-gray-700" />
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="flex flex-col items-center justify-center hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white"
              onClick={() => handleOpenNote("pdf")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-medium mb-4">Importer un PDF</h3>
                <div className="bg-gray-100 rounded-full p-5 my-3">
                  <FileText className="h-8 w-8 text-gray-700" />
                </div>
              </CardContent>
            </Card>
            
            <Card 
              className="flex flex-col items-center justify-center hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white"
              onClick={() => handleOpenNote("link")}
            >
              <CardContent className="flex flex-col items-center justify-center p-6 text-center">
                <h3 className="font-medium mb-4">Importer un lien</h3>
                <div className="bg-gray-100 rounded-full p-5 my-3">
                  <LinkIcon className="h-8 w-8 text-gray-700" />
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section>
          <div className="flex items-center gap-3 mb-6">
            <div className="w-1 bg-[#925dc6] h-10"></div>
            <h2 className="text-3xl font-bold">Mes notes</h2>
          </div>
          
          <div className="flex flex-wrap justify-between items-center mb-6">
            <div className="flex gap-3 mt-4 sm:mt-0">
              <Button 
                variant="outline" 
                className={`${activeTab === "all" ? "bg-black text-white" : "bg-white text-gray-700"} hover:bg-gray-800 hover:text-white rounded-full px-5`}
                onClick={() => setActiveTab("all")}
              >
                Toutes les notes
              </Button>
              <Button 
                variant="outline" 
                className={`${activeTab === "folders" ? "bg-black text-white" : "bg-white text-gray-700"} hover:bg-gray-800 hover:text-white rounded-full px-5`}
                onClick={() => setActiveTab("folders")}
              >
                Mes dossiers
              </Button>
            </div>
            
            <div className="relative">
              <Input
                placeholder="Rechercher"
                className="pl-10 w-full sm:w-80 rounded-full bg-white"
              />
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
            </div>
          </div>
          
          {notes.map((note) => (
            <Card key={note.id} className="mb-4 hover:shadow-md transition-all hover:border-[#925dc6] cursor-pointer bg-white">
              <CardContent className="p-6">
                <div className="flex gap-5">
                  <div className="shrink-0">
                    <div className="bg-gray-100 rounded-full p-4">
                      <ScrollText className="h-7 w-7 text-gray-600" />
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
      
      <NoteManager activeNote={activeNote} onClose={handleCloseNote} />
    </>
  );
};

export default Dashboard;
