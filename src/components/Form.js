import React, { useRef } from "react";
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
import { useAppReducer } from "../data/AppContext";

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
  const dispatch = useAppReducer();
  const descriptionInputRef = useRef();
  const amountInputRef = useRef();

  function addExpense() {
    const newExpense = {
      id: Date.now().toString(),
      description: descriptionInputRef.current.value,
      amount: parseInt(amountInputRef.current.value) || 0,
    };

    dispatch({ type: "ADD_EXPENSE", newExpense });

    // Cleanup input fields
    descriptionInputRef.current.value = "";
    amountInputRef.current.value = "";
  }

  return (
    <Box display="flex" marginBottom={2}>
      <TextField
        id="input-description"
        label="Description"
        variant="outlined"
        className={classes.textDescription}
        inputRef={descriptionInputRef}
      />
      <FormControl fullWidth variant="outlined" className={classes.textAmount}>
        <InputLabel htmlFor="amount">Amount</InputLabel>
        <OutlinedInput
          id="input-amount"
          startAdornment={<InputAdornment position="start">$</InputAdornment>}
          labelWidth={60}
          inputRef={amountInputRef}
        />
      </FormControl>
      <Button variant="contained" color="primary" onClick={addExpense}>
        Add
      </Button>
    </Box>
  );
}

export default Form;
