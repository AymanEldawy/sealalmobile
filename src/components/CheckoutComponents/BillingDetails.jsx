import React, { useState } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { InputField } from './../Forms/InputField';
import { SelectField } from './../Forms/SelectField';
import { TextField } from './../Forms/TextField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const BillingDetails = ({ nextStageHandler }) => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [country, setCountry] = useState('');
  const [town, setTown] = useState('');
  const [street, setStreet] = useState('');
  const [phone, setPhone] = useState('');
  const [orderNote, setOrderNote] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const countries = [
    { id: 1, name: 'Egypt' },
    { id: 2, name: 'Saudi Arabia' },
    { id: 3, name: 'USA' },
  ];
  return (
    <div className="mt-8">
      <SectionTitle title="Billing Details" />
      <form className="flex flex-col mb-8" onSubmit={handleSubmit}>
        <div className="flex gap-4">
          <InputField
            value={firstName}
            handleChange={(e) => setFirstName(e.target.value)}
            type="text"
            label="First Name"
            required
          />
          <InputField
            value={lastName}
            handleChange={(e) => setLastName(e.target.value)}
            type="text"
            label="Last Name"
            required
          />
        </div>
        <SelectField
          value={country}
          handleChange={(e) => setCountry(e.target.value)}
          label="Country / Region"
          list={countries}
          required
        />
        <SelectField
          value={town}
          handleChange={(e) => setTown(e.target.value)}
          label="Town"
          list={countries}
          required
        />
        <SelectField
          value={street}
          handleChange={(e) => setStreet(e.target.value)}
          label="Street address"
          list={countries}
          required
        />
        <InputField
          value={phone}
          handleChange={(e) => setPhone(e.target.value)}
          type="tel"
          label="Phone"
          required
        />
        <TextField
          value={orderNote}
          handleChange={(e) => setOrderNote(e.target.value)}
          label="Order note"
          classes="border-[#A0A0A0] min-h-[170px]"
        />
        <PrimaryButton
          type="button"
          onClick={nextStageHandler}
          text="Next"
          classes="mt-4 w-full max-w-sm mx-auto !p-4 rounded-md"
        />
      </form>
    </div>
  );
};
