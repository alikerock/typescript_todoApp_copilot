import { useState } from "react";
import type{TodoCreate} from"../types";

interface TodoFormProps {
  onAdd: (newTodo: TodoCreate) => void;
}

export default function TodoForm({onAdd}:TodoFormProps) {
  const [title, setTitle] = useState("");
  const [due, setDue] = useState("");
  return (
    <>
      <form onSubmit={(e) => {
        e.preventDefault();
        console.log({ title, due });
        setTitle("");
        setDue("");
        onAdd({ title, due: due || undefined });
      }}>
        <input type="text" placeholder="할일을 입력하세요" value={title} onChange={(e) => setTitle(e.target.value)} required/>
        <input type="date" value={due} onChange={(e) => setDue(e.target.value)} />
        <button type="submit">추가</button>
      </form>
    </>
  );
}