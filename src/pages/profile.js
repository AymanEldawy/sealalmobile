import React, { useState } from 'react';

import { InputField } from './../components/Forms/InputField';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';
import { ProfileSidebar } from './../components/ProfileSidebar/ProfileSidebar';

const Profile = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <ProfileLayout breadcrumbPath="Profile" title="Profile">
      <div className="bg-bgprimary p-4 rounded-md flex flex-col gap-5 mb-6">
        <h4 className="text-xl font-medium">General info</h4>
        <div className="w-full flex gap-4">
          <InputField
            style={{
              flex: 1,
              border: '2px solid #E5E5E5',
              padding: '12px',
            }}
            label="First Name"
            type="text"
            name="firstName"
            placeholder="First Name"
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
          />
          <InputField
            style={{
              flex: 1,
              border: '2px solid #E5E5E5',
              padding: '12px',
            }}
            label="Last Name"
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <PrimaryButton classes="py-2 w-40" text="Update" />
      </div>
      <div className="bg-bgprimary p-4 rounded-md flex flex-col gap-5">
        <h4 className="text-xl font-medium">Security</h4>
        <div className="w-full flex gap-4">
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label="Email Address"
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
          />
          <InputField
            style={{ border: '2px solid #E5E5E5', padding: '12px' }}
            label="Password"
            type="password"
            name="password"
            placeholder="************"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <PrimaryButton classes="py-2 w-40" text="Update" />
      </div>
    </ProfileLayout>
  );
};
export default Profile;
