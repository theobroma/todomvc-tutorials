import { fireEvent, render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { describe, expect, it, vi } from 'vitest';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  it('renders todo text', () => {
    render(<TodoItem id="1" title="Learn tests" completed={false} />);

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

  it('calls deleteTodo with id when delete button is clicked', async () => {
    const deleteTodo = vi.fn();
    const todoId = '3';

    render(
      <TodoItem
        id={todoId}
        title="Test delete"
        completed={false}
        deleteTodo={deleteTodo}
      />,
    );

    const button = screen.getByLabelText(/delete todo/i);
    await userEvent.click(button);

    expect(deleteTodo).toHaveBeenCalledWith(todoId);
  });

  it('enters edit mode on double click', async () => {
    const todoId = '4';
    const todoTitle = 'Test edit todo';

    const Wrapper = () => {
      const [editingId, setEditingId] = React.useState<string | null>(null);

      return (
        <TodoItem
          id={todoId}
          title={todoTitle}
          completed={false}
          isEditing={editingId === todoId}
          editTodo={setEditingId}
        />
      );
    };

    render(<Wrapper />);

    await userEvent.dblClick(screen.getByText(todoTitle));

    expect(screen.getByDisplayValue(todoTitle)).toBeInTheDocument();
  });
});
