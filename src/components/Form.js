import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  Box,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  TextField,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  textDescription: {
    width: "70%",
    marginRight: theme.spacing(2),
  },
  textAmount: {
    width: "30%",
    marginRight: theme.spacing(2),
  },
}));

function Form() {
  const classes = useStyles();
  const [amount, setAmount] = useState(0);

  return (
    <Box display="flex" marginBottom={2}>
      <TextField
        id="input-description"
        label="Description"
        variant="outlined"
        className={classes.textDescription}
      />
      <FormControl fullWidth variant="outlined" className={classes.textAmount}>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <OutlinedInput
          id="input-amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
        />
      </FormControl>
      <Button variant="contained" color="primary">
        Add
      </Button>
    </Box>
  );
}

export default Form;
