import { addons } from '@storybook/manager-api';
import '@covalent/tokens/index.css';
import tdTheme from './theme.js';
import './theme.css';

addons.setConfig({
  theme: tdTheme,
});
