import React, { useContext, useState } from 'react'
import { FacebookMessengerShareButton, InstapaperShareButton, TelegramIcon, TelegramShareButton, TwitterShareButton, WhatsappShareButton } from "react-share";
import { CloseIcon, FacebookIcon, InstagramIcon, TwitterIcon, WhatsAppIcon } from '../Icons';
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
        <p className='mt-6 font-[500] 2xl:text-[18px]'>{fetchWord('Share_this_link_via', lang)}</p>
        <div className='flex space-x-4 mt-4'>
          <FacebookMessengerShareButton className='w-9 h-9 rounded-full !bg-primary text-white flex items-center justify-center' title="" url={window ? window?.location?.href : null}>
            <FacebookIcon className="h-6 w-6 !text-white" />
          </FacebookMessengerShareButton>
          <InstapaperShareButton className='w-9 h-9 rounded-full !bg-primary text-white flex items-center justify-center' title="" url={window ? window?.location?.href : null}>
            <InstagramIcon className="h-6 w-6 !text-white" />
          </InstapaperShareButton>
          <TwitterShareButton className='w-9 h-9 rounded-full !bg-primary text-white flex items-center justify-center' title="" url={window ? window?.location?.href : null}>
            <TwitterIcon className="h-6 w-6 !text-white" />
          </TwitterShareButton>
          <WhatsappShareButton className='w-9 h-9 rounded-full !bg-primary text-white flex items-center justify-center' title="" url={window ? window?.location?.href : null}>
            <WhatsAppIcon className="h-6 w-6 bg-primary !text-white" />
          </WhatsappShareButton>
          {/* <TelegramShareButton className='w-9 h-9 rounded-full !bg-primary text-white flex items-center justify-center' title="" url={window ? window?.location?.href : null}>
            <TelegramIcon className="h-6 w-6 !rounded-full !bg-primary !text-white" />
          </TelegramShareButton> */}
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