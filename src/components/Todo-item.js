import React, { useState } from "react";
import UpdateItem from "./UpdateItem";
import { Button, Card, ListItem, Stack, Typography } from "@mui/material";
import { Delete } from "@mui/icons-material";
const TodoItem = (props) => {
  const [isClicked, setClicked] = useState(false);
  return (

    <Card>
      <Stack spacing={2} direction="row" margin={2}>
        <Card>
          <ListItem alignItems="center">{props.todo.datetime}</ListItem>
        </Card>
        <ListItem>{props.todo.text}</ListItem>

        <Button
          variant="outlined"
          color="error"
          onClick={() => props.handleDelete(props.todo.datetime)}
        >
          <Delete />
        </Button>
        <Button variant="outlined" onClick={() => setClicked(true)}>
          {" "}
          update
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={() => {
            props.completeTodo(props.todo);
          }}
        >
          Done
        </Button>
      </Stack>
      <UpdateItem clicked={isClicked} todo={props.todo} />
    </Card>
  );
};

export default TodoItem;
