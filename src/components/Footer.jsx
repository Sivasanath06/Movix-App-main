import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

import ContentWrapper from './ContentWrapper'

// const IconStyle = 'w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer duration-300 hover:text-pink shadow-on-hoverIcon'

const SocialIcon = ({ Icon, url }) => {
  return (
    <a href={url} target='__blank'>
      <li className='w-[50px] h-[50px] rounded-full bg-black flex items-center justify-center cursor-pointer duration-300 hover:text-pink shadow-on-hoverIcon'  >
        <Icon alt={`Icon`} />
      </li>
    </a>
  )
}

const Footer = () => {



  return (
    <footer className="bg-black3 py-[50px] text-white relative ">
      <ContentWrapper className='flex flex-col items-center'>

        <ul className="list-none flex items-center justify-center gap-4 md:gap-[30px] mb-5 md:mb-[30px] ">
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Terms Of Use</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Privacy-Policy</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">About</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">Blog</li>
          <li className="cursor-pointer text-xs md:text-base hover:text-pink duration-200">FAQ</li>
        </ul>

        <div className="text-center text-xs md:text-sm leading-5 opacity-50 max-w-[800px] mb-5 md:mb-[30px] ">
          <p>Explore a diverse selection of the latest and highly acclaimed movies, perfect for any viewing preference. Whether you enjoy the cinematic experience, television broadcasts, or streaming services like Netflix, Amazon Prime Video, Hotstar, Voot, and Jio Cinema, we have curated a list of popular titles to help you choose your next watch.
          </p>
        </div>

        <ul className="flex items-center justify-center gap-3 ">
          <SocialIcon Icon={FaGithub} url={'https://github.com/Sivasanath06'} />
          <SocialIcon Icon={FaFacebookF} url={'https://github.com/Sivasanath06'} />
          <SocialIcon Icon={FaInstagram} url={'https://github.com/Sivasanath06'} />
          <SocialIcon Icon={FaTwitter} url={'https://github.com/Sivasanath06'} />
          <SocialIcon Icon={FaLinkedin} url={'https://github.com/Sivasanath'} />
        </ul>

      </ContentWrapper>
    </footer>
  )
}

export default Footer
