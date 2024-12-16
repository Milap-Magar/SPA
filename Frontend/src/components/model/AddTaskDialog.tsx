import * as React from "react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import {
  MenuItem,
  Select,
  TextField,
  InputLabel,
  FormControl,
  Button,
} from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { SelectChangeEvent } from "@mui/material/Select";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

export default function AddTaskDialog({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const [category, setCategory] = React.useState("");
  const [priority, setPriority] = React.useState("");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(null);

  const handleCategoryChange = (event: SelectChangeEvent<string>) => {
    setCategory(event.target.value);
  };

  const handlePriorityChange = (event: SelectChangeEvent<string>) => {
    setPriority(event.target.value);
  };

  const handleDateChange = (date: Date | any) => {
    setSelectedDate(date);
  };

  return (
    <Dialog fullScreen={fullScreen} open={open} onClose={onClose}>
      <DialogTitle id="responsive-dialog-title">
        {"Would you like to add a task?"}
      </DialogTitle>
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
          multiline
          fullWidth
          variant="standard"
          required
        />
        <FormControl fullWidth margin="dense" variant="standard" required>
          <InputLabel id="task-category-label">Category</InputLabel>
          <Select
            labelId="task-category-label"
            id="taskCategory"
            value={category}
            onChange={handleCategoryChange}
            displayEmpty
          >
            <MenuItem value="Work">Work</MenuItem>
            <MenuItem value="Personal">Personal</MenuItem>
            <MenuItem value="Study">Study</MenuItem>
            <MenuItem value="Others">Others</MenuItem>
          </Select>
        </FormControl>
        <FormControl fullWidth margin="dense" variant="standard" required>
          <InputLabel id="task-priority-label">Priority</InputLabel>
          <Select
            labelId="task-priority-label"
            id="taskPriority"
            value={priority}
            onChange={handlePriorityChange}
            displayEmpty
          >
            <MenuItem value="Urgent">Urgent</MenuItem>
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Average">Average</MenuItem>
          </Select>
        </FormControl>
        {/* Date Picker */}
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            label="Due Date"
            value={selectedDate}
            onChange={handleDateChange}
            slots={{
              textField: TextField,
            }}
            slotProps={{
              textField: {
                margin: "dense",
                fullWidth: true,
                variant: "standard",
              },
            }}
          />
        </LocalizationProvider>
        <Button
          sx={{ mt: 2, marginRight: 1 }}
          variant="contained"
          onClick={onClose}
        >
          Add Task
        </Button>
        <Button
          sx={{ mt: 2, bgcolor: "red" }}
          variant="contained"
          onClick={onClose}
        >
          Cancel
        </Button>
      </DialogContent>
    </Dialog>
  );
}
