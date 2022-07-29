import React from "react";

const Form = ({
  settext,
  todos,
  text,
  settodos,
  isEditItem,
  setisEditItem,
  active,
  setactive,
  temp
}) => {
  const inputTextHandler = (e) => {
    settext(e.target.value);
  };


console.log(temp)
  console.log(text);
  const submitTodoHandler = (e) => {
    e.preventDefault();
    console.log(isEditItem);
    setactive(false)
    if (isEditItem !== null) {
        if(text==="")
        {
            setactive(true)
            alert("Please add a task")
            console.log(temp)
            settodos(
                todos.map((element) => {
                  if (element.id === isEditItem) {
                    return { ...element, taskName:temp};
                  }
                  return element;
                })
              );
              settext(temp)
              setisEditItem(null);   
        } 
        else
        {
            settodos(
                todos.map((element) => {
                  if (element.id === isEditItem) {
                    return { ...element, taskName: text };
                  }
                  return element;
                })
              );
              setisEditItem(null);
              settext("");
        }  
    
    } 
    else if(text==="")
    {
        document.getElementById("input").style.borderBottom= "2px solid red";
        setTimeout(() => {
            document.getElementById("input").style.border= "1px solid black";
        }, 2000);
    }
    else if(text!=="") {
      settodos([...todos, { taskName: text, id: Math.random() * 10000 }]);
      settext(" ");
    }
  };

  return (
    <form>
      <input id="input" onChange={inputTextHandler} type="text" value={text} />
      <button onClick={submitTodoHandler}>{active===true?"Update Task":"Add Task"}</button>
    </form>
  );
};

export default Form;
