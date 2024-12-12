import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function AddTaskDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      PaperProps={{
        component: "form",
        onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          console.log("Task Data:", formJson);
          onClose();
        },
      }}
    >
      <DialogTitle>Add Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          Enter the details for the new task you want to add.
        </DialogContentText>
        <TextField
          autoFocus
          required
          margin="dense"
          id="taskName"
          name="taskName"
          label="Task Name"
          type="text"
          fullWidth
          variant="standard"
        />
        <TextField
          margin="dense"
          id="taskDescription"
          name="taskDescription"
          label="Task Description"
          type="text"
          fullWidth
          variant="standard"
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button type="submit">Add Task</Button>
      </DialogActions>
    </Dialog>
  );
}
