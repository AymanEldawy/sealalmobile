import React, { useState, useContext } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { InputField } from '../Forms/InputField';
import { TextField } from './../Forms/TextField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../../context/LangContext';

export const ContactForm = () => {
  const { lang } = useContext(LanguageContext);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="mt-8">
      <SectionTitle title="Send Us a Message" />
      <form className="mb-8">
        <InputField
          label={fetchWord('your_name', lang)}
          type="text"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.name)}
        />
        <InputField
          label={fetchWord('email_place_holder', lang)}
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.name)}
        />
        <TextField
          label={fetchWord('Message', lang)}
          name="message"
          value={message}
          handleChange={(e) => setMessage(e.target.name)}
        />
        <PrimaryButton
          text={fetchWord('submit', lang)}
          classes="w-full max-w-sm block m-auto py-2"
        />
      </form>
    </div>
  );
};
