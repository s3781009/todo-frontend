import React from "react";
import CompletedTodoItem from "./CompletedTodoItem";
import {Box} from "@mui/material";

const CompletedTodoList = (props) => {
  const completed = props.completedtodos.map((item) => (
      <Box marginY="10px">
    <CompletedTodoItem item={item} key={item.datetime} />
      </Box>
  ));
  return props.completedClick ? <Box marginX="20px">{completed}</Box> : <div />;
};

export default CompletedTodoList;
