import React from 'react'
import "./css/ecosystem.css"

// slider import form react slick
import Slider from 'react-slick';

//imports for react spring animations
import { useSpring, animated } from 'react-spring'

import Button from '../components/button/Button.jsx'


//custom component for number animation using react spring
//counter animation
function Number({ n }) {
    const { number } = useSpring({
        from: { number: 0 },
        number: n,
        delay: 200,
        config: { mass: 1, tension: 20, friction: 10 },
    })
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>
}



export default function Ecosystem() {
    //custom CSS edits have been made to the slider
    //to find the custom css go to "index.css"
    //slider settings
    var settings = {
        accessibility: true,
        arrows: false,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 2,
        autoplay: true,
        autoplaySpeed: 2000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div
                    className="MuiContainer-root MuiContainer-maxWidthLg css-1ckcl6e e1de0imv0"
                >
                    <div className="MuiStack-root css-dvxtzn e1de0imv0">
                        <p
                            className="text-black text-center tsp-bold text-8xl"
                        >
                            An Ecosystem <br />Forever in Motion
                        </p>
                        <div className="MuiStack-root css-1fbu92l e1de0imv0 flex flex-col sm:flex-row">
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Total value locked
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0 flex items-center justify-center"
                                >
                                    <Number n={1} /> . <Number n={20} />B
                                </p>
                            </div>
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Transaction count
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0 flex items-center justify-center"
                                >
                                    <Number n={90} />.<Number n={30} />M
                                </p>
                            </div>
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Batches settled to L1
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0 flex items-center justify-center tsp-bold"
                                >
                                    <Number n={326} />,<Number n={563} />
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root css-yib3zg e1de0imv0">
                <div className='md:hidden h-full'>
                    <img className='h-full w-full object-cover' src="https://scroll.io/imgs/ecosystem/new-ecosystem-bg-mobile.svg" alt="ecosystem" />
                </div>
                <div className='hidden md:block h-full'>
                    <img className='h-full w-full object-cover' src="https://scroll.io/imgs/ecosystem/new-ecosystem-bg.svg" alt="ecosystem" />
                </div>
            </div>
            <div
                className="MuiBox-root css-1p60uw0 e1de0imv0"
                id="ecosystem-highlights"
            >
                <div
                    className="MuiContainer-root MuiContainer-maxWidthLg css-17ty2si e1de0imv0"
                >
                    <div className="MuiStack-root css-1ajeheq e1de0imv0">
                        <p
                            className="MuiTypography-root MuiTypography-body1 css-1c8cby2 e1de0imv0"
                        >
                            Ecosystem highlights
                        </p>
                      <Button>Read More</Button>
                    </div>
                    <div className="swiper swiper-initialized swiper-horizontal css-hfpyip e1de0imv0 swiper-backface-hidden" >
                        <div className='slider-carousel'>
                            <Slider {...settings}>
                                <div
                                    className="swiper-slide swiper-slide-prev"
                                    style={{ width: "446.667px", marginRight: "30px" }}
                                >
                                    <div className="e1de0imv0 MuiBox-root css-o1l2wo e1de0imv0">
                                        <picture className="css-1192dt e1de0imv0"
                                        ><source type="image/webp" />
                                            <img
                                                alt="img"
                                                src="https://scroll.ghost.io/content/images/2024/09/Xspace-banner_Alchemy-x-Scroll-_1024_512.png"
                                            /></picture>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-y6qj4t e1de0imv0"
                                        >
                                            Alchemy x Scroll: Supercharge Your Scroll Development
                                            with Alchemy's Web3 Suite
                                        </p>
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 e1de0imv0 css-1ecaicd e1de0imv0"
                                            tabIndex="0"
                                            type="button"
                                        >
                                            Read<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg
                                                ></span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-active"
                                    style={{ width: "446.667px", marginRight: "30px" }}
                                >
                                    <div className="e1de0imv0 MuiBox-root css-o1l2wo e1de0imv0">
                                        <picture className="css-1192dt e1de0imv0"
                                        ><source type="image/webp" />
                                            <img
                                                alt="img"
                                                src="https://scroll.ghost.io/content/images/2024/09/Xspace-banner_0x-x-Scroll_1024_512.png"
                                            /></picture>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-y6qj4t e1de0imv0"
                                        >
                                            0x x Scroll: Serious Swaps for Serious Onchain Apps
                                        </p>
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 e1de0imv0 css-1ecaicd e1de0imv0"
                                            tabIndex="0"
                                            type="button"
                                        >
                                            Read<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg
                                                ></span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide swiper-slide-next"
                                    style={{ width: "446.667px", marginRight: "30px" }}
                                >
                                    <div className="e1de0imv0 MuiBox-root css-o1l2wo e1de0imv0">
                                        <picture className="css-1192dt e1de0imv0"
                                        ><source type="image/webp" />
                                            <img
                                                alt="img"
                                                src="https://scroll.ghost.io/content/images/2024/08/Xspace-cover_Kaskade-x-Scroll-_1028_538-2.jpg"
                                            /></picture>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-y6qj4t e1de0imv0"
                                        >
                                            Kaskade x Scroll: A Leap Forward in DeFi
                                        </p>
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 e1de0imv0 css-1ecaicd e1de0imv0"
                                            tabIndex="0"
                                            type="button"
                                        >
                                            Read<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg
                                                ></span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    style={{ width: "446.667px", marginRight: "30px" }}
                                >
                                    <div className="e1de0imv0 MuiBox-root css-o1l2wo e1de0imv0">
                                        <picture className="css-1192dt e1de0imv0"
                                        ><source type="image/webp" />
                                            <img
                                                alt="img"
                                                src="https://scroll.ghost.io/content/images/2024/08/Xspace-cover_Maverick-x-Scrol_1028_538.jpg"
                                            /></picture>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-y6qj4t e1de0imv0"
                                        >
                                            Maverick x Scroll: A New Era of Efficient and Composable
                                            DeFi
                                        </p>
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 e1de0imv0 css-1ecaicd e1de0imv0"
                                            tabIndex="0"
                                            type="button"
                                        >
                                            Read<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg
                                                ></span>
                                        </button>
                                    </div>
                                </div>
                                <div
                                    className="swiper-slide"
                                    style={{ width: "446.667px", marginRight: "30px" }}
                                >
                                    <div className="e1de0imv0 MuiBox-root css-o1l2wo e1de0imv0">
                                        <picture className="css-1192dt e1de0imv0"
                                        ><source type="image/webp" />
                                            <img
                                                alt="img"
                                                src="https://scroll.ghost.io/content/images/2024/08/Xspace-cover_Ethena-x-Scroll_1028_538.jpg"
                                            /></picture>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-y6qj4t e1de0imv0"
                                        >
                                            Ethena x Scroll: Empowering Financial Innovation with
                                            USDe
                                        </p>
                                        <button
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 e1de0imv0 css-1ecaicd e1de0imv0"
                                            tabIndex="0"
                                            type="button"
                                        >
                                            Read<span
                                                className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                            ><svg
                                                width="14"
                                                height="14"
                                                viewBox="0 0 14 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg
                                                ></span>
                                        </button>
                                    </div>
                                </div>
                            </Slider>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root css-14i99rr e1de0imv0 pb-20">
                <div
                    className="MuiContainer-root MuiContainer-maxWidthLg css-1oystyc e1de0imv0"
                >
                    <div className="MuiStack-root css-1ajeheq e1de0imv0">
                        <p
                            className="MuiTypography-root MuiTypography-body1 ecosystem-protocols-title css-1d9tm4p e1de0imv0"
                        >
                            Browse all protocols
                        </p>
                        <div className="MuiBox-root css-14kbqku-wrapper e1de0imv0">
                            <span
                                className="MuiButtonBase-root Mui-disabled MuiIconButton-root Mui-disabled MuiIconButton-sizeMedium e1de0imv0 css-wgwcyq-icon e1de0imv0"
                                tabIndex="-1"
                                role="button"
                                aria-disabled="true"
                            ><svg
                                fill="none"
                                height="16"
                                viewBox="0 0 21 16"
                                width="21"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1jbxkcd e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                    <path
                                        d="m21 8.00267-8.3996 7.99733v-2.7067l4.5767-4.35752c-5.7251-.08013-11.45204.31876-17.1565267.05877l-.02057369-1.96951c5.68391039.23862 11.34730039-.1389 17.03120039-.06055l-4.4308-4.21858v-2.74591055l8.3996 7.99733055z"
                                        fill="currentColor"
                                    ></path></svg
                                ></span>
                            <div className="css-fs25ky-mask" style={{ width: "4.8rem" }}></div>
                            <a
                                className="MuiButtonBase-root css-6k4tt-button e1de0imv0"
                                tabIndex="0"
                                href="https://tally.so/r/waxLBW"
                                target="_blank"
                            >Get in touch
                            </a>
                        </div>
                    </div>
                    <div
                        className="MuiBox-root css-1u15mi4-root e1de0imv0"
                        classes="[object Object]"
                        id="ecosystem-protocols"
                    >
                        <ul
                            className="MuiList-root ecosystem-protocols-category MuiList-padding css-bh3jla-menuListRoot e1de0imv0"
                            role="menu"
                            tabIndex="-1"
                        >
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters Mui-selected MuiMenuItem-root MuiMenuItem-gutters Mui-selected e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="0"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    All categories
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Community
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    DeFi
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Gaming
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Infra
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    NFT
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Privacy
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Social
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Tooling
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Wallet
                                </p>
                            </li>
                            <li
                                className="MuiButtonBase-root MuiMenuItem-root MuiMenuItem-gutters MuiMenuItem-root MuiMenuItem-gutters e1de0imv0 css-1a3ck2k-menuItemRoot-menuItemRoot e1de0imv0"
                                tabIndex="-1"
                                role="menuitem"
                            >
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-sjitvl e1de0imv0"
                                >
                                    Bridge
                                </p>
                            </li>
                        </ul>
                        <div className="MuiStack-root css-uk0w55 e1de0imv0">
                            <svg
                                width="20"
                                height="20"
                                viewBox="0 0 20 20"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-3mclz5 e1de0imv0"
                                focusable="false"
                                aria-hidden="true"
                            >
                                <path
                                    fill-rule="evenodd"
                                    clip-rule="evenodd"
                                    d="M0 8.32749C0 3.73133 3.72139 0 8.31988 0C12.9172 0 16.6474 3.73016 16.6474 8.32749C16.6474 10.3052 15.958 12.127 14.8032 13.5559L19.7435 18.503C20.0858 18.8458 20.0854 19.4012 19.7426 19.7435C19.3998 20.0858 18.8444 20.0854 18.5021 19.7426L12.9752 14.2081C12.633 13.8655 12.6332 13.3104 12.9756 12.968C14.1624 11.7813 14.893 10.1396 14.893 8.32749C14.893 4.69908 11.9483 1.75439 8.31988 1.75439C4.69264 1.75439 1.75439 4.69791 1.75439 8.32749C1.75439 11.9559 4.69908 14.9006 8.32749 14.9006C8.76775 14.9006 9.2059 14.8538 9.62805 14.7721C10.1037 14.6801 10.5639 14.991 10.6559 15.4666C10.748 15.9423 10.4371 16.4025 9.96142 16.4945C9.44088 16.5953 8.89073 16.655 8.32749 16.655C3.73016 16.655 0 12.9248 0 8.32749Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                            <div
                                className="MuiInputBase-root MuiInputBase-colorPrimary css-1ektlj e1de0imv0"
                            >
                                <input
                                    placeholder="Search"
                                    type="text"
                                    className="MuiInputBase-input css-1jd0xi6 e1de0imv0"
                                    value=""
                                />
                            </div>
                        </div>
                        <div
                            className="MuiInputBase-root MuiInput-root MuiInputBase-colorPrimary e1de0imv0 css-mo9tg3-root e1de0imv0"
                        >
                            <div
                                tabIndex="0"
                                role="button"
                                aria-expanded="false"
                                aria-haspopup="listbox"
                                className="MuiSelect-select MuiSelect-standard MuiInputBase-input MuiInput-input e1de0imv0 css-1q12ur3-select e1de0imv0"
                            >
                                <div className="MuiStack-root css-1iwoqsn e1de0imv0">
                                    <p
                                        className="MuiTypography-root MuiTypography-body1 css-hnxnij e1de0imv0"
                                    >
                                        All networks
                                    </p>
                                </div>
                            </div>
                            <input
                                aria-invalid="false"
                                aria-hidden="true"
                                tabIndex="-1"
                                className="MuiSelect-nativeInput css-1k3x8v3 e1de0imv0"
                                value="All networks"
                            /><svg
                                width="14"
                                height="8"
                                viewBox="0 0 14 8"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                                className="MuiSelect-icon MuiSelect-iconStandard css-i8gbzu-icon e1de0imv0"
                            >
                                <path
                                    d="M8.31172 7.5L5.68828 7.5L3.20406e-07 0.5L2.62031 0.500001L7.02504 5.92923C8.50894 4.10606 9.74553 2.32317 11.3766 0.500001L14 0.500002C11.8242 2.83333 10.4875 5.16667 8.31172 7.5Z"
                                    fill="currentColor"
                                ></path>
                            </svg>
                        </div>
                        <div
                            aria-label="grid"
                            aria-readonly="true"
                            className="ReactVirtualized__Grid ReactVirtualized__List css-1mjk63h-listRoot"
                            role="grid"
                            tabIndex="0"
                            style={{
                                boxSizing: 'border-box',
                                direction: 'ltr',
                                height: 'auto',
                                position: 'relative',
                                width: '100%',
                                willChange: 'transform',
                                overflow: 'auto'
                            }}
                        >
                            <div
                                className="ReactVirtualized__Grid__innerScrollContainer"
                                role="rowgroup"
                                style={{
                                    width: '100%',
                                    height: '1560px',
                                    maxWidth: '100%',
                                    maxHeight: '1560px',
                                    overflow: 'hidden',
                                    position: 'relative',
                                }}
                            >
                                <div
                                    className=""
                                    style={{
                                        height: '156px',
                                        left: '0px',
                                        position: 'absolute',
                                        top: '0px',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Aave"
                                                src="https://scroll-eco-list.netlify.app/logos/Aave.svg"
                                                alt="Aave"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Aave
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/aave"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">DeFi</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Aave is a non-custodial, open-sourced decentralized
                                            liquidity protocol that enables people to supply and
                                            borrow crypto assets.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}>
                                            <span className="LinesEllipsis-unit">Aave</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">a</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">non</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">custodial</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">open</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">sourced</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">decentralized</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">liquidity</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">protocol</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">that</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">enables</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">people</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">supply</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">borrow</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">crypto</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">assets</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: 'none',
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://aave.com/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: '156px',
                                        left: '0px',
                                        position: 'absolute',
                                        top: '156px',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Lido"
                                                src="https://scroll-eco-list.netlify.app/logos/Lido.jpg"
                                                alt="Lido"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Lido
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/LidoFinance"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">DeFi</span>
                                            </div>
                                        </div>
                                        <div
                                            className="LinesEllipsis LinesEllipsis--clamped css-qielvw-desc"
                                        >
                                            Lido is the name of a family of open-source
                                            peer-to-system software tools deployed and functioning
                                            on the Ethereum, Solana, and Polygon blockchain
                                            networks. The software enables users to<span
                                                className="LinesEllipsis-ellipsis"
                                            > ... <button
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                                rel="noopener noreferrer"
                                                target=""
                                            >
                                                    More
                                                </button></span
                                            >
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Lido</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">name</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">of</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">a</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">family</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">of</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">open</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">source</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">peer</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">system</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">software</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">tools</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">deployed</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">functioning</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">on</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Ethereum</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Solana</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Polygon</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">blockchain</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">networks</span
                                            ><span className="LinesEllipsis-unit">.</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">The</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">software</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">enables</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">users</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-ellipsis"
                                            > ... <button
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                                rel="noopener noreferrer"
                                                target=""
                                            >
                                                    More
                                                </button></span
                                            >
                                        </div>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: 'none'
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://stake.lido.fi/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: '156px',
                                        left: '0px',
                                        position: 'absolute',
                                        top: '312px',
                                        width: '100%'
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Ankr"
                                                src="https://scroll-eco-list.netlify.app/logos/Ankr.png"
                                                alt="Ankr"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Ankr
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/ankr"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">Infrastructure</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Ankr’s globally distributed node infrastructure allows
                                            us to build the best possible multi-chain tools as a
                                            foundational layer for Web3, DeFi, and the crypto
                                            economy.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                    BlinkMacSystemFont, Roboto,
                                                    "Helvetica Neue", "Segoe UI",
                                                    Arial, "sans-serif",
                                                    "Apple Color Emoji",
                                                    "Segoe UI Emoji",
                                                    "Segoe UI Symbol",
                                                    "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Ankr</span
                                            ><span className="LinesEllipsis-unit">’</span
                                            ><span className="LinesEllipsis-unit">s</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">globally</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">distributed</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">node</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">infrastructure</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">allows</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">us</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">build</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">best</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">possible</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">multi</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">chain</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">tools</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">as</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">a</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">foundational</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">layer</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">for</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Web3</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">DeFi</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">crypto</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">economy</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://www.ankr.com/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "468px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Chainlink"
                                                src="https://scroll-eco-list.netlify.app/logos/Chainlink.png"
                                                alt="Chainlink"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Chainlink
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/chainlink"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">Infrastructure</span
                                                ><span className="css-1b3sc8g-tag">Tooling</span>
                                            </div>
                                        </div>
                                        <div
                                            className="LinesEllipsis LinesEllipsis--clamped css-qielvw-desc"
                                        >
                                            Chainlink is the industry-standard decentralized
                                            computing platform powering the verifiable web.
                                            Chainlink has enabled over $9 trillion in transaction
                                            value by providing financial institutions,<span
                                                className="LinesEllipsis-ellipsis"
                                            > ... <button
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                                rel="noopener noreferrer"
                                                target=""
                                            >
                                                    More
                                                </button></span
                                            >
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Chainlink</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">industry</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">standard</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">decentralized</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">computing</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">platform</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">powering</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">verifiable</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">web</span
                                            ><span className="LinesEllipsis-unit">.</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Chainlink</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">has</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">enabled</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">over</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">$</span
                                            ><span className="LinesEllipsis-unit">9</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">trillion</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">in</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">transaction</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">value</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">by</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">providing</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">financial</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">institutions</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-ellipsis"
                                            > ... <button
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                                rel="noopener noreferrer"
                                                target=""
                                            >
                                                    More
                                                </button></span
                                            >
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://chain.link/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "624px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Safe"
                                                src="https://scroll-eco-list.netlify.app/logos/Safe.jpg"
                                                alt="Safe"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Safe
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/safe"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">Infrastructure</span
                                                ><span className="css-1b3sc8g-tag">Wallet</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Gnosis Safe is the safety standard of Web3 and the
                                            most trusted platform to manage digital assets for
                                            individuals and communities.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                    BlinkMacSystemFont, Roboto,
                                                    "Helvetica Neue", "Segoe UI",
                                                    Arial, "sans-serif",
                                                    "Apple Color Emoji",
                                                    "Segoe UI Emoji",
                                                    "Segoe UI Symbol",
                                                    "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Gnosis</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Safe</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">safety</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">standard</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">of</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Web3</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">most</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">trusted</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">platform</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">manage</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">digital</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">assets</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">for</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">individuals</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">communities</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://app.safe.global/welcome?chain=scr"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "780px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Compound Finance"
                                                src="https://scroll-eco-list.netlify.app/logos/Compound%20Finance.png"
                                                alt="Compound Finance"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Compound Finance
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/compoundfinance"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">DeFi</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Compound III&nbsp;is an EVM compatible protocol that
                                            enables supplying of crypto assets as collateral in
                                            order to borrow the
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                border: "none",
                                                boxSizing: "border-box",
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: "normal",
                                                letterSpacing: "normal",
                                                textIndent: 0,
                                                whiteSpace: "normal",
                                                wordBreak: "normal",
                                                overflowWrap: "normal"
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Compound</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">III</span
                                            ><span className="LinesEllipsis-unit">&nbsp;</span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">an</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">EVM</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">compatible</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">protocol</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">that</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">enables</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">supplying</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">of</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">crypto</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">assets</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">as</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">collateral</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">in</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">order</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">to</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">borrow</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span>
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://compound.finance/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "936px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-OKX Wallet"
                                                src="https://scroll-eco-list.netlify.app/logos/OKX%20Wallet.png"
                                                alt="OKX Wallet"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                OKX Wallet
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/okxweb3"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">Wallet</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            OKX Web3 Wallet is a developer-friendly blockchain
                                            wallet, featuring its multi-chain, security, and
                                            decentralized aspects.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                border: "none",
                                                boxSizing: "border-box",
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: "normal",
                                                letterSpacing: "normal",
                                                textIndent: 0,
                                                whiteSpace: "normal",
                                                wordBreak: "normal",
                                                overflowWrap: "normal"
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">OKX</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Web3</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Wallet</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">a</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">developer</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">friendly</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">blockchain</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">wallet</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">featuring</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">its</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">multi</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">chain</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">security</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">decentralized</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">aspects</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://www.okx.com/web3"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "1092px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Ambient Finance"
                                                src="https://scroll-eco-list.netlify.app/logos/Ambient%20Finance.png"
                                                alt="Ambient Finance"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Ambient Finance
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/ambient_finance"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >

                                                <span className="css-1b3sc8g-tag">DeFi</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Brings single contract dex which makes trading
                                            efficient and low gas costs. Improves traders trading
                                            experience by allowing for features such as limit
                                            orders, long form orders and concentrated liquidity.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                padding: 0,
                                                border: "none",
                                                boxSizing: "border-box",
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, system-ui,
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, sans-serif,
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: "normal",
                                                letterSpacing: "normal",
                                                textIndent: 0,
                                                whiteSpace: "normal",
                                                wordBreak: "normal",
                                                overflowWrap: "normal"
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Brings</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">single</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">contract</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">dex</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">which</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">makes</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">trading</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">efficient</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">low</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">gas</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">costs</span
                                            ><span className="LinesEllipsis-unit">.</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Improves</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">traders</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">trading</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">experience</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">by</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">allowing</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">for</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">features</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">such</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">as</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">limit</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">orders</span
                                            ><span className="LinesEllipsis-unit">,</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">long</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">form</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">orders</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">and</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">concentrated</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">liquidity</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: "absolute",
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: "hidden",
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: "none"
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://scroll.ambient.finance/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: "156px",
                                        left: "0px",
                                        position: "absolute",
                                        top: "1248px",
                                        width: "100%"
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Stargate"
                                                src="https://scroll-eco-list.netlify.app/logos/Stargate.png"
                                                alt="Stargate"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Stargate
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/StargateFinance"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">Infrastructure</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            Stargate is a fully composable liquidity transport
                                            protocol that lives at the heart of Omnichain DeFi
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">Stargate</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">is</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">a</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">fully</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">composable</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">liquidity</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">transport</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">protocol</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">that</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">lives</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">at</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">the</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">heart</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">of</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">Omnichain</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">DeFi</span>
                                        </div>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: 'none',
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://stargate.finance/"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                                <div
                                    className=""
                                    style={{
                                        height: '156px',
                                        left: '0px',
                                        position: 'absolute',
                                        top: '1404px',
                                        width: '100%',
                                    }}
                                >
                                    <div
                                        className="MuiBox-root css-1e50hix-grid e1de0imv0"
                                        rank="[object Object]"
                                    >
                                        <div className="MuiStack-root css-18ooous-logo e1de0imv0">
                                            <img
                                                className="no-js-Nuri Exchange"
                                                src="https://scroll-eco-list.netlify.app/logos/Nuri%20Exchange.png"
                                                alt="Nuri Exchange"
                                                width="88"
                                                height="88"
                                            /><noscript></noscript>
                                        </div>
                                        <div className="MuiStack-root css-148vtsq-name e1de0imv0">
                                            <p
                                                className="MuiTypography-root MuiTypography-body1 css-x5y32n e1de0imv0"
                                            >
                                                Nuri Exchange
                                            </p>
                                            <a
                                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1lfkgbn e1de0imv0"
                                                rel="noopener noreferrer"
                                                target="_blank"
                                                href="https://twitter.com/NuriExchange"
                                            ><svg
                                                width="16"
                                                height="14"
                                                viewBox="0 0 16 14"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1deizqy e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                    <path
                                                        d="M1.03473 0.333252L6.53483 7.6874L1 13.6666H2.24567L7.0914 8.43172L11.0066 13.6666H15.2457L9.43612 5.89882L14.5879 0.333252H13.3422L8.87954 5.1545L5.27379 0.333252H1.03473ZM2.86658 1.25081H4.81401L13.4135 12.7489H11.4661L2.86658 1.25081Z"
                                                        fill="currentColor"
                                                        stroke="currentColor"
                                                        stroke-width="0.5"
                                                    ></path></svg
                                                ></a>
                                            <div
                                                className="MuiBox-root css-1qbr1y6-tagWrapper e1de0imv0"
                                            >
                                                <span className="css-1b3sc8g-tag">DeFi</span>
                                            </div>
                                        </div>
                                        <div className="LinesEllipsis css-qielvw-desc">
                                            NURI pairs incentives with concentrated liquidity for
                                            next-level capital efficiency.
                                        </div>
                                        <div
                                            className="LinesEllipsis-shadow css-qielvw-desc"
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                padding: 0,
                                                border: 'none',
                                                boxSizing: 'border-box',
                                                width: 720,
                                                fontSize: 16,
                                                fontWeight: 400,
                                                fontFamily: `TransSansPremium, "system-ui",
                                                  BlinkMacSystemFont, Roboto,
                                                  "Helvetica Neue", "Segoe UI",
                                                  Arial, "sans-serif",
                                                  "Apple Color Emoji",
                                                  "Segoe UI Emoji",
                                                  "Segoe UI Symbol",
                                                  "Noto Color Emoji"`,
                                                fontStyle: 'normal',
                                                letterSpacing: 'normal',
                                                textIndent: 0,
                                                whiteSpace: 'normal',
                                                wordBreak: 'normal',
                                                overflowWrap: 'normal',
                                            }}
                                        >
                                            <span className="LinesEllipsis-unit">NURI</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">pairs</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">incentives</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">with</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">concentrated</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">liquidity</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">for</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">next</span
                                            ><span className="LinesEllipsis-unit">-</span
                                            ><span className="LinesEllipsis-unit">level</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">capital</span
                                            ><span className="LinesEllipsis-unit"> </span
                                            ><span className="LinesEllipsis-unit">efficiency</span
                                            ><span className="LinesEllipsis-unit">.</span>
                                        </div>
                                        <span
                                            style={{
                                                position: 'absolute',
                                                bottom: 0,
                                                left: 0,
                                                height: 0,
                                                overflow: 'hidden',
                                                paddingTop: 0,
                                                paddingBottom: 0,
                                                border: 'none',
                                            }}
                                        > ... <button
                                            className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-1i35iqx e1de0imv0"
                                            rel="noopener noreferrer"
                                            target=""
                                        >
                                                More
                                            </button></span
                                        ><a
                                            className="MuiButtonBase-root MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium MuiButton-root MuiButton-outlined MuiButton-outlinedPrimary MuiButton-sizeMedium MuiButton-outlinedSizeMedium e1de0imv0 css-1gen1he-action-action e1de0imv0"
                                            tabIndex="0"
                                            href="https://www.nuri.exchange/swap"
                                            target="_blank"
                                        >Visit<span
                                            className="MuiButton-endIcon MuiButton-iconSizeMedium css-pt151d e1de0imv0"
                                        ><svg
                                            width="14"
                                            height="14"
                                            viewBox="0 0 14 14"
                                            fill="none"
                                            xmlns="http://www.w3.org/2000/svg"
                                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14w14g2 e1de0imv0"
                                            focusable="false"
                                            aria-hidden="true"
                                        >
                                                    <g clip-path="url(#clip0_287_384)">
                                                        <path
                                                            d="M14 0V10.6795L12.1926 8.8721V3.05488C8.50054 6.64105 5.12622 10.5467 1.32821 14L0 12.6987C3.77279 9.24535 7.11853 5.39354 10.7854 1.83259H5.15312L3.32052 0H14Z"
                                                            fill="currentColor"
                                                        ></path>
                                                    </g></svg></span
                                            ></a>
                                    </div>
                                </div>
                            </div>
                        </div>
                       
                    </div>
                </div>
            </div>
         
        </>
    )
}
