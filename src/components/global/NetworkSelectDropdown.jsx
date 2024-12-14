import { useEffect, useRef, useState } from "react";
import { FiChevronDown } from "react-icons/fi";
import { useAccount, useSwitchChain } from "wagmi";
import { chainImages } from "../../data/network-images";

const NetworkSelectDropdown = () => {
  const { chain, connector } = useAccount();
  const { switchChainAsync, chains } = useSwitchChain();
  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const hanleClickOutside = (e) => {
    if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
      setOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", hanleClickOutside);

    return () => document.removeEventListener("mousedown", hanleClickOutside);
  }, []);

  // console.log(chains, "chains");

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="flex justify-start items-center gap-2 bg-[#FFF0DD] p-3 rounded-lg outline-none"
      >
        {chain?.name ? (
          <img
            src={chainImages?.[chain.id]}
            alt={chain?.name}
            width={24}
            height={24}
            className="rounded-full"
          />
        ) : null}
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
          open ? "z-50" : "translate-y-1 opacity-0 -z-[999]"
        } absolute top-20 left-0 w-48 ease-linear duration-150 transition-all bg-[#FFF0DD] text-[#473835] rounded`}
      >
        {chains.map((item, index) => (
          <div
            onClick={() => {
              switchChainAsync({ chainId: item.id, connector }).then(() =>
                setOpen(false)
              );
            }}
            role="button"
            key={index}
            className="w-full p-2.5 hover:bg-[#F5E7D4] flex justify-start items-center gap-2"
          >
            <img
              src={chainImages?.[item.id]}
              alt={item?.name}
              width={28}
              height={28}
              className="rounded-full"
            />
            <p className="text-2xl">{item.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NetworkSelectDropdown;
