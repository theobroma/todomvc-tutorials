import cx from 'classnames';

const endpoint = 'http://localhost:3001/grocery-list';

const updateItem = async (id: any, item: any) => {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(item),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
  return null;
};

const deleteItem = async (id: any) => {
  try {
    const response = await fetch(`${endpoint}/${id}`, {
      method: 'DELETE',
    });
    return response;
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const Item = ({ item, onDelete, onUpdate }: any) => {
  return (
    <li className="flex items-center pt-4">
      <p
        className={cx('text-black-600 flex-1 text-lg', {
          'line-through': item.completed,
        })}
      >
        {item.description}
      </p>
      <button
        type="button"
        onClick={async () => {
          const newItem = await updateItem(item.id, {
            ...item,
            completed: !item.completed,
          });
          onUpdate(newItem);
        }}
        className={cx(
          'rounded bg-transparent py-2 px-4 font-semibold text-blue-500 hover:text-blue-700 focus:outline-none',
        )}
      >
        {item.completed ? 'Undo' : 'Got it!'}
      </button>
      {!!item.completed && (
        <button
          type="button"
          className={cx(
            'ml-4 rounded bg-transparent py-2 px-4 font-semibold text-red-500 hover:text-red-700 focus:outline-none',
          )}
          onClick={async () => {
            await deleteItem(item.id);
            onDelete();
          }}
        >
          Delete
        </button>
      )}
    </li>
  );
};
