import React from "react";
import CompletedTodoItem from "./CompletedTodoItem";

const CompletedTodoList = (props) => {
  const completed = props.completedtodos.map((item) => (
    <CompletedTodoItem item={item} key={item.datetime} />
  ));
  return props.completedClick ? <div>{completed}</div> : <div />;
};

export default CompletedTodoList;
