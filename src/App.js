import React from "react";
import { MuiThemeProvider } from "@material-ui/core/styles";
import { AppStateProvider } from "./data/appContext";
import theme from "./styles/theme";
import Layout from "./components/Layout";
import Summary from "./components/Summary";
import Form from "./components/Form";
import SubscriptionList from "./components/SubscriptionList";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <AppStateProvider>
        <Layout>
          <Summary />
          <Form />
          <SubscriptionList />
        </Layout>
      </AppStateProvider>
    </MuiThemeProvider>
  );
}

export default App;
