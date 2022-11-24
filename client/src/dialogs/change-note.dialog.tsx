import React, { useEffect, useState } from "react";
import { TextField, Button, DialogTitle, Dialog } from "@mui/material";
import TableData from "../interfaces/table-data.interface";
import NoteData from "../interfaces/notes-data.interface";

function makeNewNote(asset: string): NoteData {
  return {
    asset,
    note: "",
    id: null,
  };
}
interface props {
  open: boolean;
  tableData: TableData | undefined;
  noteData: NoteData | undefined;
  onClose: (value: string) => void;
}

export default function ChangeNoteDialog(props: props) {
  const { onClose, tableData, noteData, open } = props;
  const [note, setNote] = useState(noteData || makeNewNote(tableData?.asset || 'no asset'));

  function handleClose() {
      onClose(note.note);
  }

  function handleListItemClick(value: string) {
    onClose(value);
  }

  function handleSave() {}

  return (
    <Dialog onClose={handleClose} open={open} fullWidth maxWidth="sm">
      <DialogTitle>Change note for {tableData?.name}</DialogTitle>
      <TextField
        sx={{ ml: 2, mr: 2 }}
        multiline={true}
        minRows={3}
        placeholder="Type smth"
        value={note.note}
        onChange={(e) =>
          setNote((prevState) => {
            return { ...prevState, note: e.target.value };
          })
        }
      />
      <div
        style={{
          margin: "20px",
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
        <Button color="success" variant="outlined" onClick={handleSave}>
          change note
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
