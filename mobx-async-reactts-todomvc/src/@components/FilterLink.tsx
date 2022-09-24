import React, { useContext } from 'react';
import clsx from 'clsx';
import { observer } from 'mobx-react';

import type { FilterType } from '../@types';
import TodoStore from '../stores/TodoStore';

interface Props {
  type: FilterType;
  children: React.ReactNode;
}

const FilterLink = ({ type, children }: Props) => {
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
