export interface TodoInterface {
  id: string;
  title: string;
  completed: boolean;
}

export interface TodosInterface {
  todos: TodoInterface[];
  onAddTodo: any;
}
