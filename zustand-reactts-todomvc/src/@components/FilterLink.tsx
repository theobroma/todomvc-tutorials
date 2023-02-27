import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import useTodosStore from '../@store/useTodosStore';
import type { FilterEnum } from '../@types';

interface Props {
  type: FilterEnum;
}

const FilterLink = ({ type, children }: PropsWithChildren<Props>) => {
  const store = useTodosStore((state) => state);
  const { filter } = store;

  return (
    <li>
      <a
        href="#/"
        onClick={() => store.setFilter(type)}
        className={clsx({ selected: filter === type })}
      >
        {children}
      </a>
    </li>
  );
};

export default FilterLink;
