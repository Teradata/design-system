// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import NxWelcome from './nx-welcome';

import { IconButton } from '@bsahitya/react-components';

export function App() {
  return (
    <div>
      <NxWelcome title="web-design-system" />
      <IconButton icon="home" />
    </div>
  );
}

export default App;
