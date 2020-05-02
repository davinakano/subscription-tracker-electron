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
import { useAppState } from "../data/AppContext";

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: theme.spacing(0.5),
  },
}));

function SubscriptionList() {
  const classes = useStyles();
  const { expenses } = useAppState();

  return (
    <List>
      {expenses.map((expense) => {
        const { description, amount } = expense;
        return (
          <ListItem disableGutters className={classes.listItem}>
            <ListItemText primary={`${description} - ${amount}`} />
            <ListItemSecondaryAction>
              <IconButton edge="end" aria-label="delete">
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
