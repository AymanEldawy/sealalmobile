import React, { useState, useContext } from 'react'
import { ProfileTitle } from './ProfileTitle'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import { ProfileForm } from './ProfileForm';


export const ProfileInfo = () => {
  const { lang } = useContext(LanguageContext);
  const [first_name, setFirstName] = useState('')
  const [last_name, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [new_email, setNewEmail] = useState('');
  const [password, setPassword] = useState()
  const [new_password, setNewPassword] = useState()

  const updateProfileInfo = (e) => {
    e.preventDefault()
  }
  const updateEmail = (e) => {
    e.preventDefault()
  }
  const updatePassword = (e) => {
    e.preventDefault()
  }
  return (
    <div className="">
      <ProfileTitle title={fetchWord('profile', lang)} />
      <div className="bg-bmain py-8 px-4 mb-4">
        <h3 className="text-[#363636] font-semibold text-lg">{fetchWord('General_info', lang)}</h3>
        <ProfileForm
          firstField={fetchWord('first_name', lang)}
          firstFieldPlaceholder={fetchWord('User_name', lang)}
          secondField={fetchWord('last_name', lang)}
          secondFieldPlaceholder={fetchWord('User_last_name', lang)}
          submit={updateProfileInfo}
          firstFieldValue={first_name}
          secondFieldValue={last_name}
          onFirstFieldChange={setFirstName}
          onSecondFieldChange={setLastName}
        />
      </div>
      <div className="bg-bmain py-8 px-4">
        <h3 className="text-[#363636] font-semibold text-lg">{fetchWord('Security', lang)}</h3>
        <ProfileForm
          firstFieldType="email"
          secondFieldType="email"
          firstField={fetchWord('email', lang)}
          firstFieldPlaceholder="example@example.com"
          secondField={fetchWord('add_new_email', lang)}
          secondFieldPlaceholder="example@example.com"
          submit={updateEmail}
          firstFieldValue={email}
          secondFieldValue={new_email}
          onFirstFieldChange={setEmail}
          onSecondFieldChange={setNewEmail}
        />
        <div className="h-8" />
        <ProfileForm
          firstFieldType="password"
          secondFieldType="password"
          firstField={fetchWord('password', lang)}
          firstFieldPlaceholder={fetchWord('**********', lang)}
          secondField={fetchWord('change_password', lang)}
          secondFieldPlaceholder={fetchWord('**********', lang)}
          submit={updatePassword}
          firstFieldValue={password}
          secondFieldValue={new_password}
          onFirstFieldChange={setPassword}
          onSecondFieldChange={setNewPassword}
        />
      </div>

    </div>
  )
}
