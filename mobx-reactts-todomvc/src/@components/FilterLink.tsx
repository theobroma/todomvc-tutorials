import React, { useContext } from 'react';
import clsx from 'clsx';

import type { FilterType } from '../@types';
import FilterStore from '../stores/FilterStore';

interface Props {
  type: FilterType;
  children: React.ReactNode;
}

const FilterLink = ({ type, children }: Props) => {
  const todoStore = useContext(FilterStore);
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

export default FilterLink;
