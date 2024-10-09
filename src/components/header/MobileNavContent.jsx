import React from 'react'
import { Link } from 'react-router-dom'
import { DEVELOP_DROPDOWN_DATA } from './HEADER_DATA.js'
import { RESOURCES_DROPDOWN_DATA } from './HEADER_DATA.js'
import { ECOSYSTEM_DROPDOWN_DATA } from './HEADER_DATA.js'
import './mobile-header.css'
import { useState } from 'react'
export default function MobileNavContent({ closeNav, backgroundColor }) {

    // state for develop menu
    const [isOpenDevelop, setIsOpenDevelop] = useState(false)
    const handleDevelopMenu = () => {
        setIsOpenDevelop(!isOpenDevelop)
    }

    //state for resources menu
    const [isOpenResources, setIsOpenResources] = useState(false)
    const handleResourcesMenu = () => {
        setIsOpenResources(!isOpenResources)
    }

    //state for ecosystem menu
    const [isOpenEcosystem, setIsOpenEcosystem] = useState(false)
    const handleEcosystemMenu = () => {
        setIsOpenEcosystem(!isOpenEcosystem)
    }

    return (

        <div className={`bg-primary px-5 w-full overflow-y-auto z-50 top-0 left-0 ${backgroundColor}`}>
            {/* // first menu */}
            <div className='border-b-2 border-gray-600  '>
                <div className='flex mobile-menu-item items-center mb-6 justify-between cursor-pointer' onClick={handleDevelopMenu}>
                    <span className='text-black tsp-bold text-3xl'>Develop</span>
                    <span className='text-black'>
                        <svg
                            className={`MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00 transition-transform duration-300 ease-in-out ${isOpenDevelop ? "rotate-180" : "rotate-0"}`}
                            xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"
                            focusable="false" aria-hidden="true">
                            <path
                                d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                </div>
                <div className={`MuiStack-root css-74e7ue overflow-hidden transition-[max-height] duration-300 ease-in-out ${isOpenDevelop ? "max-h-[1000px]" : "max-h-0"} `}>
                    <span className='w-full'>
                        <div >
                            {/* //container */}
                            <div className='develop-mobile-nav-content'>
                                {/* //2 columns */}
                                <div className='pb-7 border-b border-black block'>
                                    {/* menu items for first column */}
                                    {DEVELOP_DROPDOWN_DATA.map((item, index) => (
                                        <Link onClick={closeNav} key={index} to={item.link} className={`text-black flex w-fit items-center hover:text-red  ${index !== 0 && 'mt-10'}`}>
                                            <div className='mr-5'>
                                                <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                                            </div>
                                            <div>
                                                <p className='leading-tight tsp-bold text-2xl'>{item.title}</p>
                                                <p className='leading-tight tsp-light text-2xl'>{item.description}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>

                                <div>
                                    <div className='py-10'>
                                        <p className='tsp-bold text-2xl'>BLOCK EXPLORERS</p>
                                        <Link onClick={closeNav} to="https://scrollscan.com/" className='block text-black tsp-light text-2xl mt-8 hover:text-red'>Scrollscan</Link>
                                        <Link onClick={closeNav} to="https://scroll.l2scan.co/" className='block text-black tsp-light text-2xl mt-8 hover:text-red'>L2 Scan</Link>
                                        <Link onClick={closeNav} to="https://www.ondora.xyz/network/scroll/interactions" className='block text-black tsp-light text-2xl mt-8 hover:text-red'>Dora Explorer</Link>
                                        <Link onClick={closeNav} to="https://www.okx.com/web3/explorer/scroll?channelId=scroll" className='block text-black tsp-light text-2xl mt-8 hover:text-red'>OKX Explorer</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </span>
                </div>
            </div>
            {/* // second menu */}
            <div className='mt-8 border-b-2 border-gray-600 '>
                <div className='flex mobile-menu-item items-center justify-between cursor-pointer mb-6' onClick={handleEcosystemMenu}>
                    <span className='text-black tsp-bold text-3xl leading-tight'>Ecosystem</span>
                    <span className='text-black'>
                        <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00"
                            xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"
                            focusable="false" aria-hidden="true">
                            <path
                                d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>
                </div>

                <div className={` overflow-hidden transition-[max-height] duration-300 ease-in-out mb-4 ${isOpenEcosystem ? "max-h-[1000px]" : "max-h-0"} `}>
                    {ECOSYSTEM_DROPDOWN_DATA.map((item, index) => (
                        <Link onClick={closeNav} to={item.link} key={index} className={`text-black flex w-fit items-center hover:text-red ${index !== 0 && 'mt-10'}`}>
                            <div className='mr-5'>
                                <div dangerouslySetInnerHTML={{ __html: item.svg }} />
                            </div>
                            <div>
                                <p className='tsp-bold text-2xl'>{item.title}</p>
                                <p className='tsp-light text-2xl'>{item.description}</p>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            {/* // third menu */}
            <div className='mt-8 border-b-2 border-gray-600 '>
                <div className='flex mobile-menu-item items-center justify-between cursor-pointer' onClick={handleResourcesMenu}>
                    <span className='text-black tsp-bold text-3xl leading-tight'>Resources</span>
                    <span className='text-black'>
                        <svg
                            className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium expand-more css-5x3p00"
                            xmlns="http://www.w3.org/2000/svg" width="9" height="5" viewBox="0 0 9 5" fill="none"
                            focusable="false" aria-hidden="true">
                            <path
                                d="M4.98393 4.5L3.48482 4.5L0.234375 0.5L1.73169 0.5L4.24869 3.60242C5.09663 2.56061 5.80325 1.54181 6.73527 0.500001L8.23438 0.500001C6.99108 1.83333 6.22722 3.16667 4.98393 4.5Z"
                                fill="currentColor"></path>
                        </svg>
                    </span>

                </div>

                <div className={`text-black text-[15px]  overflow-hidden transition-[max-height] duration-300 ease-in-out mb-6 ${isOpenResources ? "max-h-[1000px]" : "max-h-0"} `}>
                    {RESOURCES_DROPDOWN_DATA.map((item, index) => (
                        <Link onClick={closeNav} to={item.link} key={index} className='block text-black tsp-light text-2xl mt-8'>
                            {item.title}
                        </Link>
                    ))}
                </div>
            </div>
            {/* // fourth menu */}
            <Link onClick={closeNav} to='/bridge' className='text-3xl tsp-bold text-red block mt-8 pb-8'>Bridge</Link>
        </div>
    )
}
