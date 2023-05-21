import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Link from 'next/link'
import React, { useContext } from 'react'

import { MessageSolidIcon } from '../Icons'
import CallIcon from '../Icons/CallIcon'
import MapIcon from '../Icons/MapIcon'
import MessageIcon from '../Icons/MessageIcon'
import { FooterListTitle } from './FooterListTitle'

export const ContactInfo = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="mt-8">
      <FooterListTitle title={fetchWord('contact_info', lang)} />
      <ul className='flex flex-col gap-4  max-w-fit'>
        <li className='flex gap-4 items-start pb-6 border-b border-black'>
          <span className="bg-primary p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <MapIcon />
          </span>
          <div className="text-xs font-medium flex flex-col gap-1">
            <p>1789 Street Name, City Name,United States</p>
          </div>
        </li>
        <li className='flex gap-4 items-start pb-6 border-b border-black'>
          <span className="bg-primary p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <CallIcon />
          </span>
          <div className="text-xs font-medium flex flex-col gap-1">
            <Link href="">
              0051 - 123 456 789
            </Link>
            <Link href="">
              +0123456789
            </Link>
          </div>
        </li>
        <li className='flex gap-4 items-start pb-6 border-b border-black'>
          <span className="bg-primary p-2 rounded-full w-8 h-8 flex items-center justify-center">
            <MessageSolidIcon />
          </span>
          <div className="text-xs font-medium flex flex-col gap-1">
            <Link href="">
              Email: support@sealsal.com
            </Link>
            <Link href="">
              9AM-5PM, Mon - Sat, GMT+3

            </Link>
          </div>
        </li>
      </ul>
    </div>)
}
