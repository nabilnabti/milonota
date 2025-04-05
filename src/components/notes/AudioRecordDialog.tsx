
import { X, Mic } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AudioRecordDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AudioRecordDialog = ({ isOpen, onClose }: AudioRecordDialogProps) => {
  const [folder, setFolder] = useState("Toutes les notes");
  const [isRecording, setIsRecording] = useState(false);
  
  const startRecording = () => {
    setIsRecording(true);
    // Ici on implémentera la logique pour démarrer l'enregistrement audio
    console.log("Début de l'enregistrement audio");
  };

  const stopRecording = () => {
    setIsRecording(false);
    // Ici on implémentera la logique pour arrêter l'enregistrement audio
    console.log("Fin de l'enregistrement audio");
  };

  const handleSubmit = () => {
    if (isRecording) {
      stopRecording();
    }
    // Logique pour traiter l'enregistrement audio
    console.log("Enregistrement audio soumis");
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[600px] p-0 overflow-hidden border-none">
        <div className="flex flex-col h-full">
          <div className="flex items-center justify-between p-4 border-b">
            <div className="flex items-center text-sm text-gray-500">
              <span>Notes</span>
              <span className="mx-2">{'>'}</span>
              <span>Créer une note</span>
            </div>
            <button onClick={onClose} className="rounded-full p-1 hover:bg-gray-100">
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="p-6">
            <h2 className="text-2xl font-bold mb-1">Nouvelle note avec enregistrement</h2>
            <p className="text-gray-500 mb-6">Enregistrez en temps réel avec Neuronote</p>

            <div className="mb-6">
              <h3 className="font-medium mb-3">Prêt à enregistrer ?</h3>
              <ul className="space-y-2 mb-5">
                <li className="flex items-center">
                  <div className="text-[#925dc6] mr-2 rounded-full bg-pink-100 p-1 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Respectez les règles de votre école ou organisation</span>
                </li>
                <li className="flex items-center">
                  <div className="text-[#925dc6] mr-2 rounded-full bg-pink-100 p-1 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Obtenez les consentements requis</span>
                </li>
                <li className="flex items-center">
                  <div className="text-[#925dc6] mr-2 rounded-full bg-pink-100 p-1 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Pas de conversations confidentielles</span>
                </li>
                <li className="flex items-center">
                  <div className="text-[#925dc6] mr-2 rounded-full bg-pink-100 p-1 flex items-center justify-center">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="10" fill="currentColor" />
                      <path d="M8 12L11 15L16 9" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <span>Amusez-vous ! Détendez-vous et restez attentif pendant que Neuronote prend vos notes</span>
                </li>
              </ul>
              
              <p className="text-sm text-gray-600 mb-5">
                Neuronote ne peut écouter l'audio qu'à travers votre microphone. Vous souhaitez enregistrer une réunion Zoom, Google Meet ou autre ? Ouvrez Neuronote sur un autre appareil et enregistrez à partir de là.
              </p>
            </div>

            <div className="flex justify-end space-x-3 mt-6">
              <Button 
                variant="outline" 
                onClick={onClose}
                className="rounded-full px-8 bg-gray-100 hover:bg-gray-200 border-none"
              >
                Annuler
              </Button>
              <Button 
                onClick={startRecording} 
                className="rounded-full px-8 bg-[#925dc6] hover:bg-[#7a4ea5] flex items-center"
              >
                <Mic className="h-4 w-4 mr-2" />
                Commencer l'enregistrement
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AudioRecordDialog;
