import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { TodoItem } from './todo-item';

describe('TodoItem', () => {
  it('renders todo text', () => {
    render(<TodoItem id="1" title="Learn tests" completed={false} />);

    expect(screen.getByText('Learn tests')).toBeInTheDocument();
  });

  it('toggles checkbox', () => {
    render(<TodoItem id="2" title="Test toggle" completed={false} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(checkbox).toBeChecked();
  });
});
