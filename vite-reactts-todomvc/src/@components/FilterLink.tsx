import { useAppDispatch, useAppSelector } from '@store/configureStore';
import { filterSelector } from '@store/filter/selectors';
import { setFilterAC } from '@store/filter/slice';
import { FilterType } from '@types';
import clsx from 'clsx';
import React from 'react';

interface Props {
  type: FilterType;
  children: React.ReactNode;
}

const FilterLink = ({ type, children }: Props) => {
  const dispatch = useAppDispatch();
  const filter = useAppSelector(filterSelector);
  return (
    <li>
      <a
        href="#/"
        onClick={() => dispatch(setFilterAC(type))}
        className={clsx({ selected: filter === type })}
      >
        {children}
      </a>
    </li>
  );
};

export default FilterLink;
