import React from 'react'
import { FacebookIcon, GoogleIcon, InstagramIcon, TwitterIcon } from '../Icons'

export const Social = () => {
  return (
    <div className='flex items-center gap-2'>
      <a href="" target='_blank' className='hover:scale-125 duration-200 bg-white h-10 w-10 grid place-items-center rounded-full'>
        <TwitterIcon className="text-primary w-4 h-4" />
      </a>
      <a href="" target='_blank' className='hover:scale-125 duration-200 bg-white h-10 w-10 grid place-items-center rounded-full'>
        <FacebookIcon className="text-primary w-4 h-4" />
      </a>
      <a href="" target='_blank' className='hover:scale-125 duration-200 bg-white h-10 w-10 grid place-items-center rounded-full'>
        <GoogleIcon className="text-primary w-4 h-4" />
      </a>
      <a href="" target='_blank' className='hover:scale-125 duration-200 bg-white h-10 w-10 grid place-items-center rounded-full'>
        <InstagramIcon className="text-primary w-4 h-4" />
      </a>

    </div>
  )
}
