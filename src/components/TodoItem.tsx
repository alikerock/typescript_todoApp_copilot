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
      <input type="checkbox" checked={todo.done} onChange={() => onToggle()} />
      <span>{todo.title}</span>
      <button onClick={() => onUpdate}>수정</button>
      <button onClick={() => onRemove()}>삭제</button>
    </div>
  )
}