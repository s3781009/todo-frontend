import React, { Fragment, useRef, useState } from "react";
import TodoItem from "./Todo-item";
import UpdateItem from "./UpdateItem";
import { Box, Card, Container } from "@mui/material";

const TodoList = (props) => {
  const listItems = props.todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.datetime}
      handleDelete={props.handleDelete}
      completeTodo={props.completeTodo}
    />
  ));

  return !props.completedClick ? <Card>{listItems}</Card> : <Fragment />;
};

export default TodoList;
