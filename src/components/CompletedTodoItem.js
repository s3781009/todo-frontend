import React from "react";
import { Button, Card, ListItem, Stack, Typography } from "@mui/material";

const CompletedTodoItem = (props) => {
  return (
    <Card>
      <Stack spacing={2} direction="row" margin={2}>
        <Card>
          <ListItem alignItems="center">
            Date Created: <br/>{props.item.datetime}
          </ListItem>
        </Card>
        <ListItem>{props.item.text}</ListItem>
      </Stack>
    </Card>
  );
};

export default CompletedTodoItem;
