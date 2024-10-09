import React from 'react'
import './css/bridge.css'
import { useState } from 'react'
import Modal from '../components/modal/Modal.jsx'
import { DepositTabContent, WithdrawTabContent, ClaimTabContent, InnerWithdrawTabContent } from '../components/bridge-tab-content/BridgeTabContent.jsx'


export default function Bridge() {

    // state for main tabs
    const [tabOpen, setTapOpen] = useState('depositScroll');

    // state for inner tabs
    const [innerTabOpen, setInnerTabOpen] = useState('withdraw');

    //state for modal
    const [modalOpen, setModalOpen] = useState(false);

    const handleModalOpen = () => {
        setModalOpen(!modalOpen);
    }
    
    return (
        <div>
            <Modal open={modalOpen} setOpen={setModalOpen} />
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-ef23km e1de0imv0">
                    <div className="MuiStack-root css-19mh4ig e1de0imv0">
                        <p className="MuiTypography-root css-11d99qp e1de0imv0 text-[48px] tsp-bold ">
                            Bridge
                        </p>
                        <button className="MuiButtonBase-root css-ebuhoc-button e1de0imv0 focus:outline-none " tabIndex="0" type="button" onClick={handleModalOpen}>
                            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-slq9qy e1de0imv0" focusable="false"
                                aria-hidden="true">
                                <path
                                    d="M9.59208 15.875C6.99415 15.875 4.56109 14.6222 3.07738 12.5248C2.86704 12.206 2.94663 11.8256 3.23655 11.6411C3.33887 11.574 3.45825 11.5404 3.57763 11.5404C3.78797 11.5404 3.98693 11.6467 4.10063 11.82C5.34558 13.5874 7.39209 14.6389 9.56934 14.6445C12.6505 14.6445 15.3223 12.5807 16.0556 9.63876C16.9367 6.11515 14.7424 2.54119 11.1611 1.67427C10.6324 1.54563 10.0923 1.48411 9.55797 1.48411C6.47684 1.48411 3.80502 3.54235 3.06601 6.48988L2.99779 6.76953L4.35076 5.87464C4.48719 5.79075 4.60088 5.75719 4.72026 5.75719C4.93628 5.75719 5.13525 5.86346 5.24894 6.04803C5.3399 6.18786 5.36832 6.35005 5.32853 6.51225C5.28874 6.67445 5.1921 6.80868 5.04998 6.89258L2.61123 8.50897C2.5089 8.57608 2.38952 8.60964 2.26446 8.60964C2.22467 8.60964 2.17919 8.60964 2.1394 8.59846C1.98022 8.5593 1.83811 8.46982 1.74147 8.33558L0.0872089 5.86905C0.00193797 5.72923 -0.0208009 5.56143 0.0189922 5.40483C0.0587853 5.24822 0.16111 5.11399 0.303229 5.0301C0.399869 4.97417 0.513564 4.94061 0.621573 4.94061C0.843278 4.94061 1.04793 5.05806 1.15594 5.24263L1.83811 6.26056L1.90064 6.01447C2.79882 2.56357 5.95385 0.141779 9.56934 0.125C13.9579 0.147372 17.5166 3.68217 17.4995 8C17.528 10.5896 16.2546 13.0114 14.0944 14.4879C12.7642 15.3996 11.2065 15.875 9.59208 15.875Z"
                                    fill="currentColor"></path>
                                <path
                                    d="M11.6137 10.625C11.4473 10.625 11.2866 10.5643 11.1661 10.4483L8.93364 8.27879C8.81887 8.16286 8.75 8.00828 8.75 7.84819V4.23226C8.75 3.8955 9.0312 3.625 9.38128 3.625C9.73135 3.625 10.0126 3.8955 10.0126 4.23226V7.60528L12.0671 9.59819C12.3138 9.83557 12.3081 10.222 12.0671 10.4539C11.9466 10.5643 11.7916 10.625 11.6252 10.625H11.6137Z"
                                    fill="currentColor"></path>
                            </svg>Transaction History
                        </button>
                    </div>






                    {/* tab section */}
                    <div className="MuiBox-root css-1tiyx7f-sendWrapper e1de0imv0">
                        <div className="MuiTabs-root css-xxrxnx-tabList e1de0imv0">
                            <div className="MuiTabs-scroller MuiTabs-fixed css-1w5l05g-tabList e1de0imv0"
                                style={{ overflow: "hidden", marginBottom: 0 }}>
                                <div className="MuiTabs-flexContainer css-jfevyi-tabList e1de0imv0" role="tablist">

                                    {/* buttons */}
                                    {/* deposit to scroll button */}
                                    <button
                                        onClick={() => setTapOpen('depositScroll')}
                                        className={`${tabOpen === 'depositScroll' ? 'bg-primary-fair ' : ''} css-5ui0rn-tab outline-none tsp-bold`}
                                        tabIndex="0" type="button" role="tab" aria-selected="true" aria-controls="mui-p-49779-P-Deposit"
                                        id="mui-p-49779-T-Deposit">
                                        Deposit to Scroll
                                    </button>

                                    {/* withdraw to ethereum button */}
                                    <button
                                        onClick={() => setTapOpen('withdrawEthereum')}
                                        className={`${tabOpen === 'withdrawEthereum' ? 'bg-primary-fair ' : ''} css-5ui0rn-tab !outline-none border-none tsp-bold font-extrabold`}
                                        tabIndex="-1" type="button" role="tab" aria-selected="false"
                                        aria-controls="mui-p-49779-P-Withdraw" id="mui-p-49779-T-Withdraw">
                                        Withdraw to Ethereum
                                    </button>
                                    {/*buttons*/}

                                </div>
                                <span className="MuiTabs-indicator css-1k456l7-indicator e1de0imv0"
                                    style={{ left: "0px", width: "320px" }}>
                                </span>
                            </div>
                        </div>

                        <div className='px-10 bg-primary-fair'>
                            {/* content for deposit to scroll tab*/}
                            <div className={`${tabOpen === 'depositScroll' ? 'block' : 'hidden'}`}>
                                <DepositTabContent />
                            </div>
                            {/* content for deposit to scroll tab*/}


                            {/* content for withdraw to ethereum tab*/}
                            <div className={`${tabOpen === 'withdrawEthereum' ? 'block' : 'hidden'}`}>

                                {/* inner tabs buttons*/}
                                <div className="inner-tabs flex justify-between border-b border-black">
                                    <button
                                        onClick={() => setInnerTabOpen('withdraw')}
                                        className={`${innerTabOpen === 'withdraw' ? ' border-b-4 border-red ' : 'border-b-4 border-transparent'}border-t-0 border-l-0 border-r-0  transition-none !outline-none bg-transparent text-black shadow-none rounded-none text-2xl tsp-bold flex-1 overflow-visible`}
                                    >Step 1: Withdraw</button>
                                    <button
                                        onClick={() => setInnerTabOpen('claim')}
                                        className={`${innerTabOpen === 'claim' ? ' border-b-4  border-red ' : 'border-b-4 border-transparent'} border-t-0 border-l-0 border-r-0 transition-none !outline-none bg-transparent text-black shadow-none rounded-none text-2xl tsp-bold flex-1 overflow-visible`}
                                    >Step 2: Claim</button>
                                </div>
                                {/* inner tabs buttons*/}


                                {/* content for inner withdraw tab */}
                                <div className={`${innerTabOpen === 'withdraw' ? 'block' : 'hidden'}`}>
                                    <InnerWithdrawTabContent />
                                </div>
                                {/* content for inner withdraw tab */}


                                {/* content for inner claim tab */}
                                <div className={`${innerTabOpen === 'claim' ? 'block' : 'hidden'}`}>
                                    <ClaimTabContent />
                                </div>
                                {/* content for inner claim tab */}

                            </div>
                            {/* content for withdraw to ethereum */}
                        </div>

                    </div>
                    {/* tab section */}







                    <div className="MuiStack-root css-1e0dkkg e1de0imv0">
                        <a className="css-11x14hs e1de0imv0" href="/bridge/faq">FAQs<svg width="23" height="23" viewBox="0 0 23 23"
                            fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jbxkcd e1de0imv0" focusable="false"
                            aria-hidden="true">
                            <g clipPath="url(#clip0_1438_4428)">
                                <path
                                    d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                    fill="currentColor"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_1438_4428">
                                    <rect width="23" height="23" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg></a><a className="css-11x14hs e1de0imv0" href="https://sepolia.scroll.io/bridge"
                            target="_blank">Testnet Bridge<svg width="23" height="23" viewBox="0 0 23 23" fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jbxkcd e1de0imv0" focusable="false"
                                aria-hidden="true">
                                <g clipPath="url(#clip0_1438_4428)">
                                    <path
                                        d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                        fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1438_4428">
                                        <rect width="23" height="23" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg></a><a className="css-11x14hs e1de0imv0" href="/terms-of-service">Terms of Service<svg width="23"
                                height="23" viewBox="0 0 23 23" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jbxkcd e1de0imv0" focusable="false"
                                aria-hidden="true">
                                <g clipPath="url(#clip0_1438_4428)">
                                    <path
                                        d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                        fill="currentColor"></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_1438_4428">
                                        <rect width="23" height="23" fill="white"></rect>
                                    </clipPath>
                                </defs>
                            </svg></a>
                    </div>
                </div>
            </div>

        </div >
    )
}
