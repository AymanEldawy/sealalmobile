import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { BellIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'

const Notification = () => {
  const { lang } = useContext(LanguageContext)
  const [notification, setNotification] = useState();

  return (
    <Layout hideIconBack hideIcons containerClassName="border-b border-[#F1F1F1] pb-1" hideSearch title={fetchWord('Notification', lang)}>
      {
        notification?.length ? (
          <>

          </>) : (
          <div className="h-[60vh] -mx-4 flex items-center justify-center flex-col gap-4  py-12 mb-12">
            <BellIcon className="stroke-[4px] h-24 w-24 text-[#D9D9D9]" />
            <p className="text-sm font-medium">{fetchWord('notification_empty_msg', lang)}</p>
            <PrimaryLink link="/" className="rounded-3xl px-4 py-2 text-sm">{fetchWord('Start_shopping', lang)}</PrimaryLink>
          </div>
        )
      }

    </Layout>
  )
}

export default Notification