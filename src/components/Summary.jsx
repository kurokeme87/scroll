import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrency } from "./utils";
import { useAccount } from "wagmi";
import { useQuery } from "@tanstack/react-query";
import useScrollApp from "../hooks/useScrollApp";

const Summary = ({ amount }) => {
  const { address, chain, isConnected, chainId } = useAccount();
  const { selectedToken } = useScrollApp();
  const ethGasFee = 0.00145;
  const scrollGasFee = 0.00001;
  const ethGasFee$ = 5.37;
  const scrollGasFee$ = 0.03;

  function formatAmount(amount, decimals) {
    if (typeof amount !== "string") amount = amount.toString();

    // If amount contains a decimal
    if (amount.includes(".")) {
      const parts = amount.split(".");
      const fractionalPart = parts[1].replace(/^0+/, ""); // Remove leading zeros from fractional part
      const result = parts[0] + fractionalPart; // Append a zero at the end
      return result.replace(/^0+/, ""); // Remove leading zeros from the entire result
    } else {
      // If amount is an integer, append zeros
      return amount + "0".repeat(decimals);
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["price", selectedToken?.address, chainId, amount],
    queryFn: async () =>
      axios
        .post("https://api.relay.link/price", {
          user: address || "0x000000000000000000000000000000000000dead",
          originChainId: 1,
          destinationChainId: 534352,
          originCurrency:
            selectedToken?.address ||
            "0x0000000000000000000000000000000000000000",
          destinationCurrency: "0x0000000000000000000000000000000000000000",
          tradeType: "EXACT_INPUT",
          amount: formatAmount(amount, 18),
          referrer: "relay.link/swap",
          useExternalLiquidity: false,
        })
        .then((res) => res.data),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!(address && isConnected && amount > 0),
    refetchInterval: 20000,
    retry: 1,
  });

  return (
    <div className="w-full roboto font-roboto">
      <h5 className="css-zle1zb-title e1de0imv0">Summary</h5>
      <table className="css-10z6gj0-table">
        <tbody>
          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                You're Deposting
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `${amount} ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0
                    ? `$${formatCurrency(
                        Number(data?.details?.currencyIn?.amountUsd).toFixed(2)
                      )}`
                    : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>
          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Ethereum gas fee
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `0.00145 ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0 ? `$${ethGasFee$}` : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>

          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Scroll gas fee
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `0.00001 ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0 ? `$${scrollGasFee$}` : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>

          <tr className="css-13p782h-hr">
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Total
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0
                      ? `${Number(+amount + ethGasFee + scrollGasFee).toFixed(
                          6
                        )} ETH`
                      : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0
                    ? `$${formatCurrency(
                        Number(
                          +amount * +data?.details?.currencyIn?.amountUsd +
                            ethGasFee$ +
                            scrollGasFee$
                        ).toFixed(2)
                      )}`
                    : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-12 grid place-items-center">
        {/* <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn> */}
      </div>
    </div>
  );
};

export const WithdrawSummary = ({ amount, open }) => {
  const { address, chain, isConnected } = useAccount();
  const ethGasFee = 0.00145;
  const scrollGasFee = 0.00001;
  const ethGasFee$ = 5.37;
  const scrollGasFee$ = 0.03;
  const { selectedToken } = useScrollApp();

  function formatAmount(amount, decimals) {
    if (typeof amount !== "string") amount = amount.toString();

    // If amount contains a decimal
    if (amount.includes(".")) {
      const parts = amount.split(".");
      const fractionalPart = parts[1].replace(/^0+/, ""); // Remove leading zeros from fractional part
      const result = parts[0] + fractionalPart;
      return result.replace(/^0+/, ""); // Remove leading zeros from the entire result
    } else {
      // If amount is an integer, append zeros
      return amount + "0".repeat(decimals);
    }
  }

  const { data, isLoading } = useQuery({
    queryKey: ["price", amount, selectedToken],
    queryFn: async () =>
      axios
        .post("https://api.relay.link/price", {
          user: address || "0x000000000000000000000000000000000000dead",
          originChainId: 534352,
          destinationChainId: 1,
          originCurrency: "0x0000000000000000000000000000000000000000",
          destinationCurrency:
            selectedToken?.address ||
            "0x0000000000000000000000000000000000000000",
          tradeType: "EXACT_INPUT",
          amount: formatAmount(amount, 18),
          referrer: "relay.link/swap",
          useExternalLiquidity: false,
        })
        .then((res) => res.data),
    refetchOnMount: true,
    refetchOnWindowFocus: false,
    enabled: !!(address && isConnected && amount > 0) && open,
    refetchInterval: 20000,
    retry: 1,
  });

  return (
    <div className="w-full roboto font-roboto">
      <h5 className="css-zle1zb-title e1de0imv0">Summary</h5>
      <table className="css-10z6gj0-table">
        <tbody>
          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                You're Withdrawing
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `${amount} ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0 && data?.details
                    ? `$${formatCurrency(
                        Number(data?.details?.currencyIn?.amountUsd).toFixed(2)
                      )}`
                    : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>

          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Scroll gas fee
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `0.00001 ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0 ? `$${scrollGasFee$}` : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>

          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Ethereum data fee
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0 ? `0.00145 ETH` : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0 ? `$${ethGasFee$}` : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>

          <tr className="css-13p782h-hr">
            <td></td>
            <td></td>
            <td></td>
          </tr>
          <tr className="css-9e5qxj-rowItem">
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">
                Total
              </h6>
            </td>
            <td>
              <div className="flex justify-start items-center gap-3">
                <h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0">
                  <p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">
                    {amount > 0
                      ? `${Number(+amount + ethGasFee + scrollGasFee).toFixed(
                          6
                        )} ETH`
                      : "-"}
                  </p>
                </h6>

                <p className="text-[#5b5b5b] text-2xl">
                  {amount > 0
                    ? `$${formatCurrency(
                        Number(
                          +amount * data?.details?.currencyIn?.amountUsd +
                            ethGasFee$ +
                            scrollGasFee$
                        ).toFixed(2)
                      )}`
                    : null}
                </p>
              </div>
            </td>
            <td>
              <h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6>
            </td>
          </tr>
        </tbody>
      </table>
      <div className="mt-12 grid place-items-center">
        {/* <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn> */}
      </div>
    </div>
  );
};

export default Summary;
