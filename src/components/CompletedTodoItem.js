import React, { useState } from "react";
import UpdateItem from "./UpdateItem";
import { Button, Card, ListItem, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
const CompletedTodoItem = (props) => {
  return (
    <Card>
      <Stack spacing={2} direction="row" margin={2}>
        <Card>
          <ListItem alignItems="center">
            Date Created: {props.item.datetime}
          </ListItem>
        </Card>
        <ListItem>{props.item.text}</ListItem>
      </Stack>
    </Card>
  );
};

export default CompletedTodoItem;
