import React, { useState, useEffect } from 'react';
import { InputField } from './InputField';
import Link from 'next/link';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';
export const LoginForm = () => {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      <InputField
        style={{ border: '2px solid #E5E5E5', padding: '12px' }}
        label="Email Address"
        type="email"
        name="email"
        placeholder="Enter your Email"
        value={email}
        handleChange={(e) => setEmail(e.target.value)}
      />
      <div className="relative">
        <Link href="" className="text-[#5177FD] absolute right-0">
          Forgot password?
        </Link>
        <InputField
          style={{ border: '2px solid #E5E5E5', padding: '12px' }}
          label="Password"
          type="password"
          name="password"
          placeholder="Enter your password"
          value={password}
          handleChange={(e) => setPassword(e.target.value)}
        />
      </div>
      {/* <label className="text-[#4A4844] flex gap-2 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
        />
        Keep me signed in
      </label> */}
      <PrimaryButton
        text="login"
        classes="max-w-[90%] w-full rounded-lg !py-3 mx-auto "
      />
      <p className="text-md text-center text-[#4A4844]">
        Not a member?
        <Link href="signup" className="text-[#5177FD]">
          Sign up
        </Link>
      </p>
    </form>
  );
};
