import React, { useState, useEffect } from 'react';
import { InputField } from './InputField';
import Link from 'next/link';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
export const SignupForm = () => {
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
          label="First Name"
          type="text"
          name="firstName"
          placeholder="First Name"
          value={firstName}
          handleChange={(e) => setFirstName(e.target.value)}
        />
        <InputField
          style={{ flex: 1, border: '2px solid #E5E5E5', padding: '12px' }}
          label="Last Name"
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={lastName}
          handleChange={(e) => setLastName(e.target.value)}
        />
      </div>
      <InputField
        style={{ border: '2px solid #E5E5E5', padding: '12px' }}
        label="Email Address"
        type="email"
        name="email"
        placeholder="Email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <div className="flex gap-4">
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label="Password"
          type="password"
          name="password"
          placeholder="password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label="Confirm Password"
          type="password"
          name="confirmPassword"
          placeholder="Confirm password"
          value={confirmPassword}
          handleChange={(e) => setConfirmPassword(e.target.value)}
        />
      </div>
      <label className="text-[#4A4844] flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        Keep me signed in
      </label>
      <PrimaryButton
        text="Sing up"
        classes="max-w-[90%] w-full rounded-lg !py-3 mx-auto "
      />
      <p className="text-md text-center text-[#4A4844]">
        Have an account
        <Link href="signup" className="text-[#5177FD]">
          Login
        </Link>
      </p>
    </form>
  );
};
