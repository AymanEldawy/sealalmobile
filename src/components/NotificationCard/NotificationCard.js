import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

import { ChevronIcon } from '../Icons'

const NotificationCard = ({ item }) => {
  return (
    <div className='border rounded-md p-4 flex gap-4 items-center mb-4'>
      <Image src={item?.image} alt="Followed by" height={55} width={55} className='object-cover rounded-full max-w-none w-14 h-14' />
      <div className='flex gap-2 flex-col'>
        <p className='text-black font-medium'>
          <Link href="/" className='text-primary font-medium whitespace-nowrap ltr:pr-1 rtl:pl-1'>
            {item?.from}
          </Link>
          {item?.title} {item?.description}
        </p>
      </div>
      <span className='rotate-180 ltr:ml-auto rtl:mr-auto'>
        <ChevronIcon className="text-primary" />
      </span>
    </div>
  )
}

export default NotificationCard