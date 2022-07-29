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

  const cancelHandler=()=>{                 //Cancel Handler
    setactive(false);
    settext("");
    setisEditItem(null)
  }

console.log(temp)
  console.log(text);
  const submitTodoHandler = (e) => {           //Submit Handler
    e.preventDefault();
    console.log(text);
    setactive(false)
    if (isEditItem !== null) {     // It check whether user click on edit or not if click then we put that id
        if(text==="")
        {
            setactive(true)
            alert("Please add a task111")
            console.log(temp)
            setisEditItem(null)
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
    else if(text==="")   //Initial Condition When No value Given
    {
        document.getElementById("input").style.borderBottom= "2px solid red";
        setTimeout(() => {
            document.getElementById("input").style.border= "1px solid black";
        }, 2000);
        settext("")
    }
    else  {         // When putting some value then it add to Todo
      settodos([...todos, { taskName: text, id: Math.random() * 10000 }]);
      settext("");
    }
  };

  return (
    <form>
      <input id="input" onChange={inputTextHandler} type="text" value={text} />
      <button onClick={submitTodoHandler}>{active===true?"Update Task":"Add Task"}</button> 
      {active===true?
        <span className="cancel" onClick={cancelHandler}>
        Cancel
    </span>:""
      }
     
    </form>
  );
};

export default Form;
