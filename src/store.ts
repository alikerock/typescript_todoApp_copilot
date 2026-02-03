import type { Todo, TodoCreate, TodoUpdate } from "./types";

//할일 추가
export function add(todos: Todo[], newTodo: TodoCreate): Todo[] {
  const nextId = todos.length > 0 ? Math.max(...todos.map((todo) => todo.id)) + 1 : 1;
  const now = new Date().toISOString();
  const todo: Todo = {
    id: nextId,
    title: newTodo.title,
    done: false,
    due: newTodo.due,
    createdAt: now,
  };
  return [...todos, todo];
}
//할일 수정
export function update(todos: Todo[], id: number, updates: TodoUpdate): Todo[] {
  return todos.map((todo) => todo.id === id ? { ...todo, ...updates, updatedAt: new Date().toISOString() } : todo);
}
//할일 삭제
export function remove(todos: Todo[], id: number): Todo[] {
  return todos.filter((todo) => todo.id !== id);
}
//할일 완료 토글
export function toggle(todos: Todo[], id: number): Todo[] {
  return todos.map((todo) => todo.id === id ? { ...todo, done: !todo.done, updatedAt: new Date().toISOString() } : todo);
}
//모두 완료
export function markAllDone(todos: Todo[]): Todo[] {
  const now = new Date().toISOString();
  return todos.map((todo) => ({ ...todo, done: true, updatedAt: now }));
}
//모두 해제
export function unmarkAllDone(todos: Todo[]): Todo[] {
  //const now = new Date().toISOString();
  return todos.map((todo) => ({ ...todo, done: false}));
}
//남은 할일 개수
export function countRemaining(todos: Todo[]): number {
  return todos.filter((todo) => !todo.done).length;
}