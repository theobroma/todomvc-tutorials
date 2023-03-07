import { useAppDispatch, useAppSelector } from '@/@store/configureStore';
import { filterSelector } from '@/@store/filter/selectors';
import { setFilterAC } from '@/@store/filter/slice';
import { FilterEnum } from '@/@types';
import clsx from 'clsx';
import { PropsWithChildren } from 'react';

interface Props {
  type: FilterEnum;
}

const FilterLink = ({ type, children }: PropsWithChildren<Props>) => {
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
