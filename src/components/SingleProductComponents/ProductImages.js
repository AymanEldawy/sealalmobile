import React, { useState } from 'react'
import { ProductStatus } from '../Product/ProductStatus'
import { ProductSale } from '../Product/ProductSale'
import Image from 'next/image'

export const ProductImages = ({ images }) => {
  const [selectedImage, setSelectedImage] = useState(images?.[0]?.src)
  return (
    <div className="flex-1 overflow-hidden">
      <figure className='relative mb-4 '>
        <ProductStatus />
        <ProductSale />
        <Image src={selectedImage} alt={'product alt'} height={550} width={512} />
      </figure>
      <div className='flex gap-4 overflow-auto scroll-hide'>
        {
          images?.map(img => (
            <Image key={img?.id} onClick={() => setSelectedImage(img?.src)} src={img?.src} alt={'product alt'} height={70} width={70} className={`rounded-md cursor-pointer ${selectedImage === img?.src ? "border-primary border-4" : ""}`} />
          ))
        }
      </div>
    </div>
  )
}
