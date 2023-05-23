import { LoginWithSocialAccount } from '@/components/LoginWithSocialAccount'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import Link from 'next/link'
import React, { useContext } from 'react'

const Join = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className='mobile-container-full !bg-white'>
      <div className='flex flex-col justify-center items-center min-h-screen max-w-[375px] mx-auto'>
        <figure className='w-full flex items-center justify-center mb-5'>
          <Image src="/images/logo.png" alt="Sealal" width={130} height={35} />
        </figure>
        <div className='flex flex-col items-start w-full px-7'>
          <Link className='text-lg font-semibold text-primary' href="/signup">{fetchWord('join_sealal', lang)}</Link>
          <p className='text-xs text-[#667080] mb-5'>{fetchWord('join_msg', lang)}</p>
          <LoginWithSocialAccount />
          <div className='mt-8 flex items-center flex-col gap-3 text-center w-full'>
            <Link className='text-secondary font-medium' href="/">{fetchWord('Need_Help', lang)}</Link>
            <p className='text-sm text-[#382D37]'>{fetchWord('Bysigning_Offer', lang)}</p>
            <p className='text-sm flex gap-1 justify-center'>
              <Link className='text-secondary' href="">{fetchWord('Trams_Service', lang)}</Link>
              {fetchWord('and', lang)}
              <Link className='text-secondary' href="">{fetchWord('Privacy_Policy', lang)}</Link>
            </p>
            <div className='w-[112px] mx-auto border-2 mt-8 mb-4 border-[#C2BFC2]' />
            <p className='text-sm text-[#382D37]'>{fetchWord('Version', lang)}: 2.66.0 (9154)</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Join