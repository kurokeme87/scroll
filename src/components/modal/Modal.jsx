import ConnectWalletBtn from "../button/ConnectWalletBtn.jsx";
import ScrollButton from "../../components/global/ScrollButton.jsx";
import box_empty from "../../../src/assets/box-empty.svg";
import { useAccount } from "wagmi";
import { GoUnlink } from "react-icons/go";

export default function Modal({ open, setOpen }) {
  const handleModalClose = () => {
    setOpen(!open);
  };

  const { isConnected } = useAccount();
  return (
    <div
      className={`bg-[#00000042] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 ${
        open ? "block" : "hidden"
      }`}
    >
      <div className="bg-white w-[50vw] h-[50vh] min-h-[300px] min-w-[300px] p-10 rounded-3xl">
        <div className="flex items-center justify-between">
          <p className="text-4xl text-black font-bold">Transaction History</p>
          <button
            className="bg-transparent border-none outline-none focus:outline-none focus:border-none"
            onClick={handleModalClose}
          >
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-usqxli e1de0imv0"
              focusable="false"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M17.5307 1.56775C17.8853 1.20911 17.8853 0.627628 17.5307 0.268984C17.1761 -0.0896612 16.6012 -0.0896612 16.2466 0.268984L8.89835 7.70119L1.55012 0.268984C1.19553 -0.0896611 0.62062 -0.0896611 0.266027 0.268984C-0.0885651 0.627628 -0.0885651 1.20911 0.266027 1.56775L7.61425 8.99996L0.265944 16.4323C-0.0886481 16.7909 -0.0886481 17.3724 0.265944 17.731C0.620536 18.0897 1.19544 18.0897 1.55004 17.731L17.5307 1.56775ZM11.8709 10.7078C11.5164 10.3491 10.9414 10.3491 10.5869 10.7078C10.2323 11.0664 10.2323 11.6479 10.5869 12.0065L16.2467 17.731C16.6012 18.0897 17.1762 18.0897 17.5307 17.731C17.8853 17.3724 17.8853 16.7909 17.5307 16.4322L11.8709 10.7078Z"
                fill="#101010"
              />
            </svg>
          </button>
        </div>
        <div className="h-[calc(100%-50px)] w-full flex justify-center items-center">
          <div
            className="MuiTabPanel-root css-10c4shx-tabPanel e1de0imv0"
            role="tabpanel"
            aria-labelledby="mui-p-91539-T-2"
            id="mui-p-91539-P-2"
          >
            <div className="MuiBox-root css-qocfh-tableBox e1de0imv0">
              <div className="MuiStack-root css-l4h50r e1de0imv0">
                {isConnected ? (
                  <img
                    src={box_empty}
                    alt="box empty"
                    width={28}
                    height={28}
                    className="mx-auto"
                  />
                ) : (
                  <GoUnlink />
                )}
                <p className="text-[#5B5B5B] text-2xl font-bold text-center !font-sans my-3">
                  {isConnected
                    ? "No transaction history"
                    : "Wallet not connected"}
                </p>

                <p className="text-2xl md:text-3xl text-[#5b5b4b] text-center roboto font-roboto">
                  {isConnected
                    ? "When you bridge assets, your transactions will appear here"
                    : "Connect wallet to see your claimable asset"}
                </p>
                <ScrollButton
                  connect={
                    <div className="mt-6 grid place-items-center">
                      <ConnectWalletBtn>Connect Wallet</ConnectWalletBtn>
                    </div>
                  }
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
