import React from "react";
import { Box, Typography } from "@material-ui/core";
import { useAppState } from "../data/appContext";

function Summary() {
  const { summaryAmount } = useAppState();

  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1" align="center">
        Subscriptions monthly total
      </Typography>
      <Typography variant="h1" align="center" noWrap>
        {`$${summaryAmount.toFixed(2)}`}
      </Typography>
    </Box>
  );
}

export default Summary;
