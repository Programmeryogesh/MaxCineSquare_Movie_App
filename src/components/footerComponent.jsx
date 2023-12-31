
import * as React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { Box } from "@mui/material";

export default function Footer() {
  return (
    <Box
      sx={{
        backgroundColor:"#008effb8",
        color:"white",
        marginTop:"20px"
      }}
      p={6}
      component="footer"
    >
      <Container maxWidth="sm">
        <Typography variant="body2" color="white" align="center">
          {"Copyright © "}
          <Link  sx={{color:"white"}} href="https://your-website.com/">
          MaxCineSquare
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
        <Typography variant="body1" color="white" align="center">Design By <Link  sx={{color:"white"}} href="https://github.com/Programmeryogesh">
          Yogesh
          </Link> </Typography>
      </Container>
    </Box>
  );
}