import { useEffect, useState } from "react";
import "./App.css";
import Todolist from "./components/Todolist";
import { addTodo, getTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {
  const [todo, setTodo] = useState([]);
  const [text, setText] = useState("");
  const [isUpdating, setIsUpdating] = useState(false);
  const [todoId, setTodoId] = useState("");

  const updateMode = (_id, text) => {
    setIsUpdating(true);
    setText(text);
    setTodoId(_id);
  };

  useEffect(() => {
    getTodo(setTodo);
  }, []);
  return (
    <div className="flex flex-col  place-items-center pt-5 h-screen bg-white">
      <h1 className="text-3xl font-bold">ToDo List</h1>
      <div>
      <input
      className="border-2 p-2 w-96 m-3 rounded-md"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
        placeholder="whats need to be done?"
        type="text"
      />
      {isUpdating ? (
        <button
        className="bg-black text-white p-2 w-24 rounded-md"
          onClick={() =>
            updateTodo({ text, setText, setTodo, setIsUpdating, todoId })
          }
        >
          UPDATE
        </button>
      ) : (
        <button
        className="bg-black text-white p-2 w-24 rounded-md"
          onClick={() => {
            addTodo({ text, setText, setTodo });
          }}
        >
          ADD
        </button>
      )}
      </div>
      
      {todo.map((item) => {
        return (
          <Todolist
            key={item._id}
            text={item.text}
            updateMode={() => updateMode(item._id, item.text)}
            deleteMode={() => deleteTodo(item._id, setTodo)}
          />
        );
      })}
    </div>
  );
}

export default App;
