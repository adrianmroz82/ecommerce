import { useContext } from "react";
import { DataContext } from "../App";

export const useProducts = () => {
  const store = useContext(DataContext);
  if (!store) {
    throw new Error("useStore must be used within a StoreProvider.");
  }
  return store;
};
