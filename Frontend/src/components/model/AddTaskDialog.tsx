// import * as React from "react";
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
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { useMutation } from "@apollo/client";
import { Formik, Form, Field } from "formik";
import * as Yup from "yup";
import { ADD_TASK } from "../../graphql/mutation";
import { toast } from "react-toastify";

const AddTaskDialog = ({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) => {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const [addTask] = useMutation(ADD_TASK);

  const validationSchema = Yup.object().shape({
    taskName: Yup.string().required("Task name is required"),
    taskDescription: Yup.string().required("Task description is required"),
    category: Yup.string().required("Category is required"),
    priority: Yup.string().required("Priority is required"),
    assignTo: Yup.string().required("Assignee is required"),
    dueDate: Yup.date().required("Due date is required").nullable(),
  });

  const handleSubmit = async (
    values: any,
    { setSubmitting, resetForm }: any
  ) => {
    try {
      const { data } = await addTask({
        variables: {
          input: {
            title: values.taskName,
            description: values.taskDescription,
            category: values.category,
            priority: values.priority,
            assignTo: values.assignTo,
            deadlineAt: values.dueDate.toISOString(),
            createAt: new Date().toISOString(),
            status: "Open",
          },
        },
      });
      console.log("Task added:", data);
      toast.success("Task Added");
      resetForm();
      onClose();
    } catch (error) {
      console.error("Error adding task:", error);
      toast.error(`Error:${error}`);
    } finally {
      setSubmitting(false);
    }
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
        <Formik
          initialValues={{
            taskName: "",
            taskDescription: "",
            category: "",
            priority: "",
            assignTo: "",
            dueDate: null,
          }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ values, errors, touched, setFieldValue, isSubmitting }) => (
            <Form>
              <Field
                as={TextField}
                name="taskName"
                label="Task Name"
                required
                fullWidth
                margin="dense"
                variant="standard"
                error={touched.taskName && Boolean(errors.taskName)}
                helperText={touched.taskName && errors.taskName}
              />

              <Field
                as={TextField}
                name="taskDescription"
                label="Task Description"
                required
                fullWidth
                margin="dense"
                multiline
                variant="standard"
                error={
                  touched.taskDescription && Boolean(errors.taskDescription)
                }
                helperText={touched.taskDescription && errors.taskDescription}
              />

              <FormControl fullWidth margin="dense" variant="standard" required>
                <InputLabel id="task-category-label">Category</InputLabel>
                <Field
                  as={Select}
                  name="category"
                  labelId="task-category-label"
                  value={values.category}
                  onChange={(e: any) =>
                    setFieldValue("category", e.target.value)
                  }
                  error={touched.category && Boolean(errors.category)}
                >
                  <MenuItem value="Work">Work</MenuItem>
                  <MenuItem value="Personal">Personal</MenuItem>
                  <MenuItem value="Study">Study</MenuItem>
                  <MenuItem value="Others">Others</MenuItem>
                </Field>
              </FormControl>

              <FormControl fullWidth margin="dense" variant="standard" required>
                <InputLabel id="task-priority-label">Priority</InputLabel>
                <Field
                  as={Select}
                  name="priority"
                  labelId="task-priority-label"
                  value={values.priority}
                  onChange={(e: any) =>
                    setFieldValue("priority", e.target.value)
                  }
                  error={touched.priority && Boolean(errors.priority)}
                >
                  <MenuItem value="Urgent">Urgent</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="Average">Average</MenuItem>
                </Field>
              </FormControl>

              <Field
                as={TextField}
                name="assignTo"
                label="Assign To: (John@info.com)"
                required
                fullWidth
                margin="dense"
                variant="standard"
                error={touched.assignTo && Boolean(errors.assignTo)}
                helperText={touched.assignTo && errors.assignTo}
              />

              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Due Date"
                  value={values.dueDate}
                  onChange={(date) => setFieldValue("dueDate", date)}
                  slots={{
                    textField: TextField,
                  }}
                  slotProps={{
                    textField: {
                      fullWidth: true,
                      margin: "dense",
                      variant: "standard",
                      error: touched.dueDate && Boolean(errors.dueDate),
                      helperText: touched.dueDate && errors.dueDate,
                    },
                  }}
                />
              </LocalizationProvider>

              <Button
                sx={{ mt: 2, marginRight: 1 }}
                variant="contained"
                type="submit"
                disabled={isSubmitting}
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
            </Form>
          )}
        </Formik>
      </DialogContent>
    </Dialog>
  );
};

export default AddTaskDialog;
