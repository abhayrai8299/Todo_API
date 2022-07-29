import React from "react";
import Todo from "./Todo";

const TodoList = ({ todos, settodos, settext,setisEditItem,setactive,setTemp,text}) => {
  return (
    <div>
      <ul>
        {todos.map((item) => (
          <Todo
            setisEditItem={setisEditItem}
            settext={settext}
            settodos={settodos}
            todos={todos}
            item={item}
            setactive={setactive}
            setTemp={setTemp}
            text={text}
          />
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
