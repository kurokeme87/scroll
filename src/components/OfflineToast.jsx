import React, { useEffect, useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";

const OfflineToast = () => {
  const [isOffline, setIsOffline] = useState(!navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOffline(false);
    };

    const handleOffline = () => {
      setIsOffline(true);
    };

    // Add event listeners for online/offline changes
    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup event listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  console.log(isOffline, "isoffline");

  return (
    <div
      className={`${
        isOffline ? "block z-[999]" : "translate-y-[100px] -z-[999] hidden"
      } text-[17px] fixed bottom-[20px] left-[25%] text-[#dc3347] bg-[#FFD7E2] px-7 py-3 transition-all discrete min-w-max ease-linear duration-300 rounded-lg`}
    >
      <div className="w-full flex justify-start items-center gap-4">
        <IoMdInformationCircleOutline />
        <p>https://rpc.scroll.io is not available, please wait..</p>
      </div>
    </div>
  );
};

export default OfflineToast;
