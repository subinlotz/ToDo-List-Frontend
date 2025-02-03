import axios from "axios";

const API_BASE_URL = "https://todo-list-backend-gb68.onrender.com"

const getTodo = (setTodo) => {
    axios
        .get(API_BASE_URL)
        .then(({data})=>{
            console.log(data);
            setTodo(data)
        })
        .catch(error => console.log(error));
};

const addTodo = ({text, setText, setTodo})=>{
   if (text =="") {
    console.log("no text found");
   } else{
    axios
    .post(`${API_BASE_URL}/save`,{text})
    .then((data)=>{
        console.log(data);
        setText("")
        getTodo(setTodo)
    })
    .catch((err)=>console.log(err)
    )
   }
}

const updateTodo = ({text, setText, setTodo, todoId, setIsUpdating})=>{
   axios
     .put(`${API_BASE_URL}/update`,{_id: todoId,text})
     .then((data)=>{
         console.log(data);
         setText("")
         setIsUpdating(false)
         getTodo(setTodo)
     })
     .catch((err)=> console.log(err)
     ) 
 }

 const deleteTodo = (_id, setToDo) => {
    axios
      .delete(`${API_BASE_URL}/delete`, { data: { _id } })
      .then((response) => {
        console.log("Delete API call successful");
        getTodo(setToDo);
      })
      .catch((error) => {
        console.error('Error deleting todo:', error);
      });
  };


export {getTodo, addTodo, updateTodo, deleteTodo}
