import React from 'react'
import ConnectWalletBtn from '../button/ConnectWalletBtn.jsx'
import { useState } from 'react'
import eth from '../../assets/ethereum.svg'
import arrowDown from '../../assets/arrow-down.svg'


function WithdrawTabContent() {
    // state for the plans

    return (
        <div></div>
    )
}


function DepositTabContent() {
    const [selectedPlan, setSelectedPlan] = useState("economy");
    return (
        <div className="MuiTabPanel-root css-12b9i56-tabPanel e1de0imv0" role="tabpanel"
            aria-labelledby="mui-p-49779-T-Deposit" id="mui-p-49779-P-Deposit">
            <div className="MuiStack-root css-dvxtzn e1de0imv0">
                <div className="MuiStack-root css-f5nr1t e1de0imv0">
                    <p className="MuiTypography-root MuiTypography-body1 css-e7h3go e1de0imv0 !font-sans">
                        From
                    </p>
                    <div
                        className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-14zhrg4-chip e1de0imv0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconMedium MuiChip-iconColorDefault css-1tgacyq-icon e1de0imv0"
                            focusable="false" aria-hidden="true">
                            <g>
                                <path
                                    d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                    fill="#627EEA"></path>
                                <path d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z" fill="white" fillOpacity="0.602">
                                </path>
                                <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white"></path>
                                <path d="M12.3735 16.4759V20.9962L18 13.2119L12.3735 16.4759Z" fill="white"
                                    fillOpacity="0.602"></path>
                                <path d="M12.3735 20.9962V16.4752L6.75 13.2119L12.3735 20.9962Z" fill="white"></path>
                                <path d="M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z" fill="white"
                                    fillOpacity="0.2"></path>
                                <path d="M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z" fill="white"
                                    fillOpacity="0.602"></path>
                            </g>
                        </svg><span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0 !font-sans font-bold">Ethereum
                        </span>
                    </div>
                    <p className="MuiTypography-root MuiTypography-body1 css-e7h3go e1de0imv0">
                        To
                    </p>

                    <div
                        className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-14zhrg4-chip e1de0imv0">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconMedium MuiChip-iconColorDefault css-1tgacyq-icon e1de0imv0"
                            focusable="false" aria-hidden="true">
                            <path
                                d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z"
                                fill="white"></path>
                            <path
                                d="M18.1656 14.7728V6.16602C18.1541 5.44585 17.594 4.86621 16.891 4.86621H8.12354C6.23173 4.89549 4.71143 6.48218 4.71143 8.42603C4.71143 9.08179 4.88289 9.64387 5.1458 10.1357C5.3687 10.5455 5.71734 10.932 6.06027 11.2189C6.15743 11.3008 6.11171 11.2657 6.40891 11.4531C6.82042 11.7107 7.28909 11.8395 7.28909 11.8395L7.28337 16.986C7.2948 17.2319 7.31766 17.4661 7.38053 17.6827C7.57486 18.4088 8.06639 18.965 8.73509 19.2343C9.01515 19.3456 9.3295 19.4217 9.66671 19.4275L16.6681 19.4509C18.0627 19.4509 19.1943 18.2917 19.1943 16.8572C19.2001 16.0082 18.7885 15.2471 18.1656 14.7728Z"
                                fill="#FFEEDA"></path>
                            <path
                                d="M18.3371 16.9206C18.3085 17.8398 17.5712 18.5775 16.6682 18.5775L11.8501 18.5599C12.233 18.1033 12.4674 17.5119 12.4674 16.8679C12.4674 15.8549 11.8787 15.1582 11.8787 15.1582H16.6739C17.5941 15.1582 18.3428 15.9252 18.3428 16.8679L18.3371 16.9206Z"
                                fill="#EBC28E"></path>
                            <path
                                d="M6.51799 10.4958C5.96359 9.95711 5.57494 9.26037 5.57494 8.43482V8.347C5.62067 6.93595 6.75232 5.80009 8.12974 5.7591H16.8972C17.1258 5.77081 17.3087 5.93475 17.3087 6.1748V13.7746C17.5088 13.8097 17.6059 13.839 17.8003 13.9092C17.9546 13.9678 18.166 14.0907 18.166 14.0907V6.1748C18.1546 5.45464 17.5945 4.875 16.8915 4.875H8.12403C6.23222 4.90427 4.71191 6.49097 4.71191 8.43482C4.71191 9.56483 5.21487 10.5309 6.0379 11.2101C6.09505 11.2569 6.14649 11.3155 6.29509 11.3155C6.55228 11.3155 6.73518 11.1047 6.72375 10.8763C6.71803 10.6831 6.63802 10.6129 6.51799 10.4958Z"
                                fill="#101010"></path>
                            <path
                                d="M16.6699 14.2733H9.79426C9.33131 14.2791 8.95981 14.6597 8.95981 15.134V16.1469C8.97124 16.6153 9.35989 17.0134 9.82284 17.0134H10.3315V16.1469H9.82284V15.1574C9.82284 15.1574 9.94858 15.1574 10.1029 15.1574C10.9716 15.1574 11.6118 15.9829 11.6118 16.867C11.6118 17.6516 10.9145 18.6528 9.74854 18.5708C8.71404 18.5006 8.15393 17.5579 8.15393 16.867V8.28365C8.15393 7.89722 7.8453 7.58105 7.46808 7.58105H6.78223V8.4593H7.2909V16.8729C7.26232 18.5825 8.47971 19.4432 9.74854 19.4432L16.6756 19.4666C18.0702 19.4666 19.2019 18.3074 19.2019 16.8729C19.2019 15.4384 18.0645 14.2733 16.6699 14.2733ZM18.3388 16.9256C18.3103 17.8448 17.573 18.5825 16.6699 18.5825L11.8518 18.565C12.2348 18.1083 12.4691 17.5169 12.4691 16.8729C12.4691 15.86 11.8804 15.1632 11.8804 15.1632H16.6756C17.5958 15.1632 18.3446 15.9302 18.3446 16.8729L18.3388 16.9256Z"
                                fill="#101010"></path>
                            <path
                                d="M14.8182 8.61848H9.63428V7.74023H14.8182C15.0525 7.74023 15.2468 7.93345 15.2468 8.17936C15.2468 8.41941 15.0582 8.61848 14.8182 8.61848Z"
                                fill="#101010"></path>
                            <path
                                d="M14.8182 12.7503H9.63428V11.8721H14.8182C15.0525 11.8721 15.2468 12.0653 15.2468 12.3112C15.2468 12.5512 15.0582 12.7503 14.8182 12.7503Z"
                                fill="#101010"></path>
                            <path
                                d="M15.7326 10.68H9.63428V9.80176H15.7269C15.9613 9.80176 16.1556 9.99497 16.1556 10.2409C16.1613 10.4809 15.967 10.68 15.7326 10.68Z"
                                fill="#101010"></path>
                        </svg><span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0 !font-sans font-bold">Scroll
                        </span>
                    </div>
                </div>
                <div className="MuiStack-root flex e1de0imv0 w-full gap-4">
                    <div
                        className="MuiInputBase-root MuiInputBase-colorPrimary Mui-disabled css-13ttspr-inputWrapper e1de0imv0">
                        <input aria-invalid="false" disabled="" placeholder="0.0000" type="text"
                            className="MuiInputBase-input Mui-disabled css-5v49rv-input e1de0imv0" />
                    </div>
                    <li className="bg-[#fff5e8] p-[14px]  flex justify-between items-center border border-gray-400  min-w-[100px] w-[30%] rounded-2xl" tabIndex="-1" role="menuitem" aria-disabled="true" value="[object Object]">
                        {/* eth logo */}
                        <div className='opacity-40'>
                            <img src={eth} alt="bro" />
                        </div>
                        {/* eth logo */}
                        <div className=" text-gray-500 text-3xl !font-[700]">
                            ETH
                        </div>

                        <div>
                            <img src={arrowDown} alt="" />
                        </div>

                    </li>
                </div>
                <div className="MuiStack-root css-1is5fpd e1de0imv0">
                    <p className="MuiTypography-root MuiTypography-body1 css-fyvgpj-fromBalance e1de0imv0">
                        Available: -
                    </p>
                    <button
                        className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-2pzmg3-maxButton-disabledMaxButton e1de0imv0"
                        rel="noopener noreferrer" target="">
                        Max
                    </button>
                </div>
                <div className="MuiBox-root css-chaoz9 e1de0imv0">
                    <p className="MuiTypography-root MuiTypography-body1 css-1ot4ywj e1de0imv0">
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1aed6ux e1de0imv0" focusable="false"
                            aria-hidden="true">
                            <path
                                d="M14.846 11.0921C14.7322 10.812 14.4172 10.6764 14.1372 10.7858C13.8572 10.8952 13.7215 11.2146 13.8309 11.4946C13.9753 11.8534 13.9272 12.2603 13.704 12.5841C13.4852 12.9078 13.1308 13.096 12.7327 13.096H3.27308C2.83992 13.096 2.45926 12.8728 2.24924 12.4922C2.03922 12.1159 2.04797 11.6696 2.27549 11.3021L7.00529 3.64952C7.21968 3.29949 7.59159 3.09385 8.00288 3.09385C8.41417 3.09385 8.78607 3.30387 9.00047 3.64952L12.5008 9.31565C12.6583 9.5738 12.9952 9.65256 13.2533 9.49504C13.5115 9.33753 13.5903 9.00062 13.4327 8.74248L9.93243 3.07635C9.51676 2.40254 8.79482 2 8.00288 2C7.21093 2 6.48899 2.40254 6.07333 3.07635L1.34354 10.7333C0.905996 11.4421 0.884119 12.304 1.29103 13.0304C1.69794 13.7567 2.43738 14.1942 3.26871 14.1942H12.7283C13.494 14.1942 14.1766 13.8311 14.6053 13.201C15.0298 12.5753 15.1173 11.7877 14.8416 11.0921H14.846Z"
                                fill="currentColor"></path>
                            <path fillRule="evenodd" clipRule="evenodd"
                                d="M8.00288 9.47567C7.67941 9.47567 7.41689 9.21314 7.41689 8.88968L7.41689 6.59414C7.41689 6.27067 7.67941 6.00815 8.00288 6.00815C8.32635 6.00815 8.58887 6.27067 8.58887 6.59414L8.58887 8.88968C8.58887 9.21314 8.32635 9.47567 8.00288 9.47567Z"
                                fill="currentColor"></path>
                            <path
                                d="M8.00288 10.2351C7.67925 10.2351 7.41689 10.4974 7.41689 10.8211C7.41689 11.1447 7.67925 11.4071 8.00288 11.4071C8.32651 11.4071 8.58887 11.1447 8.58887 10.8211C8.58887 10.4974 8.32651 10.2351 8.00288 10.2351Z"
                                fill="currentColor"></path>
                        </svg><span className="MuiStack-root css-1xhj18k e1de0imv0" style={{
                            display: 'inline-flex',
                            verticalAlign: 'middle',
                            alignItems: 'center',
                            gap: '0.2rem'
                        }}>
                            <button
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-9zpnh7 e1de0imv0"
                                rel="noopener noreferrer" target="">
                                Connect wallet
                            </button>
                        </span>
                    </p>
                </div>
                <div className="MuiBox-root  css-8atqhb e1de0imv0">
                    <div className=" MuiStack-root css-1rvccqv e1de0imv0 sm:flex-row sm:flex flex-col">
                        <div
                            className={`e1de0imv0 css-et8u9s-cardRoot-selectedCard e1de0imv0 ${selectedPlan === "economy" ? 'outline outline-black outline-[1px] bg-white' : 'outline-[1px] outline outline-transparent'}`}
                            role="button" tabIndex="0" onClick={() => setSelectedPlan("economy")}>
                            {/* mark */}
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ejr6zn-selectedIcon e1de0imv0 ${selectedPlan === "economy" ? '' : 'hidden'}`}
                                focusable="false" aria-hidden="true">
                                <circle cx="16" cy="16" r="13" fill="#101010" stroke="#101010" strokeWidth="2"></circle>
                                <path d="M11 17L14 20L21 13" stroke="#FFF8F3" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                            {/* mark */}
                            <div className="MuiBox-root css-qv1984 e1de0imv0">
                                <p className="MuiTypography-root MuiTypography-body1 css-wwul6r e1de0imv0">
                                    Economy 💰
                                </p>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Time
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        30 min ~ 1 hour
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-4iekpj-subheader e1de0imv0">
                                    Gas fee
                                </div>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Ethereum
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        -<span className="MuiTypography-root MuiTypography-body1 css-4m7uca-price e1de0imv0"></span>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Scroll
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        -<span className="MuiTypography-root MuiTypography-body1 css-4m7uca-price e1de0imv0">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            className={`MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root e1de0imv0 css-g1mupx-cardRoot e1de0imv0 ${selectedPlan === "fast" ? 'outline outline-black outline-[1px] bg-white' : 'outline-[1px] outline outline-transparent'}`}
                            role="button" tabIndex="0" onClick={() => setSelectedPlan("fast")}>
                            {/* mark */}
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ejr6zn-selectedIcon e1de0imv0 ${selectedPlan === "fast" ? '' : 'hidden'}`}
                                focusable="false" aria-hidden="true">
                                <circle cx="16" cy="16" r="13" fill="#101010" stroke="#101010" strokeWidth="2"></circle>
                                <path d="M11 17L14 20L21 13" stroke="#FFF8F3" strokeWidth="2" strokeLinecap="round"
                                    strokeLinejoin="round"></path>
                            </svg>
                            {/* mark */}

                            <div className="MuiBox-root css-qv1984 e1de0imv0">
                                <p className="MuiTypography-root MuiTypography-body1 css-wwul6r e1de0imv0">
                                    Fast ⚡️
                                </p>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Time
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        20 min
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-12 css-4iekpj-subheader e1de0imv0">
                                    Gas fee
                                </div>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Ethereum
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        -<span className="MuiTypography-root MuiTypography-body1 css-4m7uca-price e1de0imv0"></span>
                                    </div>
                                </div>
                                <div className="MuiGrid-root MuiGrid-container css-1d3bbye e1de0imv0">
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-4 css-1k5m23h-label e1de0imv0">
                                        Scroll
                                    </div>
                                    <div className="MuiGrid-root MuiGrid-item MuiGrid-grid-xs-8 css-1r6mukn-info e1de0imv0">
                                        -<span className="MuiTypography-root MuiTypography-body1 css-4m7uca-price e1de0imv0">
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* connect wallet button */}
                <div className='mt-12 grid place-items-center'>
                    <ConnectWalletBtn>
                        Connect Wallet
                    </ConnectWalletBtn>
                </div>

                {/* connect wallet button */}


            </div>
        </div>
    )
}


function InnerWithdrawTabContent() {
    return (
        <div className='pb-10'>
            {/* inner content for withdraw */}
            <div className="MuiStack-root css-f5nr1t e1de0imv0 tsp-bold mt-7">
                <p className="MuiTypography-root MuiTypography-body1 css-e7h3go e1de0imv0 !font-sans ">From</p>
                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-14zhrg4-chip e1de0imv0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconMedium MuiChip-iconColorDefault css-1tgacyq-icon e1de0imv0" focusable="false" aria-hidden="true">
                        <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="white"></path>
                        <path d="M18.1656 14.7728V6.16602C18.1541 5.44585 17.594 4.86621 16.891 4.86621H8.12354C6.23173 4.89549 4.71143 6.48218 4.71143 8.42603C4.71143 9.08179 4.88289 9.64387 5.1458 10.1357C5.3687 10.5455 5.71734 10.932 6.06027 11.2189C6.15743 11.3008 6.11171 11.2657 6.40891 11.4531C6.82042 11.7107 7.28909 11.8395 7.28909 11.8395L7.28337 16.986C7.2948 17.2319 7.31766 17.4661 7.38053 17.6827C7.57486 18.4088 8.06639 18.965 8.73509 19.2343C9.01515 19.3456 9.3295 19.4217 9.66671 19.4275L16.6681 19.4509C18.0627 19.4509 19.1943 18.2917 19.1943 16.8572C19.2001 16.0082 18.7885 15.2471 18.1656 14.7728Z" fill="#FFEEDA"></path>
                        <path d="M18.3371 16.9206C18.3085 17.8398 17.5712 18.5775 16.6682 18.5775L11.8501 18.5599C12.233 18.1033 12.4674 17.5119 12.4674 16.8679C12.4674 15.8549 11.8787 15.1582 11.8787 15.1582H16.6739C17.5941 15.1582 18.3428 15.9252 18.3428 16.8679L18.3371 16.9206Z" fill="#EBC28E"></path>
                        <path d="M6.51799 10.4958C5.96359 9.95711 5.57494 9.26037 5.57494 8.43482V8.347C5.62067 6.93595 6.75232 5.80009 8.12974 5.7591H16.8972C17.1258 5.77081 17.3087 5.93475 17.3087 6.1748V13.7746C17.5088 13.8097 17.6059 13.839 17.8003 13.9092C17.9546 13.9678 18.166 14.0907 18.166 14.0907V6.1748C18.1546 5.45464 17.5945 4.875 16.8915 4.875H8.12403C6.23222 4.90427 4.71191 6.49097 4.71191 8.43482C4.71191 9.56483 5.21487 10.5309 6.0379 11.2101C6.09505 11.2569 6.14649 11.3155 6.29509 11.3155C6.55228 11.3155 6.73518 11.1047 6.72375 10.8763C6.71803 10.6831 6.63802 10.6129 6.51799 10.4958Z" fill="#101010"></path>
                        <path d="M16.6699 14.2733H9.79426C9.33131 14.2791 8.95981 14.6597 8.95981 15.134V16.1469C8.97124 16.6153 9.35989 17.0134 9.82284 17.0134H10.3315V16.1469H9.82284V15.1574C9.82284 15.1574 9.94858 15.1574 10.1029 15.1574C10.9716 15.1574 11.6118 15.9829 11.6118 16.867C11.6118 17.6516 10.9145 18.6528 9.74854 18.5708C8.71404 18.5006 8.15393 17.5579 8.15393 16.867V8.28365C8.15393 7.89722 7.8453 7.58105 7.46808 7.58105H6.78223V8.4593H7.2909V16.8729C7.26232 18.5825 8.47971 19.4432 9.74854 19.4432L16.6756 19.4666C18.0702 19.4666 19.2019 18.3074 19.2019 16.8729C19.2019 15.4384 18.0645 14.2733 16.6699 14.2733ZM18.3388 16.9256C18.3103 17.8448 17.573 18.5825 16.6699 18.5825L11.8518 18.565C12.2348 18.1083 12.4691 17.5169 12.4691 16.8729C12.4691 15.86 11.8804 15.1632 11.8804 15.1632H16.6756C17.5958 15.1632 18.3446 15.9302 18.3446 16.8729L18.3388 16.9256Z" fill="#101010"></path>
                        <path d="M14.8182 8.61848H9.63428V7.74023H14.8182C15.0525 7.74023 15.2468 7.93345 15.2468 8.17936C15.2468 8.41941 15.0582 8.61848 14.8182 8.61848Z" fill="#101010"></path>
                        <path d="M14.8182 12.7503H9.63428V11.8721H14.8182C15.0525 11.8721 15.2468 12.0653 15.2468 12.3112C15.2468 12.5512 15.0582 12.7503 14.8182 12.7503Z" fill="#101010"></path>
                        <path d="M15.7326 10.68H9.63428V9.80176H15.7269C15.9613 9.80176 16.1556 9.99497 16.1556 10.2409C16.1613 10.4809 15.967 10.68 15.7326 10.68Z" fill="#101010"></path>
                    </svg>
                    <span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0 !font-sans font-bold">Scroll </span>
                </div>
                <p className="MuiTypography-root MuiTypography-body1 css-e7h3go e1de0imv0">To</p>
                <div className="MuiChip-root MuiChip-filled MuiChip-sizeMedium MuiChip-colorDefault MuiChip-filledDefault css-14zhrg4-chip e1de0imv0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium MuiChip-icon MuiChip-iconMedium MuiChip-iconColorDefault css-1tgacyq-icon e1de0imv0" focusable="false" aria-hidden="true">
                        <g>
                            <path d="M12 24C18.6274 24 24 18.6274 24 12C24 5.37258 18.6274 0 12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24Z" fill="#627EEA"></path>
                            <path d="M12.3735 3V9.6525L17.9963 12.165L12.3735 3Z" fill="white" fillOpacity="0.602"></path>
                            <path d="M12.3735 3L6.75 12.165L12.3735 9.6525V3Z" fill="white"></path>
                            <path d="M12.3735 16.4759V20.9962L18 13.2119L12.3735 16.4759Z" fill="white" fillOpacity="0.602"></path>
                            <path d="M12.3735 20.9962V16.4752L6.75 13.2119L12.3735 20.9962Z" fill="white"></path>
                            <path d="M12.3735 15.4298L17.9963 12.1651L12.3735 9.65405V15.4298Z" fill="white" fillOpacity="0.2"></path>
                            <path d="M6.75 12.1651L12.3735 15.4298V9.65405L6.75 12.1651Z" fill="white" fillOpacity="0.602"></path>
                        </g>
                    </svg>
                    <span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0 !font-sans font-bold">Ethereum </span>
                </div>
            </div>
            {/* input section */}

            <div className="flex gap-4 mt-8">
                <div className="MuiInputBase-root MuiInputBase-colorPrimary Mui-disabled css-13ttspr-inputWrapper e1de0imv0 ">
                    <input aria-invalid="false" disabled="" placeholder="0.0000" type="text" className="MuiInputBase-input Mui-disabled css-5v49rv-input e1de0imv0" value="" />
                </div>
                <li className="bg-[#fff5e8] p-[14px] flex justify-between items-center border border-gray-400 w-[20%]  min-w-[120px] rounded-2xl" tabIndex="-1" role="menuitem" aria-disabled="true" value="[object Object]">
                    {/* eth logo */}
                    <div className='opacity-40'>
                        <img src={eth} alt="bro" />
                    </div>
                    {/* eth logo */}
                    <div className="text-3xl text-gray-500 font-extrabold">
                        ETH
                    </div>

                    <div>
                        <img src={arrowDown} alt="" />
                    </div>

                </li>
            </div>


            <div className="MuiStack-root css-1is5fpd e1de0imv0">
                <p className="MuiTypography-root MuiTypography-body1 css-fyvgpj-fromBalance e1de0imv0">Available: -</p>
                <button className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button css-2pzmg3-maxButton-disabledMaxButton e1de0imv0" rel="noopener noreferrer" target="">Max</button>
            </div>
            <p className="MuiTypography-root MuiTypography-body1 css-1ot4ywj e1de0imv0"><svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1aed6ux e1de0imv0" focusable="false" aria-hidden="true"><path d="M14.846 11.0921C14.7322 10.812 14.4172 10.6764 14.1372 10.7858C13.8572 10.8952 13.7215 11.2146 13.8309 11.4946C13.9753 11.8534 13.9272 12.2603 13.704 12.5841C13.4852 12.9078 13.1308 13.096 12.7327 13.096H3.27308C2.83992 13.096 2.45926 12.8728 2.24924 12.4922C2.03922 12.1159 2.04797 11.6696 2.27549 11.3021L7.00529 3.64952C7.21968 3.29949 7.59159 3.09385 8.00288 3.09385C8.41417 3.09385 8.78607 3.30387 9.00047 3.64952L12.5008 9.31565C12.6583 9.5738 12.9952 9.65256 13.2533 9.49504C13.5115 9.33753 13.5903 9.00062 13.4327 8.74248L9.93243 3.07635C9.51676 2.40254 8.79482 2 8.00288 2C7.21093 2 6.48899 2.40254 6.07333 3.07635L1.34354 10.7333C0.905996 11.4421 0.884119 12.304 1.29103 13.0304C1.69794 13.7567 2.43738 14.1942 3.26871 14.1942H12.7283C13.494 14.1942 14.1766 13.8311 14.6053 13.201C15.0298 12.5753 15.1173 11.7877 14.8416 11.0921H14.846Z" fill="currentColor"></path><path fillRule="evenodd" clipRule="evenodd" d="M8.00288 9.47567C7.67941 9.47567 7.41689 9.21314 7.41689 8.88968L7.41689 6.59414C7.41689 6.27067 7.67941 6.00815 8.00288 6.00815C8.32635 6.00815 8.58887 6.27067 8.58887 6.59414L8.58887 8.88968C8.58887 9.21314 8.32635 9.47567 8.00288 9.47567Z" fill="currentColor"></path><path d="M8.00288 10.2351C7.67925 10.2351 7.41689 10.4974 7.41689 10.8211C7.41689 11.1447 7.67925 11.4071 8.00288 11.4071C8.32651 11.4071 8.58887 11.1447 8.58887 10.8211C8.58887 10.4974 8.32651 10.2351 8.00288 10.2351Z" fill="currentColor"></path></svg><span className="MuiStack-root css-1xhj18k e1de0imv0" style={{ display: 'inline-flex', verticalAlign: 'middle', alignItems: 'center', gap: '0.2rem' }}><button className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-9zpnh7 e1de0imv0" rel="noopener noreferrer" target="">Connect wallet</button></span></p>




            {/* summary section */}
            <div>
                <h5 className="MuiTypography-root MuiTypography-h5 css-zle1zb-title e1de0imv0">Summary</h5>
                <table className="css-10z6gj0-table">
                    <tbody>
                        <tr className="css-9e5qxj-rowItem">
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">You're withdrawing</h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0"><p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">-</p></h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6></td>
                        </tr>
                        <tr className="css-9e5qxj-rowItem">
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">Scroll gas fee</h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0"><p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">-</p></h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6></td>
                        </tr>
                        <tr className="css-9e5qxj-rowItem">
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">Ethereum data fee</h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0"><p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">-</p></h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6></td>
                        </tr>
                        <tr className="css-13p782h-hr">
                            <td></td>
                            <td></td>
                            <td></td>
                        </tr>
                        <tr className="css-9e5qxj-rowItem">
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1bn58iw-detailLabel e1de0imv0">Total</h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1hmuqn-amount e1de0imv0"><p className="MuiTypography-root MuiTypography-body1 css-tj6z3c e1de0imv0">-</p></h6></td>
                            <td><h6 className="MuiTypography-root MuiTypography-h6 css-1vtys9s-price e1de0imv0"></h6></td>
                        </tr>
                    </tbody>
                </table>
                <div className='mt-12 grid place-items-center'>
                    <ConnectWalletBtn>
                        Connect Wallet
                    </ConnectWalletBtn>
                </div>
            </div>
            {/* summary section */}
            {/* inner content for withdraw */}
        </div>
    )
}

function ClaimTabContent() {
    return (
        <div className='h-[80vh] min-h-[400px] flex items-center justify-center '>
            <div className="MuiTabPanel-root css-10c4shx-tabPanel e1de0imv0" role="tabpanel" aria-labelledby="mui-p-91539-T-2" id="mui-p-91539-P-2">
                <div className="MuiBox-root css-qocfh-tableBox e1de0imv0">
                    <div className="MuiStack-root css-l4h50r e1de0imv0">
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="mb-3 block w-fit mx-auto MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1cm5l1a e1de0imv0" focusable="false" aria-hidden="true">
                            <path d="M25.0286 17.686C24.5934 18.121 23.8917 18.121 23.4565 17.686C23.2433 17.4729 23.1278 17.1976 23.1278 16.8958C23.1278 16.5939 23.2433 16.3187 23.4565 16.1056L25.2595 14.3033C27.2758 12.2879 27.2758 8.8786 25.2595 6.86321L25.1263 6.73003C23.1101 4.71464 19.6994 4.72352 17.6832 6.73003L15.8801 8.54122C15.4449 8.97626 14.7432 8.97626 14.308 8.54122C14.0948 8.32814 13.9793 8.05291 13.9793 7.75105C13.9793 7.45806 14.0948 7.17395 14.308 6.96087L16.111 5.15856C18.9888 2.28196 23.8384 2.28196 26.7073 5.14968L26.8405 5.28286C29.7183 8.15057 29.7183 12.9982 26.8494 15.8748L25.0464 17.6771L25.0286 17.686Z" fill="#5B5B5B"></path>
                            <path d="M15.8801 26.8484C13.0112 29.7162 8.16159 29.7162 5.29268 26.8484L5.15945 26.7153C2.28167 23.8476 2.28167 19 5.15057 16.1234L6.95363 14.321C7.38885 13.886 8.09053 13.886 8.52575 14.321C8.96097 14.7561 8.96097 15.4575 8.52575 15.8925L6.72269 17.6948C4.70647 19.7191 4.70647 23.1195 6.72269 25.1349L6.85592 25.2681C8.87215 27.2835 12.2829 27.2746 14.2991 25.2681L16.1021 23.4569C16.5374 23.0219 17.239 23.0219 17.6743 23.4569C17.8874 23.67 18.0029 23.9452 18.0029 24.2471C18.0029 24.5401 17.8874 24.8242 17.6743 25.0373L15.8623 26.8484H15.8801Z" fill="#5B5B5B"></path>
                            <path d="M24.1315 24.1228C23.6963 24.5578 22.9946 24.5578 22.5594 24.1228L7.85071 9.45569C7.63754 9.24261 7.52208 8.96738 7.52208 8.66552C7.52208 8.37253 7.63754 8.08842 7.85071 7.87534C8.28593 7.4403 8.98762 7.4403 9.42284 7.87534L24.1315 22.5424C24.3447 22.7555 24.4602 23.0307 24.4602 23.3326C24.4602 23.6256 24.3447 23.9097 24.1315 24.1228Z" fill="#5B5B5B"></path>
                        </svg>
                        <p className="text-[#5B5B5B] text-2xl font-bold text-center !font-sans mb-3">Wallet not connected</p>
                        <p className="text-2xl text-[#5B5B5B] text-center !font-sans">Connect wallet to see your claimable asset</p>
                        <div className='mt-6 grid place-items-center'>
                            <ConnectWalletBtn>
                                Connect Wallet
                            </ConnectWalletBtn>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export { WithdrawTabContent, InnerWithdrawTabContent, ClaimTabContent, DepositTabContent }