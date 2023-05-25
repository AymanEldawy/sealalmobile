import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useState } from 'react'

import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { ProfileForm } from './ProfileForm';
import { ProfileTitle } from './ProfileTitle'

export const ProfileInfo = () => {
  const { lang } = useContext(LanguageContext);
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState()

  const updateProfile = (e) => {
    e.preventDefault()
  }
  return (
    <form className="mt-5" onSubmit={updateProfile}>
      <div className='flex gap-4'>
        <InputField
          containerClassName="!mt-6 !mb-0"
          classes="border-[#D5D5D5] px-4 bg-[#FAFAFA] !border-none"
          label={fetchWord('first_name', lang)}
          placeholder="Jame"
          value={first_name}
          onChange={e => setFirstName(e.target.value)}
        />
        <InputField
          containerClassName="!mt-6 !mb-0"
          classes="border-[#D5D5D5] px-4 bg-[#FAFAFA] !border-none"
          label={fetchWord('last_name', lang)}
          placeholder="Taylor"
          value={last_name}
          onChange={e => setLastName(e.target.value)}
        />
      </div>
      <InputField
        type="email"
        containerClassName="!mt-6 !mb-0"
        classes="border-[#D5D5D5] px-4 bg-[#FAFAFA] !border-none"
        label={fetchWord('email', lang)}
        placeholder="example@example.com"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <InputField
        type="password"
        containerClassName="!mt-6 !mb-0"
        classes="border-[#D5D5D5] px-4 bg-[#FAFAFA] !border-none"
        label={fetchWord('password', lang)}
        placeholder="**********"
        value={password}
        onChange={e => setPassword(e.target.value)}
      />
      <Button classes="!py-3 mt-8 !rounded-3xl text-sm !px-8 h-[46px] block w-full mx-auto max-w-[282px]">{fetchWord('update', lang)}</Button>
    </form>
  )
}
