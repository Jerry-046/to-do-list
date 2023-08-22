import { useRef } from "react";
import Navbar from "../compoment/navbar";
import { useHistory } from "react-router-dom";

const Addtodo = () => {
  const todoText = useRef();
  const history = useHistory();

  const addToDo = (e) => {
    e.preventDefault();
    const todoString = todoText.current.value;
    const initialTodo = localStorage.getItem("todo")
      ? JSON.parse(localStorage.getItem("todo"))
      : [];
    initialTodo.push(todoString);
    localStorage.setItem("todo", JSON.stringify(initialTodo));

    history.push("/");
  };
  return (
    <>
      <Navbar />
      <div className="todo_container">
        <h1>Add To-Do:</h1>
        <form onSubmit={addToDo}>
          <input type="text" ref={todoText} />
          <button>Save To-Do</button>
        </form>
      </div>
    </>
  );
};

export default Addtodo;
