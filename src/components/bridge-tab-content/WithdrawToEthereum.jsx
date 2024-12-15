import { ClaimTabContent, InnerWithdrawTabContent } from "./BridgeTabContent";

const WithdrawToEthereum = ({ setInnerTabOpen, innerTabOpen }) => {
  return (
    <div className="w-full">
      {/* inner tabs buttons*/}
      <div className="inner-tabs flex justify-between border-b border-black">
        <button
          onClick={() => setInnerTabOpen("withdraw")}
          className={`${
            innerTabOpen === "withdraw"
              ? " border-b-4 border-red "
              : "border-b-4 border-transparent"
          }border-t-0 border-l-0 border-r-0  transition-none !outline-none bg-transparent text-black shadow-none rounded-none text-2xl tsp-bold flex-1 overflow-visible`}
        >
          Step 1: Withdraw
        </button>
        <button
          onClick={() => setInnerTabOpen("claim")}
          className={`${
            innerTabOpen === "claim"
              ? " border-b-4  border-red "
              : "border-b-4 border-transparent"
          } border-t-0 border-l-0 border-r-0 transition-none !outline-none bg-transparent text-black shadow-none rounded-none text-2xl tsp-bold flex-1 overflow-visible`}
        >
          Step 2: Claim
        </button>
      </div>
      {/* inner tabs buttons*/}

      {/* content for inner withdraw tab */}
      <div className={`${innerTabOpen === "withdraw" ? "block" : "hidden"}`}>
        <InnerWithdrawTabContent open={innerTabOpen === "withdraw"} />
      </div>
      {/* content for inner withdraw tab */}

      {/* content for inner claim tab */}
      <div className={`${innerTabOpen === "claim" ? "block" : "hidden"}`}>
        <ClaimTabContent />
      </div>
      {/* content for inner claim tab */}
    </div>
  );
};

export default WithdrawToEthereum;
