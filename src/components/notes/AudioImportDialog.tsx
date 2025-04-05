
import { X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AudioImportDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const AudioImportDialog = ({ isOpen, onClose }: AudioImportDialogProps) => {
  const [audioFile, setAudioFile] = useState<File | null>(null);
  const [folder, setFolder] = useState("Toutes les notes");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      setAudioFile(e.target.files[0]);
    }
  };

  const handleSubmit = () => {
    // Ici nous ajouterions la logique pour traiter le fichier audio
    console.log("Fichier audio importé:", { audioFile, folder });
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
            <h2 className="text-2xl font-bold mb-1">Nouvelle note avec audio</h2>
            <p className="text-gray-500 mb-6">Choisissez un fichier audio (mp3, wav, m4a, etc.)</p>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Votre fichier audio</h3>
              <div className="border border-gray-200 rounded-md flex items-center justify-center py-6">
                <label className="cursor-pointer px-6 py-3 bg-gray-100 rounded-md hover:bg-gray-200 transition-colors">
                  <span>Choisir un fichier</span>
                  <input 
                    type="file" 
                    accept="audio/*" 
                    className="hidden" 
                    onChange={handleFileChange}
                  />
                </label>
              </div>
              {audioFile && (
                <p className="mt-2 text-sm text-gray-600">
                  Fichier sélectionné: {audioFile.name}
                </p>
              )}
            </div>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Dossier lié</h3>
              <Select value={folder} onValueChange={setFolder}>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Sélectionner un dossier" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Toutes les notes">Toutes les notes</SelectItem>
                  <SelectItem value="Histoire">Histoire</SelectItem>
                  <SelectItem value="Mathématiques">Mathématiques</SelectItem>
                  <SelectItem value="Sciences">Sciences</SelectItem>
                </SelectContent>
              </Select>
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
                onClick={handleSubmit} 
                disabled={!audioFile}
                className="rounded-full px-8 bg-[#925dc6] hover:bg-[#7a4ea5]"
              >
                Envoyer
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AudioImportDialog;
