import React, { useState } from 'react';
import { SectionTitle } from './../Global/SectionTitle';
import { CardRate } from './../Card/CardRate';
import { TextField } from './../Forms/TextField';
import { InputField } from './../Forms/InputField';
import { PrimaryButton } from './../Global/PrimaryButton/PrimaryButton';

export const ReviewForm = () => {
  const [name, setName] = useState('');
  const [review, setReview] = useState('');
  const [email, setEmail] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="bg-[#F8F8F8D6] p-4">
      <div className="container">
        <SectionTitle title="Add a Review" />
        <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
          <div className="max-w-fit mx-auto ">
            <CardRate width={40} />
          </div>
          <TextField
            placeholder="Write a review"
            classes="h-14"
            value={review}
            handleChange={(e) => setReview(e.target.value)}
            required
          />
          <InputField
            value={name}
            handleChange={(e) => setName(e.target.value)}
            style={{ height: '60px' }}
            placeholder="Your name"
            required
          />
          <InputField
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            style={{ height: '60px' }}
            placeholder="Your Email"
            required
          />
          <PrimaryButton text="Submit" classes="max-w-fit mx-auto !px-6" />
        </form>
      </div>
    </div>
  );
};
