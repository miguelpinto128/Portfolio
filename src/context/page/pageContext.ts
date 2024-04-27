import { createContext } from 'react';

export interface PageContextProps {
  page: string;
  setPage: (page: string) => void;
}

export const PageContext = createContext<PageContextProps>({
  page: 'Home',
  setPage: () => null
});

export default PageContext;
