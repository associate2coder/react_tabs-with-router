import { Page } from './Page';
import { Tab } from './Tab';

export type Action =
  | { type: 'setTabs'; payload: Tab[] }
  | { type: 'setPages'; payload: Page[] };
