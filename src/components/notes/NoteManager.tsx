
import { useState } from "react";
import TextNoteDialog from "./TextNoteDialog";
import AudioImportDialog from "./AudioImportDialog";
import AudioRecordDialog from "./AudioRecordDialog";
import PdfImportDialog from "./PdfImportDialog";
import LinkImportDialog from "./LinkImportDialog";

export type NoteType = "text" | "audio-import" | "audio-record" | "pdf" | "link" | null;

interface NoteManagerProps {
  activeNote: NoteType;
  onClose: () => void;
}

const NoteManager = ({ activeNote, onClose }: NoteManagerProps) => {
  return (
    <>
      <TextNoteDialog
        isOpen={activeNote === "text"}
        onClose={onClose}
      />
      
      <AudioImportDialog
        isOpen={activeNote === "audio-import"}
        onClose={onClose}
      />
      
      <AudioRecordDialog
        isOpen={activeNote === "audio-record"}
        onClose={onClose}
      />
      
      <PdfImportDialog
        isOpen={activeNote === "pdf"}
        onClose={onClose}
      />
      
      <LinkImportDialog
        isOpen={activeNote === "link"}
        onClose={onClose}
      />
    </>
  );
};

export default NoteManager;
