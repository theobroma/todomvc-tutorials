import clsx from 'clsx';
import { PropsWithChildren } from 'react';
import { FilterEnum } from '../../../enums/filter.enum';

interface FilterLinkProps {
  filter: FilterEnum;
  currentFilter: FilterEnum;
  onClick: any;
}

export const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children,
}: PropsWithChildren<FilterLinkProps>) => (
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
