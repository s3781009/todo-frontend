import TodoForm from "../components/Todo-form";
import TodoList from "../components/Todo-list";
import Header from "../components/Hedear";
import { Fragment, useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { BeatLoader } from "react-spinners";
import "../components/loading.css";
import { css } from "@emotion/react";
import CompletedTodoList from "../components/Completed-Todo-list";

const Home = (props) => {
  const [input, setInput] = useState("");
  const [todos, setTodos] = useState([]);
  const [completedTodos, setCompletedTodos] = useState([]);
  const [loading, setLoading] = useState(true);
  let navigate = useNavigate();
  const axios = require("axios");
  useEffect(async () => {
    const token = await props.token();
    await axios
      .get("http://192.168.0.173/api/items", {
        headers: { Authorization: token },
      })
      .then((response) => {
        if (response.data === null) {
          setTodos([]);
        } else {
          let completedItems = [];
          let notCompletedItems = [];
          const responseItems = JSON.parse(JSON.stringify(response.data));
          responseItems.forEach((item) => {
            if (item.completed) {
              completedItems.push(item);
            } else {
              notCompletedItems.push(item);
            }
          });
          setTodos(notCompletedItems);
          setCompletedTodos(completedItems);
        }
      })
      .then(() => setLoading(false))
      .catch((error) => console.log(error.message));
  }, []);

  const postItemsApi = async (todo) => {
    const token = await props.token();
    console.log(JSON.stringify(todo));
    await axios.post("http://192.168.0.173/api/items", todo, {
      headers: {
        Authorization: token,
      },
    });
  };
  const callDeleteItemApi = async (key) => {
    const token = await props.token();
    await axios.delete("http://192.168.0.173/api/items", {
      headers: {
        Authorization: token,
      },
      data: {
        datetime: key,
      },
    });
  };
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
    postItemsApi(newTodo).then((r) => "");
    setInput("");
  };
  const deleteTodo = (key) => {
    const updatedTodo = [...todos].filter((todo) => todo.datetime !== key);
    setTodos(updatedTodo);
    callDeleteItemApi(key).then((r) => "");
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
        <CompletedTodoList completedtodos={completedTodos}/>
      </div>
      <BeatLoader loading={loading} color="#e28743" size={30} css={override} />
    </Fragment>
  );
};
const override = css`
  position: absolute;
  top: 30%;
  left: 30%;
`;
export default Home;
