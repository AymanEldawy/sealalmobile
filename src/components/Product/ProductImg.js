import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'

export const ProductImg = ({ src, alt, productId, grid }) => {
  const router = useRouter()
  const handelLink = () => {
    router.push(`/products/${productId}`)
  }
  return (
    <figure className={`bg-gray-100 cursor-pointer ${grid ? 'h-full' : 'h-[240px]'} `}  onClick={handelLink}>
      <Image src={src} alt={alt} height={284} width={grid ? 110 : 230} className={`w-full h-full object-contain`} />
    </figure>
  )
}
