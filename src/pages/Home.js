import TodoForm from "../components/Todo-form";
import TodoList from "../components/Todo-list";
import Header from "../components/Hedear";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import "../components/loading.css";
import { css } from "@emotion/react";
import CompletedTodoList from "../components/Completed-Todo-list";
import { CallDeleteItemApi, GetTodosApi, PostItemsApi } from "../api/TodoApi";
const api = "http://localhost:8000/api/items";
const Home = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [token, setToken] = useState("");
  let navigate = useNavigate();

    props.token().then((t) => setToken(t));
useEffect(()=>{
     GetTodosApi(token, api).then((r) => {
      setTodos(r.data);
      console.log(todos)
       setLoading(false);

    }).catch(e=>console.log(e))},[]
)
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
    console.log(token);
    CallDeleteItemApi(key, api, token);
  };
  useEffect(() => {
    if (localStorage.getItem("isAuthenticated") === "false") {
      navigate("/login");
    }
  });
  return (
    <Fragment>
      <div>
        <Header user={props.user} logout={props.logout} />
        <h1>Home</h1>
        <TodoForm
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          input={input}
        />
        <TodoList todos={todos} handleDelete={deleteTodo} />
        <CompletedTodoList completedtodos={completedTodos} />
      </div>
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
