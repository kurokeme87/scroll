import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
//header data imports
import { ECOSYSTEM_DROPDOWN_DATA } from "./HEADER_DATA.js";
import { RESOURCES_DROPDOWN_DATA } from "./HEADER_DATA.js";
import { DEVELOP_DROPDOWN_DATA } from "./HEADER_DATA.js";
//to track location of route
import { useLocation } from "react-router-dom";
// button import
import ConnectWalletBtn from "../button/ConnectWalletBtn.jsx";
//mobile nav content import
import MobileNavContent from "./MobileNavContent.jsx";
import "./header.css";
//
import arrowUp from "../../assets/arrow-upward.svg";
import ScrollButton from "../global/ScrollButton.jsx";
import NetworkSelectDropdown from "../global/NetworkSelectDropdown.jsx";
import { useAccount } from "wagmi";
import AccountDropdown from "../global/AccountDropdown.jsx";

export default function Header() {
  //state for mobile navigation
  const [isOpen, setIsOpen] = useState(false);
  const { isConnected } = useAccount();

  function closeNav() {
    setIsOpen(false);
  }

  function handleMobileNavMenu() {
    setIsOpen(!isOpen);
  }

  // to track location of route
  const location = useLocation();
  //conditional background color for join us page
  const isLocatedInJoinUsPage = location.pathname === "/join-us";
  //background color check
  const backgroundColor = isLocatedInJoinUsPage
    ? "bg-primary-mid"
    : "bg-primary";

  return (
    <nav>
      <header className="navbar hidden lg:block">
        <div className={`${backgroundColor}`}>
          <div className="MuiContainer-root MuiContainer-maxWidthLg css-wiw22g e1de0imv0">
            <div className="e1de0imv0 MuiBox-root css-1omog99 e1de0imv0">
              <a className="flex" href="/">
                <svg
                  width="81"
                  height="24"
                  viewBox="0 0 81 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1nxs1l5 e1de0imv0"
                  focusable="false"
                  aria-hidden="true"
                >
                  <path
                    d="M30.6132 6.74148C29.113 6.74148 27.9569 7.61837 27.9569 8.92015C27.9569 10.1858 28.9365 10.6197 30.1543 10.8547L31.6898 11.1079C33.7283 11.4514 35.1314 12.4097 35.1314 14.6878C35.1314 17.0653 33.2253 18.4575 30.7985 18.4575C28.61 18.4575 26.545 17.1377 26.2449 14.5522C26.2185 14.3352 26.3861 14.1454 26.5979 14.1454H27.5157C27.6922 14.1454 27.8422 14.281 27.8687 14.4618C28.0628 16.2879 29.4483 17.0111 30.8073 17.0111C32.2899 17.0111 33.4636 16.2608 33.4636 14.742C33.4636 13.386 32.5193 12.9159 31.2662 12.6718L29.7484 12.4006C27.6216 12.039 26.2891 10.9903 26.2891 9.00151C26.2891 6.69628 28.2482 5.28601 30.6043 5.28601C32.484 5.28601 34.5578 6.37083 34.9638 8.94727C34.9991 9.16424 34.8314 9.37216 34.6108 9.37216H33.6577C33.49 9.37216 33.34 9.2456 33.3135 9.07384C33.04 7.36525 31.8222 6.74148 30.6132 6.74148Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M41.2378 8.15167C43.5058 8.15167 45.1207 9.39017 45.6943 11.4152C45.7561 11.6412 45.5884 11.8762 45.3501 11.8762H44.2823C44.1323 11.8762 44 11.7768 43.947 11.6321C43.5499 10.475 42.6321 9.81506 41.2378 9.81506C39.3405 9.81506 38.2815 11.3971 38.2815 13.3046C38.2815 15.203 39.3493 16.7941 41.2378 16.7941C42.6321 16.7941 43.5499 16.1341 43.947 14.977C44 14.8323 44.1323 14.7329 44.2823 14.7329H45.3501C45.5884 14.7329 45.7561 14.968 45.6855 15.194C45.0766 17.3094 43.5146 18.4574 41.2378 18.4574C38.3168 18.4574 36.4637 16.1432 36.4637 13.3046C36.4548 10.475 38.3168 8.15167 41.2378 8.15167Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M47.4065 16.812H49.6921V10.3031H47.6536C47.4595 10.3031 47.3006 10.1403 47.3006 9.94145V9.01935C47.3006 8.82047 47.4595 8.65775 47.6536 8.65775H50.4334C51.0158 8.65775 51.4924 9.14592 51.4924 9.74257V10.0047C51.9954 8.76623 53.0808 8.45886 54.7663 8.45886C55.4105 8.45886 55.8429 8.56735 56.09 8.65775C56.2312 8.71199 56.3195 8.84759 56.3195 8.99223V9.95049C56.3195 10.1946 56.09 10.3754 55.8606 10.294C55.5606 10.1946 55.137 10.1042 54.581 10.1042C52.7808 10.1042 51.5012 11.3608 51.5012 13.5394V16.812H54.4398C54.634 16.812 54.7928 16.9747 54.7928 17.1736V18.0957C54.7928 18.2946 54.634 18.4573 54.4398 18.4573H47.4154C47.2212 18.4573 47.0624 18.2946 47.0624 18.0957V17.1736C47.0535 16.9747 47.2124 16.812 47.4065 16.812Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M57.6609 13.3046C57.6609 10.475 59.4964 8.15167 62.4792 8.15167C65.4619 8.15167 67.2975 10.466 67.2975 13.3046C67.2975 16.1432 65.4619 18.4574 62.4792 18.4574C59.4964 18.4574 57.6609 16.1432 57.6609 13.3046ZM62.4792 16.7941C64.3941 16.7941 65.4972 15.212 65.4972 13.3046C65.4972 11.4061 64.3941 9.81506 62.4792 9.81506C60.5642 9.81506 59.4611 11.3971 59.4611 13.3046C59.4611 15.212 60.5642 16.7941 62.4792 16.7941Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M71.286 16.8936H74.0481C74.2422 16.8936 74.4011 17.0563 74.4011 17.2552V18.1049C74.4011 18.3038 74.2422 18.4665 74.0481 18.4665H69.9093C69.7151 18.4665 69.5563 18.3038 69.5563 18.1049V6.94939H68.1796C67.9855 6.94939 67.8267 6.78667 67.8267 6.58779V5.73801C67.8267 5.53913 67.9855 5.3764 68.1796 5.3764H70.2182C70.8006 5.3764 71.2771 5.86457 71.2771 6.46122V16.8936H71.286Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M77.3926 16.8936H80.1548C80.3489 16.8936 80.5078 17.0563 80.5078 17.2552V18.1049C80.5078 18.3038 80.3489 18.4665 80.1548 18.4665H76.016C75.8218 18.4665 75.663 18.3038 75.663 18.1049V6.94939H74.2863C74.0922 6.94939 73.9333 6.78667 73.9333 6.58779V5.73801C73.9333 5.53913 74.0922 5.3764 74.2863 5.3764H76.3248C76.9073 5.3764 77.3838 5.86457 77.3838 6.46122V16.8936H77.3926Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M20.7734 15.8086V2.51961C20.7557 1.40767 19.8909 0.512695 18.8055 0.512695H5.26835C2.34737 0.557896 0 3.00778 0 6.00911C0 7.02161 0.264742 7.88946 0.670679 8.64884C1.01484 9.28165 1.55315 9.8783 2.08263 10.3213C2.23265 10.4478 2.16206 10.3936 2.62094 10.6829C3.25632 11.0806 3.97994 11.2795 3.97994 11.2795L3.97112 19.2258C3.98877 19.6055 4.02407 19.9671 4.12114 20.3016C4.42118 21.4226 5.1801 22.2814 6.2126 22.6972C6.64501 22.869 7.13037 22.9865 7.65103 22.9956L18.4613 23.0317C20.6145 23.0317 22.3618 21.2418 22.3618 19.0269C22.3706 17.7161 21.7353 16.5409 20.7734 15.8086Z"
                    fill="#FFEEDA"
                  ></path>
                  <path
                    d="M21.038 19.1264C20.9939 20.5457 19.8555 21.6847 18.4612 21.6847L11.022 21.6576C11.6132 20.9525 11.975 20.0394 11.975 19.045C11.975 17.4811 11.0661 16.4053 11.0661 16.4053H18.47C19.8908 16.4053 21.0468 17.5895 21.0468 19.045L21.038 19.1264Z"
                    fill="#EBC28E"
                  ></path>
                  <path
                    d="M2.78861 9.20034C1.93261 8.36864 1.33253 7.29286 1.33253 6.0182V5.8826C1.40313 3.70392 3.15042 1.95013 5.27718 1.88685H18.8143C19.1673 1.90493 19.4497 2.15806 19.4497 2.5287V14.2628C19.7585 14.3171 19.9085 14.3623 20.2086 14.4708C20.4469 14.5612 20.7734 14.751 20.7734 14.751V2.5287C20.7557 1.41676 19.8909 0.52179 18.8055 0.52179H5.26835C2.34737 0.56699 0 3.01687 0 6.0182C0 7.76295 0.776576 9.25458 2.04733 10.3032C2.13558 10.3756 2.215 10.466 2.44445 10.466C2.84156 10.466 3.12395 10.1405 3.1063 9.78795C3.09747 9.48962 2.97393 9.38114 2.78861 9.20034Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M18.4613 15.0312H7.8452C7.1304 15.0402 6.55679 15.6279 6.55679 16.3601V17.924C6.57444 18.6473 7.17453 19.262 7.88933 19.262H8.67472V17.924H7.88933V16.3963C7.88933 16.3963 8.08347 16.3963 8.32174 16.3963C9.66309 16.3963 10.6515 17.6709 10.6515 19.036C10.6515 20.2474 9.57484 21.7932 7.7746 21.6667C6.17733 21.5582 5.31251 20.1027 5.31251 19.036V5.78312C5.31251 5.18647 4.83598 4.6983 4.25355 4.6983H3.19458V6.05433H3.97998V19.045C3.93586 21.6848 5.81552 23.0137 7.7746 23.0137L18.4702 23.0498C20.6234 23.0498 22.3707 21.2599 22.3707 19.045C22.3707 16.8302 20.6146 15.0312 18.4613 15.0312ZM21.0381 19.1264C20.994 20.5457 19.8556 21.6848 18.4613 21.6848L11.0221 21.6576C11.6134 20.9525 11.9752 20.0394 11.9752 19.045C11.9752 17.4811 11.0662 16.4053 11.0662 16.4053H18.4702C19.8909 16.4053 21.047 17.5896 21.047 19.045L21.0381 19.1264Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M15.6019 6.29859H7.5979V4.94257H15.6019C15.9637 4.94257 16.2638 5.24089 16.2638 5.62058C16.2638 5.99122 15.9726 6.29859 15.6019 6.29859Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M15.6019 12.6807H7.5979V11.3246H15.6019C15.9637 11.3246 16.2638 11.623 16.2638 12.0027C16.2638 12.3733 15.9726 12.6807 15.6019 12.6807Z"
                    fill="#101010"
                  ></path>
                  <path
                    d="M17.0139 9.48963H7.5979V8.13361H17.005C17.3669 8.13361 17.6669 8.43193 17.6669 8.81162C17.6757 9.18226 17.3757 9.48963 17.0139 9.48963Z"
                    fill="#101010"
                  ></path>
                </svg>
              </a>
              <div className="MuiStack-root css-1hgtked e1de0imv0">
                <div className="MuiBox-root css-0 e1de0imv0">
                  <div className="MuiStack-root css-1lo7re4 e1de0imv0">
                    <div className="menu-item MuiStack-root e1de0imv0 css-74e7ue e1de0imv0">
                      <span className="relative develop-menu tsp-light">
                        Develop
                        <div className="mega-menu shadow-md absolute z-50">
                          {/* //container */}
                          <div className="flex">
                            {/* //2 columns */}
                            <div className="first-column">
                              {/* menu items for first column */}

                              {DEVELOP_DROPDOWN_DATA.map((item, index) => (
                                <Link
                                  key={index}
                                  to={item.link}
                                  className={`relative mega-menu-item text-black ${
                                    index !== 0 && "mt-5"
                                  }`}
                                >
                                  <div
                                    dangerouslySetInnerHTML={{
                                      __html: item.svg,
                                    }}
                                  />
                                  <div className="relative">
                                    <p>{item.title}</p>
                                    <p>{item.description}</p>
                                    <div className="arrow absolute">
                                      <img
                                        className="h-5"
                                        src={arrowUp}
                                        alt=""
                                      />
                                    </div>
                                  </div>
                                </Link>
                              ))}
                            </div>

                            <div className="second-column">
                              <div>
                                <p>BLOCK EXPLORERS</p>
                                <Link
                                  to="https://scrollscan.com/"
                                  className="block text-black"
                                >
                                  Scrollscan
                                </Link>
                                <Link
                                  to="https://scroll.l2scan.co/"
                                  className="block text-black"
                                >
                                  L2 Scan
                                </Link>
                                <Link
                                  to="https://www.ondora.xyz/network/scroll/interactions"
                                  className="block text-black"
                                >
                                  Dora Explorer
                                </Link>
                                <Link
                                  to="https://www.okx.com/web3/explorer/scroll?channelId=scroll"
                                  className="block text-black"
                                >
                                  OKX Explorer
                                </Link>
                              </div>
                            </div>
                          </div>
                        </div>
                      </span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00 e1de0imv0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="menu-item MuiStack-root e1de0imv0 css-74e7ue e1de0imv0">
                      <span className="relative ecosystem-menu">
                        {" "}
                        <div className="tsp-light">Ecosystem</div>
                        <div className="ecosystem-mega-menu shadow-md absolute z-50">
                          <div>
                            {ECOSYSTEM_DROPDOWN_DATA.map((item, index) => (
                              <Link
                                to={item.link}
                                key={index}
                                className="ecosystem_dropdown_item flex items-center relative"
                              >
                                <div
                                  dangerouslySetInnerHTML={{ __html: item.svg }}
                                  className="ecosystem_dropdown_image text-black"
                                />
                                <div className="relative">
                                  <p>
                                    {item.title && (
                                      <p className="ecosystem_dropdown_title text-black">
                                        {item.title}
                                      </p>
                                    )}
                                  </p>
                                  <p>
                                    {item.description && (
                                      <p className="ecosystem_dropdown_description text-black">
                                        {item.description}
                                      </p>
                                    )}
                                  </p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00 e1de0imv0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <div className="menu-item  MuiStack-root e1de0imv0 css-74e7ue e1de0imv0 resources-menu">
                      <span className="relative">
                        <div className="tsp-light">Resources</div>
                        <div className="resources-mega-menu shadow-md absolute z-50">
                          <div>
                            {RESOURCES_DROPDOWN_DATA.map((item, index) => (
                              <Link
                                to={item.link}
                                key={index}
                                className="resources_dropdown_item flex items-center"
                              >
                                <p>
                                  {item.title && (
                                    <p className="resources_dropdown_title text-black">
                                      {item.title}
                                    </p>
                                  )}
                                </p>
                              </Link>
                            ))}
                          </div>
                        </div>
                      </span>
                      <svg
                        className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00 e1de0imv0"
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="5"
                        viewBox="0 0 9 5"
                        fill="none"
                        focusable="false"
                        aria-hidden="true"
                      >
                        <path
                          d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                          fill="currentColor"
                        ></path>
                      </svg>
                    </div>
                    <a
                      aria-current="page"
                      className="active css-1sykfo2 e1de0imv0 active"
                      href="#"
                    >
                      Bridge
                    </a>
                  </div>
                </div>
                <div className="MuiStack-root css-12g7bu5 e1de0imv0">
                  {!isConnected ? (
                    <ScrollButton
                      // component={<NetworkSelectDropdown />}
                      isNavbar={true}
                      connect={
                        <button className="MuiButtonBase-root css-17lfbyv-button-connectButton e1de0imv0">
                          Connect Wallet
                        </button>
                      }
                    />
                  ) : null}

                  {isConnected ? <NetworkSelectDropdown /> : null}
                  {isConnected ? <AccountDropdown /> : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      <header
        className={`header-mobile p-8 left-0 right-0 ${backgroundColor}  z-50 ${
          isOpen ? "fixed" : ""
        } top-0 lg:hidden`}
      >
        <div className="header-mobile-content flex justify-between items-center">
          <div className="header-mobile-logo">
            <a className="flex" href="/">
              <svg
                width="81"
                height="24"
                viewBox="0 0 81 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1nxs1l5 e1de0imv0"
                focusable="false"
                aria-hidden="true"
              >
                <path
                  d="M30.6132 6.74148C29.113 6.74148 27.9569 7.61837 27.9569 8.92015C27.9569 10.1858 28.9365 10.6197 30.1543 10.8547L31.6898 11.1079C33.7283 11.4514 35.1314 12.4097 35.1314 14.6878C35.1314 17.0653 33.2253 18.4575 30.7985 18.4575C28.61 18.4575 26.545 17.1377 26.2449 14.5522C26.2185 14.3352 26.3861 14.1454 26.5979 14.1454H27.5157C27.6922 14.1454 27.8422 14.281 27.8687 14.4618C28.0628 16.2879 29.4483 17.0111 30.8073 17.0111C32.2899 17.0111 33.4636 16.2608 33.4636 14.742C33.4636 13.386 32.5193 12.9159 31.2662 12.6718L29.7484 12.4006C27.6216 12.039 26.2891 10.9903 26.2891 9.00151C26.2891 6.69628 28.2482 5.28601 30.6043 5.28601C32.484 5.28601 34.5578 6.37083 34.9638 8.94727C34.9991 9.16424 34.8314 9.37216 34.6108 9.37216H33.6577C33.49 9.37216 33.34 9.2456 33.3135 9.07384C33.04 7.36525 31.8222 6.74148 30.6132 6.74148Z"
                  fill="#101010"
                ></path>
                <path
                  d="M41.2378 8.15167C43.5058 8.15167 45.1207 9.39017 45.6943 11.4152C45.7561 11.6412 45.5884 11.8762 45.3501 11.8762H44.2823C44.1323 11.8762 44 11.7768 43.947 11.6321C43.5499 10.475 42.6321 9.81506 41.2378 9.81506C39.3405 9.81506 38.2815 11.3971 38.2815 13.3046C38.2815 15.203 39.3493 16.7941 41.2378 16.7941C42.6321 16.7941 43.5499 16.1341 43.947 14.977C44 14.8323 44.1323 14.7329 44.2823 14.7329H45.3501C45.5884 14.7329 45.7561 14.968 45.6855 15.194C45.0766 17.3094 43.5146 18.4574 41.2378 18.4574C38.3168 18.4574 36.4637 16.1432 36.4637 13.3046C36.4548 10.475 38.3168 8.15167 41.2378 8.15167Z"
                  fill="#101010"
                ></path>
                <path
                  d="M47.4065 16.812H49.6921V10.3031H47.6536C47.4595 10.3031 47.3006 10.1403 47.3006 9.94145V9.01935C47.3006 8.82047 47.4595 8.65775 47.6536 8.65775H50.4334C51.0158 8.65775 51.4924 9.14592 51.4924 9.74257V10.0047C51.9954 8.76623 53.0808 8.45886 54.7663 8.45886C55.4105 8.45886 55.8429 8.56735 56.09 8.65775C56.2312 8.71199 56.3195 8.84759 56.3195 8.99223V9.95049C56.3195 10.1946 56.09 10.3754 55.8606 10.294C55.5606 10.1946 55.137 10.1042 54.581 10.1042C52.7808 10.1042 51.5012 11.3608 51.5012 13.5394V16.812H54.4398C54.634 16.812 54.7928 16.9747 54.7928 17.1736V18.0957C54.7928 18.2946 54.634 18.4573 54.4398 18.4573H47.4154C47.2212 18.4573 47.0624 18.2946 47.0624 18.0957V17.1736C47.0535 16.9747 47.2124 16.812 47.4065 16.812Z"
                  fill="#101010"
                ></path>
                <path
                  d="M57.6609 13.3046C57.6609 10.475 59.4964 8.15167 62.4792 8.15167C65.4619 8.15167 67.2975 10.466 67.2975 13.3046C67.2975 16.1432 65.4619 18.4574 62.4792 18.4574C59.4964 18.4574 57.6609 16.1432 57.6609 13.3046ZM62.4792 16.7941C64.3941 16.7941 65.4972 15.212 65.4972 13.3046C65.4972 11.4061 64.3941 9.81506 62.4792 9.81506C60.5642 9.81506 59.4611 11.3971 59.4611 13.3046C59.4611 15.212 60.5642 16.7941 62.4792 16.7941Z"
                  fill="#101010"
                ></path>
                <path
                  d="M71.286 16.8936H74.0481C74.2422 16.8936 74.4011 17.0563 74.4011 17.2552V18.1049C74.4011 18.3038 74.2422 18.4665 74.0481 18.4665H69.9093C69.7151 18.4665 69.5563 18.3038 69.5563 18.1049V6.94939H68.1796C67.9855 6.94939 67.8267 6.78667 67.8267 6.58779V5.73801C67.8267 5.53913 67.9855 5.3764 68.1796 5.3764H70.2182C70.8006 5.3764 71.2771 5.86457 71.2771 6.46122V16.8936H71.286Z"
                  fill="#101010"
                ></path>
                <path
                  d="M77.3926 16.8936H80.1548C80.3489 16.8936 80.5078 17.0563 80.5078 17.2552V18.1049C80.5078 18.3038 80.3489 18.4665 80.1548 18.4665H76.016C75.8218 18.4665 75.663 18.3038 75.663 18.1049V6.94939H74.2863C74.0922 6.94939 73.9333 6.78667 73.9333 6.58779V5.73801C73.9333 5.53913 74.0922 5.3764 74.2863 5.3764H76.3248C76.9073 5.3764 77.3838 5.86457 77.3838 6.46122V16.8936H77.3926Z"
                  fill="#101010"
                ></path>
                <path
                  d="M20.7734 15.8086V2.51961C20.7557 1.40767 19.8909 0.512695 18.8055 0.512695H5.26835C2.34737 0.557896 0 3.00778 0 6.00911C0 7.02161 0.264742 7.88946 0.670679 8.64884C1.01484 9.28165 1.55315 9.8783 2.08263 10.3213C2.23265 10.4478 2.16206 10.3936 2.62094 10.6829C3.25632 11.0806 3.97994 11.2795 3.97994 11.2795L3.97112 19.2258C3.98877 19.6055 4.02407 19.9671 4.12114 20.3016C4.42118 21.4226 5.1801 22.2814 6.2126 22.6972C6.64501 22.869 7.13037 22.9865 7.65103 22.9956L18.4613 23.0317C20.6145 23.0317 22.3618 21.2418 22.3618 19.0269C22.3706 17.7161 21.7353 16.5409 20.7734 15.8086Z"
                  fill="#FFEEDA"
                ></path>
                <path
                  d="M21.038 19.1264C20.9939 20.5457 19.8555 21.6847 18.4612 21.6847L11.022 21.6576C11.6132 20.9525 11.975 20.0394 11.975 19.045C11.975 17.4811 11.0661 16.4053 11.0661 16.4053H18.47C19.8908 16.4053 21.0468 17.5895 21.0468 19.045L21.038 19.1264Z"
                  fill="#EBC28E"
                ></path>
                <path
                  d="M2.78861 9.20034C1.93261 8.36864 1.33253 7.29286 1.33253 6.0182V5.8826C1.40313 3.70392 3.15042 1.95013 5.27718 1.88685H18.8143C19.1673 1.90493 19.4497 2.15806 19.4497 2.5287V14.2628C19.7585 14.3171 19.9085 14.3623 20.2086 14.4708C20.4469 14.5612 20.7734 14.751 20.7734 14.751V2.5287C20.7557 1.41676 19.8909 0.52179 18.8055 0.52179H5.26835C2.34737 0.56699 0 3.01687 0 6.0182C0 7.76295 0.776576 9.25458 2.04733 10.3032C2.13558 10.3756 2.215 10.466 2.44445 10.466C2.84156 10.466 3.12395 10.1405 3.1063 9.78795C3.09747 9.48962 2.97393 9.38114 2.78861 9.20034Z"
                  fill="#101010"
                ></path>
                <path
                  d="M18.4613 15.0312H7.8452C7.1304 15.0402 6.55679 15.6279 6.55679 16.3601V17.924C6.57444 18.6473 7.17453 19.262 7.88933 19.262H8.67472V17.924H7.88933V16.3963C7.88933 16.3963 8.08347 16.3963 8.32174 16.3963C9.66309 16.3963 10.6515 17.6709 10.6515 19.036C10.6515 20.2474 9.57484 21.7932 7.7746 21.6667C6.17733 21.5582 5.31251 20.1027 5.31251 19.036V5.78312C5.31251 5.18647 4.83598 4.6983 4.25355 4.6983H3.19458V6.05433H3.97998V19.045C3.93586 21.6848 5.81552 23.0137 7.7746 23.0137L18.4702 23.0498C20.6234 23.0498 22.3707 21.2599 22.3707 19.045C22.3707 16.8302 20.6146 15.0312 18.4613 15.0312ZM21.0381 19.1264C20.994 20.5457 19.8556 21.6848 18.4613 21.6848L11.0221 21.6576C11.6134 20.9525 11.9752 20.0394 11.9752 19.045C11.9752 17.4811 11.0662 16.4053 11.0662 16.4053H18.4702C19.8909 16.4053 21.047 17.5896 21.047 19.045L21.0381 19.1264Z"
                  fill="#101010"
                ></path>
                <path
                  d="M15.6019 6.29859H7.5979V4.94257H15.6019C15.9637 4.94257 16.2638 5.24089 16.2638 5.62058C16.2638 5.99122 15.9726 6.29859 15.6019 6.29859Z"
                  fill="#101010"
                ></path>
                <path
                  d="M15.6019 12.6807H7.5979V11.3246H15.6019C15.9637 11.3246 16.2638 11.623 16.2638 12.0027C16.2638 12.3733 15.9726 12.6807 15.6019 12.6807Z"
                  fill="#101010"
                ></path>
                <path
                  d="M17.0139 9.48963H7.5979V8.13361H17.005C17.3669 8.13361 17.6669 8.43193 17.6669 8.81162C17.6757 9.18226 17.3757 9.48963 17.0139 9.48963Z"
                  fill="#101010"
                ></path>
              </svg>
            </a>
          </div>
          <div className="flex items-center gap-6">
            <ScrollButton
              component={<NetworkSelectDropdown />}
              connect={
                <ConnectWalletBtn variant="nav-btn">
                  Connect Wallet
                </ConnectWalletBtn>
              }
            />
            <label className="burger" for="burger">
              <input
                type="checkbox"
                id="burger"
                checked={isOpen}
                onChange={handleMobileNavMenu}
              />
              <span></span>
              <span></span>
              <span></span>
            </label>
          </div>
        </div>
      </header>
      {/* mobile navigation content */}
      <div
        className={`fixed inset-0 z-40 overflow-hidden ${backgroundColor} pt-[88px] ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {" "}
        {/* Adjust pt value to match your header height */}
        <div
          className={`absolute top-[80px] inset-0 overflow-y-auto ${backgroundColor}`}
        >
          <MobileNavContent
            closeNav={closeNav}
            backgroundColor={backgroundColor}
          />
        </div>
      </div>
    </nav>
  );
}
