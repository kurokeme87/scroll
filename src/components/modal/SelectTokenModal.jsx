import useScrollApp from "../../hooks/useScrollApp.jsx";
import { tokens } from "../../data/tokens.js";
import { Link } from "react-router-dom";
import { shortenAddressSmall } from "../utils.js";
import { useEffect, useRef, useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useAccount } from "wagmi";

export default function SelectTokenModal() {
  const modalRef = useRef(null);
  const { chainId } = useAccount();
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredTokens, setFilteredTokens] = useState([]);
  const { isSelectTokenModal, setIsSelectTokenModal, setSelectedToken } =
    useScrollApp();

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsSelectTokenModal(false);
    }
  };

  const handleModalClose = () => {
    setIsSelectTokenModal(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);

    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const filterD = tokens.filter((item) => item.chainId === chainId);
    if (searchTerm.length > 0) {
      const data = filterD.filter((item) =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );

      setFilteredTokens(data);
    } else {
      setFilteredTokens(filterD);
    }
  }, [searchTerm, chainId]);

  return (
    <div
      key={isSelectTokenModal}
      className={`bg-[#00000042] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 ease transition-all duration-200 ${
        isSelectTokenModal ? "block" : "hidden opacity-0"
      }`}
    >
      <div
        ref={modalRef}
        className="bg-white w-[80vw] md:w-[60vw] lg:w-[42vw] xl:w-[28vw] h-[80vh] min-h-[300px] rounded-3xl overflow-hidden"
      >
        <div className="flex items-center justify-between pl-10 pt-10 pb-10">
          <p className="text-[22px] text-black font-bold">Select a token</p>
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

        <div className="px-4 w-full sm:px-10">
          <div className="w-full relative border border-black rounded-xl h-16">
            <input
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-transparent py-2 pl-14 border-none outline-none h-full text-[16px] text-black"
              placeholder="Search by token name, symbol or address"
            />
            <BsSearch
              size={17}
              color="black"
              className="absolute left-3 top-4"
            />
          </div>
        </div>

        <div className="w-full h-full overflow-y-auto pb-28 custom-scroll">
          <p className="mb-7 text-2xl text-black font-bold px-10 mt-16">
            Listed by Scroll
          </p>
          <button
            onClick={() => {
              setSelectedToken({
                name: "Ether",
                icon: "https://scroll.io/static/media/network-mainnet.4f94c02e1403c0502f29e010159e6214.svg",
                symbol: "ETH",
                decimals: 18,
                address: "",
              });
              setIsSelectTokenModal(false);
            }}
            className="flex justify-start items-center gap-3 w-full bg-transparent py-3 pr-4 pl-10 hover:bg-[#FFFBF9]"
          >
            <img
              src="https://scroll.io/static/media/network-mainnet.4f94c02e1403c0502f29e010159e6214.svg"
              alt="Ether"
              width={40}
              height={40}
              className="rounded-full"
            />
            <div className="text-[17px] text-left w-full">
              <span className="font-extrabold text-black">ETH</span>
              <span className="text-[#756a67] pl-2">Ether</span>
            </div>
          </button>
          {filteredTokens?.map((item, index) => (
            <button
              onClick={() => {
                setSelectedToken({
                  name: item.name,
                  icon: item.logoURI,
                  symbol: item.symbol,
                  decimals: 18,
                  address: item.address,
                });
                setIsSelectTokenModal(false);
              }}
              key={index}
              className="flex justify-start items-center gap-3 w-full bg-transparent py-3 pr-4 pl-10 hover:bg-[#FFFBF9]"
            >
              <img
                src={item.logoURI}
                alt={item.name}
                width={40}
                height={40}
                className="rounded-full"
              />
              <div className="text-[17px] w-full text-left">
                <p>
                  <span className="font-extrabold text-black">
                    {item.symbol}
                  </span>

                  <span className="text-[#756a67] pl-2">{item.name}</span>
                </p>

                {item?.address ? (
                  <Link
                    target="_blank"
                    to={`https://etherscan.io/token/${item.address}`}
                    className="text-[#756a67] text-[15px] underline w-full text-left flex justify-start items-start"
                  >
                    {shortenAddressSmall(item?.address)}
                  </Link>
                ) : null}
              </div>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
