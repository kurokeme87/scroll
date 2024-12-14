import { IoWarningOutline } from "react-icons/io5";

const WrongNetwork = ({ token, callback }) => {
  return (
    <div className="w-full flex justify-start items-center gap-1 flex-nowrap font-bold font-roboto roboto text-[#ff684b] text-[14px]">
      <IoWarningOutline />
      <p>Wrong network</p>
      <div role="button" className="underline" onClick={callback}>
        Switch to {token}
      </div>
    </div>
  );
};

export default WrongNetwork;
