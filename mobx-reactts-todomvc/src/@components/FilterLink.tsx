import { useContext } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react';
import type { PropsWithChildren } from 'react';

import type { FilterEnum } from '../@types';
import TodoStore from '../stores/TodoStore';

interface Props {
  type: FilterEnum;
}

const FilterLink = ({ type, children }: PropsWithChildren<Props>) => {
  const todoStore = useContext(TodoStore);
  const { filter, setFilter } = todoStore;

  return (
    <li>
      <a
        href="#/"
        onClick={() => {
          setFilter(type);
        }}
        className={clsx({ selected: filter === type })}
      >
        {children}
      </a>
    </li>
  );
};

export default observer(FilterLink);
