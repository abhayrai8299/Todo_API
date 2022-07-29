import React, { useEffect, useState } from "react";
import Form from "./components/Form";
import TodoList from "./components/TodoList.js";
import axios from 'axios';
import './App.css'
function App() {
  const [text, settext] = useState("");
  const [todos, settodos] = useState([]);
  const [isEditItem, setisEditItem] = useState(null);
  const [active, setactive] = useState(false);
  const [temp,setTemp]=useState("")


  const fetchProducts = async () => {
    const response = await axios
      .get("https://62e010f4fa8ed271c47dc10e.mockapi.io/task")
      .catch((e) => {
        console.log(e);
      });
    settodos(response.data);
  };
  useEffect(() => {
    fetchProducts();
  },[]);


  //  console.log(todos);
  return (
    <div className="App">
      <header>
        <h1>TODO_API </h1>
      </header>
      <Form
        isEditItem={isEditItem}
        setisEditItem={setisEditItem}
        todos={todos}
        settodos={settodos}
        text={text}
        settext={settext}
        active={active}
        setactive={setactive}
        temp={temp}
      />
      <TodoList
        setisEditItem={setisEditItem}
        settext={settext}
        settodos={settodos}
        todos={todos}
        setactive={setactive}
        setTemp={setTemp}
        text={text}
      />
    </div>
  );
}

export default App;
