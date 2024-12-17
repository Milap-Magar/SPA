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

const Label = styled.label`
  font-size: 0.8rem;
  font-weight: bold;
  color: #555;
`;

const IdCard = () => {
  const userData = {
    name: "Jonathan Smith",
    id: "000123456",
    address: "Kusunti, Lalitpur",
    phone: "+1 (123) 456-789",
    joinDate: "01-02-2019",
    expireDate: "01-02-2029",
  };

  const { name, id, address, phone, joinDate, expireDate } = userData;

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
            alt={name}
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
            {name}
          </Typography>
          <Typography variant="body2" sx={{ color: "#ddd" }}>
            Graphic Designer
          </Typography>
        </Box>

        <CardContent>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>ID NO: </Label> {id}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>PHONE: </Label> {phone}
          </Typography>
          <Typography variant="body1" sx={{ mt: 1 }}>
            <Label>ADDRESS: </Label> {address}
          </Typography>

          <Divider sx={{ my: 2 }} />

          <Box>
            <Typography variant="body2" sx={{ fontWeight: "bold" }}>
              JOIN DATE: <span style={{ color: "#1976D2" }}>{joinDate}</span>
            </Typography>
            <Typography variant="body2" sx={{ fontWeight: "bold", mt: 1 }}>
              EXPIRE DATE:{" "}
              <span style={{ color: "#D32F2F" }}>{expireDate}</span>
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Box>
  );
};

export default IdCard;
