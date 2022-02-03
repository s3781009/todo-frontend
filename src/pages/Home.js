import TodoForm from "../components/Todo-form";
import TodoList from "../components/Todo-list";
import Header from "../components/Hedear";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import "../components/loading.css";
import { css } from "@emotion/react";
import CompletedTodoList from "../components/Completed-Todo-list";
import {CallDeleteItemApi, PostItemsApi, UpdateItemsApi} from "../api/TodoApi";
import axios from "axios";
import { Box, Divider, Link} from "@mui/material";
const api = "https://go-todo-server.herokuapp.com/api/items";
const Home = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completedClick, setCompletedClick] = useState(false);
  const [token, setToken] = useState("");
  let navigate = useNavigate();

  props.token().then((t) => setToken(t));
  useEffect(() => {
    axios
      .get(api, {
        headers: { Authorization: token },
      })
      .then((r) => {
        let items = [];
        let todoItems = [];
        let finishedItems = [];
        items.push(...r.data);
        items.forEach((item) => {
          if (item.completed) {
            finishedItems.push(item);
          } else {
            todoItems.push(item);
          }
        });
        setTodos(todoItems);
        setCompletedTodos(finishedItems);
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
        setTodos([]);
      });
  }, [token]);
  const handleChange = (e) => {
    setInput(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input) {
      return;
    }
    const newTodo = {
      datetime: new Date().toLocaleString(),
      text: input,
      completed: false,
    };
    const newTodos = [newTodo, ...todos];
    setTodos(newTodos);
    PostItemsApi(newTodo, api, token);
    setInput("");
  };
  const deleteTodo = (key) => {
    const updatedTodo = [...todos].filter((todo) => todo.datetime !== key);
    setTodos(updatedTodo);
    CallDeleteItemApi(key, api, token);
  };
  const completeTodo = (item) => {
    item.completed = true;
    setCompletedTodos([...completedTodos, item]);
    const updatedTodo = [...todos].filter((item) => item.completed !== true);
    setTodos(updatedTodo);
    console.log(item);
    UpdateItemsApi(item, api, token);

  };
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "false") {
      navigate("/login");
    }
  });
  return (
    <Fragment>
      <Box sx={{ color: "grey"} }>
        <Header user={props.user} logout={props.logout} />

        <Box
          display="flex"
          flexDirection="row"
          paddingLeft="5%"
          marginTop="3%"
          marginBottom="1%"
        >
          <Link
            underline="hover"
            variant="h4"
            onClick={() => setCompletedClick(false)}
          >
            To Do List
          </Link>
          <Link
            underline="hover"
            marginLeft="10%"
            variant="h4"
            onClick={() => setCompletedClick(true)}
          >
            Completed To Do's
          </Link>
        </Box>
        <Divider />
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
        <TodoList
          todos={todos}
          handleDelete={deleteTodo}
          completeTodo={completeTodo}
          completedClick={completedClick}
        />
        <CompletedTodoList
          completedtodos={completedTodos}
          completedClick={completedClick}
        />
      </Box>
      <BeatLoader loading={loading} color="#e28743" size={30} css={override} />
    </Fragment>
  );
};
const override = css`
  position: absolute;
  top: 50%;
  left: 50%;
`;
export default Home;
