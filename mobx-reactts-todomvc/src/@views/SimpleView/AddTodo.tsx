import { useContext, useState } from 'react';
import { observer } from 'mobx-react';

import TodoStore from '../../stores/TodoStore';

const AddTodo = () => {
  const [title, setTitle] = useState('');
  const todoStore = useContext(TodoStore);
  const { addTodo, info } = todoStore;

  return (
    <>
      <div className="alert alert-primary">
        <div className="d-inline col-4">
          Total items: &nbsp;
          <span className="badge badge-info">{info.total}</span>
        </div>
        <div className="d-inline col-4">
          Finished items: &nbsp;
          <span className="badge badge-info">{info.completed}</span>
        </div>
        <div className="d-inline col-4">
          Unfinished items: &nbsp;
          <span className="badge badge-info">{info.notCompleted}</span>
        </div>
      </div>
      <div className="form-group">
        <input
          className="form-control"
          type="text"
          value={title}
          placeholder="Todo title..."
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <button
          type="button"
          className="btn btn-primary"
          onClick={(_) => {
            addTodo(title);
            setTitle('');
          }}
        >
          Add Todo
        </button>
      </div>
    </>
  );
};

export default observer(AddTodo);
