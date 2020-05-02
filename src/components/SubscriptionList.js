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

const useStyles = makeStyles((theme) => ({
  listItem: {
    paddingLeft: theme.spacing(0.5),
  },
}));

function SubscriptionList() {
  const classes = useStyles();

  return (
    <List>
      <ListItem disableGutters className={classes.listItem}>
        <ListItemText primary="Netflix Family Plan - $30" />
        <ListItemSecondaryAction>
          <IconButton edge="end" aria-label="delete">
            <DeleteIcon />
          </IconButton>
        </ListItemSecondaryAction>
      </ListItem>
    </List>
  );
}

export default SubscriptionList;
