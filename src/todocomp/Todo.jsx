import React, { useState, useEffect } from 'react'
import './Todo.css'
const getLocaldata = () => {
  const lists = localStorage.getItem("myTodoList")
  if (lists) {
    return JSON.parse(lists)
  } else {
  }
  return [];
}
const Todo = () => {
  const [inputData, setinputData] = useState("")
  const [todos, settodos] = useState(getLocaldata());
  const [isEditItem, setisEditItem] = useState("")
  const [toggleButton, setToggleButton] = useState(false);
  const addTodo = () => {
    if (!inputData) {
    } 
    else if (inputData && toggleButton) {
      settodos(
      todos.map((currentElem) => {
        if (currentElem.id === isEditItem) {
          return { ...currentElem, name: inputData };
        }
        return currentElem;
      })
      );
      setinputData("");
      setisEditItem(null);
      setToggleButton(false);
    }
    else {
      const newInp = {
        id: new Date().getTime().toString(),
        name: inputData
      };
      settodos([...todos, newInp])
      setinputData("")
    }
  }
  const Deletetodo = (deletingid) => {
    const updatedNodes = todos.filter((curElem) => {
      return curElem.id !== deletingid;
    });
    settodos(updatedNodes)
  }
  const Updatetodo = (indx) => {
    const updatedtodo = todos.find((curElem) => {
      return curElem.id === indx;
    });
    setisEditItem(indx);
    setinputData(updatedtodo.name)
    setToggleButton(true)
  }
  const removeall = () => {
    settodos([])
  }
  useEffect(() => {
    localStorage.setItem('myTodoList', JSON.stringify(todos));
  }, [todos])
  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./todo.svg" alt="todologo" />
            <figcaption>Add Your List Here ✌</figcaption>
          </figure>
          <div className='addItems'>
            <input type='text' className='form-control' placeholder='Enter Task here✍️' value={inputData} onChange={(e) => setinputData(e.target.value)} />
            {toggleButton ? (
              <i className="far fa-edit add-btn" onClick={addTodo}></i>
            ) : (
              <i className="fa fa-plus add-btn" onClick={addTodo}></i>
            )}
          </div>
          <div className='showItems'>
            {todos.map((curElem) => {
              return (
                <div className="eachItem" key={curElem.id}>
                  <h3>{curElem.name}</h3>

                  <div className="todo-btn">
                    <i className="far fa-edit add-btn" onClick={() => Updatetodo(curElem.id)} ></i>
                    <i className="far fa-trash-alt add-btn" onClick={() => Deletetodo(curElem.id)}></i>
                  </div>
                </div>
              )
            })}
          </div>
          <div className='showItems'>
            <button className="btn effect04" disabled={todos.length === 0}  onClick={removeall} data-sm-link-text="Remove All"><span> CHECK LIST</span></button>
          </div>
        </div>
      </div>
      <footer>
		<div className="social">
			<a  href="tel:9485858534" target="_blank"><i
					className="fab fa-whatsapp"></i></a>
			<a href="https://www.instagram.com/_aakashsaini/" target="_blank"><i className="fab fa-instagram"></i></a>
			<a href="https://www.linkedin.com/in/-aakashsaini" target="_blank"><i className="fab fa-linkedin"></i></a>
		</div>
		<p className="end">Developer &#169; By Aakash saini</p>
	</footer>
    </>
  )
}
export default Todo
