interface Props {
  onChange: any;
  checked: any;
}

export const ToggleAll = ({ onChange, checked }: Props) => (
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
