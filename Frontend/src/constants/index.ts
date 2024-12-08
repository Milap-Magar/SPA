import AddTaskIcon from "@mui/icons-material/AddTask";
import SubjectIcon from "@mui/icons-material/Subject";
import HistoryIcon from "@mui/icons-material/History";
import DraftsIcon from "@mui/icons-material/Drafts";

interface Task {
  name: string;
  icon: () => JSX.Element; 
}

const tasksNav: Task[] = [
  { name: "Add Task", icon: () => <AddTaskIcon /> },
  { name: "Total Task", icon: () => <SubjectIcon /> },
  { name: "Task History", icon: () => <HistoryIcon /> },
  { name: "Drafts", icon: () => <DraftsIcon /> },
];
