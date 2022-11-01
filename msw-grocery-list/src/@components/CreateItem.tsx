import React from 'react';

const endpoint = 'http://localhost:3001/grocery-list';

const createItem = async (body: any) => {
  try {
    const response = await fetch(`${endpoint}`, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
      body: JSON.stringify(body),
    });
    return response.json();
  } catch (e) {
    console.log(e);
  }
  return null;
};

export const CreateItem = ({ onCreate, disabled }: any) => {
  const [description, setDescription] = React.useState('');
  return (
    <form
      onSubmit={async (evt) => {
        evt.preventDefault();
        if (description !== '') {
          setDescription('');
          const newItem = await createItem(description);
          onCreate(newItem);
        }
      }}
    >
      <input
        disabled={disabled}
        className="block w-full  appearance-none rounded-lg border border-blue-500 bg-white py-2 px-4 leading-normal focus:outline-none"
        placeholder="What do you need to buy?"
        value={description}
        type="text"
        onChange={(evt) => {
          setDescription(evt.target.value);
        }}
      />
    </form>
  );
};
