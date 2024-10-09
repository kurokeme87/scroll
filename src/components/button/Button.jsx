import React from 'react'

export default function Button({ children }) {
    return (
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
                </svg>
            </span>
            <div className="css-fs25ky-mask "></div>
            <button className="MuiButtonBase-root css-6k4tt-button e1de0imv0 focus:border-none focus:outline-none focus:ring-0 tsp-bold" tabIndex="0" type="button">
                {children}
            </button>
        </div>
    )
}
