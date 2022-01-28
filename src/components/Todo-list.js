import React from "react";
import TodoItem from "./Todo-item";

const TodoList = (props) => {
  const listItems = props.todos.map((todo) => (
    <TodoItem
      todo={todo}
      key={todo.datetime}
      handleDelete={props.handleDelete}
    />
  ));

  return <div>{listItems}</div>;
};

export default TodoList;
