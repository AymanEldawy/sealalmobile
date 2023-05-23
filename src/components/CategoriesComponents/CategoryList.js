import Link from 'next/link'
import React from 'react'

import { LongArrowIcon } from '../Icons'

export const CategoryList = ({ categories }) => {
  return (
    <ul className='flex flex-col gap-2 mt-4'>
      {
        categories?.map(category => (
          <li key={category?.id}>
            <Link href={`/categories/${category?.id}`} className='border-[#F1F1F1] border p-4 font-semibold rounded-xl text-secondary flex items-center justify-between'>
              {category?.name}
              <LongArrowIcon className="!text-[#6F6F6F] rotate-180" />
            </Link>
          </li>
        ))
      }

    </ul>
  )
}
