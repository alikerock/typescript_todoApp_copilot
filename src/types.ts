export type TodoId=number;

export interface Todo {
  id: TodoId
  title: string
  done: boolean
  due?: string
  createdAt: string
  updatedAt?: string
}
//Todo에서 title, due 선택(picK)해서 TodoCreate 타입생성
export type TodoCreate = Pick<Todo, 'title' | 'due'>;

//Todo에서 id, updatedAt 제외(Omit)해서 TodoUpdate 타입생성
export type TodoUpdate = Omit<Todo, 'id' | 'createdAt' | 'done'>;