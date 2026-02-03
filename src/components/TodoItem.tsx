import type { Todo, TodoUpdate } from "../types";

interface Props {
  todo: Todo;
  onToggle: () => void;
  onUpdate: (patch: TodoUpdate) => void;
  onRemove: () => void;
}

export default function TodoItem({ todo, onToggle, onUpdate, onRemove }: Props) {

  return (
    <div>
      <input type="checkbox" id={`todo-${todo.id}`} checked={todo.done} onChange={() => onToggle()} />
      <label htmlFor={`todo-${todo.id}`}>{todo.title}</label>
      <button onClick={() => onUpdate()}>수정</button>
      <button onClick={() => onRemove()}>삭제</button>
    </div>
  )
}