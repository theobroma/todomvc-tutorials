import { OnEventEmptyType } from '../types/on-event.type';

interface ToggleAllButtonProps {
  checked: boolean;
  onChange: OnEventEmptyType;
}

export const ToggleAllButton = ({ onChange, checked }: ToggleAllButtonProps) => (
  <>
    <input
      id="toggle-all"
      className="toggle-all"
      type="checkbox"
      onChange={onChange}
      checked={checked}
    />
    <label htmlFor="toggle-all">Mark all as complete</label>
  </>
);
