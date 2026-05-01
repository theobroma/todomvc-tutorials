import { FilterEnum } from '@/enums/filter.enum';
import { OnEventType } from '@/types/on-event.type';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

import { filterToHref } from './filter-link.util';

interface FilterLinkProps {
  filter: FilterEnum;
  currentFilter: FilterEnum;
  onClick: OnEventType<FilterEnum>;
}

export const FilterLink = ({
  filter,
  currentFilter,
  onClick,
  children,
}: PropsWithChildren<FilterLinkProps>) => {
  const handleClick = () => onClick(filter);

  return (
    <li>
      <a
        href={filterToHref[filter]}
        onClick={handleClick}
        className={clsx({ selected: currentFilter === filter })}
      >
        {children}
      </a>
    </li>
  );
};
