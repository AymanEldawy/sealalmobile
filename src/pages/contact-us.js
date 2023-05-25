import { ContactForm } from '@/components/Forms/ContactForm'
import { SMSIcon, MobileIcon, MapIcon } from '@/components/Icons'
import { Layout } from '@/components/Layout/Layout'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import Image from 'next/image'
import React, { useContext } from 'react'

const contactInfo = [
  { icon: <MapIcon className="h-6 w-6 text-transparent stroke-primary" />, title: "address", description: "Lorem Ipsum is simply dummy text of the printing" },
  { icon: <MobileIcon className="h-6 w-6 text-primary" />, title: "phone_number", description: "Lorem Ipsum is simply dummy text of the printing" },
  { icon: <SMSIcon className="h-6 w-6 " />, title: "email_address", description: "Lorem Ipsum is simply dummy text of the printing" },

]
const Contact = () => {
  const { lang } = useContext(LanguageContext)
  return (
    <Layout hideIcons hideSearch title={fetchWord('contact_us', lang)} containerClassName="pb-3 before:border-b before:absolute before:-left-4 before:w-screen before:h-[1px] before:-bottom-1 !overflow-visible">
      <div className='flex gap-2 mt-8'>
        {
          contactInfo?.map(item => (
            <div className='flex flex-col items-center justify-center px-2 py-2 gap-2 rounded-md border border-[#ccc]' key={item?.title}>
              <span>
                {item?.icon}
              </span>
              <h4 className="font-medium text-xs">{fetchWord(item?.title, lang)}</h4>
              <p className="text-[#646464] text-[10px] text-center">{item?.description}</p>
            </div>
          ))
        }
      </div>
      <ContactForm />

    </Layout>
  )
}

export default Contact