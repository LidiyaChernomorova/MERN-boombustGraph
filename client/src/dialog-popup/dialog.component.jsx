import * as React from "react";
import { TextField, Button, DialogTitle, Dialog } from "@mui/material";

export interface SimpleDialogProps {
  open: boolean;
  selectedValue: string;
  onClose: (value: string) => void;
}

export default function SimpleDialog(props: SimpleDialogProps) {
  const { onClose, selectedValue, open } = props;

  const handleClose = () => {
    onClose(selectedValue);
  };

  const handleListItemClick = (value: string) => {
    onClose(value);
  };
  function setNote(textNote: string) {}

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>Change note for {selectedValue}</DialogTitle>

      <TextField
        sx={{ m: 2 }}
        multiline={true}
        minRows={3}
        placeholder="Type smth"
        value={"description"}
        onChange={(e) => setNote(e.target.value)}
      />
      <Button>change note</Button>
      <Button>cancel</Button>
    </Dialog>
  );
}
