import React, { useEffect, useState } from "react";
import { TextField, Button, DialogTitle, Dialog } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  noteParams: { name: string; note: string };
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, noteParams, open } = props;
  const [note, setNote] = useState(noteParams.note);

  function handleClose() {
    onClose(noteParams.note);
  }

  function handleListItemClick(value: string) {
    onClose(value);
  }

  function handleSave() {}

  useEffect(() => {
    setNote(noteParams.note);
  }, [noteParams]);

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change note for {noteParams.name}</DialogTitle>
      <TextField
        sx={{ m: 2 }}
        multiline={true}
        minRows={3}
        placeholder="Type smth"
        value={note}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button onClick={handleSave}>change note</Button>
      <Button onClick={handleClose}>cancel</Button>
    </Dialog>
  );
}
