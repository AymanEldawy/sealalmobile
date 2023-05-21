import Link from 'next/link'
import React, { useContext } from 'react'
import BarsIcon from '../Icons/BarsIcon'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import { New } from '../New'

const Sidebar = ({ title, containerClassName, listClassName, itemClassName, linkClassName, list, extraContent }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <aside className={`sticky top-0 flex flex-col border-2 ${containerClassName}`}>
      <h3 className='text-white bg-primary flex items-center p-2 px-6 gap-3'><BarsIcon /> { title }</h3>
      <ul className={`flex flex-col gap-2  py-2 px-8 overflow-auto flex-1 ${listClassName}`}>
        {list?.map((category, index) => (
          <li key={category} className={`p-1 list-disc  hover:text-primary ${itemClassName}`}>
            <Link href={`/categories/${category}`} className={` flex gap-4 justify-between ${linkClassName}`}>{category}
              {index === 4 ?
              <New />
                : null}
            </Link>
          </li>
        ))}
      </ul>
      {extraContent}
    </aside>
  )
}

export default Sidebar