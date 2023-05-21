import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const ProductImg = ({ src, alt, productId }) => {
  const router = useRouter()
  const handelLink = () => {
    router.push(`/products/${productId}`)
  }
  return (
    <figure className='mb-2 cursor-pointer' onClick={handelLink}>
      <Image src={src} alt={alt} height={284} width={230} className='w-full' />
    </figure>
  )
}
