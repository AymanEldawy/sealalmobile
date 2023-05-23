import Image from 'next/image'
import React from 'react'

export const HomePickup = ({ showLoading }) => {
  return (
    <div className='mobile-container-full !bg-white'>
      <div className='flex flex-col justify-center items-center min-h-screen max-w-[375px] mx-auto'>
        <Image
          className="object-contain mx-auto"
          src="/images/logo.png"
          alt="register"
          height={70}
          width={203}
        />
        {
          showLoading ?
            <div className="mt-8 flex items-center gap-6">
              <span className='h-4 w-4 rounded-full bg-primary animate-ping'></span>
              <span className='h-4 w-4 rounded-full bg-primary animate-ping'></span>
              <span className='h-4 w-4 rounded-full bg-primary animate-ping'></span>
            </div>
            : null
        }
      </div>
    </div>

  )
}
