import React from "react";
import { Paper, Container, Box } from "@material-ui/core";

function Layout({ children }) {
  return (
    <Container maxWidth="lg">
      <Paper elevation={3}>
        <Box height="calc(100vh - 64px)" marginTop={2} padding={2}>
          {children}
        </Box>
      </Paper>
    </Container>
  );
}

export default Layout;
