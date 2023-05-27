import { GlobalOptions } from '@/context/GlobalOptions';
import { LanguageContext } from '@/context/LangContext'
import { links } from '@/data/dummyData';
import { fetchWord } from '@/lang/fetchWord';
import Link from 'next/link';
import React, { useContext } from 'react'

export const Drawer = () => {
  const {setOpenDrawer} = useContext(GlobalOptions)
  const { lang } = useContext(LanguageContext);
  return (
    <>
      <div className='fixed top-0 left-0 w-screen h-screen z-10 bg-[#00000090]' onClick={() => setOpenDrawer(false)} />
      <div className="bg-white h-screen -mx-4 -mt-4 max-w-[300px] z-20 relative">
        <h3 className="border border-[#F0F0F0] py-4 capitalize  text-lg text-center text-secondary font-semibold">{fetchWord('menu', lang)}</h3>
        <ul className="flex flex-col p-5 w-full">
          {
            links?.map(item => (
              <li key={item?.name} className=' w-full '>
                <Link href={item?.link} className="block hover:text-primary p-4 border-b capitalize text-[#333E48] font-medium border-[#F0F0F0] w-full pb-3">{fetchWord(item?.name, lang)}</Link>
              </li>
            ))
          }
          <li className="w-full">
            <a href="https://sealal-shipping.vercel.app/" className="block w-full hover:text-primary p-4 border-b capitalize text-[#333E48] font-medium border-[#F0F0F0] pb-3">{fetchWord('Sealal_express', lang)}</a>
          </li>
        </ul>
      </div>
    </>
  )
}
