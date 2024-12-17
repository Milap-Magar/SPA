import Sidebar from "../components/ui/Sidebar";
import Loading from "../components/ui/Loading";
import IdCard from "../components/ui/IdCard";
import { useData } from "../hooks/useData";
import { Box, Button, Typography } from "@mui/material";
import CachedIcon from "@mui/icons-material/Cached";

const Dashboard = () => {
  const { loading, userData, fetchUser } = useData();

  if (loading) return <Loading />;

  if (!userData) {
    return (
      <Sidebar>
        <Box sx={{ p: 4, bgcolor: "grey.100", minHeight: "100vh" }}>
          <Typography variant="h4" fontWeight="bold" mb={2}>
            Welcome!
          </Typography>
          <Box
            sx={{
              p: 3,
              bgcolor: "white",
              boxShadow: 2,
              borderRadius: 2,
              textAlign: "center",
            }}
          >
            <Typography>
              No user data available. Please refresh or log in again.
            </Typography>
            <Button
              variant="contained"
              color="primary"
              onClick={fetchUser}
              startIcon={<CachedIcon />}
              sx={{ mt: 2 }}
            >
              Refresh Data
            </Button>
          </Box>
        </Box>
      </Sidebar>
    );
  }

  return (
    <Sidebar>
      <Box sx={{ paddingTop: 1, bgcolor: "grey.100", minHeight: "100vh" }}>
        <IdCard />
      </Box>
    </Sidebar>
  );
};

export default Dashboard;
