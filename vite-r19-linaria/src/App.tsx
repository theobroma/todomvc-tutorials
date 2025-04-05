import { css } from '@linaria/core';
import { hiDPI, modularScale } from 'polished';

// Write your styles in `css` tag
const header = css`
  text-transform: uppercase;
  font-size: ${modularScale(2)};
  color: green;

  ${hiDPI(1.5)} {
    color: red;
    font-size: ${modularScale(2.5)};
  }
`;

function App() {
  return <h1 className={header}>Hello world</h1>;
}

export default App;
