import React, { useState, useEffect } from "react";
import { TextField, Button, DialogTitle, Dialog } from "@mui/material";
import TableData from "../interfaces/table-data.interface";
import NoteData from "../interfaces/notes-data.interface";
import apis from "../api";

function makeNewNote(asset: string): NoteData {
  return {
    asset,
    note: "",
    _id: null,
  };
}
interface props {
  open: boolean;
  tableData: TableData | undefined;
  noteData: NoteData | undefined;
  onClose: (value: string) => void;
}

export default function ChangeNoteDialog({
  onClose,
  tableData,
  noteData,
  open,
}: props) {
  const [note, setNote] = useState<NoteData>();

  useEffect(() => {
    setNote(noteData || makeNewNote(tableData?.asset || "no asset"));
  }, [noteData, tableData]);

  function handleChange(event: any): void {
    note &&
      setNote(() => {
        return { ...note, note: event.target.value };
      });
  }

  function handleClose(): void {
    note && onClose(note.note);
  }

  function handleSave(): void {
    note && apis
      .addNote(note.note, note.asset)
      .then((x) => console.log(x.data.id))
      .catch(console.error);

    //onClose(note.note);
  }

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle>Change note for {tableData?.name}</DialogTitle>
      <TextField
        sx={{ ml: 2, mr: 2 }}
        multiline={true}
        minRows={3}
        placeholder="Type smth"
        value={note?.note}
        onChange={handleChange}
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button color="success" variant="outlined" onClick={handleSave}>
          {note?._id ? "change note" : "add note"}
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={handleClose}
          sx={{ ml: 1 }}
        >
          cancel
        </Button>
      </div>
    </Dialog>
  );
}
