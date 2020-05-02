import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  IconButton,
} from "@material-ui/core";
import DeleteIcon from "@material-ui/icons/Delete";
import { useAppState, useAppReducer } from "../data/appContext";

const useStyles = makeStyles((theme) => ({
  list: {
    height: "calc(100vh - 295px)",
    overflow: "auto",
  },
  listItem: {
    paddingLeft: theme.spacing(0.5),
  },
}));

function SubscriptionList() {
  const classes = useStyles();
  const dispatch = useAppReducer();
  const { expenses } = useAppState();

  function deleteExpense(e) {
    const { id, amount } = e.currentTarget.dataset;

    dispatch({ type: "REMOVE_EXPENSE", expenseId: id, expenseAmount: amount });
  }

  return (
    <List className={classes.list}>
      {expenses.map((expense) => {
        const { description, amount } = expense;
        return (
          <ListItem
            key={expense.id}
            disableGutters
            className={classes.listItem}
          >
            <ListItemText primary={`${description} - $${amount}`} />
            <ListItemSecondaryAction>
              <IconButton
                data-id={expense.id}
                data-amount={expense.amount}
                edge="end"
                aria-label="delete"
                onClick={deleteExpense}
              >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}

export default SubscriptionList;
