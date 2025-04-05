
import { X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface TextNoteDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

const TextNoteDialog = ({ isOpen, onClose }: TextNoteDialogProps) => {
  const [content, setContent] = useState("");
  const [folder, setFolder] = useState("Toutes les notes");

  const handleSubmit = () => {
    // Ici nous ajouterions la logique pour sauvegarder la note
    console.log("Note texte sauvegardée:", { content, folder });
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
            <h2 className="text-2xl font-bold mb-1">Nouvelle note avec texte</h2>
            <p className="text-gray-500 mb-6">Veuillez saisir la transcription de votre note</p>

            <div className="mb-5">
              <h3 className="font-medium mb-2">Texte</h3>
              <Textarea 
                placeholder="Votre texte..." 
                className="min-h-[200px] resize-none"
                value={content}
                onChange={(e) => setContent(e.target.value)}
              />
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

export default TextNoteDialog;
