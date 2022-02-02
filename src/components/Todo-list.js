import React, { Fragment, useRef, useState } from "react";
import TodoItem from "./Todo-item";
import UpdateItem from "./UpdateItem";
import { Box, Card, Container } from "@mui/material";

const TodoList = (props) => {
  const listItems = props.todos.map((todo) => (
      <Box marginY="10px" >
    <TodoItem
      todo={todo}
      key={todo.datetime}
      handleDelete={props.handleDelete}
      completeTodo={props.completeTodo}
    />
      </Box>
  ));

  return !props.completedClick ? <Box marginX="20px" >{listItems}</Box> : <Fragment />;
};

export default TodoList;
