import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  it('renders todo text', () => {
    render(
      <TodoItem id="1" title="Learn tests" completed={false} toggleTodo={() => {}} />,
    );

    expect(screen.getByText('Learn tests')).toBeInTheDocument();
  });

  it('calls toggle handler', () => {
    const toggleTodo = vi.fn();

    render(
      <TodoItem id="2" title="Test toggle" completed={false} toggleTodo={toggleTodo} />,
    );

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(toggleTodo).toHaveBeenCalled();
  });
});
