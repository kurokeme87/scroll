import React from 'react'
import ConnectWalletBtn from '../button/ConnectWalletBtn.jsx'
export default function Modal({ open, setOpen }) {

    const handleModalClose = () => {
        setOpen(!open);
    }


    return (
        <div className={`bg-[#00000042] w-screen h-screen fixed top-0 left-0 flex justify-center items-center z-50 ${open ? 'block' : 'hidden'}`}>
            <div className='bg-white w-[50vw] h-[50vh] min-h-[300px] min-w-[300px] p-10 rounded-3xl '>
                <div className='flex items-center justify-between'>
                    <p className='text-2xl text-black font-bold'>Transaction History</p>
                    <button className='bg-transparent border-none outline-none focus:outline-none focus:border-none '
                        onClick={handleModalClose}>
                        <svg
                            width="18"
                            height="18"
                            viewBox="0 0 18 18"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-usqxli e1de0imv0"
                            focusable="false"
                            aria-hidden="true"
                        >
                            <path
                                fillRule="evenodd"
                                clipRule="evenodd"
                                d="M17.5307 1.56775C17.8853 1.20911 17.8853 0.627628 17.5307 0.268984C17.1761 -0.0896612 16.6012 -0.0896612 16.2466 0.268984L8.89835 7.70119L1.55012 0.268984C1.19553 -0.0896611 0.62062 -0.0896611 0.266027 0.268984C-0.0885651 0.627628 -0.0885651 1.20911 0.266027 1.56775L7.61425 8.99996L0.265944 16.4323C-0.0886481 16.7909 -0.0886481 17.3724 0.265944 17.731C0.620536 18.0897 1.19544 18.0897 1.55004 17.731L17.5307 1.56775ZM11.8709 10.7078C11.5164 10.3491 10.9414 10.3491 10.5869 10.7078C10.2323 11.0664 10.2323 11.6479 10.5869 12.0065L16.2467 17.731C16.6012 18.0897 17.1762 18.0897 17.5307 17.731C17.8853 17.3724 17.8853 16.7909 17.5307 16.4322L11.8709 10.7078Z"
                                fill="#101010"
                            />
                        </svg>
                    </button>
                </div>
                <div className='h-[calc(100%-50px)] w-full flex justify-center items-center'>
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
            </div>
        </div>
    )
}
