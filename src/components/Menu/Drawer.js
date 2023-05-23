import { LanguageContext } from '@/context/LangContext'
import { links } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import React, { useContext } from 'react'

export const Drawer = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="bg-white h-screen -mx-4 -mt-4">
      <h3 className="border border-[#F0F0F0] mb-4 pt-8 capitalize pb-3 text-lg text-center text-secondary font-semibold">{fetchWord('menu', lang)}</h3>
      <ul className="flex flex-col gap-8 p-5">
        {
          links?.map(item => (
            <li key={item?.name} className=' w-full '>
              <Link href={item?.link} className="hover:text-primary border-b capitalize text-[#333E48] font-medium border-[#F0F0F0] w-full pb-3">{fetchWord(item?.name, lang)}</Link>
            </li>
          ))
        }
        <li className="w-full">
          <a href="https://sealal-shipping.vercel.app/" className="hover:text-primary border-b capitalize text-[#333E48] font-medium border-[#F0F0F0] w-full pb-3">{fetchWord('Sealal_express', lang)}</a>
        </li>
      </ul>
    </div>
  )
}
