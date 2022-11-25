import React, { useState, useEffect } from "react";
import { TextField, Button, DialogTitle, Dialog } from "@mui/material";
import TableData from "../interfaces/table-data.interface";
import NoteData from "../interfaces/notes-data.interface";

interface props {
  open: boolean;
  tableData: TableData | undefined;
  noteData: NoteData | undefined;
  cancel: (value: string) => void;
  save: (value: string) => void;
}

export default function ChangeNoteDialog({
  open,
  tableData,
  noteData,
  cancel,
  save,
}: props) {
  const [noteText, setNoteText] = useState<string>("");

  useEffect(() => {
    noteData && setNoteText(noteData.note);
  }, [noteData]);

  function handleChange(event: any): void {
    setNoteText(event.target.value);
  }

  function handleSave(): void {
    save(noteText);
    setNoteText("");
  }

  function handleCancel(): void {
    cancel(noteText);
    setNoteText("");
  }

  return (
    <Dialog onClose={handleCancel} open={open} fullWidth maxWidth="sm">
      <DialogTitle>Change note for {tableData?.name}</DialogTitle>
      <TextField
        sx={{ ml: 2, mr: 2 }}
        multiline={true}
        minRows={3}
        placeholder="Type smth"
        value={noteText}
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
          {noteData?._id
            ? noteText === ""
              ? "delete note"
              : "change note"
            : "add note"}
        </Button>
        <Button
          color="error"
          variant="outlined"
          onClick={handleCancel}
          sx={{ ml: 1 }}
        >
          cancel
        </Button>
      </div>
    </Dialog>
  );
}