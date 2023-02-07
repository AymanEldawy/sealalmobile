import React, { useState, useContext } from 'react';

import { InputField } from './../components/Forms/InputField';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';
import { ProfileSidebar } from './../components/ProfileSidebar/ProfileSidebar';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const Profile = () => {
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
    <ProfileLayout breadcrumbPath="Profile" title={fetchWord('profile', lang)}>
      <div className="bg-bgprimary p-4 rounded-md flex flex-col gap-5 mb-6">
        <h4 className="text-xl font-medium">
          {fetchWord('General_info', lang)}
        </h4>
        <div className="w-full flex gap-4">
          <InputField
            style={{
              flex: 1,
              border: '2px solid #E5E5E5',
              padding: '12px',
            }}
            label={fetchWord('first_name_label', lang)}
            type="text"
            name="firstName"
            placeholder={fetchWord('first_name_placeholder', lang)}
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            style={{
              flex: 1,
              border: '2px solid #E5E5E5',
              padding: '12px',
            }}
            label={fetchWord('last_name_label', lang)}
            type="text"
            name="lastName"
            placeholder={fetchWord('last_name_placeholder', lang)}
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <PrimaryButton classes="py-2 w-40" text={fetchWord('Update', lang)} />
      </div>
      <div className="bg-bgprimary p-4 rounded-md flex flex-col gap-5">
        <h4 className="text-xl font-medium">{fetchWord('Security', lang)}</h4>
        <div className="w-full flex gap-4">
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label={fetchWord('email_label', lang)}
            type="email"
            name="email"
            placeholder={fetchWord('email', lang)}
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label={fetchWord('password_label', lang)}
            type="password"
            name="password"
            placeholder="************"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PrimaryButton classes="py-2 w-40" text={fetchWord('Update', lang)} />
      </div>
    </ProfileLayout>
  );
};
export default Profile;
