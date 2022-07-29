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
  const deleteHandler = () => {              //Delete Handler
    if(text!=="")
    {
        settodos(todos.filter((element) => element.id !== item.id));
        settext("")
        setTemp(" ")
        setactive(false)
        setisEditItem(null)
    }
    else
    {
        settodos(todos.filter((element) => element.id !== item.id));
        setactive(false);
    }
 
  };
  const editItem = (id) => {                   //Getting item which user click on edit and pass the id in the edititem state
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
