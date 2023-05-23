import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export const CategoryMost = ({ mostCategories }) => {
  return (
    <div className='flex flex-col gap-4 mb-4'>
      {
        mostCategories?.map(category => (
          <Link href={`/categories/${category?.id}`} key={category} className='relative w-full'>
            <Image src={category?.image} alt={category?.name} height={40} width={330} className='w-full object-cover h-10' />
            <h3 className='absolute top-1/2 left-8 -translate-y-1/2 font-semibold text-secondary capitalize' >{category?.name}</h3>
          </Link>
        ))
      }
    </div>
  )
}
