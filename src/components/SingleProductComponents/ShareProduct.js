import React, { useContext, useState } from 'react'
import { FacebookMessengerIcon, FacebookMessengerShareButton,TwitterIcon , InstapaperIcon, InstapaperShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappIcon, WhatsappShareButton } from "react-share";
// import { CloseIcon, FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon } from '../Icons';
import Modal from '../Modal/Modal';
import Link from 'next/link';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

const ShareProduct = ({ setShare, url }) => {
  const { lang } = useContext(LanguageContext)
  const [copied, setCopied] = useState(false)
  const copy = () => {
    navigator.clipboard.writeText('https://sealalmobile-mu.vercel.app');
    setCopied(true)
    setTimeout(() => {
      setCopied(false)
    }, 2000);
  }
  return (
    <Modal containerClassName="z-[99] max-w-[575px]" open={true} close={() => setShare(false)}>
      <>
        <p className=' font-[500] 2xl:text-[18px]'>{fetchWord('Share_this_link_via', lang)}</p>
        <div className='flex space-x-4 mt-4'>
          <FacebookMessengerShareButton  title="" url={window ? window?.location?.href : null}>
            <FacebookMessengerIcon className="h-6 w-6 !rounded-full " />
          </FacebookMessengerShareButton>
          <InstapaperShareButton  title="" url={window ? window?.location?.href : null}>
            <InstapaperIcon className="h-6 w-6 !rounded-full " />
          </InstapaperShareButton>
          <TwitterShareButton  title="" url={window ? window?.location?.href : null}>
            <TwitterIcon className="h-6 w-6 !rounded-full " />
          </TwitterShareButton>
          <WhatsappShareButton  title="" url={window ? window?.location?.href : null}>
            <WhatsappIcon className="h-6 w-6 !rounded-full " />
          </WhatsappShareButton>
          <TelegramShareButton  title="" url={window ? window?.location?.href : null}>
            <TelegramIcon className="h-6 w-6 !rounded-full" />
          </TelegramShareButton>
        </div>
        <p className='mt-4 flex items-center justify-between'>{fetchWord('or_copy', lang)} {copied ? <span className='text-xs bg-green-100 text-green-500 p-1 px-2'>{fetchWord('Copied', lang)}</span> : null} </p>
        <div className='py-2 border rounded-[10px] flex justify-between mt-2 px-2 gap-2 items-center text-xs'>
          <p>https://sealalmobile-mu.vercel.app</p>
          <button onClick={copy} className='p-2 rounded-md bg-primary text-white'>
            {fetchWord('Copy', lang)}
          </button>
        </div>
      </>
    </Modal>

  )
}

export default ShareProduct