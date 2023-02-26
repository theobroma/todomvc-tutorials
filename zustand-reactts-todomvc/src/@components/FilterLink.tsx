import clsx from 'clsx';
import type { PropsWithChildren } from 'react';

import useTodosStore from '../@store/useTodosStore';
import type { FilterType } from '../@types';

interface Props {
  type: FilterType;
}

const FilterLink = ({ type, children }: PropsWithChildren<Props>) => {
  const store = useTodosStore((state) => state);
  const { filter } = store;

  console.log('filter :>> ', filter);

  return (
    <li>
      <a
        href="#/"
        // onClick={() => dispatch(setFilterAC(type))}
        onClick={() => store.setFilter(type)}
        className={clsx({ selected: filter === type })}
      >
        {children}
      </a>
    </li>
  );
};

export default FilterLink;
