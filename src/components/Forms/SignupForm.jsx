import React, { useState, useEffect, useContext } from 'react';
import { InputField } from './InputField';
import Link from 'next/link';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const SignupForm = () => {
  const { lang } = useContext(LanguageContext);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <InputField
          style={{ flex: 1, border: '2px solid #E5E5E5', padding: '12px' }}
          label={fetchWord('first_name_label', lang)}
          type="text"
          name="firstName"
          placeholder={fetchWord('first_name_placeholder', lang)}
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          style={{ flex: 1, border: '2px solid #E5E5E5', padding: '12px' }}
          label={fetchWord('last_name_label', lang)}
          type="text"
          name="lastName"
          placeholder={fetchWord('last_name_placeholder', lang)}
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <InputField
        style={{ border: '2px solid #E5E5E5', padding: '12px' }}
        label={fetchWord('email_label', lang)}
        type="email"
        name="email"
        placeholder={fetchWord('email_label', lang)}
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex gap-4">
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label={fetchWord('password_label', lang)}
          type="password"
          name="password"
          placeholder={fetchWord('password_label', lang)}
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label={fetchWord('confirm_password_label', lang)}
          type="password"
          name="confirmPassword"
          placeholder={fetchWord('confirm_password_placeholder', lang)}
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <label className="text-[#4A4844] flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        {fetchWord('keep_login', lang)}
      </label>
      <PrimaryButton
        text={fetchWord('signup', lang)}
        classes="max-w-[90%] w-full rounded-lg !py-3 mx-auto "
      />
      <p className="text-md text-center text-[#4A4844]">
        {fetchWord('have_account', lang)}
        <Link href="signup" className="mx-1 text-[#5177FD]">
          {fetchWord('login', lang)}
        </Link>
      </p>
    </form>
  );
};
