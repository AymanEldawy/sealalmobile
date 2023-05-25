import { LanguageContext } from '@/context/LangContext';
import React, { useContext, useState } from 'react'
import { InputField } from './InputField';
import { TextField } from './TextField';
import { fetchWord } from '@/lang/fetchWord';
import { Button } from '../Global/Button/Button';

export const ContactForm = () => {
  const { lang } = useContext(LanguageContext);
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  return (
    <div className="mt-8">
      <form>
        <InputField
          classes="!bg-[#FAFAFA] !border-none"
          value={name}
          onChange={e => setName(e.target.value)}
          label={fetchWord('your_name', lang)}
          placeholder={fetchWord('enter_your_name', lang)}

        />
        <InputField
          type="email"
          classes="!bg-[#FAFAFA] !border-none"
          value={email}
          onChange={e => setEmail(e.target.value)}
          label={fetchWord('your_email', lang)}
          placeholder="example@example.com"
        />
        <TextField
          classes="!bg-[#FAFAFA] !border-none h-[170px]"
          value={message}
          onChange={e => setMessage(e.target.value)}
          label={fetchWord('message', lang)}
          placeholder={fetchWord('write_message', lang)}
        />
        <Button classes="w-full max-w-[300px] mx-auto rounded-3xl block mt-4">{fetchWord('send', lang)}</Button>
      </form>
    </div>
  )
}
