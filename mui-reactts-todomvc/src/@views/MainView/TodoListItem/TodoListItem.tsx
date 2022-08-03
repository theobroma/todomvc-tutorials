import type { TodoType } from '../../../@types';

type Props = {
  divider: boolean;
  todo: TodoType;
};

const TodoListItem = ({ divider, todo }: Props) => {
  return <div>{todo.title}</div>;
};

export default TodoListItem;
