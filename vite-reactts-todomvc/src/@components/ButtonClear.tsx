interface Props {
  onClick: any;
}

export const ButtonClear = ({ onClick }: Props) => (
  <button type="button" className="clear-completed" onClick={onClick}>
    Clear completed
  </button>
);
