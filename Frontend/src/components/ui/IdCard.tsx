import {
  Card,
  CardContent,
  Typography,
  Avatar,
  Box,
  Divider,
} from "@mui/material";
import styled from "styled-components";
import dp from "../../assets/dp.svg";

import { useData } from "../../hooks/useData";
import Loading from "./Loading";

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  color: #555;
`;

const IdCard = () => {
  const { loading, userData } = useData();
  // console.log(userData);

  if (loading) return <Loading />;

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        mt: 5,
        "@media (min-width: 750px)": {
          justifyContent: "flex-end",
          pr: 5,
        },
      }}
    >
      <Card
        sx={{
          maxWidth: 550,
          borderRadius: 4,
          boxShadow: 6,
          textAlign: "center",
          background: "linear-gradient(180deg, #2196f3, #fff)",
        }}
      >
        <Box
          sx={{
            background: "#2196f3",
            borderTopLeftRadius: 16,
            borderTopRightRadius: 16,
            width: 300,
            p: 2,
          }}
        >
          <Avatar
            src={dp}
            alt={userData?.name}
            sx={{
              width: 100,
              height: 100,
              margin: "0 auto",
              border: "4px solid #fff",
            }}
          />
          <Typography
            variant="h6"
            sx={{
              mt: 1,
              color: "#fff",
              textTransform: "uppercase",
              fontWeight: "bold",
            }}
          >
            {userData?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#ddd" }}>
            {userData?.position}
          </Typography>
        </Box>

        <CardContent>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>ID NO: </Label> {userData?.id}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>PHONE: </Label> {userData?.phone}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>ADDRESS: </Label> {userData?.address}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              {/* JOIN DATE: <span style={{ color: "#1976D2" }}>{joinDate}</span> */}
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
              EXPIRE DATE:{" "}
              {/* <span style={{ color: "#D32F2F" }}>{expireDate}</span> */}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IdCard;
