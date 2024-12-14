import axios from "axios";
import { useEffect, useState } from "react";
import { formatCurrency } from "./utils";

const Summary = ({ amount }) => {
  const [tokenPrice, setTokenPrice] = useState(0);
  const ethGasFee = 0.00145;
  const scrollGasFee = 0.00001;
  const ethGasFee$ = 5.37;
  const scrollGasFee$ = 0.03;

  useEffect(() => {
    const fetchTokenPrice = async () => {
      await axios.get(`/api/quote`).then((res) => {
        // console.log(res, "respne");
        if (res.data) {
          setTokenPrice(res?.data?.data);
        }
      });
    };

    fetchTokenPrice();
  }, [amount]);

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
                        Number(amount * tokenPrice).toFixed(2)
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
                          +amount * tokenPrice + ethGasFee$ + scrollGasFee$
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

export const WithdrawSummary = ({ amount }) => {
  const [tokenPrice, setTokenPrice] = useState(0);
  const ethGasFee = 0.00145;
  const scrollGasFee = 0.00001;
  const ethGasFee$ = 5.37;
  const scrollGasFee$ = 0.03;

  useEffect(() => {
    const fetchTokenPrice = async () => {
      await axios.get("/api/quote").then((res) => {
        // console.log(res, "respne");
        if (res.data) {
          setTokenPrice(res?.data?.data);
        }
      });
    };

    fetchTokenPrice();
  }, [amount]);

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
                  {amount > 0
                    ? `$${formatCurrency(
                        Number(amount * tokenPrice).toFixed(2)
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
                          +amount * tokenPrice + ethGasFee$ + scrollGasFee$
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
