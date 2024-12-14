import { useContext } from "react";
import { AppContext } from "../Providers/AppProvider";

const useScrollApp = () => {
  return useContext(AppContext);
};

export default useScrollApp;
