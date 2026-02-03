import type { Todo, TodoUpdate } from "../types";
import { useState } from "react";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onUpdate: (patch: TodoUpdate) => void;
  onRemove: () => void;
}

export default function TodoItem({ todo, onToggle, onUpdate, onRemove }: Props) {
  const [editMode, setEditMode] = useState(false);
  const [title, setTitle] = useState(todo.title);
  const [due, setDue] = useState(todo.due ?? '');

  function saveEdit() {
    const patch:TodoUpdate = {
      title:title,
      due:due ? new Date(due).toISOString() : undefined
    };
    onUpdate(patch);
    setEditMode(false);
  }

  return (
    <div>
      {
        editMode ? (
          <>
            <input type="text" defaultValue={title} onChange={(e) => setTitle(e.target.value)} />
            <input type="date" defaultValue={due?.slice(0, 10)} onChange={(e) => setDue(e.target.value)} />
            <button onClick={saveEdit}>저장</button>
            <button onClick={() => setEditMode(false)}>취소</button>
          </>
        ) :
          <>
            <input type="checkbox" id={`todo-${todo.id}`} checked={todo.done} onChange={() => onToggle()} />
            <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
            <button onClick={() => setEditMode(true)}>수정</button>
            <button onClick={() => window.confirm("삭제하시겠습니까?") && onRemove()}>삭제</button>
          </>
      }
    </div>
  )
}