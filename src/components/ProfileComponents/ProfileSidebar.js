import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useEffect, useState } from 'react'

import { UserCircleIcon } from '../Icons'
import TabsList from '../Tabs/TabsList'
import { LogoutBox } from '../LogoutBox/LogoutBox';

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
  const { lang } = useContext(LanguageContext);
  const [open, setOpen] = useState(false)

  const onClickConfirm = () => {
    
  }
  return (
    <aside className={`bg-white top-0 h-screen flex flex-col ${containerClassName}`}>
      <h3 className='text-white bg-primary flex pt-8 items-end py-4 px-4  gap-3'><UserCircleIcon className="text-white" /> {fetchWord('hello', lang)}, {username}</h3>
      <TabsList
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        direction="vertical"
        list={role === 'seller' ? sellerList : userList}
        containerClassName="gap-2"
        itemClassName="capitalize ltr:pl-8 rtl:pr-8 py-4 font-semibold border-b relative whitespace-nowrap"
        activeClassName="!text-primary before:!bg-primary"
      />
      {
        open ?
          <LogoutBox onClickConfirm={onClickConfirm} onClickCancel={() => setOpen(false)} />
          : null
      }
      <button onClick={() => setOpen(true)} className="capitalize ltr:pl-8 rtl:pr-8 py-4 font-semibold border-b relative whitespace-nowrap w-full ltr:text-left rtl:text-right">{fetchWord('logout', lang)}</button>
      <button className="text-blue-500 border border-blue-500 p-2 duration-300 hover:bg-blue-500 hover:text-white" onClick={changeUserRole}>Toggle user role</button>
    </aside>
  )
}
