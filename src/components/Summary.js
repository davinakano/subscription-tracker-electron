import React from "react";
import { Box, Typography } from "@material-ui/core";

function Summary() {
  return (
    <Box marginBottom={2}>
      <Typography variant="subtitle1" align="center">
        Subscriptions total
      </Typography>
      <Typography variant="h1" align="center">
        $1250
      </Typography>
    </Box>
  );
}

export default Summary;
