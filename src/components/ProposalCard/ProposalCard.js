import Image from 'next/image'
import React, { useContext } from 'react'
import RatingStars from '../RatingStars/RatingStars'
import { Button } from '../Global/Button/Button'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext'
import MessageIcon from './../Icons/MessageIcon';

const ProposalCard = ({ proposal }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="border-b border-gray-400 flex-col hover:bg-gray-50 bg-[#f2f2f2] rounded-md p-4">
      <div className='flex items-start mb-2'>
        <Image
          src={proposal?.image}
          alt={proposal?.name}
          height={50}
          width={50}
          className="object-contain cursor-pointer"
        />
        <div className="flex-1 px-2 rtl:pl-4 ltr:pr-4">
          <div className='flex gap-2 items-center'>
            <h3 className="font-medium cursor-pointer">{proposal?.name}</h3>
            <RatingStars rating={430} />
          </div>
          <div className="flex items-center text-sm gap-2">
            <span>{proposal?.title}</span>
            <span className="text-sm text-lead">{proposal?.deadline}</span>
          </div>
        </div>

      </div>
      <div className=' flex items-center my-2 gap-1'>
        <span className=''>
          {proposal?.timeToGo}
        </span>
        |
        <span className='text-primary'>
          {proposal?.price}$/hr
        </span>
      </div>
      <p className="text-lead">{proposal?.description}</p>
      <div className="mt-4 flex gap-3">
        <button className='px-4 rounded-md border border-secondary'>
          <MessageIcon className="text-secondary" />
        </button>
        <Button classes="text-sm capitalize !bg-secondary !text-black">{fetchWord('accept_the_offer', lang)}</Button>
      </div>
    </div>
  )
}

export default ProposalCard