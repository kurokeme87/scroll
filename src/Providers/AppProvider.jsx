import { createContext, useState } from "react";

export const AppContext = createContext();

const AppProvider = ({ children }) => {
  const [isSelectTokenModal, setIsSelectTokenModal] = useState(false);
  const [selectedToken, setSelectedToken] = useState({
    name: "Ether",
    icon: "https://cryptologos.cc/logos/ethereum-eth-logo.png?v=025",
    symbol: "ETH",
    decimals: 18,
    destinationCurrency: "0x0000000000000000000000000000000000000000",
    address: "",
  });

  const values = {
    selectedToken,
    setSelectedToken,
    isSelectTokenModal,
    setIsSelectTokenModal,
  };
  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppProvider;
