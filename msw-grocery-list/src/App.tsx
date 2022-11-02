import { nanoid } from 'nanoid';
import useSWR from 'swr';

import { CreateItem } from './@components/CreateItem';
import { Item } from './@components/Item';

const itemsEndpoint = 'http://localhost:3001/grocery-list';

const getItem = async () => {
  const response = await fetch(`${itemsEndpoint}/`);
  return response.json();
};

const ItemApp = () => {
  const key = `${itemsEndpoint}`;

  const { data: items, mutate } = useSWR(key, () => getItem());
  console.log('items', items);

  const loading = !items;

  return (
    <div className="mx-auto max-w-lg pt-4">
      <h1 className="pb-4 text-4xl font-semibold">Grocery List</h1>
      <CreateItem
        disabled={loading}
        // mutate={mutate}
        onCreate={(newItem: any) => {
          mutate([...items, newItem]);
        }}
      />
      {!!items && items.length > 0 && (
        <ul>
          {items.map((item: any) => {
            return (
              <Item
                item={item}
                key={nanoid()}
                onUpdate={(newItem: any) => {
                  mutate(
                    items.map((listItem: any) => {
                      if (item.id !== listItem.id) {
                        return item;
                      }
                      return newItem;
                    }),
                  );
                }}
                onDelete={() => {
                  mutate(
                    items.filter((listItem: any) => listItem.id !== item.id),
                  );
                }}
              />
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default ItemApp;
