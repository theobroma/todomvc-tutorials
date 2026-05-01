import { FilterEnum } from '@/enums/filter.enum';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { FooterView } from './footer-view';

describe('FooterView', () => {
  it('renders active count', () => {
    render(
      <FooterView
        activeTodoCount={3}
        completedTodoCount={1}
        filter={FilterEnum.ShowAll}
        changeFilter={() => {}}
        removeCompleted={() => {}}
      />,
    );

    expect(screen.getByTestId('todo-count')).toHaveTextContent(/3 items left/i);
  });
});
