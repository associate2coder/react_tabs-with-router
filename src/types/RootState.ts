import { Page } from './Page';
import { Tab } from './Tab';

export interface RootState {
  tabs: Tab[];
  pages: Page[];
  errorMessage: string;
}
