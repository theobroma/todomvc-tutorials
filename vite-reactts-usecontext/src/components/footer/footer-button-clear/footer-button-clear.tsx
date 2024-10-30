import { OnEventEmptyType } from '../../../types/on-event.type';

interface FooterButtonClearProps {
  onClick: OnEventEmptyType;
}

export const FooterButtonClear = ({ onClick }: FooterButtonClearProps) => (
  <button type="button" className="clear-completed" onClick={onClick}>
    Clear completed
  </button>
);
