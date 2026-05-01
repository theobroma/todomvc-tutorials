import { FilterLink } from '@/components/footer/filter-link/filter-link';
import { FooterButtonClear } from '@/components/footer/footer-button-clear/footer-button-clear';
import { FilterEnum } from '@/enums/filter.enum';
import { OnEventEmptyType, OnEventType } from '@/types/on-event.type';
import { pluralize } from '@/utils/pluralize.util';

type FooterProps = {
  filter: FilterEnum;
  activeTodoCount: number;
  completedTodoCount: number;
  changeFilter: OnEventType<FilterEnum>;
  removeCompleted: OnEventEmptyType;
};

export const FooterView = ({
  filter,
  activeTodoCount,
  completedTodoCount,
  changeFilter,
  removeCompleted,
}: FooterProps) => {
  const commonProps = {
    currentFilter: filter,
    onClick: changeFilter,
  };

  return (
    <footer className="footer">
      <span className="todo-count" data-testid="todo-count">
        <strong>{activeTodoCount}</strong>&nbsp;{pluralize(activeTodoCount, 'item')}
        &nbsp;left
      </span>
      <ul className="filters">
        <FilterLink filter={FilterEnum.ShowAll} {...commonProps}>
          All
        </FilterLink>
        <FilterLink filter={FilterEnum.ShowActive} {...commonProps}>
          Active
        </FilterLink>
        <FilterLink filter={FilterEnum.ShowCompleted} {...commonProps}>
          Completed
        </FilterLink>
      </ul>
      {completedTodoCount > 0 && <FooterButtonClear onClick={removeCompleted} />}
    </footer>
  );
};
