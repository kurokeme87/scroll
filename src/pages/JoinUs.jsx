import React from 'react'
import Button from '../components/button/Button.jsx'
import work1 from '../assets/work-approach-1.jpg'
import work2 from '../assets/work-approach-2.jpg'
import work3 from '../assets/work-approach-3.jpg'
import work4 from '../assets/work-approach-4.jpg'
import work5 from '../assets/work-approach-5.jpg'
import work6 from '../assets/work-approach-6.jpg'
import news1 from '../assets/news-cover-1.png'
import news2 from '../assets/news-cover-2.png'
import news3 from '../assets/news-cover-3.png'
import joinUsImg from '../assets/join-us.png'
import './css/join-us.css'
// this is a react package for dynamically changing the title of a page
import { Helmet } from 'react-helmet'

export default function JoinUs({ title }) {
  return (
    <div>
      {/* title tag changing depending on route */}
      <Helmet>
        <title> {title} </title>
      </Helmet>
      <div className="MuiBox-root css-7e8o1j-container e1de0imv0">
        <div className="MuiBox-root css-17kxzm1-container e1de0imv0">
          <div className="MuiBox-root css-14i99rr e1de0imv0">
            <div
              className="MuiContainer-root MuiContainer-maxWidthLg css-v5e9h4-root e1de0imv0"
            >
              <div
                className=" w-[20rem] max-w-fit">
                <p
                  className="text-black text-8xl tsp-bold"
                >
                  Join us
                </p>
              </div>
              <div
                className="css-9jhtv5-subTitleWrapper"
              >
                <p
                  className="MuiTypography-root MuiTypography-body1 css-840npe e1de0imv0"
                >
                  Join our team of diverse and talented researchers,
                  engineers, experts and community champions who are
                  passionate about creating the best L2 Ethereum ecosystem.
                </p>
                <div className="mt-8 mx-auto w-fit sm:w-auto sm:mx-0">
                  <Button>View our open positions</Button>
                </div>
              </div>
              <div
                className="css-1pscv8m-actionGroup"
                style={{ opacity: 1, transform: 'none' }}
              >
              </div>
            </div>
          </div>
        </div>
        <div className="MuiBox-root css-14i99rr e1de0imv0">
        </div>
      </div>

      <div className="MuiContainer-root MuiContainer-maxWidthLg e1de0imv0 css-e1vasd e1de0imv0">
        <div style={{ opacity: 1, transform: 'none' }}>
          <p className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-12aupp9 e1de0imv0">
            Scroll's mission is to provide an accessible scaling solution that preserves the essence of Ethereum - trust-minimized, secure and open-source.
          </p>
        </div>
        <div className="e1de0imv0 MuiBox-root css-1d5kdoa e1de0imv0" style={{ opacity: 0 }}>
          <div className="e1de0imv0 MuiBox-root css-zszh3 e1de0imv0" style={{ opacity: 0, transform: 'translateY(100px) rotateY(0deg) translateZ(0px)' }}>
            <h1 className="MuiTypography-root MuiTypography-h1 e1de0imv0 css-rbcj40 e1de0imv0">Our culture</h1>
            <p className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1p194ga e1de0imv0">
              The Scroll team is a tight-knit group of cryptography researchers, engineers, experts, and community champions. We're a global, remote team that values autonomy and high performance through kindness, direct communication, and empathy.
            </p>
          </div>
          <div className="e1de0imv0 MuiBox-root css-zszh3 e1de0imv0" style={{ opacity: 0, transform: 'translateY(100px) rotateY(0deg) translateZ(0px)' }}>
            <h1 className="MuiTypography-root MuiTypography-h1 e1de0imv0 css-rbcj40 e1de0imv0">Our values</h1>
            <p className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1p194ga e1de0imv0">
              At Scroll, we have a shared mission to uphold neutrality, openness, and be community-first as we strive to preserve Ethereum's core properties and prioritize the collective well-being of our ecosystem.
            </p>
          </div>
        </div>
      </div>

      <div className=''>
        <div className='bg-black px-10 lg:px-20 pt-20 lg:pt-[10rem]'>
          <p class=" text-7xl mb-6 text-white tsp-bold">How we work</p>
          <p className="MuiTypography-root MuiTypography-body1 css-rgxrf4 e1de0imv0 text-white mb-[10rem]">
            We are a <span style={{ color: "rgb(255, 104, 75)", fontWeight: "bold" }}>remote-first, globally distributed </span>
            team spanning across 19 countries. We are impact-driven, collaborative, and always willing to go above and beyond to help each other succeed.
            <br /><br />
            We come together at conferences and events around the world, and at our regular global offsites, where we enjoy spending time with each other in person.
          </p>

          <div className="css-hzx6r1 e1de0imv0">
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work1} alt="work-approach-1" />
              </div>
            </div>
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work2} alt="work-approach-2" />
              </div>
            </div>
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work3} alt="work-approach-3" />
              </div>
            </div>
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work4} alt="work-approach-4" />
              </div>
            </div>
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work5} alt="work-approach-5" />
              </div>
            </div>
            <div className="css-rxazx7" style={{ animationDelay: "0ms" }}>
              <div className="">
                <img src={work6} alt="work-approach-6" />
              </div>
            </div>
          </div>
        </div>
        {/* peak and benefits */}
        <div className="peak-and-benefits px-10 lg:px-20 mt-[20vh] lg:mt-[40vh]">
          <p class="MuiTypography-root MuiTypography-body1 css-o03vaz e1de0imv0">Perks &amp; benefits</p>

          <div className="MuiBox-root css-m6x3lt-grid e1de0imv0" style={{ opacity: 1 }}>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="29" height="29" viewBox="0 0 29 29" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1srv331 e1de0imv0" focusable="false" aria-hidden="true">
                <path d="M27.2491 18.9428C27.7355 17.5507 28 16.0566 28 14.5006C28 12.9447 27.7342 11.4506 27.2491 10.0585C27.2375 10.0172 27.2233 9.97592 27.2065 9.93721C25.3317 4.73255 20.3436 1 14.5 1C8.65641 1 3.66826 4.73255 1.79351 9.93721C1.77674 9.97721 1.76254 10.0172 1.75093 10.0585C1.2645 11.4506 1 12.9447 1 14.4994C1 16.054 1.26579 17.5494 1.75093 18.9415C1.76254 18.9828 1.77674 19.0241 1.79351 19.0628C3.66826 24.2687 8.65641 28 14.5 28C20.3436 28 25.3317 24.2675 27.2065 19.0628C27.2233 19.0241 27.2375 18.9828 27.2491 18.9415V18.9428ZM14.5 26.0673C13.9852 26.0673 13.1568 25.137 12.464 23.0585C12.1298 22.0561 11.8614 20.9026 11.6666 19.6473H17.3334C17.1386 20.9013 16.8702 22.0548 16.536 23.0585C15.8432 25.137 15.0135 26.0673 14.5 26.0673ZM11.4318 17.712C11.3389 16.6798 11.2898 15.6038 11.2898 14.5019C11.2898 13.4001 11.3389 12.3241 11.4318 11.2919H17.5682C17.6611 12.3241 17.7102 13.4001 17.7102 14.5019C17.7102 15.6038 17.6611 16.6798 17.5682 17.712H11.4318ZM2.9341 14.5006C2.9341 13.3872 3.0928 12.3099 3.38827 11.2906H9.49121C9.40089 12.3434 9.35444 13.4233 9.35444 14.5006C9.35444 15.578 9.40089 16.6579 9.49121 17.7107H3.38827C3.0928 16.6914 2.9341 15.6141 2.9341 14.5006ZM14.5 2.9353C15.0148 2.9353 15.8432 3.86553 16.536 5.94404C16.8702 6.94782 17.1386 8.09997 17.3334 9.35404H11.6666C11.8614 8.09997 12.1298 6.94653 12.464 5.94404C13.1568 3.86553 13.9865 2.9353 14.5 2.9353ZM19.5088 11.2906H25.6117C25.9072 12.3099 26.0659 13.3872 26.0659 14.5006C26.0659 15.6141 25.9072 16.6914 25.6117 17.7107H19.5088C19.5991 16.6579 19.6456 15.578 19.6456 14.5006C19.6456 13.4233 19.5991 12.3434 19.5088 11.2906ZM24.8556 9.35533H19.2869C18.9424 6.98136 18.3527 4.85254 17.5231 3.33784C20.7358 4.20873 23.3963 6.43174 24.8556 9.35533ZM11.4756 3.33655C10.6473 4.85125 10.0563 6.98136 9.71184 9.35533H4.14437C5.60365 6.43174 8.26417 4.20744 11.4769 3.33655H11.4756ZM4.14308 19.646H9.71184C10.0563 22.0199 10.6473 24.1488 11.4756 25.6647C8.26288 24.7939 5.60236 22.5708 4.14308 19.646ZM17.5231 25.6647C18.3514 24.15 18.9424 22.0199 19.2869 19.646H24.8556C23.3963 22.5708 20.7358 24.7939 17.5231 25.6647Z" fill="#101010" stroke="#101010" strokeWidth="0.5"></path>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Fully remote working</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">We have always been a fully remote team and Scrollers have the flexibility to choose where and when they work.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="22" height="32" viewBox="0 0 22 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-rldeu0 e1de0imv0" focusable="false" aria-hidden="true">
                <g clipPath="url(#clip0_274_232)">
                  <path d="M21.0663 10.6845C20.7444 10.5988 20.4009 10.6417 20.1112 10.8131C19.8214 10.9846 19.6175 11.2525 19.5317 11.574L18.1902 16.5787C18.0078 16.3429 17.7931 16.0965 17.5356 15.8392V6.52646C17.5356 2.92565 14.5951 0 10.9892 0C7.38338 0 4.4429 2.92565 4.4429 6.52646V15.8392C4.19607 16.0965 3.98143 16.3429 3.79899 16.5787L2.45753 11.574C2.37168 11.2525 2.16777 10.9846 1.87802 10.8131C1.58826 10.6417 1.24485 10.5988 0.922897 10.6845C0.257531 10.8667 -0.139542 11.5526 0.0321653 12.217L2.58631 21.7227C2.58631 21.7227 2.60777 21.7977 2.61851 21.787C2.71509 22.3979 3.24095 22.8372 3.85265 22.8372H9.74436V28.0134H3.85265C3.15509 28.0134 2.60777 28.5492 2.60777 29.2458V30.7461C2.60777 31.432 3.16582 32 3.86338 32C4.56095 32 5.11899 31.4427 5.11899 30.7461V30.5211H16.8917V30.7461C16.8917 31.432 17.4497 32 18.1473 32C18.8448 32 19.4029 31.4427 19.4029 30.7461V29.2458C19.4029 28.5599 18.8556 28.0134 18.158 28.0134H12.2663V26.7703H12.717C13.4039 26.7703 13.9727 26.213 13.9727 25.5164C13.9727 24.8198 13.4146 24.2626 12.717 24.2626H12.2663V22.8265H18.158C18.7697 22.8265 19.2956 22.3871 19.3814 21.8299C19.3922 21.7977 19.4029 21.7549 19.4244 21.712L21.9785 12.1956C22.1609 11.5311 21.7639 10.8453 21.0878 10.6631L21.0663 10.6845ZM16.8809 20.1795V20.3403H5.11899V20.1795C5.11899 18.2291 6.69656 16.6323 8.63899 16.6323H13.3824C15.3248 16.6323 16.9024 18.2184 16.9024 20.1795H16.8809ZM15.0351 14.3925C14.4556 14.221 13.8975 14.1353 13.3609 14.1353H8.61753C8.08095 14.1353 7.53363 14.221 6.94338 14.3925V6.52646C6.94338 4.3081 8.75704 2.49699 10.9785 2.49699C13.2 2.49699 15.0136 4.3081 15.0136 6.52646V14.3925H15.0351Z" fill="#101010"></path>
                </g>
                <defs>
                  <clipPath id="clip0_274_232">
                    <rect width="22" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Home office set up</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">A choice of equipment is provided through our onboarding partner Hofy, along with furniture needed to create a comfortable work space.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="31" height="32" viewBox="0 0 31 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-106lqy e1de0imv0" focusable="false" aria-hidden="true">
                <g clipPath="url(#clip0_276_256)">
                  <path d="M21.3311 2.01174V1.24905C21.3311 0.563731 20.7695 0 20.0867 0C19.4039 0 18.8423 0.563731 18.8423 1.24905V2.01174C13.4021 2.63074 9.17336 7.37271 9.17336 12.8995C9.17336 13.3637 9.42665 13.7838 9.82309 13.9938C10.2306 14.2149 10.7151 14.1927 11.1005 13.9275C12.4441 13.0321 14.184 13.0321 15.5275 13.9275C15.8909 14.1706 16.3755 14.2038 16.7719 14.0048L17.4657 13.6511C18.2256 13.2642 18.5339 13.1095 18.8423 13.01V24.981H17.4547V23.5551C17.4547 21.7976 16.0341 20.3717 14.2831 20.3717H4.59219L2.29059 17.2104C1.88313 16.6466 1.09023 16.514 0.517586 16.934C-0.0440485 17.343 -0.176198 18.1389 0.242275 18.7136L6.00178 26.6501L4.37194 30.1983C4.0746 30.8394 4.36093 31.591 4.98863 31.8895C5.16483 31.9668 5.34103 32.0111 5.51723 32.0111C5.99077 32.0111 6.45329 31.7347 6.66252 31.2705L8.38046 27.5454H24.0622L25.7801 31.2705C25.9893 31.7347 26.4519 32.0111 26.9254 32.0111C27.1016 32.0111 27.2888 31.9779 27.454 31.8895C28.0927 31.591 28.368 30.8394 28.0707 30.1983L26.8483 27.5344H27.8174C28.5112 27.5344 29.0838 26.9706 29.0838 26.2632C29.0838 25.5558 28.5112 24.9921 27.8174 24.9921H21.3201V13.0211C21.7826 13.1758 22.2341 13.419 22.6416 13.629C23.1702 13.9164 23.5996 14.1375 23.952 14.1375C24.1943 14.1375 24.4366 14.0601 24.6348 13.9275C25.9783 13.0321 27.7183 13.0321 29.0618 13.9275C29.4472 14.1817 29.9318 14.2038 30.3393 13.9938C30.7467 13.7727 31 13.3527 31 12.8995C31 7.37271 26.7712 2.6418 21.3311 2.01174ZM14.9989 10.9872C14.4483 10.8325 13.8867 10.7661 13.314 10.7661C12.8405 10.7661 12.356 10.8214 11.8824 10.932C12.4441 8.56649 13.9858 6.5658 16.1332 5.42729C15.2963 7.40587 15.054 9.60553 14.9879 10.9872H14.9989ZM7.93997 24.9921L6.39823 22.8808H14.2831C14.6686 22.8808 14.9769 23.1903 14.9769 23.5772V25.0031H7.93997V24.9921ZM20.0867 10.3351C19.2167 10.3351 18.3467 10.523 17.4877 10.8877C17.719 6.65423 19.2718 4.44352 20.0867 4.44352C20.9016 4.44352 22.4544 6.65423 22.6856 10.8877C21.8266 10.523 20.9567 10.3351 20.0867 10.3351ZM25.1744 10.9872C25.1084 9.60553 24.8661 7.40587 24.0401 5.42729C26.1766 6.5658 27.7183 8.56649 28.2909 10.932C27.2668 10.6998 26.1986 10.7219 25.1854 10.9983L25.1744 10.9872Z" fill="#101010"></path>
                </g>
                <defs>
                  <clipPath id="clip0_276_256">
                    <rect width="31" height="32" fill="white"></rect>
                  </clipPath>
                </defs>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Paid time off</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">A total of 25 days PTO per year, plus local public holidays, and we encourage everyone to use it.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="32" height="31" viewBox="0 0 32 31" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1sqi6u1 e1de0imv0" focusable="false" aria-hidden="true">
                <path d="M16.1553 28.7786V22.9974C17.3799 23.2417 18.5737 23.374 19.6954 23.374C22.1344 23.374 24.2029 22.8142 25.8495 21.6946C30.4084 18.5902 30.9744 11.72 30.995 11.435C31.0465 10.8752 30.6966 10.3663 30.1511 10.1729C29.4513 9.94896 23.2252 8.09653 18.8412 11.0787C17.8533 11.7403 16.9786 12.6564 16.217 13.8065C16.2376 11.5978 15.9083 7.11943 13.0782 4.22882C9.31171 0.391641 2.8695 1.00233 2.14912 1.08376C1.58311 1.16518 1.1406 1.60285 1.07885 2.16265C1.04798 2.44764 0.296729 9.30774 4.14559 13.2365C6.9036 16.0457 11.1332 16.463 13.4076 16.463C13.5105 16.463 13.6031 16.463 13.6957 16.463V28.7786C13.6957 29.4504 14.2411 29.9898 14.9203 30C15.5996 30 16.1553 29.4606 16.1553 28.7786ZM13.4693 14.0304C11.6581 14.0304 8.04591 13.7353 5.90536 11.5469C3.70307 9.29756 3.42522 5.56216 3.45609 3.45528C5.16441 3.42474 9.04414 3.63848 11.2876 5.93876C13.4899 8.18814 13.7677 11.9235 13.7369 14.0304C13.6545 14.0304 13.5619 14.0304 13.4693 14.0304ZM20.2305 13.0838C22.8959 11.2721 26.7551 11.8523 28.4016 12.2289C28.1032 13.949 27.1461 17.8472 24.4602 19.6793C21.908 21.4096 18.2958 20.9821 16.2788 20.5343C16.5772 18.8142 17.5446 14.9159 20.2305 13.0838Z" fill="#101010" stroke="#101010" strokeWidth="0.2"></path>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Growth budget</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">Up to $3,000 USD per year to pursue learning and growth opportunities.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="27" height="27" viewBox="0 0 27 27" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-1srv331 e1de0imv0" focusable="false" aria-hidden="true">
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5009 4.84998C12.8766 4.84998 12.3654 5.34758 12.3654 5.96853V6.84665C10.3675 7.26821 8.84998 8.78823 8.84998 10.6334C8.84998 12.8171 10.9625 14.5477 13.5009 14.5477C14.1575 14.5477 14.7583 14.7479 15.1914 15.0609C15.6255 15.3746 15.8789 15.7907 15.8789 16.225C15.8789 16.6592 15.6255 17.0752 15.1914 17.3886C14.7583 17.7014 14.1576 17.9013 13.5009 17.9013C12.8443 17.9013 12.2431 17.7008 11.8094 17.3876C11.3747 17.0737 11.121 16.6577 11.121 16.225C11.121 15.604 10.6098 15.1064 9.98551 15.1064C9.3612 15.1064 8.84998 15.604 8.84998 16.225C8.84998 18.0684 10.3676 19.5883 12.3644 20.0124V21.0314C12.3644 21.6523 12.8747 22.15 13.5 22.15C14.1253 22.15 14.6355 21.6523 14.6355 21.0314V20.0125C16.6324 19.5893 18.1491 18.071 18.1491 16.225C18.1491 14.0422 16.0385 12.3115 13.5009 12.3115C12.8443 12.3115 12.2431 12.1109 11.8093 11.7976C11.3745 11.4835 11.1205 11.067 11.1201 10.6332C11.1202 10.2185 11.3527 9.80041 11.7731 9.48082C12.1925 9.16205 12.7912 8.94883 13.4954 8.94883C14.1996 8.94883 14.8005 9.16186 15.222 9.4807C15.6448 9.80042 15.8789 10.2185 15.8789 10.6334C15.8789 11.2552 16.3892 11.7519 17.0144 11.7519C17.6397 11.7519 18.15 11.2552 18.15 10.6334C18.15 8.78994 16.6332 7.27089 14.6364 6.84682V5.96853C14.6364 5.34758 14.1252 4.84998 13.5009 4.84998Z" fill="#101010"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M13.5 24.6C19.6304 24.6 24.6 19.6304 24.6 13.5C24.6 7.36964 19.6304 2.4 13.5 2.4C7.36964 2.4 2.4 7.36964 2.4 13.5C2.4 19.6304 7.36964 24.6 13.5 24.6ZM13.5 27C20.9558 27 27 20.9558 27 13.5C27 6.04416 20.9558 0 13.5 0C6.04416 0 0 6.04416 0 13.5C0 20.9558 6.04416 27 13.5 27Z" fill="#101010"></path>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Co-working allowance</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">Up to $300 USD per month for co-working membership for those who prefer to work away from home.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="35" height="28" viewBox="0 0 35 28" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-106lqy e1de0imv0" focusable="false" aria-hidden="true">
                <path d="M17.5 4.83707L16.4175 3.75463C13.4283 0.765382 8.5819 0.765382 5.59265 3.75463C2.6034 6.74389 2.6034 11.5903 5.59265 14.5795L17.5005 26.4873L29.4083 14.5795C32.3975 11.5903 32.3975 6.74389 29.4083 3.75463C26.419 0.765382 21.5726 0.765382 18.5834 3.75463L17.5009 4.83707H17.5Z" fill="none" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M23.8673 13.9998H33" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M2 13.9998H9.78209" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M9.7821 13.9997L12.4834 7.56824" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.3717 17.2157L12.4839 7.56824" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M17.3717 17.2157L21.4236 10.1407" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
                <path d="M23.8673 13.9997L21.4231 10.1407" stroke="black" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Private healthcare</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">Offered in selected countries, including the US, Canada and the UK.</p>
            </div>
            <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
              <svg width="45" height="23" viewBox="0 0 45 23" fill="none" xmlns="http://www.w3.org/2000/svg" className="MuiSvgIcon-root MuiSvgIcon-fontSizeMedium css-14i2ovi e1de0imv0" focusable="false" aria-hidden="true">
                <path d="M43.9469 4.16119C43.6554 2.73099 41.4578 1.76643 40.6057 1.52251H40.5944C38.2735 0.835128 34.6183 0.491434 30.4024 2.67555L28.7654 3.40729L21.0177 1.84403C20.872 1.82186 20.7262 1.84403 20.5917 1.89947L16.7683 3.86185C16.544 3.97272 16.4095 4.20554 16.4207 4.44945C16.4319 4.69337 16.5777 4.9151 16.8019 5.02597L21.0065 6.87748L11.9582 10.9242L5.60082 7.67574C5.41021 7.58704 5.18596 7.58704 5.00656 7.67574L1.35135 9.51616C1.16074 9.61594 1.02619 9.79333 1.00377 10.004C0.981344 10.2146 1.05983 10.4253 1.2168 10.5694L5.81385 14.5385C6.13901 14.8157 6.4081 15.1816 6.65477 15.6361C6.93508 16.1461 7.91055 17.6318 10.0185 17.6318C10.2988 17.6318 10.6127 17.6096 10.9267 17.5431C10.9827 17.5431 15.748 17.0331 20.8608 15.8468L18.4277 21.0798C18.3156 21.3237 18.3716 21.623 18.5622 21.8115C18.6856 21.9335 18.8538 22 19.022 22C19.1117 22 19.2126 21.9778 19.3023 21.9335L24.572 19.4389C24.6954 19.3835 24.7963 19.2948 24.8636 19.1728L28.0479 13.5851C28.4627 13.3966 29.0794 13.1083 29.8643 12.7646C33.8334 11.0018 41.2223 7.69791 43.2181 5.89075C43.9918 5.2588 44.059 4.59358 43.9693 4.15011L43.9469 4.16119ZM18.551 4.38293L20.9729 3.1412L26.7248 4.30532L22.5763 6.16792L18.551 4.38293ZM5.28687 8.9729L7.33872 10.0262L4.2217 11.4564L2.79774 10.2257L5.28687 8.9729ZM23.8096 18.3635L20.3562 20.0044L24.2357 11.667L28.7767 9.63812L23.8096 18.3635ZM42.3548 4.9151C40.4823 6.60031 32.9476 9.97073 29.3149 11.5894C29.2476 11.6227 29.1915 11.6448 29.1242 11.6781L30.907 8.5516C31.0528 8.30769 31.0079 8.00834 30.8173 7.79769C30.6267 7.58704 30.324 7.53161 30.0661 7.64248L23.4845 10.5805C23.3387 10.647 23.2266 10.7579 23.1593 10.902L21.5559 14.339C16.1852 15.6805 10.8482 16.2459 10.7361 16.257C8.93087 16.5896 8.12359 15.625 7.79843 15.0263C7.47327 14.4277 7.10327 13.9398 6.65477 13.5629L5.28687 12.3766L8.79633 10.7579L11.6218 12.2103C11.8012 12.299 12.0143 12.299 12.1937 12.2214L30.9631 3.82859C33.8671 2.32077 36.4571 2.12121 38.4417 2.37621L36.3562 3.40729C36.031 3.5625 35.9077 3.95054 36.0647 4.27206C36.1768 4.4938 36.4122 4.62684 36.6477 4.62684C36.7486 4.62684 36.8383 4.60467 36.9392 4.56032L40.4487 2.83077C41.4241 3.17446 42.5678 3.9062 42.6799 4.42728C42.6799 4.47163 42.7136 4.62684 42.3548 4.9151Z" fill="#101010" stroke="#101010" strokeLinejoin="round"></path>
              </svg>
              <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Global offsites</p>
              <p className="MuiTypography-root MuiTypography-body1 css-7iyrqm e1de0imv0">We get together in a cool location at least once a year to get to know each other in person, work together, and have fun.</p>
            </div>
          </div>

          <div className="MuiContainer-root MuiContainer-maxWidthLg css-ykub03 e1de0imv0">
            <p className="MuiTypography-root MuiTypography-body1 css-o03vaz e1de0imv0 tsp-bold">Learn more</p>
            <div className="MuiBox-root css-10h4y2l-grid e1de0imv0" style={{ opacity: 1 }}>

              <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
                <div className="e1de0imv0 MuiBox-root css-7mxiis e1de0imv0">
                  <img src={news1} className="css-8atqhb e1de0imv0" alt="News cover 1" />
                  <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Get introduced to zkRollups and zkEVMs</p>
                  <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-hx0e49 e1de0imv0" href="https://www.youtube.com/watch?v=JdjRcW13LME">
                    youtube.com
                    <svg xmlns="https://scroll.io/imgs/career/news/news-cover-1.png " width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: '0.5rem' }}>
                      <path d="M9 1V7.86538L7.83812 6.7035V2.96385C5.46463 5.26924 3.29542 7.77999 0.853849 10L0 9.16344C2.42536 6.94344 4.5762 4.46728 6.93347 2.1781H3.31272L2.13462 1H9Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
                <div className="e1de0imv0 MuiBox-root css-7mxiis e1de0imv0">
                  <img src={news2} className="css-8atqhb e1de0imv0" alt="News cover 2" />
                  <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">What it means to build in the open on the Zero Knowledge podcast</p>
                  <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-hx0e49 e1de0imv0" href="https://zeroknowledge.fm/275-2/">
                    zeroknowledge.fm
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: '0.5rem' }}>
                      <path d="M9 1V7.86538L7.83812 6.7035V2.96385C5.46463 5.26924 3.29542 7.77999 0.853849 10L0 9.16344C2.42536 6.94344 4.5762 4.46728 6.93347 2.1781H3.31272L2.13462 1H9Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>

              <div className="MuiBox-root css-0 e1de0imv0" style={{ opacity: 1, transform: "translateY(0px) rotateY(0deg) translateZ(0px)" }}>
                <div className="e1de0imv0 MuiBox-root css-7mxiis e1de0imv0">
                  <img src={news3} className="css-8atqhb e1de0imv0" alt="News cover 3" />
                  <p className="MuiTypography-root MuiTypography-body1 css-5ig8l8 e1de0imv0">Diving Deep into ZK with Scroll's Co-Founders</p>
                  <a className="MuiTypography-root MuiTypography-inherit MuiLink-root MuiLink-underlineNone e1de0imv0 e1de0imv0 css-hx0e49 e1de0imv0" href="https://blockworks.co/podcast/empire/dc33c4f8-da5f-11ec-a5ac-27c2459d4600">
                    blockworks.co
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none" style={{ marginLeft: '0.5rem' }}>
                      <path d="M9 1V7.86538L7.83812 6.7035V2.96385C5.46463 5.26924 3.29542 7.77999 0.853849 10L0 9.16344C2.42536 6.94344 4.5762 4.46728 6.93347 2.1781H3.31272L2.13462 1H9Z" fill="currentColor"></path>
                    </svg>
                  </a>
                </div>
              </div>


            </div>
          </div>


        </div>

        {/* join scroll and contribute */}
        <div className="e1de0imv0 MuiBox-root css-1csixvy e1de0imv0">
          <img alt="background" src={joinUsImg} style={{ width: '100%' }} />
          <div className="css-14vqfyn" style={{ animationDelay: '0ms' }}>
            <p className="MuiTypography-root MuiTypography-body1 e1de0imv0 css-1dfqo3s e1de0imv0">
              Join Scroll and contribute in <br /> building the best L2 product in the web3 world.
            </p>
          </div>
          <Button>View Open Positions</Button>
        </div>
        {/* join scroll and contribute */}

      </div>

    </div>

  )
}
