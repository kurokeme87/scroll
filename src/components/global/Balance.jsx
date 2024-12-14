import { config } from "../../Web3Config";
import { useEffect, useState } from "react";
import { useAccount, useBalance } from "wagmi";

export const Balance = ({ token, chainId, symbol }) => {
  const { address } = useAccount();
  const [balance, setBalance] = useState(null);

  const { data, refetch } = useBalance({
    address,
    token,
    chainId,
    config,
    enabled: !!(address && chainId),
  });

  useEffect(() => {
    if (data?.formatted > 0) {
      setBalance(data.formatted);
    } else {
      setBalance("0");
    }
  }, [data]);

  // Trigger refetch when the component re-renders due to network switch
  useEffect(() => {
    if (address && chainId && token) refetch();
  }, [chainId, address, token, refetch]);

  return (
    <p className="text-inherit">
      {balance > 0 ? Number(balance)?.toFixed(4) : 0} {symbol}
    </p>
  );
};

export const getBalance = ({ token, chainId }) => {
  const { address } = useAccount();

  const { data, refetch } = useBalance({
    address,
    token,
    chainId,
    config,
    enabled: !!(address && chainId),
  });

  // Trigger refetch when the component re-renders due to network switch
  useEffect(() => {
    if (address && chainId && token) refetch();
  }, [chainId, address, token, refetch]);

  return data?.formatted > 0 ? Number(data?.formatted)?.toFixed(4) : 0;
};

export default Balance;
