import React, { useContext, useEffect } from 'react'
import { UserCircleIcon } from '../Icons'
import TabsList from '../Tabs/TabsList'
import { fetchWord } from '@/lang/fetchWord'
import { LanguageContext } from '@/context/LangContext';
import { list } from 'postcss';


const sellerList = [
  "Profile_info",
  "orders",
  "My_Products",
  "Terms",
  "Help",
]
const userList = [
  "Profile_info",
  "My_Orders",
  "My_Addresses",
  "My_saved_cards",
  "Stores_follow",
  "Buy_again",
  "Terms",
  "Help",
]


export const ProfileSidebar = ({ containerClassName, username, role, activeTab, setActiveTab, changeUserRole }) => {
  const { lang } = useContext(LanguageContext)
  // Hello, User name
  useEffect(() => {
    setActiveTab(role === 'seller' ? sellerList?.[0] : userList?.[0])
  }, [])
  return (
    <aside className={`sticky top-0 h-[100dvh] flex flex-col w-[286px] border-2 ${containerClassName}`}>
      <h3 className='text-white bg-primary flex items-center p-2 px-4  gap-3'><UserCircleIcon className="text-white" /> {fetchWord('hello', lang)}, {username}</h3>
      <TabsList
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        direction="vertical"
        list={role === 'seller' ? sellerList : userList}
        itemClassName="capitalize ltr:pl-12 rtl:pr-12 py-2 border-b relative whitespace-nowrap before:bg-gray-400 ltr:before:left-5 rtl:before:right-5 before:top-1/2 before:-translate-y-1/2 before:absolute before:w-[5px] before:h-[5px] before:rounded-full"
        activeClassName="!text-primary before:!bg-primary"
      />
      <button className="text-blue-500 border border-blue-500 p-2 duration-300 hover:bg-blue-500 hover:text-white" onClick={changeUserRole}>Toggle user role</button>
    </aside>
  )
}
