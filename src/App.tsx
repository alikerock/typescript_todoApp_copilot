import TodoForm from "./components/TodoForm";
// import {add,remove, toggle, update} from "./store"; 
import * as S from "./store"; 
import { useEffect, useState } from "react";
import type { Todo } from "./types";

//로컬스토리지에서 할일 불러오기
function load(): Todo[] {
  const data = localStorage.getItem("todos");
  if (data) {
    return JSON.parse(data);//문자열->객체
  }
  return [];
}
//로컬스토리지에 할일 저장하기
function save(todos: Todo[]) {
  localStorage.setItem("todos", JSON.stringify(todos));//객체->문자열
}  


function App() {
  const [todos, setTodos] = useState<Todo[]>(load());

  //할일이 변경될 때마다 로컬스토리지에 저장 - useEffect 사용 가능
  useEffect(() => {
    save(todos);
  }, [todos]);
  
  return (
    <>
      <h1>My Todo App</h1>
      <TodoForm onAdd={(newTodo) => setTodos(S.add(todos, newTodo))} />  
    </>
  )
}

export default App
