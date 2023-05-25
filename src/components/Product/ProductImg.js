import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const ProductImg = ({ src, alt, productId, grid }) => {
  const router = useRouter()
  const handelLink = () => {
    router.push(`/products/${productId}`)
  }
  return (
    <figure className=' cursor-pointer h-full' onClick={handelLink}>
      <Image src={src} alt={alt} height={284} width={grid ? 110 : 230} className={`${grid ? 'w-[110px]' : 'w-full'} h-full object-contain`} />
    </figure>
  )
}
