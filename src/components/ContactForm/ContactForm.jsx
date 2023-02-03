import React, { useState } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { InputField } from '../Forms/InputField';
import { TextField } from './../Forms/TextField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const ContactForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  return (
    <div className="mt-8">
      <SectionTitle title="Send Us a Message" />
      <form className="mb-8">
        <InputField
          label="Your Name"
          type="text"
          name="name"
          value={name}
          handleChange={(e) => setName(e.target.name)}
        />
        <InputField
          label="Your Email"
          type="email"
          name="email"
          value={email}
          handleChange={(e) => setEmail(e.target.name)}
        />
        <TextField
          label="Message"
          name="message"
          value={message}
          handleChange={(e) => setMessage(e.target.name)}
        />
        <PrimaryButton
          text="Submit"
          classes="w-full max-w-sm block m-auto py-2"
        />
      </form>
    </div>
  );
};
