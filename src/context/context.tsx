import { ReactNode, useState } from "react";
import PageContext from "./page/pageContext";

interface ContextProps {
  children: ReactNode;
}

const Context = ({ children }: ContextProps) => {
  const [page, setPage] = useState<string>("Home");

  return (
    <PageContext.Provider value={{ page, setPage }}>
      {children}
    </PageContext.Provider>
  );
};

export default Context;
