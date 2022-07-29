import React from "react";
const Todo = ({
  item,
  todos,
  settodos,
  settext,
  setisEditItem,
  setactive,
  setTemp,
  text
}) => {

    console.log(text);
  const deleteHandler = () => {
    if(text!=="")
    {
        settodos(todos.filter((element) => element.id !== item.id));
        settext("")
        setTemp("")
        setactive(false)
    }
    else
    {
        settodos(todos.filter((element) => element.id !== item.id));
    }
 
  };
  const editItem = (id) => {
    setactive(true)
    let item = todos.find((task) => {
      return task.id === id;
    });
    settext(item.taskName);
    setTemp(item.taskName)
    setisEditItem(id);
  };

  return (
    <div>
        {todos!==""?<> <li>{item.taskName} <button onClick={() => editItem(item.id)}>Edit</button>
      <button onClick={deleteHandler}>Delete</button></li></>:"No Task"}
     
     
    </div>
  );
};

export default Todo;
