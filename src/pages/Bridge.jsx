import React from 'react'
import './css/bridge.css'
import { useState } from 'react'
import { DepositTabContent, WithdrawTabContent, ClaimTabContent, InnerWithdrawTabContent } from '../components/bridge-tab-content/BridgeTabContent.jsx'
export default function Bridge() {

    // const [tabOpen, setTapOpen] = useState('depositScroll')

    //there are 2 buttons with 2 different contents
    //ill press one button, it will show it's own chosen content
    //if i press the other button, it will remove the content and show it's own 
    //function that checks if the content of one is still open and disables it because the button was just pressed

    return (

        <div>
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div className="MuiContainer-root MuiContainer-maxWidthLg css-ef23km e1de0imv0">
                    <div className="MuiStack-root css-19mh4ig e1de0imv0">
                        <p className="MuiTypography-root css-11d99qp e1de0imv0 text-[48px] tsp-bold ">
                            Bridge
                        </p>
                        <button className="MuiButtonBase-root css-ebuhoc-button e1de0imv0" tabIndex="0" type="button">
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
                                    <button
                                        className="Mui-selected css-5ui0rn-tab "
                                        tabIndex="0" type="button" role="tab" aria-selected="true" aria-controls="mui-p-49779-P-Deposit"
                                        id="mui-p-49779-T-Deposit">
                                        Deposit to Scroll
                                    </button>
                                    <button
                                        className="active:bg-primary-fair hover:bg-primary-fair css-5ui0rn-tab"
                                        tabIndex="-1" type="button" role="tab" aria-selected="false"
                                        aria-controls="mui-p-49779-P-Withdraw" id="mui-p-49779-T-Withdraw">
                                        Withdraw to Ethereum
                                    </button>
                                    {/*buttons*/}

                                </div>
                                <span className="MuiTabs-indicator css-1k456l7-indicator e1de0imv0"
                                    style={{ left: "0px", width: "320px" }}></span>
                            </div>
                        </div>
                        {/* <div className="MuiTabPanel-root css-12b9i56-tabPanel e1de0imv0" role="tabpanel"
                                aria-labelledby="mui-p-49779-T-Deposit" id="mui-p-49779-P-Deposit">
                                <div className="MuiStack-root css-dvxtzn e1de0imv0">
                                    <div className="MuiStack-root css-f5nr1t e1de0imv0">
                                        <p className="MuiTypography-root MuiTypography-body1 css-e7h3go e1de0imv0">
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
                                            </svg><span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0">Ethereum
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
                                            </svg><span className="MuiChip-label MuiChip-labelMedium css-1agl0vi-chipLabel e1de0imv0">Scroll
                                            </span>
                                        </div>
                                    </div>
                                    <div className="MuiStack-root css-syghad-root e1de0imv0">
                                        <div
                                            className="MuiInputBase-root MuiInputBase-colorPrimary Mui-disabled css-13ttspr-inputWrapper e1de0imv0">
                                            <input aria-invalid="false" disabled="" placeholder="0.0000" type="text"
                                                className="MuiInputBase-input Mui-disabled css-5v49rv-input e1de0imv0" />
                                        </div>
                                        <li
                                            className="MuiButtonBase-root MuiMenuItem-root Mui-disabled MuiMenuItem-gutters Mui-disabled MuiMenuItem-root Mui-disabled MuiMenuItem-gutters e1de0imv0 css-hhaj72-menuItem-menuItem e1de0imv0"
                                            tabIndex="-1" role="menuitem" aria-disabled="true" value="[object Object]">
                                            <div className="MuiListItemIcon-root css-302txs-listItemIcon e1de0imv0">
                                                <div className="MuiAvatar-root MuiAvatar-circular css-1ykjr5a e1de0imv0">
                                                    <img src="/static/media/network-mainnet.4f94c02e1403c0502f29e010159e6214.svg"
                                                        className="MuiAvatar-img css-1hy9t21 e1de0imv0" />
                                                </div>
                                            </div>
                                            <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                                <span
                                                    className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-9onabq-listItemText e1de0imv0">ETH</span>
                                            </div>
                                            <svg width="13" height="6" viewBox="0 0 13 6" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M7.71802 6L5.28198 6L-4.29138e-07 -1.82822e-07L2.43314 2.98901e-08L6.52325 4.65362C7.90116 3.09091 9.04942 1.56272 10.564 7.40708e-07L13 9.53674e-07C10.9797 2 9.73837 4 7.71802 6Z"
                                                    fill="currentColor"></path>
                                            </svg>
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
                                    <div className="MuiBox-root css-8atqhb e1de0imv0">
                                        <div className="MuiStack-root css-1rvccqv e1de0imv0">
                                            <div
                                                className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root e1de0imv0 css-et8u9s-cardRoot-selectedCard e1de0imv0"
                                                role="button" tabIndex="0">
                                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-ejr6zn-selectedIcon e1de0imv0"
                                                    focusable="false" aria-hidden="true">
                                                    <circle cx="16" cy="16" r="13" fill="#101010" stroke="#101010" strokeWidth="2"></circle>
                                                    <path d="M11 17L14 20L21 13" stroke="#FFF8F3" strokeWidth="2" strokeLinecap="round"
                                                        strokeLinejoin="round"></path>
                                                </svg>
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
                                                className="MuiPaper-root MuiPaper-outlined MuiPaper-rounded MuiCard-root e1de0imv0 css-g1mupx-cardRoot e1de0imv0"
                                                role="button" tabIndex="0">
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
                                    <div className="MuiBox-root css-m7witu e1de0imv0">
                                        <div className="MuiBox-root css-fadi07-wrapper e1de0imv0">
                                            <span
                                                className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium e1de0imv0 css-wgwcyq-icon e1de0imv0"
                                                tabIndex="-1" role="button" aria-disabled="true"><svg fill="none" height="16"
                                                    viewBox="0 0 21 16" width="21" xmlns="http://www.w3.org/2000/svg"
                                                    className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jbxkcd e1de0imv0" focusable="false"
                                                    aria-hidden="true">
                                                    <path
                                                        d="m21 8.00267-8.3996 7.99733v-2.7067l4.5767-4.35752c-5.7251-.08013-11.45204.31876-17.1565267.05877l-.02057369-1.96951c5.68391039.23862 11.34730039-.1389 17.03120039-.06055l-4.4308-4.21858v-2.74591055l8.3996 7.99733055z"
                                                        fill="currentColor"></path>
                                                </svg></span>
                                            <div className="css-fs25ky-mask" style={{ width: "4.8rem" }}></div>
                                            <button className="MuiButtonBase-root css-6k4tt-button e1de0imv0" tabIndex="0" type="button">
                                                Connect Wallet
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        {/* content for withdraw to ethereum */}
                        <div>

                            {/* inner tabs */}
                            <div className="inner-tabs">
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary Mui-selected e1de0imv0 css-4xcvlt-tab e1de0imv0" tabindex="0" type="button" role="tab" aria-selected="true" aria-controls="mui-p-13728-P-1" id="mui-p-13728-T-1">Step 1: Withdraw</button>
                                <button className="MuiButtonBase-root MuiTab-root MuiTab-textColorPrimary e1de0imv0 css-4xcvlt-tab e1de0imv0" tabindex="-1" type="button" role="tab" aria-selected="false" aria-controls="mui-p-13728-P-2" id="mui-p-13728-T-2">Step 2: Claim</button>
                            </div>
                            {/* inner tabs */}


                            {/* content for inner withdraw tab */}
                            <div className="inner-withdraw-tabs">
                                <InnerWithdrawTabContent />
                            </div>
                            {/* content for inner withdraw tab */}


                        </div>
                        {/* content for withdraw to ethereum */}
                        <div className="MuiTabPanel-root withdraw css-12b9i56-tabPanel e1de0imv0" hidden="" role="tabpanel"
                            aria-labelledby="mui-p-49779-T-Withdraw" id="mui-p-49779-P-Withdraw">

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
