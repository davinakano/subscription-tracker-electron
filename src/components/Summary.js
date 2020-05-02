import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useAppState } from "../data/AppContext";

function Summary() {
  const { summaryAmount } = useAppState();

  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1" align="center">
        Subscriptions total
      </Typography>
      <Typography variant="h1" align="center">
        {`$${summaryAmount}`}
      </Typography>
    </Box>
  );
}

export default Summary;
