import { createContext } from "react";

export const ProductsContext = createContext({});

export const ProductProvider = ({ children }) => {
  return;

  <ProductsContext.Provider value={{}}> {children} </ProductsContext.Provider>;
};
