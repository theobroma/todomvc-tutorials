import { FilterEnum } from '@types';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  filter: FilterEnum;
  currentFilter: FilterEnum;
  onClick: any;
}

const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children,
}: PropsWithChildren<Props>) => (
  <li>
    <a
      href="#/"
      onClick={onClick(filter)}
      className={clsx({ selected: currentFilter === filter })}
    >
      {children}
    </a>
  </li>
);

export default FilterLink;
