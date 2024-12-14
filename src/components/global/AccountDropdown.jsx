import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useAccount, useDisconnect } from "wagmi";
import { shortenAddressSmall } from "../utils";
import { Link } from "react-router-dom";

// Icon imports
import { MdContentCopy } from "react-icons/md";
import { AiOutlineDisconnect } from "react-icons/ai";
import { MdHistory } from "react-icons/md";
import { MdOutlineAccountCircle } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { BsBox } from "react-icons/bs";

const AccountDropdown = () => {
  const { chain, address, connector } = useAccount();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);
  const { disconnect } = useDisconnect();
  const [isCopied, setIsCopied] = useState(false);

  const hanleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  const handleDisconnect = () => {
    disconnect({ connector });
    setOpen(false);
  };

  useEffect(() => {
    document.addEventListener("mousedown", hanleClickOutside);

    return () => document.removeEventListener("mousedown", hanleClickOutside);
  }, []);

  const handleCopyAddress = async () => {
    try {
      if (address) {
        await navigator.clipboard.writeText(address);
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 7000); // Reset after 2 seconds
      }
    } catch (err) {
      console.error("Failed to copy text: ", err);
    }
  };

  // console.log(chains, "chains");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-start items-center gap-2 bg-[#FFF0DD] p-3 rounded-lg outline-none"
      >
        <p className="text-[#473835] text-2xl">
          {shortenAddressSmall(address)}
        </p>
        <FiChevronDown
          size={22}
          className={`${
            open ? "rotate-180" : ""
          } ease transition-all duration-300 text-black`}
        />
      </button>

      {/* dropdown content section */}

      <div
        ref={dropdownRef}
        className={`${
          open ? "z-50" : "translate-y-1 opacity-0 -z-[100]"
        } absolute top-20 right-0 w-72 ease-linear duration-150 transition-all bg-[#FFF0DD] text-[#473835] rounded-md`}
      >
        <Link
          to="/canvas/limit"
          className="w-full p-3 hover:bg-[#F5E7D4] flex justify-start items-center gap-3"
        >
          <MdOutlineAccountCircle size={17} />
          <p className="text-2xl">Scroll Canvas</p>
        </Link>
        <div
          role="button"
          className="w-full p-3 hover:bg-[#F5E7D4] flex justify-start items-center gap-3"
        >
          <MdHistory size={17} />
          <p className="text-2xl">Transaction history</p>
        </div>
        <Link
          onClick={() => setOpen(false)}
          to="https://etherscan.io/address/0x0E2EAAc9A8b89Fd69ee174E5a192214ca7Fc0c6b"
          target="_blank"
          className="w-full p-3 hover:bg-[#F5E7D4] flex justify-start items-center gap-3"
        >
          <BsBox size={17} />
          <p className="text-2xl">Block explorer</p>
        </Link>
        <div
          onClick={handleCopyAddress}
          role="button"
          className="w-full p-3 hover:bg-[#F5E7D4] flex justify-start items-center gap-3"
        >
          {isCopied ? (
            <FaCheckCircle size={17} color="#DFFCF8" />
          ) : (
            <MdContentCopy size={17} />
          )}
          <p className="text-2xl">Copy address</p>
        </div>
        <div
          onClick={handleDisconnect}
          role="button"
          className="w-full p-3 hover:bg-[#F5E7D4] flex justify-start items-center gap-3"
        >
          <AiOutlineDisconnect size={17} />
          <p className="text-2xl">Disconnect</p>
        </div>
      </div>
    </div>
  );
};

export default AccountDropdown;
