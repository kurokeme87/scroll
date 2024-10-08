import React from 'react'
import './css/sessions.css'
import ConnectWalletBtn from '../components/button/ConnectWalletBtn'

const Sessions = () => {

    return (
        <div>
            <div className="md:min-h-[80vh] lg:min-h-screen min-h-[60vh] scroll-sessions-section">

                <p
                    className="MuiTypography-root MuiTypography-body1 css-1kp2mto e1de0imv0 text-5xl md:text-6xl lg:text-8xl tsp-bold"
                >
                    Scroll Sessions
                </p>
            </div>
            <div
                className="MuiContainer-root MuiContainer-maxWidthLg css-1qgbawf e1de0imv0"
            >
                <ul className="MuiList-root MuiList-padding css-1bgoh1t e1de0imv0 hidden  lg:block">
                    <li
                        className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-iudm6e e1de0imv0 text-black tsp-bold"
                    >
                        Session One
                    </li>
                    <div
                        className=" !text-black MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters Mui-selected MuiListItemButton-root MuiListItemButton-gutters Mui-selected e1de0imv0 css-8b1w15 e1de0imv0"
                        tabindex="0"
                        role="button"
                    >
                        <div className="MuiListItemIcon-root css-kv3wpb e1de0imv0">
                            <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-black" focusable="false" aria-hidden="true"><path d="M5.36624 17.25L7.68949 19.573C7.83816 19.7218 7.91149 19.8959 7.90949 20.0953C7.90766 20.2946 7.82916 20.4718 7.67399 20.627C7.51882 20.7718 7.34316 20.8468 7.14699 20.852C6.95099 20.857 6.77541 20.782 6.62024 20.627L3.12599 17.1328C3.03232 17.0391 2.96632 16.9403 2.92799 16.8365C2.88949 16.7327 2.87024 16.6205 2.87024 16.5C2.87024 16.3795 2.88949 16.2673 2.92799 16.1635C2.96632 16.0597 3.03232 15.9609 3.12599 15.8673L6.62024 12.373C6.75874 12.2347 6.93016 12.1638 7.13449 12.1605C7.33899 12.1573 7.51882 12.2282 7.67399 12.373C7.82916 12.5282 7.90674 12.7064 7.90674 12.9078C7.90674 13.1089 7.82916 13.2871 7.67399 13.4423L5.36624 15.75H19.7432C19.9561 15.75 20.1342 15.8218 20.2777 15.9655C20.4214 16.109 20.4932 16.2872 20.4932 16.5C20.4932 16.7128 20.4214 16.891 20.2777 17.0345C20.1342 17.1782 19.9561 17.25 19.7432 17.25H5.36624ZM18.6202 9.25H4.24324C4.03041 9.25 3.85224 9.17817 3.70874 9.0345C3.56507 8.891 3.49324 8.71283 3.49324 8.5C3.49324 8.28717 3.56507 8.109 3.70874 7.9655C3.85224 7.82183 4.03041 7.75 4.24324 7.75H18.6202L16.297 5.427C16.1483 5.27817 16.075 5.10408 16.077 4.90475C16.0788 4.70542 16.1573 4.52817 16.3125 4.373C16.4677 4.22817 16.6433 4.15317 16.8395 4.148C17.0355 4.143 17.2111 4.218 17.3662 4.373L20.8605 7.86725C20.9542 7.96092 21.0202 8.05967 21.0585 8.1635C21.097 8.26733 21.1162 8.3795 21.1162 8.5C21.1162 8.6205 21.097 8.73267 21.0585 8.8365C21.0202 8.94033 20.9542 9.03908 20.8605 9.13275L17.3662 12.627C17.2277 12.7653 17.0563 12.8362 16.852 12.8395C16.6475 12.8427 16.4677 12.7718 16.3125 12.627C16.1573 12.4718 16.0797 12.2936 16.0797 12.0923C16.0797 11.8911 16.1573 11.7129 16.3125 11.5578L18.6202 9.25Z" fill="currentColor"></path></svg>                        </div>
                        <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                            <span
                                className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-zti6pj e1de0imv0"
                            >Decentralized Exchanges</span
                            >
                        </div>
                    </div>
                    <div
                        className="hover:text-red MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters e1de0imv0 css-8b1w15 e1de0imv0"
                        tabindex="0"
                        role="button"
                    >
                        <div className="MuiListItemIcon-root css-kv3wpb e1de0imv0 text-black">
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1trirmb e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <g clip-path="url(#clip0_4816_4660)">
                                    <path
                                        d="M1.99329 12.5C1.99329 13.6333 2.27662 14.6708 2.84329 15.6125C3.40995 16.5542 4.16829 17.275 5.11829 17.775C5.35162 17.9083 5.52245 18.1 5.63079 18.35C5.73912 18.6 5.74329 18.85 5.64329 19.1C5.54329 19.3667 5.36829 19.5583 5.11829 19.675C4.86829 19.7917 4.62662 19.7833 4.39329 19.65C3.09329 18.9833 2.03495 18.0208 1.21829 16.7625C0.401619 15.5042 -0.00671387 14.0833 -0.00671387 12.5C-0.00671387 10.9333 0.389119 9.525 1.18079 8.275C1.97245 7.025 3.00995 6.06667 4.29329 5.4C4.52662 5.26667 4.77245 5.25417 5.03079 5.3625C5.28912 5.47083 5.47662 5.65833 5.59329 5.925C5.70995 6.15833 5.71829 6.4 5.61829 6.65C5.51829 6.9 5.35162 7.09167 5.11829 7.225C4.16829 7.725 3.40995 8.44583 2.84329 9.3875C2.27662 10.3292 1.99329 11.3667 1.99329 12.5ZM13.9933 20.5C11.7766 20.5 9.88912 19.7208 8.33079 18.1625C6.77245 16.6042 5.99329 14.7167 5.99329 12.5C5.99329 10.2833 6.77245 8.39583 8.33079 6.8375C9.88912 5.27917 11.7766 4.5 13.9933 4.5C14.9266 4.5 15.81 4.65 16.6433 4.95C17.4766 5.25 18.235 5.66667 18.9183 6.2C19.135 6.36667 19.2433 6.58333 19.2433 6.85C19.2433 7.11667 19.1433 7.35 18.9433 7.55C18.76 7.73333 18.5308 7.83333 18.2558 7.85C17.9808 7.86667 17.7266 7.79167 17.4933 7.625C16.9933 7.25833 16.4475 6.97917 15.8558 6.7875C15.2641 6.59583 14.6433 6.5 13.9933 6.5C12.3266 6.5 10.91 7.08333 9.74329 8.25C8.57662 9.41667 7.99329 10.8333 7.99329 12.5C7.99329 14.1667 8.57662 15.5833 9.74329 16.75C10.91 17.9167 12.3266 18.5 13.9933 18.5C14.6433 18.5 15.2641 18.4042 15.8558 18.2125C16.4475 18.0208 16.9933 17.7417 17.4933 17.375C17.7266 17.2083 17.9808 17.1333 18.2558 17.15C18.5308 17.1667 18.76 17.2667 18.9433 17.45C19.1433 17.65 19.2433 17.8833 19.2433 18.15C19.2433 18.4167 19.135 18.6333 18.9183 18.8C18.235 19.3333 17.4766 19.75 16.6433 20.05C15.81 20.35 14.9266 20.5 13.9933 20.5ZM20.1933 13.5H13.9933C13.71 13.5 13.4725 13.4042 13.2808 13.2125C13.0891 13.0208 12.9933 12.7833 12.9933 12.5C12.9933 12.2167 13.0891 11.9792 13.2808 11.7875C13.4725 11.5958 13.71 11.5 13.9933 11.5H20.1933L19.2933 10.6C19.11 10.4167 19.0183 10.1833 19.0183 9.9C19.0183 9.61667 19.11 9.38333 19.2933 9.2C19.4766 9.01667 19.71 8.925 19.9933 8.925C20.2766 8.925 20.51 9.01667 20.6933 9.2L23.2933 11.8C23.4933 12 23.5933 12.2333 23.5933 12.5C23.5933 12.7667 23.4933 13 23.2933 13.2L20.6933 15.8C20.51 15.9833 20.2766 16.075 19.9933 16.075C19.71 16.075 19.4766 15.9833 19.2933 15.8C19.11 15.6167 19.0183 15.3833 19.0183 15.1C19.0183 14.8167 19.11 14.5833 19.2933 14.4L20.1933 13.5Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4816_4660">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            transform="translate(-0.00671387 0.5)"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                        <div className="MuiListItemText-root css-1tsvksn e1de0imv0 tsp-medium text-black">
                            <span
                                className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-zti6pj e1de0imv0"
                            >Lending &amp; Borrowing</span
                            >
                        </div>
                    </div>
                    <li
                        className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-iudm6e e1de0imv0 text-black tsp-bold"
                    >
                        Session Zero
                    </li>
                    <div
                        className="MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters e1de0imv0 css-8b1w15 e1de0imv0 hover:text-red"
                        tabindex="0"
                        role="button"
                    >
                        <div className="MuiListItemIcon-root css-kv3wpb e1de0imv0 text-black">
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1trirmb e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    d="M8.38246 3.01453C6.77827 3.01453 5.3236 3.28192 4.21882 3.75179C3.66644 3.98673 3.19847 4.27045 2.8429 4.62799C2.48733 4.98553 2.24121 5.44862 2.24121 5.95798V13.0931C2.24121 13.5831 2.47049 14.0268 2.8048 14.3771C3.13911 14.7274 3.57965 15.0099 4.10118 15.2444C5.14424 15.7132 6.5243 15.9958 8.06425 16.032C8.13959 16.0335 8.21448 16.0202 8.28465 15.9927C8.35482 15.9652 8.4189 15.9242 8.47321 15.872C8.52753 15.8197 8.57102 15.7573 8.6012 15.6883C8.63139 15.6192 8.64767 15.5449 8.64913 15.4696C8.65214 15.318 8.59502 15.1714 8.49025 15.0618C8.38548 14.9522 8.24159 14.8885 8.09002 14.8847C6.67745 14.8515 5.42095 14.5812 4.57065 14.199C4.1455 14.0079 3.82623 13.7853 3.63507 13.585C3.4439 13.3846 3.3852 13.2318 3.3852 13.0931V11.288C3.60164 11.4304 3.84125 11.5577 4.10118 11.6746C5.14424 12.1434 6.5243 12.426 8.06425 12.4623C8.21583 12.4653 8.36245 12.4081 8.47205 12.3034C8.58164 12.1986 8.64531 12.0547 8.64913 11.9031C8.65107 11.8278 8.63814 11.7528 8.61108 11.6825C8.58403 11.6121 8.54338 11.5478 8.49146 11.4932C8.43953 11.4385 8.37736 11.3947 8.30848 11.3641C8.23959 11.3335 8.16536 11.3168 8.09002 11.3149C6.67745 11.2817 5.42095 11.0114 4.57065 10.6292C4.1455 10.4381 3.82623 10.22 3.63507 10.0196C3.4439 9.81934 3.3852 9.66204 3.3852 9.52328V7.72158C3.63426 7.88552 3.91361 8.02987 4.21882 8.15968C5.3236 8.62955 6.77827 8.90143 8.38246 8.90143C9.98665 8.90143 11.4447 8.62955 12.5495 8.15968C12.8555 8.02951 13.1347 7.88496 13.3831 7.72046C13.3965 7.86291 13.4627 7.99521 13.5686 8.09139C13.6745 8.18758 13.8126 8.24071 13.9556 8.24036C14.107 8.23977 14.252 8.17937 14.359 8.07234C14.4661 7.9653 14.5265 7.82029 14.5271 7.66892V5.95798C14.5273 5.94303 14.5269 5.92809 14.5259 5.91317C14.5119 5.42149 14.266 4.97503 13.9209 4.628C13.5653 4.27046 13.1018 3.98674 12.5495 3.7518C11.4447 3.28193 9.98665 3.01453 8.38246 3.01453ZM8.38246 4.16188C9.85478 4.16188 11.1843 4.42302 12.0957 4.81062C12.5513 5.00443 12.9004 5.22761 13.1086 5.43696C13.3168 5.64631 13.3797 5.8131 13.3797 5.95798C13.3797 6.10286 13.3168 6.26516 13.1086 6.47451C12.9004 6.68386 12.5513 6.91153 12.0957 7.10533C11.1843 7.49294 9.85478 7.75408 8.38246 7.75408C6.91014 7.75408 5.57948 7.49294 4.66813 7.10533C4.21246 6.91152 3.86455 6.68386 3.65635 6.47451C3.44815 6.26516 3.3852 6.10285 3.3852 5.95798C3.3852 5.8131 3.44816 5.64631 3.65635 5.43696C3.86455 5.22759 4.21246 5.00443 4.66813 4.81062C5.57948 4.42302 6.91014 4.16188 8.38246 4.16188ZM15.5993 8.9653C13.9952 8.9653 12.5427 9.23718 11.438 9.70704C10.8856 9.94197 10.4176 10.2223 10.062 10.5799C9.70646 10.9374 9.45698 11.3982 9.45698 11.9076V15.4752V19.0427C9.45698 19.5522 9.70646 20.0129 10.062 20.3705C10.4176 20.728 10.8856 21.014 11.438 21.2489C12.5427 21.7188 13.9952 21.9851 15.5993 21.9851C17.2035 21.9851 18.6571 21.7188 19.7619 21.2489C20.3142 21.014 20.7867 20.728 21.1423 20.3705C21.4897 20.0211 21.7309 19.5719 21.7417 19.0763C21.7424 19.0651 21.7428 19.0539 21.7428 19.0427V15.4752V11.9076C21.7428 11.8964 21.742 11.8852 21.7417 11.874C21.7417 11.8737 21.7417 11.8744 21.7417 11.874C21.7309 11.3784 21.4897 10.9293 21.1423 10.5799C20.7867 10.2224 20.3142 9.94198 19.7619 9.70705C18.6571 9.23719 17.2035 8.9653 15.5993 8.9653ZM15.5993 10.1115C17.0717 10.1115 18.4012 10.3738 19.3126 10.7614C19.7682 10.9552 20.1195 11.1806 20.3277 11.39C20.5359 11.5993 20.5955 11.7628 20.5955 11.9076C20.5955 12.0524 20.5359 12.2159 20.3277 12.4253C20.1195 12.6346 19.7682 12.8612 19.3126 13.055C18.4012 13.4426 17.0717 13.7037 15.5993 13.7037C14.127 13.7037 12.7986 13.4426 11.8873 13.055C11.4316 12.8612 11.0803 12.6346 10.8721 12.4253C10.6639 12.2159 10.6032 12.0524 10.6032 11.9076C10.6032 11.7628 10.6639 11.5993 10.8721 11.39C11.0803 11.1806 11.4316 10.9552 11.8873 10.7614C12.7986 10.3738 14.127 10.1115 15.5993 10.1115ZM10.6032 13.6735C10.8525 13.8383 11.1322 13.9838 11.438 14.1138C12.5427 14.5837 13.9952 14.8511 15.5993 14.8511C17.2035 14.8511 18.6571 14.5837 19.7619 14.1138C20.0662 13.9844 20.3457 13.8396 20.5955 13.6757V15.4752C20.5955 15.62 20.5359 15.7835 20.3277 15.9928C20.1195 16.2022 19.7682 16.4287 19.3126 16.6225C18.4012 17.0101 17.0717 17.2713 15.5993 17.2713C14.127 17.2713 12.7986 17.0101 11.8873 16.6225C11.4316 16.4287 11.0803 16.2022 10.8721 15.9928C10.6639 15.7835 10.6032 15.62 10.6032 15.4752V13.6735ZM10.6032 17.2399C10.8525 17.4047 11.1322 17.5513 11.438 17.6814C12.5427 18.1512 13.9952 18.4186 15.5993 18.4186C17.2035 18.4186 18.6571 18.1512 19.7619 17.6814C20.0663 17.5519 20.3457 17.406 20.5955 17.2421V19.0427C20.5955 19.1875 20.5359 19.351 20.3277 19.5604C20.1195 19.7697 19.7682 19.9963 19.3126 20.1901C18.4012 20.5777 17.0717 20.8388 15.5993 20.8388C14.127 20.8388 12.7986 20.5777 11.8873 20.1901C11.4316 19.9963 11.0803 19.7697 10.8721 19.5604C10.6639 19.351 10.6032 19.1875 10.6032 19.0427V17.2399Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M21.7417 11.874C21.742 11.8852 21.7428 11.8964 21.7428 11.9076V15.4752V19.0427C21.7428 19.0539 21.7424 19.0652 21.7417 19.0763C21.7309 19.5719 21.4897 20.0211 21.1423 20.3705C20.7867 20.728 20.3142 21.014 19.7619 21.2489C18.6571 21.7188 17.2035 21.9851 15.5993 21.9851C13.9952 21.9851 12.5427 21.7188 11.438 21.2489C10.8856 21.014 10.4176 20.728 10.062 20.3705C9.70646 20.0129 9.45698 19.5522 9.45698 19.0427V15.4752V11.9076C9.45698 11.3982 9.70646 10.9374 10.062 10.5799C10.4176 10.2223 10.8856 9.94197 11.438 9.70704C12.5427 9.23718 13.9952 8.9653 15.5993 8.9653C17.2035 8.9653 18.6571 9.23719 19.7619 9.70705C20.3142 9.94198 20.7867 10.2224 21.1423 10.5799C21.4897 10.9293 21.7309 11.3784 21.7417 11.874ZM21.7417 11.874C21.7417 11.8737 21.7417 11.8744 21.7417 11.874ZM8.38246 3.01453C6.77827 3.01453 5.3236 3.28192 4.21882 3.75179C3.66644 3.98673 3.19847 4.27045 2.8429 4.62799C2.48733 4.98553 2.24121 5.44862 2.24121 5.95798V13.0931C2.24121 13.5831 2.47049 14.0268 2.8048 14.3771C3.13911 14.7274 3.57965 15.0099 4.10118 15.2444C5.14424 15.7132 6.5243 15.9958 8.06425 16.032C8.13959 16.0335 8.21448 16.0202 8.28465 15.9927C8.35482 15.9652 8.4189 15.9242 8.47321 15.872C8.52753 15.8197 8.57102 15.7573 8.6012 15.6883C8.63139 15.6192 8.64767 15.5449 8.64913 15.4696C8.65214 15.318 8.59502 15.1714 8.49025 15.0618C8.38548 14.9522 8.24159 14.8885 8.09002 14.8847C6.67745 14.8515 5.42095 14.5812 4.57065 14.199C4.1455 14.0079 3.82623 13.7853 3.63507 13.585C3.4439 13.3846 3.3852 13.2318 3.3852 13.0931V11.288C3.60164 11.4304 3.84125 11.5577 4.10118 11.6746C5.14424 12.1434 6.5243 12.426 8.06425 12.4623C8.21583 12.4653 8.36245 12.4081 8.47205 12.3034C8.58164 12.1986 8.64531 12.0547 8.64913 11.9031C8.65107 11.8278 8.63814 11.7528 8.61108 11.6825C8.58403 11.6121 8.54338 11.5478 8.49146 11.4932C8.43953 11.4385 8.37736 11.3947 8.30848 11.3641C8.23959 11.3335 8.16536 11.3168 8.09002 11.3149C6.67745 11.2817 5.42095 11.0114 4.57065 10.6292C4.1455 10.4381 3.82623 10.22 3.63507 10.0196C3.4439 9.81934 3.3852 9.66204 3.3852 9.52328V7.72158C3.63426 7.88552 3.91361 8.02987 4.21882 8.15968C5.3236 8.62955 6.77827 8.90143 8.38246 8.90143C9.98665 8.90143 11.4447 8.62955 12.5495 8.15968C12.8555 8.02951 13.1347 7.88496 13.3831 7.72046C13.3965 7.86291 13.4627 7.99521 13.5686 8.09139C13.6745 8.18758 13.8126 8.24071 13.9556 8.24036C14.107 8.23977 14.252 8.17937 14.359 8.07234C14.4661 7.9653 14.5265 7.82029 14.5271 7.66892V5.95798C14.5273 5.94303 14.5269 5.92809 14.5259 5.91317C14.5119 5.42149 14.266 4.97503 13.9209 4.628C13.5653 4.27046 13.1018 3.98674 12.5495 3.7518C11.4447 3.28193 9.98665 3.01453 8.38246 3.01453ZM8.38246 4.16188C9.85478 4.16188 11.1843 4.42302 12.0957 4.81062C12.5513 5.00443 12.9004 5.22761 13.1086 5.43696C13.3168 5.64631 13.3797 5.8131 13.3797 5.95798C13.3797 6.10286 13.3168 6.26516 13.1086 6.47451C12.9004 6.68386 12.5513 6.91153 12.0957 7.10533C11.1843 7.49294 9.85478 7.75408 8.38246 7.75408C6.91014 7.75408 5.57948 7.49294 4.66813 7.10533C4.21246 6.91152 3.86455 6.68386 3.65635 6.47451C3.44815 6.26516 3.3852 6.10285 3.3852 5.95798C3.3852 5.8131 3.44816 5.64631 3.65635 5.43696C3.86455 5.22759 4.21246 5.00443 4.66813 4.81062C5.57948 4.42302 6.91014 4.16188 8.38246 4.16188ZM15.5993 10.1115C17.0717 10.1115 18.4012 10.3738 19.3126 10.7614C19.7682 10.9552 20.1195 11.1806 20.3277 11.39C20.5359 11.5993 20.5955 11.7628 20.5955 11.9076C20.5955 12.0524 20.5359 12.2159 20.3277 12.4253C20.1195 12.6346 19.7682 12.8612 19.3126 13.055C18.4012 13.4426 17.0717 13.7037 15.5993 13.7037C14.127 13.7037 12.7986 13.4426 11.8873 13.055C11.4316 12.8612 11.0803 12.6346 10.8721 12.4253C10.6639 12.2159 10.6032 12.0524 10.6032 11.9076C10.6032 11.7628 10.6639 11.5993 10.8721 11.39C11.0803 11.1806 11.4316 10.9552 11.8873 10.7614C12.7986 10.3738 14.127 10.1115 15.5993 10.1115ZM10.6032 13.6735C10.8525 13.8383 11.1322 13.9838 11.438 14.1138C12.5427 14.5837 13.9952 14.8511 15.5993 14.8511C17.2035 14.8511 18.6571 14.5837 19.7619 14.1138C20.0662 13.9844 20.3457 13.8396 20.5955 13.6757V15.4752C20.5955 15.62 20.5359 15.7835 20.3277 15.9928C20.1195 16.2022 19.7682 16.4287 19.3126 16.6225C18.4012 17.0101 17.0717 17.2713 15.5993 17.2713C14.127 17.2713 12.7986 17.0101 11.8873 16.6225C11.4316 16.4287 11.0803 16.2022 10.8721 15.9928C10.6639 15.7835 10.6032 15.62 10.6032 15.4752V13.6735ZM10.6032 17.2399C10.8525 17.4047 11.1322 17.5513 11.438 17.6814C12.5427 18.1512 13.9952 18.4186 15.5993 18.4186C17.2035 18.4186 18.6571 18.1512 19.7619 17.6814C20.0663 17.5519 20.3457 17.406 20.5955 17.2421V19.0427C20.5955 19.1875 20.5359 19.351 20.3277 19.5604C20.1195 19.7697 19.7682 19.9963 19.3126 20.1901C18.4012 20.5777 17.0717 20.8388 15.5993 20.8388C14.127 20.8388 12.7986 20.5777 11.8873 20.1901C11.4316 19.9963 11.0803 19.7697 10.8721 19.5604C10.6639 19.351 10.6032 19.1875 10.6032 19.0427V17.2399Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="0.449991"
                                ></path>
                            </svg>
                        </div>
                        <div className="MuiListItemText-root css-1tsvksn e1de0imv0 text-black">
                            <span
                                className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-zti6pj e1de0imv0"
                            >Bridged eligible assets</span
                            >
                        </div>
                    </div>
                    <div
                        className="hover:text-red MuiButtonBase-root MuiListItemButton-root MuiListItemButton-gutters MuiListItemButton-root MuiListItemButton-gutters e1de0imv0 css-8b1w15 e1de0imv0"
                        tabindex="0"
                        role="button"
                    >
                        <div className="MuiListItemIcon-root css-kv3wpb e1de0imv0 text-black">
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1trirmb e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3.99329 20.5V5.5C3.99329 4.95 4.18912 4.47917 4.58079 4.0875C4.97245 3.69583 5.44329 3.5 5.99329 3.5H11.9933C12.5433 3.5 13.0141 3.69583 13.4058 4.0875C13.7975 4.47917 13.9933 4.95 13.9933 5.5V12.5H14.9933C15.5433 12.5 16.0141 12.6958 16.4058 13.0875C16.7975 13.4792 16.9933 13.95 16.9933 14.5V19C16.9933 19.2833 17.0891 19.5208 17.2808 19.7125C17.4725 19.9042 17.71 20 17.9933 20C18.2766 20 18.5141 19.9042 18.7058 19.7125C18.8975 19.5208 18.9933 19.2833 18.9933 19V11.8C18.8433 11.8833 18.685 11.9375 18.5183 11.9625C18.3516 11.9875 18.1766 12 17.9933 12C17.2933 12 16.7016 11.7583 16.2183 11.275C15.735 10.7917 15.4933 10.2 15.4933 9.5C15.4933 8.96667 15.6391 8.4875 15.9308 8.0625C16.2225 7.6375 16.61 7.33333 17.0933 7.15L15.5183 5.575C15.3683 5.425 15.2933 5.25 15.2933 5.05C15.2933 4.85 15.3683 4.675 15.5183 4.525C15.6516 4.39167 15.8225 4.32083 16.0308 4.3125C16.2391 4.30417 16.4183 4.36667 16.5683 4.5L19.7433 7.6C19.9933 7.85 20.1808 8.14167 20.3058 8.475C20.4308 8.80833 20.4933 9.15 20.4933 9.5V19C20.4933 19.7 20.2516 20.2917 19.7683 20.775C19.285 21.2583 18.6933 21.5 17.9933 21.5C17.2933 21.5 16.7016 21.2583 16.2183 20.775C15.735 20.2917 15.4933 19.7 15.4933 19V14H13.9933V20.5C13.9933 20.7833 13.8975 21.0208 13.7058 21.2125C13.5141 21.4042 13.2766 21.5 12.9933 21.5H4.99329C4.70995 21.5 4.47245 21.4042 4.28079 21.2125C4.08912 21.0208 3.99329 20.7833 3.99329 20.5ZM5.99329 10.5H11.9933V5.5H5.99329V10.5ZM17.9933 10.5C18.2766 10.5 18.5141 10.4042 18.7058 10.2125C18.8975 10.0208 18.9933 9.78333 18.9933 9.5C18.9933 9.21667 18.8975 8.97917 18.7058 8.7875C18.5141 8.59583 18.2766 8.5 17.9933 8.5C17.71 8.5 17.4725 8.59583 17.2808 8.7875C17.0891 8.97917 16.9933 9.21667 16.9933 9.5C16.9933 9.78333 17.0891 10.0208 17.2808 10.2125C17.4725 10.4042 17.71 10.5 17.9933 10.5ZM5.99329 19.5H11.9933V12.5H5.99329V19.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div className="MuiListItemText-root css-1tsvksn e1de0imv0 text-black">
                            <span
                                className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-zti6pj e1de0imv0"
                            >Gas spent on Scroll</span
                            >
                        </div>
                    </div>
                </ul>
                <div className="MuiStack-root css-v5dhkk e1de0imv0">
                    <div
                        className="MuiBox-root css-1qfjxnd e1de0imv0 mb-5"
                        style={{ opacity: 1, transform: 'none' }}
                    >
                        <p
                            className="MuiTypography-root MuiTypography-body1 css-v8zeb3 e1de0imv0"
                        >
                            Your Marks
                        </p>
                        <p
                            className="MuiTypography-root MuiTypography-body1 css-iuqa1u e1de0imv0"
                        >
                            --
                        </p>

                        <ConnectWalletBtn>
                            Connect Wallet
                        </ConnectWalletBtn>

                    </div>
                    <div className="MuiStack-root css-1rwpk26 e1de0imv0">
                        <p
                            className="MuiTypography-root MuiTypography-body1 css-x8j8zi e1de0imv0"
                        >
                            Session One
                        </p>
                        <div
                            className="MuiStack-root session-section css-1hmk89c e1de0imv0"
                            id="session-1-dex"
                        >
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-e2lzl1 e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    d="M5.36624 17.25L7.68949 19.573C7.83816 19.7218 7.91149 19.8959 7.90949 20.0953C7.90766 20.2946 7.82916 20.4718 7.67399 20.627C7.51882 20.7718 7.34316 20.8468 7.14699 20.852C6.95099 20.857 6.77541 20.782 6.62024 20.627L3.12599 17.1328C3.03232 17.0391 2.96632 16.9403 2.92799 16.8365C2.88949 16.7327 2.87024 16.6205 2.87024 16.5C2.87024 16.3795 2.88949 16.2673 2.92799 16.1635C2.96632 16.0597 3.03232 15.9609 3.12599 15.8673L6.62024 12.373C6.75874 12.2347 6.93016 12.1638 7.13449 12.1605C7.33899 12.1573 7.51882 12.2282 7.67399 12.373C7.82916 12.5282 7.90674 12.7064 7.90674 12.9078C7.90674 13.1089 7.82916 13.2871 7.67399 13.4423L5.36624 15.75H19.7432C19.9561 15.75 20.1342 15.8218 20.2777 15.9655C20.4214 16.109 20.4932 16.2872 20.4932 16.5C20.4932 16.7128 20.4214 16.891 20.2777 17.0345C20.1342 17.1782 19.9561 17.25 19.7432 17.25H5.36624ZM18.6202 9.25H4.24324C4.03041 9.25 3.85224 9.17817 3.70874 9.0345C3.56507 8.891 3.49324 8.71283 3.49324 8.5C3.49324 8.28717 3.56507 8.109 3.70874 7.9655C3.85224 7.82183 4.03041 7.75 4.24324 7.75H18.6202L16.297 5.427C16.1483 5.27817 16.075 5.10408 16.077 4.90475C16.0788 4.70542 16.1573 4.52817 16.3125 4.373C16.4677 4.22817 16.6433 4.15317 16.8395 4.148C17.0355 4.143 17.2111 4.218 17.3662 4.373L20.8605 7.86725C20.9542 7.96092 21.0202 8.05967 21.0585 8.1635C21.097 8.26733 21.1162 8.3795 21.1162 8.5C21.1162 8.6205 21.097 8.73267 21.0585 8.8365C21.0202 8.94033 20.9542 9.03908 20.8605 9.13275L17.3662 12.627C17.2277 12.7653 17.0563 12.8362 16.852 12.8395C16.6475 12.8427 16.4677 12.7718 16.3125 12.627C16.1573 12.4718 16.0797 12.2936 16.0797 12.0923C16.0797 11.8911 16.1573 11.7129 16.3125 11.5578L18.6202 9.25Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <p
                                className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-9plmab e1de0imv0"
                            >
                                Decentralized Exchanges
                            </p>
                        </div>
                        <p
                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1trfhpw e1de0imv0"
                        >
                            Marks are given to users who deposit eligible assets into
                            selected DEXs’ liquidity pools. Liquidity deposits with
                            tighter ranges or more market depth are given Marks at a
                            higher rate.
                        </p>
                        <ul className="MuiList-root MuiList-padding css-2enoac e1de0imv0">
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Ambient%20Finance.png"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Ambient</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://ambient.finance/"
                                    target="_blank"
                                >Go to Ambient</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Nuri%20Exchange.jpeg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Nuri</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://www.nuri.exchange/swap"
                                    target="_blank"
                                >Go to Nuri</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Maverick%20Protocol.jpg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Maverick</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://app.mav.xyz/add-liquidity?chain=534352"
                                    target="_blank"
                                >Go to Maverick</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Vessel.jpg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Vessel</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://vessel.finance/"
                                    target="_blank"
                                >Go to Vessel</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiStack-root css-1kkt86i e1de0imv0">
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-wry2of e1de0imv0"
                                    >
                                        Others
                                    </p>
                                    <div className="MuiStack-root css-fhxiwe e1de0imv0">
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Izumi"
                                                src="https://scroll-eco-list.netlify.app/logos/iZUMi%20Finance.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Oku Trade"
                                                src="https://scroll-eco-list.netlify.app/logos/Oku%20Trade.jpeg"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="SyncSwap"
                                                src="https://scroll-eco-list.netlify.app/logos/Syncswap.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Zebra"
                                                src="https://scroll-eco-list.netlify.app/logos/Zebra.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Wombat"
                                                src="https://scroll-eco-list.netlify.app/logos/Wombat%20Exchange.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    type="button"
                                >
                                    View all protocols
                                </button>
                            </li>
                        </ul>
                        <hr
                            className="MuiDivider-root MuiDivider-fullWidth css-xu37pl e1de0imv0"
                        />
                        <div
                            className="MuiStack-root session-section css-1hmk89c e1de0imv0"
                            id="session-1-lending"
                        >
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-e2lzl1 e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <g clip-path="url(#clip0_4816_4660)">
                                    <path
                                        d="M1.99329 12.5C1.99329 13.6333 2.27662 14.6708 2.84329 15.6125C3.40995 16.5542 4.16829 17.275 5.11829 17.775C5.35162 17.9083 5.52245 18.1 5.63079 18.35C5.73912 18.6 5.74329 18.85 5.64329 19.1C5.54329 19.3667 5.36829 19.5583 5.11829 19.675C4.86829 19.7917 4.62662 19.7833 4.39329 19.65C3.09329 18.9833 2.03495 18.0208 1.21829 16.7625C0.401619 15.5042 -0.00671387 14.0833 -0.00671387 12.5C-0.00671387 10.9333 0.389119 9.525 1.18079 8.275C1.97245 7.025 3.00995 6.06667 4.29329 5.4C4.52662 5.26667 4.77245 5.25417 5.03079 5.3625C5.28912 5.47083 5.47662 5.65833 5.59329 5.925C5.70995 6.15833 5.71829 6.4 5.61829 6.65C5.51829 6.9 5.35162 7.09167 5.11829 7.225C4.16829 7.725 3.40995 8.44583 2.84329 9.3875C2.27662 10.3292 1.99329 11.3667 1.99329 12.5ZM13.9933 20.5C11.7766 20.5 9.88912 19.7208 8.33079 18.1625C6.77245 16.6042 5.99329 14.7167 5.99329 12.5C5.99329 10.2833 6.77245 8.39583 8.33079 6.8375C9.88912 5.27917 11.7766 4.5 13.9933 4.5C14.9266 4.5 15.81 4.65 16.6433 4.95C17.4766 5.25 18.235 5.66667 18.9183 6.2C19.135 6.36667 19.2433 6.58333 19.2433 6.85C19.2433 7.11667 19.1433 7.35 18.9433 7.55C18.76 7.73333 18.5308 7.83333 18.2558 7.85C17.9808 7.86667 17.7266 7.79167 17.4933 7.625C16.9933 7.25833 16.4475 6.97917 15.8558 6.7875C15.2641 6.59583 14.6433 6.5 13.9933 6.5C12.3266 6.5 10.91 7.08333 9.74329 8.25C8.57662 9.41667 7.99329 10.8333 7.99329 12.5C7.99329 14.1667 8.57662 15.5833 9.74329 16.75C10.91 17.9167 12.3266 18.5 13.9933 18.5C14.6433 18.5 15.2641 18.4042 15.8558 18.2125C16.4475 18.0208 16.9933 17.7417 17.4933 17.375C17.7266 17.2083 17.9808 17.1333 18.2558 17.15C18.5308 17.1667 18.76 17.2667 18.9433 17.45C19.1433 17.65 19.2433 17.8833 19.2433 18.15C19.2433 18.4167 19.135 18.6333 18.9183 18.8C18.235 19.3333 17.4766 19.75 16.6433 20.05C15.81 20.35 14.9266 20.5 13.9933 20.5ZM20.1933 13.5H13.9933C13.71 13.5 13.4725 13.4042 13.2808 13.2125C13.0891 13.0208 12.9933 12.7833 12.9933 12.5C12.9933 12.2167 13.0891 11.9792 13.2808 11.7875C13.4725 11.5958 13.71 11.5 13.9933 11.5H20.1933L19.2933 10.6C19.11 10.4167 19.0183 10.1833 19.0183 9.9C19.0183 9.61667 19.11 9.38333 19.2933 9.2C19.4766 9.01667 19.71 8.925 19.9933 8.925C20.2766 8.925 20.51 9.01667 20.6933 9.2L23.2933 11.8C23.4933 12 23.5933 12.2333 23.5933 12.5C23.5933 12.7667 23.4933 13 23.2933 13.2L20.6933 15.8C20.51 15.9833 20.2766 16.075 19.9933 16.075C19.71 16.075 19.4766 15.9833 19.2933 15.8C19.11 15.6167 19.0183 15.3833 19.0183 15.1C19.0183 14.8167 19.11 14.5833 19.2933 14.4L20.1933 13.5Z"
                                        fill="currentColor"
                                    ></path>
                                </g>
                                <defs>
                                    <clipPath id="clip0_4816_4660">
                                        <rect
                                            width="24"
                                            height="24"
                                            fill="currentColor"
                                            transform="translate(-0.00671387 0.5)"
                                        ></rect>
                                    </clipPath>
                                </defs>
                            </svg>
                            <p
                                className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-9plmab e1de0imv0"
                            >
                                Lending &amp; Borrowing
                            </p>
                        </div>
                        <p
                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1trfhpw e1de0imv0"
                        >
                            Marks are given to users who deposit eligible assets into
                            selected lending markets. Marks are not given for recursive
                            supplying/borrowing.
                        </p>
                        <ul className="MuiList-root MuiList-padding css-2enoac e1de0imv0">
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Aave.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Aave</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://app.aave.com/"
                                    target="_blank"
                                >Go to Aave</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/Huma.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Huma</span>
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://app.huma.finance/#/"
                                    target="_blank"
                                >Go to Huma</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-170k868 e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-eco-list.netlify.app/logos/Rho%20Markets.png"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-1tsvksn e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-1n9wgrp e1de0imv0"
                                    >Rho Markets</span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://dapp.rhomarkets.xyz/"
                                    target="_blank"
                                >Go to Rho Markets</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-lvglfj e1de0imv0"
                            >
                                <div className="MuiStack-root css-1kkt86i e1de0imv0">
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-wry2of e1de0imv0"
                                    >
                                        Others
                                    </p>
                                    <div className="MuiStack-root css-fhxiwe e1de0imv0">
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Cog Finance"
                                                src="https://scroll-eco-list.netlify.app/logos/Cog%20Finance.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Compound"
                                                src="https://scroll-eco-list.netlify.app/logos/Compound%20Finance.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Layerbank"
                                                src="https://scroll-eco-list.netlify.app/logos/LayerBank.png"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                        <div
                                            className="MuiAvatar-root MuiAvatar-square css-13fyoc3 e1de0imv0"
                                        >
                                            <img
                                                alt="Synonym"
                                                src="https://scroll-eco-list.netlify.app/logos/Synonym%20Finance.jpg"
                                                className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div></div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="--"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <button
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    type="button"
                                >
                                    View all protocols
                                </button>
                            </li>
                        </ul>
                    </div>
                    <div className="MuiStack-root css-1rwpk26 e1de0imv0">
                        <p
                            className="MuiTypography-root MuiTypography-body1 css-x8j8zi e1de0imv0"
                        >
                            Session Zero
                        </p>
                        <div
                            className="MuiStack-root session-section css-1hmk89c e1de0imv0"
                            id="session-0-assets"
                        >
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-e2lzl1 e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    d="M8.38246 3.01453C6.77827 3.01453 5.3236 3.28192 4.21882 3.75179C3.66644 3.98673 3.19847 4.27045 2.8429 4.62799C2.48733 4.98553 2.24121 5.44862 2.24121 5.95798V13.0931C2.24121 13.5831 2.47049 14.0268 2.8048 14.3771C3.13911 14.7274 3.57965 15.0099 4.10118 15.2444C5.14424 15.7132 6.5243 15.9958 8.06425 16.032C8.13959 16.0335 8.21448 16.0202 8.28465 15.9927C8.35482 15.9652 8.4189 15.9242 8.47321 15.872C8.52753 15.8197 8.57102 15.7573 8.6012 15.6883C8.63139 15.6192 8.64767 15.5449 8.64913 15.4696C8.65214 15.318 8.59502 15.1714 8.49025 15.0618C8.38548 14.9522 8.24159 14.8885 8.09002 14.8847C6.67745 14.8515 5.42095 14.5812 4.57065 14.199C4.1455 14.0079 3.82623 13.7853 3.63507 13.585C3.4439 13.3846 3.3852 13.2318 3.3852 13.0931V11.288C3.60164 11.4304 3.84125 11.5577 4.10118 11.6746C5.14424 12.1434 6.5243 12.426 8.06425 12.4623C8.21583 12.4653 8.36245 12.4081 8.47205 12.3034C8.58164 12.1986 8.64531 12.0547 8.64913 11.9031C8.65107 11.8278 8.63814 11.7528 8.61108 11.6825C8.58403 11.6121 8.54338 11.5478 8.49146 11.4932C8.43953 11.4385 8.37736 11.3947 8.30848 11.3641C8.23959 11.3335 8.16536 11.3168 8.09002 11.3149C6.67745 11.2817 5.42095 11.0114 4.57065 10.6292C4.1455 10.4381 3.82623 10.22 3.63507 10.0196C3.4439 9.81934 3.3852 9.66204 3.3852 9.52328V7.72158C3.63426 7.88552 3.91361 8.02987 4.21882 8.15968C5.3236 8.62955 6.77827 8.90143 8.38246 8.90143C9.98665 8.90143 11.4447 8.62955 12.5495 8.15968C12.8555 8.02951 13.1347 7.88496 13.3831 7.72046C13.3965 7.86291 13.4627 7.99521 13.5686 8.09139C13.6745 8.18758 13.8126 8.24071 13.9556 8.24036C14.107 8.23977 14.252 8.17937 14.359 8.07234C14.4661 7.9653 14.5265 7.82029 14.5271 7.66892V5.95798C14.5273 5.94303 14.5269 5.92809 14.5259 5.91317C14.5119 5.42149 14.266 4.97503 13.9209 4.628C13.5653 4.27046 13.1018 3.98674 12.5495 3.7518C11.4447 3.28193 9.98665 3.01453 8.38246 3.01453ZM8.38246 4.16188C9.85478 4.16188 11.1843 4.42302 12.0957 4.81062C12.5513 5.00443 12.9004 5.22761 13.1086 5.43696C13.3168 5.64631 13.3797 5.8131 13.3797 5.95798C13.3797 6.10286 13.3168 6.26516 13.1086 6.47451C12.9004 6.68386 12.5513 6.91153 12.0957 7.10533C11.1843 7.49294 9.85478 7.75408 8.38246 7.75408C6.91014 7.75408 5.57948 7.49294 4.66813 7.10533C4.21246 6.91152 3.86455 6.68386 3.65635 6.47451C3.44815 6.26516 3.3852 6.10285 3.3852 5.95798C3.3852 5.8131 3.44816 5.64631 3.65635 5.43696C3.86455 5.22759 4.21246 5.00443 4.66813 4.81062C5.57948 4.42302 6.91014 4.16188 8.38246 4.16188ZM15.5993 8.9653C13.9952 8.9653 12.5427 9.23718 11.438 9.70704C10.8856 9.94197 10.4176 10.2223 10.062 10.5799C9.70646 10.9374 9.45698 11.3982 9.45698 11.9076V15.4752V19.0427C9.45698 19.5522 9.70646 20.0129 10.062 20.3705C10.4176 20.728 10.8856 21.014 11.438 21.2489C12.5427 21.7188 13.9952 21.9851 15.5993 21.9851C17.2035 21.9851 18.6571 21.7188 19.7619 21.2489C20.3142 21.014 20.7867 20.728 21.1423 20.3705C21.4897 20.0211 21.7309 19.5719 21.7417 19.0763C21.7424 19.0651 21.7428 19.0539 21.7428 19.0427V15.4752V11.9076C21.7428 11.8964 21.742 11.8852 21.7417 11.874C21.7417 11.8737 21.7417 11.8744 21.7417 11.874C21.7309 11.3784 21.4897 10.9293 21.1423 10.5799C20.7867 10.2224 20.3142 9.94198 19.7619 9.70705C18.6571 9.23719 17.2035 8.9653 15.5993 8.9653ZM15.5993 10.1115C17.0717 10.1115 18.4012 10.3738 19.3126 10.7614C19.7682 10.9552 20.1195 11.1806 20.3277 11.39C20.5359 11.5993 20.5955 11.7628 20.5955 11.9076C20.5955 12.0524 20.5359 12.2159 20.3277 12.4253C20.1195 12.6346 19.7682 12.8612 19.3126 13.055C18.4012 13.4426 17.0717 13.7037 15.5993 13.7037C14.127 13.7037 12.7986 13.4426 11.8873 13.055C11.4316 12.8612 11.0803 12.6346 10.8721 12.4253C10.6639 12.2159 10.6032 12.0524 10.6032 11.9076C10.6032 11.7628 10.6639 11.5993 10.8721 11.39C11.0803 11.1806 11.4316 10.9552 11.8873 10.7614C12.7986 10.3738 14.127 10.1115 15.5993 10.1115ZM10.6032 13.6735C10.8525 13.8383 11.1322 13.9838 11.438 14.1138C12.5427 14.5837 13.9952 14.8511 15.5993 14.8511C17.2035 14.8511 18.6571 14.5837 19.7619 14.1138C20.0662 13.9844 20.3457 13.8396 20.5955 13.6757V15.4752C20.5955 15.62 20.5359 15.7835 20.3277 15.9928C20.1195 16.2022 19.7682 16.4287 19.3126 16.6225C18.4012 17.0101 17.0717 17.2713 15.5993 17.2713C14.127 17.2713 12.7986 17.0101 11.8873 16.6225C11.4316 16.4287 11.0803 16.2022 10.8721 15.9928C10.6639 15.7835 10.6032 15.62 10.6032 15.4752V13.6735ZM10.6032 17.2399C10.8525 17.4047 11.1322 17.5513 11.438 17.6814C12.5427 18.1512 13.9952 18.4186 15.5993 18.4186C17.2035 18.4186 18.6571 18.1512 19.7619 17.6814C20.0663 17.5519 20.3457 17.406 20.5955 17.2421V19.0427C20.5955 19.1875 20.5359 19.351 20.3277 19.5604C20.1195 19.7697 19.7682 19.9963 19.3126 20.1901C18.4012 20.5777 17.0717 20.8388 15.5993 20.8388C14.127 20.8388 12.7986 20.5777 11.8873 20.1901C11.4316 19.9963 11.0803 19.7697 10.8721 19.5604C10.6639 19.351 10.6032 19.1875 10.6032 19.0427V17.2399Z"
                                    fill="currentColor"
                                ></path>
                                <path
                                    d="M21.7417 11.874C21.742 11.8852 21.7428 11.8964 21.7428 11.9076V15.4752V19.0427C21.7428 19.0539 21.7424 19.0652 21.7417 19.0763C21.7309 19.5719 21.4897 20.0211 21.1423 20.3705C20.7867 20.728 20.3142 21.014 19.7619 21.2489C18.6571 21.7188 17.2035 21.9851 15.5993 21.9851C13.9952 21.9851 12.5427 21.7188 11.438 21.2489C10.8856 21.014 10.4176 20.728 10.062 20.3705C9.70646 20.0129 9.45698 19.5522 9.45698 19.0427V15.4752V11.9076C9.45698 11.3982 9.70646 10.9374 10.062 10.5799C10.4176 10.2223 10.8856 9.94197 11.438 9.70704C12.5427 9.23718 13.9952 8.9653 15.5993 8.9653C17.2035 8.9653 18.6571 9.23719 19.7619 9.70705C20.3142 9.94198 20.7867 10.2224 21.1423 10.5799C21.4897 10.9293 21.7309 11.3784 21.7417 11.874ZM21.7417 11.874C21.7417 11.8737 21.7417 11.8744 21.7417 11.874ZM8.38246 3.01453C6.77827 3.01453 5.3236 3.28192 4.21882 3.75179C3.66644 3.98673 3.19847 4.27045 2.8429 4.62799C2.48733 4.98553 2.24121 5.44862 2.24121 5.95798V13.0931C2.24121 13.5831 2.47049 14.0268 2.8048 14.3771C3.13911 14.7274 3.57965 15.0099 4.10118 15.2444C5.14424 15.7132 6.5243 15.9958 8.06425 16.032C8.13959 16.0335 8.21448 16.0202 8.28465 15.9927C8.35482 15.9652 8.4189 15.9242 8.47321 15.872C8.52753 15.8197 8.57102 15.7573 8.6012 15.6883C8.63139 15.6192 8.64767 15.5449 8.64913 15.4696C8.65214 15.318 8.59502 15.1714 8.49025 15.0618C8.38548 14.9522 8.24159 14.8885 8.09002 14.8847C6.67745 14.8515 5.42095 14.5812 4.57065 14.199C4.1455 14.0079 3.82623 13.7853 3.63507 13.585C3.4439 13.3846 3.3852 13.2318 3.3852 13.0931V11.288C3.60164 11.4304 3.84125 11.5577 4.10118 11.6746C5.14424 12.1434 6.5243 12.426 8.06425 12.4623C8.21583 12.4653 8.36245 12.4081 8.47205 12.3034C8.58164 12.1986 8.64531 12.0547 8.64913 11.9031C8.65107 11.8278 8.63814 11.7528 8.61108 11.6825C8.58403 11.6121 8.54338 11.5478 8.49146 11.4932C8.43953 11.4385 8.37736 11.3947 8.30848 11.3641C8.23959 11.3335 8.16536 11.3168 8.09002 11.3149C6.67745 11.2817 5.42095 11.0114 4.57065 10.6292C4.1455 10.4381 3.82623 10.22 3.63507 10.0196C3.4439 9.81934 3.3852 9.66204 3.3852 9.52328V7.72158C3.63426 7.88552 3.91361 8.02987 4.21882 8.15968C5.3236 8.62955 6.77827 8.90143 8.38246 8.90143C9.98665 8.90143 11.4447 8.62955 12.5495 8.15968C12.8555 8.02951 13.1347 7.88496 13.3831 7.72046C13.3965 7.86291 13.4627 7.99521 13.5686 8.09139C13.6745 8.18758 13.8126 8.24071 13.9556 8.24036C14.107 8.23977 14.252 8.17937 14.359 8.07234C14.4661 7.9653 14.5265 7.82029 14.5271 7.66892V5.95798C14.5273 5.94303 14.5269 5.92809 14.5259 5.91317C14.5119 5.42149 14.266 4.97503 13.9209 4.628C13.5653 4.27046 13.1018 3.98674 12.5495 3.7518C11.4447 3.28193 9.98665 3.01453 8.38246 3.01453ZM8.38246 4.16188C9.85478 4.16188 11.1843 4.42302 12.0957 4.81062C12.5513 5.00443 12.9004 5.22761 13.1086 5.43696C13.3168 5.64631 13.3797 5.8131 13.3797 5.95798C13.3797 6.10286 13.3168 6.26516 13.1086 6.47451C12.9004 6.68386 12.5513 6.91153 12.0957 7.10533C11.1843 7.49294 9.85478 7.75408 8.38246 7.75408C6.91014 7.75408 5.57948 7.49294 4.66813 7.10533C4.21246 6.91152 3.86455 6.68386 3.65635 6.47451C3.44815 6.26516 3.3852 6.10285 3.3852 5.95798C3.3852 5.8131 3.44816 5.64631 3.65635 5.43696C3.86455 5.22759 4.21246 5.00443 4.66813 4.81062C5.57948 4.42302 6.91014 4.16188 8.38246 4.16188ZM15.5993 10.1115C17.0717 10.1115 18.4012 10.3738 19.3126 10.7614C19.7682 10.9552 20.1195 11.1806 20.3277 11.39C20.5359 11.5993 20.5955 11.7628 20.5955 11.9076C20.5955 12.0524 20.5359 12.2159 20.3277 12.4253C20.1195 12.6346 19.7682 12.8612 19.3126 13.055C18.4012 13.4426 17.0717 13.7037 15.5993 13.7037C14.127 13.7037 12.7986 13.4426 11.8873 13.055C11.4316 12.8612 11.0803 12.6346 10.8721 12.4253C10.6639 12.2159 10.6032 12.0524 10.6032 11.9076C10.6032 11.7628 10.6639 11.5993 10.8721 11.39C11.0803 11.1806 11.4316 10.9552 11.8873 10.7614C12.7986 10.3738 14.127 10.1115 15.5993 10.1115ZM10.6032 13.6735C10.8525 13.8383 11.1322 13.9838 11.438 14.1138C12.5427 14.5837 13.9952 14.8511 15.5993 14.8511C17.2035 14.8511 18.6571 14.5837 19.7619 14.1138C20.0662 13.9844 20.3457 13.8396 20.5955 13.6757V15.4752C20.5955 15.62 20.5359 15.7835 20.3277 15.9928C20.1195 16.2022 19.7682 16.4287 19.3126 16.6225C18.4012 17.0101 17.0717 17.2713 15.5993 17.2713C14.127 17.2713 12.7986 17.0101 11.8873 16.6225C11.4316 16.4287 11.0803 16.2022 10.8721 15.9928C10.6639 15.7835 10.6032 15.62 10.6032 15.4752V13.6735ZM10.6032 17.2399C10.8525 17.4047 11.1322 17.5513 11.438 17.6814C12.5427 18.1512 13.9952 18.4186 15.5993 18.4186C17.2035 18.4186 18.6571 18.1512 19.7619 17.6814C20.0663 17.5519 20.3457 17.406 20.5955 17.2421V19.0427C20.5955 19.1875 20.5359 19.351 20.3277 19.5604C20.1195 19.7697 19.7682 19.9963 19.3126 20.1901C18.4012 20.5777 17.0717 20.8388 15.5993 20.8388C14.127 20.8388 12.7986 20.5777 11.8873 20.1901C11.4316 19.9963 11.0803 19.7697 10.8721 19.5604C10.6639 19.351 10.6032 19.1875 10.6032 19.0427V17.2399Z"
                                    fill="none"
                                    stroke="currentColor"
                                    stroke-width="0.449991"
                                ></path>
                            </svg>
                            <p
                                className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-9plmab e1de0imv0"
                            >
                                Bridged eligible assets
                            </p>
                        </div>
                        <p
                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1trfhpw e1de0imv0"
                        >
                            Marks are given to all eligible bridged assets since Scroll's
                            mainnet launch on October 10th, 2023, based on amount and time
                            held on Scroll.
                        </p>
                        <ul className="MuiList-root MuiList-padding css-2enoac e1de0imv0">
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/static/media/network-mainnet.4f94c02e1403c0502f29e010159e6214.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            ETH / WETH
                                        </p></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=ETH"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-tech.github.io/token-list/data/USDC/logo.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            USDC
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0x06eFdBFf2a14a7c8E15944D1F4A48F9F95F663A4"
                                            target="_blank"
                                        >0x06eF…63A4</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=USDC"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-tech.github.io/token-list/data/USDT/logo.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            USDT
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0xf55BEC9cafDbE8730f096Aa55dad6D22d44099Df"
                                            target="_blank"
                                        >0xf55B…99Df</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=USDT"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/sUSDe.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            sUSDe / USDe
                                        </p></span>
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://stargate.finance/bridge"
                                    target="_blank"
                                >Go to Stargate</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll-tech.github.io/token-list/data/PufETH/logo.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            pufETH
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0xc4d46E8402F476F269c379677C99F18E22Ea030e"
                                            target="_blank"
                                        >0xc4d4…030e</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=pufETH"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/weETH.png"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            weETH
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0x01f0a31698C4d065659b9bdC21B3610292a1c506"
                                            target="_blank"
                                        >0x01f0…c506</a
                                        ></span >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://stargate.finance/bridge"
                                    target="_blank"
                                >Go to Stargate</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/wrsETH.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            wrsETH
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0xa25b25548B4C98B0c7d3d27dcA5D5ca743d68b7F"
                                            target="_blank"
                                        >0xa25b…8b7F</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://kelpdao.xyz/restake"
                                    target="_blank"
                                >Go to Kelp</a>
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/wstETH.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            wstETH
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0xf610A9dfB7C89644979b4A0f27063E9e7d7Cda32"
                                            target="_blank"
                                        >0xf610…da32</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=wstETH"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/WBTC.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            WBTC
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0x3C1BCa5a656e69edCD0D4E36BEbb3FcDAcA60Cf1"
                                            target="_blank"
                                        >0x3C1B…0Cf1</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="/bridge?token=WBTC"
                                    target="_self"
                                >Go to native bridge</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/solvBTC.png"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            SolvBTC.b
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0x3Ba89d490AB1C0c9CC2313385b30710e838370a4"
                                            target="_blank"
                                        >0x3Ba8…70a4</a></span>
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://free.tech/"
                                    target="_blank"
                                >Go to Free</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/stone-white.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            STONE
                                        </p>
                                        <a
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways e1de0imv0 e1de0imv0 css-z5o2ut e1de0imv0"
                                            href="https://scrollscan.com/token/0x80137510979822322193FC997d400D5A6C747bf7"
                                            target="_blank"
                                        >0x8013…7bf7</a
                                        ></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://app.stakestone.io/u/bridge?n=534352"
                                    target="_blank"
                                >Go to LayerZero</a
                                >
                            </li>
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/tokens/Tranchess.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-1uwaazm e1de0imv0"
                                    >
                                            Assets on Tranchess
                                        </p>
                                        <div className="MuiStack-root css-1xhj18k e1de0imv0">
                                            <div
                                                className="MuiAvatar-root MuiAvatar-circular css-1mm627t e1de0imv0"
                                            >

                                            </div>
                                            <div
                                                className="MuiAvatar-root MuiAvatar-circular css-1mm627t e1de0imv0"
                                            >

                                            </div>
                                            <div
                                                className="MuiAvatar-root MuiAvatar-circular css-1mm627t e1de0imv0"
                                            >

                                            </div></div></span>
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <a
                                    className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1mbvmjh e1de0imv0"
                                    tabindex="0"
                                    href="https://tranchess.com"
                                    target="_blank"
                                >Go to Tranchess</a
                                >
                            </li>
                        </ul>
                        <hr
                            className="MuiDivider-root MuiDivider-fullWidth css-xu37pl e1de0imv0"
                        />
                        <div
                            className="MuiStack-root session-section css-1hmk89c e1de0imv0"
                            id="session-0-gas"
                        >
                            <svg
                                width="24"
                                height="25"
                                viewBox="0 0 24 25"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-e2lzl1 e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    d="M3.99329 20.5V5.5C3.99329 4.95 4.18912 4.47917 4.58079 4.0875C4.97245 3.69583 5.44329 3.5 5.99329 3.5H11.9933C12.5433 3.5 13.0141 3.69583 13.4058 4.0875C13.7975 4.47917 13.9933 4.95 13.9933 5.5V12.5H14.9933C15.5433 12.5 16.0141 12.6958 16.4058 13.0875C16.7975 13.4792 16.9933 13.95 16.9933 14.5V19C16.9933 19.2833 17.0891 19.5208 17.2808 19.7125C17.4725 19.9042 17.71 20 17.9933 20C18.2766 20 18.5141 19.9042 18.7058 19.7125C18.8975 19.5208 18.9933 19.2833 18.9933 19V11.8C18.8433 11.8833 18.685 11.9375 18.5183 11.9625C18.3516 11.9875 18.1766 12 17.9933 12C17.2933 12 16.7016 11.7583 16.2183 11.275C15.735 10.7917 15.4933 10.2 15.4933 9.5C15.4933 8.96667 15.6391 8.4875 15.9308 8.0625C16.2225 7.6375 16.61 7.33333 17.0933 7.15L15.5183 5.575C15.3683 5.425 15.2933 5.25 15.2933 5.05C15.2933 4.85 15.3683 4.675 15.5183 4.525C15.6516 4.39167 15.8225 4.32083 16.0308 4.3125C16.2391 4.30417 16.4183 4.36667 16.5683 4.5L19.7433 7.6C19.9933 7.85 20.1808 8.14167 20.3058 8.475C20.4308 8.80833 20.4933 9.15 20.4933 9.5V19C20.4933 19.7 20.2516 20.2917 19.7683 20.775C19.285 21.2583 18.6933 21.5 17.9933 21.5C17.2933 21.5 16.7016 21.2583 16.2183 20.775C15.735 20.2917 15.4933 19.7 15.4933 19V14H13.9933V20.5C13.9933 20.7833 13.8975 21.0208 13.7058 21.2125C13.5141 21.4042 13.2766 21.5 12.9933 21.5H4.99329C4.70995 21.5 4.47245 21.4042 4.28079 21.2125C4.08912 21.0208 3.99329 20.7833 3.99329 20.5ZM5.99329 10.5H11.9933V5.5H5.99329V10.5ZM17.9933 10.5C18.2766 10.5 18.5141 10.4042 18.7058 10.2125C18.8975 10.0208 18.9933 9.78333 18.9933 9.5C18.9933 9.21667 18.8975 8.97917 18.7058 8.7875C18.5141 8.59583 18.2766 8.5 17.9933 8.5C17.71 8.5 17.4725 8.59583 17.2808 8.7875C17.0891 8.97917 16.9933 9.21667 16.9933 9.5C16.9933 9.78333 17.0891 10.0208 17.2808 10.2125C17.4725 10.4042 17.71 10.5 17.9933 10.5ZM5.99329 19.5H11.9933V12.5H5.99329V19.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <p
                                className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-9plmab e1de0imv0"
                            >
                                Gas spent on Scroll
                            </p>
                        </div>
                        <p
                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1trfhpw e1de0imv0"
                        >
                            Marks have been given to users with more than $5 total gas
                            spent on Scroll from the mainnet launch on Oct 10th, 2023 to
                            Apr 29th, 2024 12pm UTC.
                        </p>
                        <ul className="MuiList-root MuiList-padding css-2enoac e1de0imv0">
                            <li
                                className="MuiListItem-root MuiListItem-gutters MuiListItem-padding css-3dfcdh e1de0imv0"
                            >
                                <div className="MuiListItemIcon-root css-81d0ek e1de0imv0">
                                    <div
                                        className="MuiAvatar-root MuiAvatar-square css-1iiwntp e1de0imv0"
                                    >
                                        <img
                                            src="https://scroll.io/imgs/sessions/gas.svg"
                                            className="MuiAvatar-img css-1hy9t21 e1de0imv0"
                                        />
                                    </div>
                                </div>
                                <div className="MuiListItemText-root css-c9erkg e1de0imv0">
                                    <span
                                        className="MuiTypography-root MuiTypography-body1 MuiListItemText-primary css-ejtg9r e1de0imv0"
                                    ><p
                                        className="MuiTypography-root MuiTypography-body1 css-kdlgfm e1de0imv0"
                                    >
                                            -- ETH
                                        </p>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-q2gkfq e1de0imv0"
                                        >
                                            Gas spent
                                        </p></span
                                    >
                                </div>
                                <div
                                    className="MuiBox-root css-c1cd8j e1de0imv0"
                                    aria-label="-1"
                                >
                                    <div className="MuiStack-root css-ke83yt e1de0imv0">
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-q3em8a e1de0imv0"
                                        >
                                            --
                                        </p>
                                    </div>
                                </div>
                                <div className="MuiBox-root css-933q6r e1de0imv0">
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-mpe7r0 e1de0imv0"
                                    >
                                        Cut-off time
                                    </p>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-xrtzlz e1de0imv0"
                                    >
                                        Apr 29th, 12pm UTC
                                    </p>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div className="MuiBox-root css-8sgdow e1de0imv0">
                        <a
                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="https://scrollzkp.notion.site/Scroll-Sessions-FAQ-498f70eb33b94d539746a43256956517"
                        ><div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-4uazma-card e1de0imv0"
                        >
                                <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                    <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                        <svg
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-5m2n53 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <g clip-path="url(#clip0_1438_4428)">
                                                <path
                                                    d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1438_4428">
                                                    <rect width="23" height="23" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-wvt9bz e1de0imv0"
                                    >
                                        <svg
                                            width="24"
                                            height="25"
                                            viewBox="0 0 24 25"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18gfw9k e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M19.3157 9.4958C18.7928 9.4958 18.3811 9.91861 18.3811 10.4304C18.3811 10.9423 18.8039 11.3651 19.3157 11.3651C20.8623 11.3651 22.1307 12.6224 22.1307 14.1801V21.6794C22.1307 22.1912 21.7079 22.614 21.1961 22.614C21.0292 22.614 20.8734 22.5695 20.7288 22.4916L17.9138 20.8671C17.7691 20.7893 17.6133 20.7448 17.4465 20.7448H11.8164C10.2698 20.7448 9.00139 19.4875 9.00139 17.9297V16.0493C9.00139 15.5264 8.57858 15.1147 8.06676 15.1147C7.55494 15.1147 7.13213 15.5375 7.13213 16.0493V17.9297C7.13213 20.5111 9.23505 22.614 11.8164 22.614H17.1905L19.783 24.1161C20.2058 24.3609 20.6954 24.4944 21.185 24.4944C22.7316 24.4944 24 23.2371 24 21.6794V14.1801C24 11.5987 21.8971 9.4958 19.3157 9.4958Z"
                                                fill="#101010"
                                            ></path>
                                            <path
                                                d="M2.81502 15.5041C3.30459 15.5041 3.79416 15.3706 4.21697 15.1258L6.80946 13.6238H12.1836C14.7649 13.6238 16.8679 11.5208 16.8679 8.93947V5.18982C16.8679 2.60846 14.7649 0.505537 12.1836 0.505537H4.68428C2.10292 0.494411 0 2.59733 0 5.17869V12.678C0 14.2246 1.2573 15.493 2.81502 15.493V15.5041ZM1.88039 5.18982C1.88039 3.64323 3.13769 2.3748 4.69541 2.3748H12.1947C13.7413 2.3748 15.0097 3.6321 15.0097 5.18982V8.93947C15.0097 10.4861 13.7524 11.7545 12.1947 11.7545H6.56467C6.39777 11.7545 6.242 11.799 6.09736 11.8769L3.28234 13.5014C3.13769 13.5792 2.98192 13.6238 2.81502 13.6238C2.3032 13.6238 1.88039 13.2009 1.88039 12.6891V5.18982Z"
                                                fill="#101010"
                                            ></path>
                                            <path
                                                d="M4.68428 7.99371C5.20047 7.99371 5.61891 7.57527 5.61891 7.05908C5.61891 6.5429 5.20047 6.12445 4.68428 6.12445C4.1681 6.12445 3.74965 6.5429 3.74965 7.05908C3.74965 7.57527 4.1681 7.99371 4.68428 7.99371Z"
                                                fill="#101010"
                                            ></path>
                                            <path
                                                d="M8.44506 7.99371C8.96124 7.99371 9.37969 7.57527 9.37969 7.05908C9.37969 6.5429 8.96124 6.12445 8.44506 6.12445C7.92888 6.12445 7.51043 6.5429 7.51043 7.05908C7.51043 7.57527 7.92888 7.99371 8.44506 7.99371Z"
                                                fill="#101010"
                                            ></path>
                                            <path
                                                d="M12.1947 7.99371C12.7109 7.99371 13.1293 7.57527 13.1293 7.05908C13.1293 6.5429 12.7109 6.12445 12.1947 6.12445C11.6785 6.12445 11.2601 6.5429 11.2601 7.05908C11.2601 7.57527 11.6785 7.99371 12.1947 7.99371Z"
                                                fill="#101010"
                                            ></path>
                                        </svg>
                                        FAQ
                                    </p>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-7ir6ku e1de0imv0"
                                    >
                                        You will find most answers here
                                    </p>
                                </div>
                            </div></a><a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://tally.so/r/3lNV1B"
                            ><div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-4uazma-card e1de0imv0"
                            >
                                <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                    <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                        <svg
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-5m2n53 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <g clip-path="url(#clip0_1438_4428)">
                                                <path
                                                    d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1438_4428">
                                                    <rect width="23" height="23" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-wvt9bz e1de0imv0"
                                    >
                                        <svg
                                            width="24"
                                            height="23"
                                            viewBox="0 0 24 23"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18gfw9k e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <g clip-path="url(#clip0_3222_1892)">
                                                <path
                                                    d="M10.8339 22.1298C10.1514 22.1298 9.50816 21.863 9.061 21.4002C8.65307 20.9923 8.40203 20.4588 8.34712 19.894C7.77444 19.8391 7.24099 19.588 6.83306 19.1722C6.43297 18.7722 6.18193 18.2622 6.11917 17.7052C5.57787 17.6503 5.0758 17.4071 4.68356 17.0227C3.94614 16.2853 3.78139 15.14 4.25209 14.2221L1.8594 11.9628C-0.627432 9.47596 -0.627432 5.45938 1.84371 2.99608C3.04398 1.79581 4.62864 1.13684 6.32314 1.13684C8.01763 1.13684 9.6023 1.78797 10.7947 2.98039L11.6812 3.84333L12.6932 2.83134C14.0896 1.54478 15.7056 0.870117 17.3609 0.870117C19.934 0.870117 22.3816 2.51754 23.4564 4.96515C24.5233 7.38922 24.0212 10.0016 22.0757 12.1354L22.1463 12.206C23.1347 13.1944 23.1347 14.7948 22.1463 15.7832C21.7148 16.2147 21.1735 16.4736 20.593 16.5285C20.5381 17.109 20.287 17.6503 19.8634 18.074C19.4163 18.5211 18.8593 18.78 18.2631 18.8271C18.2003 19.3997 17.9414 19.9253 17.5413 20.3254C17.0471 20.8197 16.4117 21.0785 15.737 21.0785C15.0623 21.0785 14.4269 20.8197 13.9484 20.3411L13.8072 20.1999L12.599 21.408C12.1519 21.8709 11.5086 22.1376 10.8261 22.1376L10.8339 22.1298ZM11.0065 16.3089C11.2497 16.3089 11.4851 16.403 11.6577 16.5834C11.8302 16.7639 11.9322 16.9914 11.9322 17.2346C11.9322 17.4777 11.8381 17.7131 11.6577 17.8857L10.3789 19.1644C10.2534 19.2899 10.1828 19.4547 10.1828 19.6272C10.1828 19.7998 10.2534 19.9646 10.3711 20.0901C10.4888 20.2156 10.6535 20.2784 10.8339 20.2784C11.0144 20.2784 11.1791 20.2078 11.289 20.0901L12.6069 18.7722C12.1754 17.8386 12.3872 16.6462 13.1247 15.9323C13.3208 15.7362 13.5404 15.5714 13.7758 15.4538C13.2423 14.4967 13.4071 13.1944 14.1994 12.4335C14.6858 11.9471 15.3212 11.6804 15.9959 11.6804C16.2469 11.6804 16.4901 11.7196 16.7255 11.7902C16.851 11.4843 17.0393 11.194 17.2746 10.9586C17.7374 10.4723 18.3886 10.2055 19.0789 10.2055C19.7144 10.2055 20.3106 10.433 20.7577 10.8331C22.5699 8.97389 22.5542 5.98498 20.7107 4.14928C19.8085 3.24712 18.6161 2.75289 17.3452 2.75289C16.0743 2.75289 14.8741 3.24712 13.9797 4.14928L12.9834 5.14558L15.0231 7.12249C15.533 7.60103 15.839 8.29923 15.839 9.05233C15.839 9.7976 15.5566 10.5036 15.0467 10.99C14.5681 11.4842 13.8699 11.7745 13.1325 11.7745C12.3951 11.7745 11.6969 11.4843 11.2105 10.9822L10.5751 10.3467L5.97012 14.9517C5.86813 15.0537 5.81322 15.1949 5.81322 15.3361C5.81322 15.4773 5.86813 15.6107 5.97012 15.7048C6.07995 15.8146 6.21331 15.8695 6.35452 15.8695C6.49573 15.8695 6.63693 15.8146 6.73892 15.7126L8.10393 14.3476C8.27652 14.175 8.51186 14.0731 8.75505 14.0731C8.99824 14.0731 9.23359 14.1672 9.40618 14.3476C9.57877 14.5281 9.68075 14.7556 9.68075 14.9988C9.68075 15.242 9.58661 15.4773 9.40618 15.6499L8.11177 16.9443C7.86074 17.2032 7.86074 17.6111 8.11177 17.87C8.22945 17.9955 8.39419 18.0583 8.57462 18.0583C8.75505 18.0583 8.9198 17.9877 9.02962 17.87L10.3162 16.5834C10.4888 16.4108 10.7241 16.3089 10.9673 16.3089H11.0065ZM14.9368 17.0384C14.7564 17.0384 14.5838 17.109 14.4583 17.2346C14.3171 17.3758 14.2465 17.5483 14.2465 17.7288C14.2465 17.9092 14.3171 18.0896 14.4426 18.2073L15.2663 19.031C15.3918 19.1565 15.5644 19.2272 15.7448 19.2272C15.9253 19.2272 16.0979 19.1565 16.2234 19.031C16.3724 18.882 16.443 18.7172 16.443 18.5368C16.443 18.3564 16.3724 18.1838 16.2469 18.0504L15.4311 17.2346C15.3055 17.109 15.1329 17.0384 14.9525 17.0384H14.9368ZM16.0116 13.5318C15.8311 13.5318 15.6586 13.6024 15.533 13.7279C15.3918 13.8691 15.3212 14.0417 15.3212 14.2221C15.3212 14.4025 15.3918 14.583 15.5173 14.7007L17.5884 16.7717C17.7139 16.8972 17.8865 16.9678 18.0669 16.9678C18.2474 16.9678 18.4121 16.8972 18.5376 16.7717C18.6867 16.6305 18.7573 16.4579 18.7573 16.2696C18.7573 16.0814 18.6867 15.9088 18.5612 15.7911L16.498 13.72C16.3724 13.5945 16.1999 13.5239 16.0194 13.5239L16.0116 13.5318ZM19.1025 12.0491C18.9142 12.0491 18.7416 12.1197 18.6239 12.2452C18.4749 12.3864 18.4043 12.559 18.4043 12.7473C18.4043 12.9356 18.4749 13.1081 18.6004 13.2258L19.8713 14.4967C19.9968 14.6222 20.1694 14.6928 20.3498 14.6928C20.5302 14.6928 20.7028 14.6222 20.8283 14.4967C20.9774 14.3476 21.048 14.1829 21.048 14.0025C21.048 13.822 20.9774 13.6494 20.8519 13.5161L19.5888 12.253C19.4633 12.1275 19.2907 12.0569 19.1103 12.0569L19.1025 12.0491ZM6.32314 2.98824C5.12287 2.98824 4.00105 3.45109 3.1538 4.29833C2.30656 5.13774 1.84371 6.25955 1.84371 7.45982C1.84371 8.65225 2.30656 9.78191 3.1538 10.6213L5.49158 12.8336L9.42187 8.90328C9.71997 8.58949 10.1514 8.4169 10.6064 8.4169C11.0615 8.4169 11.4929 8.59733 11.791 8.91113L12.552 9.67208C12.7638 9.88389 12.9991 9.92312 13.156 9.92312C13.3914 9.92312 13.6189 9.82898 13.7836 9.66424C13.8935 9.55441 14.0268 9.35828 14.0268 9.06018C14.0268 8.83268 13.9327 8.61302 13.7601 8.44828L9.50816 4.31402C8.66091 3.45893 7.53125 2.99608 6.33098 2.99608L6.32314 2.98824Z"
                                                    fill="#101010"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_3222_1892">
                                                    <rect
                                                        width="24.0054"
                                                        height="21.2596"
                                                        fill="white"
                                                        transform="translate(0.000244141 0.870117)"
                                                    ></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                        Support
                                    </p>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-7ir6ku e1de0imv0"
                                    >
                                        Marks are wrong or missing? Tell us
                                    </p>
                                </div>
                            </div></a>
                        <a
                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                            rel="noopener noreferrer"
                            target="_blank"
                            href="/sessions-terms-of-use"
                        ><div
                            className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-4uazma-card e1de0imv0"
                        >
                                <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                    <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                        <svg
                                            width="23"
                                            height="23"
                                            viewBox="0 0 23 23"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-5m2n53 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <g clip-path="url(#clip0_1438_4428)">
                                                <path
                                                    d="M23 0V17.5449L20.0307 14.5756V5.01873C13.9652 10.9103 8.42164 17.3266 2.18206 23L0 20.8621C6.19815 15.1888 11.6947 8.86081 17.7189 3.01069H8.46583L5.45515 0H23Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                            <defs>
                                                <clipPath id="clip0_1438_4428">
                                                    <rect width="23" height="23" fill="white"></rect>
                                                </clipPath>
                                            </defs>
                                        </svg>
                                    </div>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-wvt9bz e1de0imv0"
                                    >
                                        <svg
                                            width="24"
                                            height="19"
                                            viewBox="0 0 24 19"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-18gfw9k e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                            <path
                                                d="M22.1576 1.95063V14.0706H14.9859C14.28 14.0706 13.56 14.2612 12.9247 14.6636V4.01181C12.9247 2.87534 13.8494 1.95063 14.9859 1.95063H22.1576ZM1.84235 1.95063H9.02118C10.1576 1.95063 11.0824 2.87534 11.0824 4.01181V14.6636C10.4753 14.2895 9.76235 14.0706 9.02118 14.0706H1.84235V1.95063ZM24 3.0871V1.02592C24 0.517688 23.5906 0.108276 23.0824 0.108276H14.9859C13.7929 0.108276 12.7129 0.651806 12 1.49886C11.2659 0.62357 10.1718 0.108276 9.01412 0.108276H0.917647C0.409412 0.108276 0 0.517688 0 1.02592V14.9883C0 15.4965 0.409412 15.913 0.917647 15.913H9.01412C10.1506 15.913 11.0753 16.8377 11.0753 17.9742C11.0753 18.4824 11.4847 18.8918 11.9929 18.8918C12.5012 18.8918 12.9106 18.4824 12.9106 17.9742C12.9106 16.8377 13.8353 15.913 14.9718 15.913H23.0682C23.5765 15.913 23.9859 15.5036 23.9859 14.9953V3.0871H24Z"
                                                fill="black"
                                            ></path>
                                            <path
                                                d="M4.94824 6.97651C4.46118 6.97651 4.06588 6.58122 4.06588 6.09416C4.06588 5.6071 4.46118 5.21181 4.94824 5.21181H7.53882C8.02588 5.21181 8.42118 5.6071 8.42118 6.09416C8.42118 6.58122 8.02588 6.97651 7.53882 6.97651H4.94824Z"
                                                fill="black"
                                            ></path>
                                            <path
                                                d="M4.94824 10.993C4.46118 10.993 4.06588 10.5977 4.06588 10.1106C4.06588 9.62357 4.46118 9.22828 4.94824 9.22828H7.53882C8.02588 9.22828 8.42118 9.62357 8.42118 10.1106C8.42118 10.5977 8.02588 10.993 7.53882 10.993H4.94824Z"
                                                fill="black"
                                            ></path>
                                            <path
                                                d="M16.4541 6.97651C15.9671 6.97651 15.5718 6.58122 15.5718 6.09416C15.5718 5.6071 15.9671 5.21181 16.4541 5.21181H19.0447C19.5318 5.21181 19.9271 5.6071 19.9271 6.09416C19.9271 6.58122 19.5318 6.97651 19.0447 6.97651H16.4541Z"
                                                fill="black"
                                            ></path>
                                            <path
                                                d="M16.4541 10.993C15.9671 10.993 15.5718 10.5977 15.5718 10.1106C15.5718 9.62357 15.9671 9.22828 16.4541 9.22828H19.0447C19.5318 9.22828 19.9271 9.62357 19.9271 10.1106C19.9271 10.5977 19.5318 10.993 19.0447 10.993H16.4541Z"
                                                fill="black"
                                            ></path>
                                        </svg>
                                        Sessions’ Terms of Use
                                    </p>
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-7ir6ku e1de0imv0"
                                    >
                                        All legal things
                                    </p>
                                </div>
                            </div>
                        </a>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Sessions
