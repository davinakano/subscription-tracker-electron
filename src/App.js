import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { Paper, Container, Box } from "@material-ui/core";
import theme from "./styles/theme";
import Summary from "./components/Summary";
import Form from "./components/Form";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Paper elevation={3}>
          <Box height="calc(100vh - 64px)" marginTop={2} padding={2}>
            <Summary />
            <Form />
          </Box>
        </Paper>
      </Container>
    </MuiThemeProvider>
  );
}

export default App;
