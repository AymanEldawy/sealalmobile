import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'
import { ArrowsIcon } from '../Icons'

export const ProductSizes = ({ productSizes, size, setSize }) => {
  const { lang } = useContext(LanguageContext);

  return (
    <div className="">
      <h4 className="uppercase mb-2 font-medium">{fetchWord('size', lang)}</h4>
      <div className="flex">

        <div className="flex flex-1 gap-2">
          {productSizes?.slice(0,6)?.map(currentSize => (
            <button onClick={() => setSize(currentSize?.id)} key={currentSize?.id} className={`w-9 h-9 text-center items-center border p-1 px-2text-[#3D3D3D] ${currentSize?.id === size ? "!text-white bg-primary rounded-md" : ""}`}>
              {currentSize?.size}
            </button>
          ))
          }
        </div>
        <div className="flex gap-4">
          <span className='cursor-pointer flex gap-2 text-sm underline ltr:ml-auto rtl:mr-auto items-center'><Image src="/images/size-guide.png" alt="size guid" height={18} width={30} className='w-6 h-5 object-contain' /> {fetchWord('Size_Guide', lang)}</span>
          <span className='cursor-pointer flex items-center gap-2 text-sm underline'><ArrowsIcon /> {fetchWord('compare', lang)}</span>
        </div>
      </div>
    </div>
  )
}
