import React from 'react'
import "./css/ecosystem.css"

// slider import form react slick
import Slider from 'react-slick';


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
                            className="MuiTypography-root MuiTypography-body1 css-1ngehv9 e1de0imv0"
                        >
                            An Ecosystem <br />Forever in Motion
                        </p>
                        <div className="MuiStack-root css-1fbu92l e1de0imv0">
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Total value locked
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0"
                                >
                                    1.15 B
                                </p>
                            </div>
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Transaction count
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0"
                                >
                                    90.30 M
                                </p>
                            </div>
                            <div className="MuiStack-root css-tmohpi e1de0imv0">
                                <p
                                    className="MuiTypography-root MuiTypography-body1 css-j0qdxn e1de0imv0"
                                >
                                    Batches settled to L1
                                </p>
                                <p
                                    className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-7586gb e1de0imv0"
                                >
                                    326,563
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root css-yib3zg e1de0imv0"></div>
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
                            <button
                                className="MuiButtonBase-root css-6k4tt-button e1de0imv0"
                                tabIndex="0"
                                type="button"
                            >
                                Read more
                            </button>
                        </div>
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
            <div className="MuiBox-root css-14i99rr e1de0imv0">
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
                        <div className="MuiBox-root css-1jq1uag e1de0imv0">
                            <button
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineAlways MuiLink-button e1de0imv0 e1de0imv0 css-woik4h e1de0imv0"
                                rel="noopener noreferrer"
                                target=""
                            >
                                Load more
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="MuiBox-root css-14i99rr e1de0imv0">
                <div
                    className="MuiContainer-root MuiContainer-maxWidthLg css-4isjkk e1de0imv0"
                >
                    <p
                        className="MuiTypography-root MuiTypography-body1 css-1egha00 e1de0imv0"
                    >
                        Contribute to the ecosystem
                    </p>
                    <div
                        className="MuiBox-root css-e9gm5-flex e1de0imv0"
                        style={{ opacity: 0 }}
                    >
                        <div
                            className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                            style={{
                                opacity: 0,
                                transform: 'translateY(100px) rotateY(0deg) translateZ(0px)'
                            }}
                        >
                            <a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://tally.so/r/waxLBW"
                            ><div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-19g2xjx-card e1de0imv0"
                            >
                                    <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                        <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                            <svg
                                                width="23"
                                                height="23"
                                                viewBox="0 0 23 23"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ohh97 e1de0imv0"
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
                                                        <rect
                                                            width="23"
                                                            height="23"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                </defs></svg
                                            ><svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-akkb8w e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                <g clip-path="url(#clip0_1412_1063)">
                                                    <path
                                                        d="M15.4934 14.0178C15.4934 13.4933 15.0667 13.0667 14.5423 13.0667H4.7467C4.22225 13.0667 3.79559 13.4933 3.79559 14.0178C3.79559 14.5422 4.22225 14.9689 4.7467 14.9689H14.5423C15.0667 14.9689 15.4934 14.5422 15.4934 14.0178Z"
                                                        fill="#101010"
                                                    ></path>
                                                    <path
                                                        d="M4.7467 16.8711C4.22225 16.8711 3.79559 17.2978 3.79559 17.8222C3.79559 18.3467 4.22225 18.7733 4.7467 18.7733H10.6934C11.2178 18.7733 11.6445 18.3467 11.6445 17.8222C11.6445 17.2978 11.2178 16.8711 10.6934 16.8711H4.7467Z"
                                                        fill="#101010"
                                                    ></path>
                                                    <path
                                                        d="M6.9867 26H3.80448C2.75559 26 1.90225 25.1467 1.90225 24.0978V7.35999C1.90225 6.3111 2.75559 5.45776 3.80448 5.45776H15.4934C16.5423 5.45776 17.3956 6.3111 17.3956 7.35999V13.2089C17.3956 13.7333 17.8223 14.16 18.3467 14.16C18.8711 14.16 19.2978 13.7333 19.2978 13.2089V7.35999C19.2978 5.26221 17.5911 3.55554 15.4934 3.55554H3.80448C1.7067 3.55554 3.05176e-05 5.26221 3.05176e-05 7.35999V24.0978C3.05176e-05 26.1955 1.7067 27.9022 3.80448 27.9022H6.9867C7.51114 27.9022 7.93781 27.4755 7.93781 26.9511C7.93781 26.4267 7.51114 26 6.9867 26Z"
                                                        fill="#101010"
                                                    ></path>
                                                    <path
                                                        d="M20.9867 17.3244C19.8756 16.2133 18.0623 16.2133 16.9511 17.3244L11.7334 22.5333C11.6267 22.64 11.5378 22.7822 11.4934 22.9333L10.3556 26.6755C10.2578 27.0044 10.3467 27.3689 10.5867 27.6178C10.7645 27.8044 11.0134 27.9022 11.2711 27.9022C11.36 27.9022 11.44 27.8933 11.5289 27.8667L15.3689 26.8C15.5289 26.7555 15.6711 26.6755 15.7867 26.56L20.9956 21.36C22.1067 20.2489 22.1067 18.4355 20.9956 17.3244H20.9867ZM14.6134 25.04L12.6845 25.5733L13.2534 23.7155L16.7734 20.2044L18.1156 21.5467L14.6134 25.04ZM19.6445 20.0178L19.4578 20.2044L18.1156 18.8622L18.3023 18.6755C18.6756 18.3022 19.28 18.3022 19.6445 18.6755C20.0089 19.0489 20.0178 19.6533 19.6445 20.0178Z"
                                                        fill="#101010"
                                                    ></path>
                                                    <path
                                                        d="M14.5423 9.26221H4.7467C4.22225 9.26221 3.79559 9.68888 3.79559 10.2133C3.79559 10.7378 4.22225 11.1644 4.7467 11.1644H14.5423C15.0667 11.1644 15.4934 10.7378 15.4934 10.2133C15.4934 9.68888 15.0667 9.26221 14.5423 9.26221Z"
                                                        fill="#101010"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1412_1063">
                                                        <rect
                                                            width="21.8133"
                                                            height="24.3467"
                                                            fill="white"
                                                            transform="translate(3.05176e-05 3.55554)"
                                                        ></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-y9e1y0 e1de0imv0"
                                        >
                                            Get in touch
                                        </p>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-18gzr4m e1de0imv0"
                                        >
                                            Reach out directly if you need more support for your
                                            project.
                                        </p>
                                    </div>
                                </div></a
                            >
                        </div>
                        <div
                            className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                            style={{
                                opacity: 0,
                                transform: 'translateY(100px) rotateY(0deg) translateZ(0px)'
                            }}
                        >
                            <a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://tally.so/r/3jlj59"
                            ><div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-19g2xjx-card e1de0imv0"
                            >
                                    <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                        <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                            <svg
                                                width="23"
                                                height="23"
                                                viewBox="0 0 23 23"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ohh97 e1de0imv0"
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
                                                        <rect
                                                            width="23"
                                                            height="23"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                </defs></svg
                                            ><svg
                                                width="32"
                                                height="32"
                                                viewBox="0 0 32 32"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-akkb8w e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M23.3958 17.1644L16.9958 23.8044C16.7825 24.0267 16.4981 24.1511 16.1958 24.1511C15.8936 24.1511 15.6269 24.0444 15.4225 23.84C15.2092 23.6356 15.0847 23.36 15.0758 23.0578C15.0758 22.7556 15.1825 22.48 15.3869 22.2667L21.7692 15.6444C22.7558 14.5511 23.2803 13.1289 23.2447 11.6356C23.2092 10.2133 22.6581 8.87111 21.6892 7.84889C20.7292 6.84444 19.4669 6.26667 18.1336 6.23111H17.9736C16.2669 6.23111 14.6581 7.10222 13.6625 8.57778C13.4581 8.88889 13.1114 9.06667 12.7381 9.06667C12.3647 9.06667 12.0181 8.88 11.8136 8.57778C10.8269 7.11111 9.21806 6.23111 7.51139 6.23111C6.13361 6.23111 4.85361 6.79111 3.86694 7.78667C2.81806 8.84444 2.2225 10.3289 2.24028 11.84C2.24917 13.3156 2.80917 14.7022 3.80472 15.7511L13.5558 25.8311C13.9825 26.2756 13.9736 26.9867 13.5292 27.4133C13.3158 27.6178 13.0403 27.7244 12.7558 27.7244C12.4447 27.7244 12.1603 27.6 11.9558 27.3867L2.18694 17.2889C0.791389 15.8311 0.0180558 13.9022 0.000278029 11.8578C-0.0174997 9.75111 0.818056 7.69778 2.28472 6.22222C3.68917 4.8 5.52917 4.00889 7.48472 4C9.4225 4 11.2536 4.74667 12.6492 6.10667L12.7469 6.20444L12.8447 6.10667C14.2314 4.75556 16.0536 4 17.9647 4H18.2136C20.1425 4.06222 21.9558 4.88889 23.3158 6.32C24.6669 7.73333 25.4403 9.60889 25.4847 11.5911C25.5381 13.6889 24.7914 15.6622 23.3958 17.1644Z"
                                                    fill="#101010"
                                                ></path>
                                            </svg>
                                        </div>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-y9e1y0 e1de0imv0"
                                        >
                                            Request a dApp
                                        </p>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-18gzr4m e1de0imv0"
                                        >
                                            Can’t find the application you’re looking for? We want
                                            to know!
                                        </p>
                                    </div>
                                </div></a
                            >
                        </div>
                        <div
                            className="MuiBox-root css-y0g3m5-flexItem e1de0imv0"
                            style={{
                                opacity: 0,
                                transform: 'translateY(100px) rotateY(0deg) translateZ(0px)'
                            }}
                        >
                            <a
                                className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-1cwcwi7 e1de0imv0"
                                rel="noopener noreferrer"
                                target="_blank"
                                href="https://docs.scroll.io/en/getting-started/overview/"
                            ><div
                                className="MuiPaper-root MuiPaper-elevation MuiPaper-rounded MuiPaper-elevation0 MuiCard-root e1de0imv0 css-19g2xjx-card e1de0imv0"
                            >
                                    <div className="MuiStack-root css-j7qwjs e1de0imv0">
                                        <div className="MuiBox-root css-lk5068-header e1de0imv0">
                                            <svg
                                                width="23"
                                                height="23"
                                                viewBox="0 0 23 23"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1ohh97 e1de0imv0"
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
                                                        <rect
                                                            width="23"
                                                            height="23"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                </defs></svg
                                            ><svg
                                                width="35"
                                                height="35"
                                                viewBox="0 0 35 35"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                                className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-akkb8w e1de0imv0"
                                                focusable="false"
                                                aria-hidden="true"
                                            >
                                                <g clip-path="url(#clip0_1438_4432)">
                                                    <path
                                                        d="M19.4007 0H15.6093C14.5001 0 13.6027 0.897436 13.6027 2.00663V4.33593C12.6851 4.60818 11.8078 4.97119 10.9608 5.42495L9.30712 3.77125C8.5206 2.98473 7.25007 2.98473 6.46355 3.77125L3.78133 6.45347C2.99481 7.23999 2.99481 8.51052 3.78133 9.29703L5.43503 10.9507C4.98127 11.7877 4.60818 12.675 4.34601 13.5926H2.00663C0.897436 13.5926 0 14.4901 0 15.5993V19.3907C0 20.4999 0.897436 21.3973 2.00663 21.3973H4.33593C4.60818 22.3149 4.97119 23.1922 5.42495 24.0392L3.77125 25.6929C3.38807 26.0761 3.1864 26.5802 3.1864 27.1147C3.1864 27.6491 3.39816 28.1533 3.77125 28.5364L6.45347 31.2187C6.83665 31.6018 7.34082 31.8035 7.87525 31.8035C8.40968 31.8035 8.91386 31.5918 9.29703 31.2187L10.9507 29.565C11.7877 30.0187 12.675 30.3918 13.5926 30.654V32.9833C13.5926 34.0925 14.4901 34.9899 15.5993 34.9899H19.3907C20.4999 34.9899 21.3973 34.0925 21.3973 32.9833V30.654C22.3149 30.3817 23.1922 30.0187 24.0392 29.565L25.6929 31.2187C26.4794 32.0052 27.7499 32.0052 28.5364 31.2187L31.2187 28.5364C31.6018 28.1533 31.8035 27.6491 31.8035 27.1147C31.8035 26.5802 31.5918 26.0761 31.2187 25.6929L29.565 24.0392C30.0187 23.2022 30.3918 22.3149 30.654 21.3973H32.9833C34.0925 21.3973 34.9899 20.4999 34.9899 19.3907V15.5993C34.9899 14.4901 34.0925 13.5926 32.9833 13.5926H30.654C30.3817 12.675 30.0187 11.7978 29.565 10.9507L31.2187 9.29703C32.0052 8.51052 32.0052 7.23999 31.2187 6.45347L28.5364 3.77125C27.7499 2.98473 26.4794 2.98473 25.6929 3.77125L24.0392 5.42495C23.2022 4.97119 22.3149 4.5981 21.3973 4.33593V2.00663C21.4074 0.897436 20.5099 0 19.4007 0ZM23.6157 7.845C24.0694 8.13742 24.6644 8.06684 25.0475 7.68366L27.1247 5.60645L29.4036 7.88534L27.3264 9.96255C26.9432 10.3457 26.8827 10.9407 27.1651 11.3944C27.8709 12.5036 28.3751 13.7237 28.6574 15.0043C28.7784 15.5287 29.2423 15.9018 29.7767 15.9018H32.711V19.1184H29.7767C29.2423 19.1184 28.7684 19.4915 28.6574 20.0158C28.3751 21.2965 27.8709 22.5065 27.1651 23.6258C26.8727 24.0795 26.9432 24.6744 27.3264 25.0576L29.4036 27.1348L27.1247 29.4137L25.0475 27.3365C24.6644 26.9533 24.0694 26.8928 23.6157 27.1752C22.5065 27.881 21.2864 28.3852 20.0058 28.6675C19.4814 28.7885 19.1083 29.2524 19.1083 29.7868V32.7211H15.8917V29.7868C15.8917 29.2524 15.5186 28.7784 14.9942 28.6675C13.7136 28.3852 12.5036 27.881 11.3843 27.1752C10.9306 26.8827 10.3356 26.9533 9.95246 27.3365L7.87525 29.4137L5.59637 27.1348L7.67358 25.0576C8.05676 24.6744 8.11726 24.0795 7.83492 23.6258C7.12907 22.5166 6.62489 21.2965 6.34255 20.0158C6.22155 19.4915 5.75771 19.1184 5.22328 19.1184H2.28897V15.9018H5.22328C5.75771 15.9018 6.23163 15.5287 6.34255 15.0043C6.62489 13.7237 7.12907 12.5137 7.83492 11.3944C8.12734 10.9407 8.05676 10.3457 7.67358 9.96255L5.59637 7.88534L7.87525 5.60645L9.95246 7.68366C10.3356 8.06684 10.9306 8.12734 11.3843 7.845C12.4935 7.13915 13.7136 6.63498 14.9942 6.35264C15.5186 6.23163 15.8917 5.76779 15.8917 5.23336V2.29905H19.1083V5.23336C19.1083 5.76779 19.4814 6.24172 20.0058 6.35264C21.2864 6.63498 22.4964 7.13915 23.6157 7.845Z"
                                                        fill="#101010"
                                                    ></path>
                                                    <path
                                                        d="M17.0514 8.84326C12.665 9.0651 9.06522 12.675 8.84338 17.0614C8.72238 19.5117 9.63998 21.9115 11.3744 23.6358C12.9978 25.2593 15.2162 26.1769 17.5152 26.1769C17.6564 26.1769 17.7976 26.1769 17.9488 26.1668C18.5841 26.1365 19.0681 25.592 19.0378 24.9669C19.0076 24.3316 18.4631 23.8476 17.8379 23.8778C16.0027 23.9686 14.2885 23.3031 12.9978 22.0225C11.7071 20.7418 11.0517 19.0176 11.1424 17.1824C11.3038 13.9657 13.9557 11.3137 17.1724 11.1423C19.0076 11.0516 20.8529 11.7877 22.1234 13.1086C24.7552 15.8614 24.0595 19.915 21.9117 22.083C21.468 22.5367 21.468 23.2627 21.9117 23.7064C22.3654 24.1501 23.0914 24.1501 23.5351 23.7064C25.0678 22.1636 26.0056 20.0158 26.1165 17.8277C26.2375 15.4682 25.4006 13.2397 23.7771 11.5356C22.0327 9.71045 19.5824 8.73234 17.0514 8.86343V8.84326Z"
                                                        fill="#101010"
                                                    ></path>
                                                </g>
                                                <defs>
                                                    <clipPath id="clip0_1438_4432">
                                                        <rect
                                                            width="35"
                                                            height="35"
                                                            fill="white"
                                                        ></rect>
                                                    </clipPath>
                                                </defs>
                                            </svg>
                                        </div>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-y9e1y0 e1de0imv0"
                                        >
                                            Learn how to build with Scroll
                                        </p>
                                        <p
                                            className="MuiTypography-root MuiTypography-body1 css-18gzr4m e1de0imv0"
                                        >
                                            For a walkthrough, start with the User Guide's Setup
                                            page.
                                        </p>
                                    </div>
                                </div></a >
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
