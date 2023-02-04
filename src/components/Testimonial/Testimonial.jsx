import React from 'react';

import { SectionTitle } from './../Global/SectionTitle';
import { TestimonialCard } from './TestimonialCard';

export const Testimonial = ({ title, row }) => {
  const reviews = [
    {
      name: 'sara saad',
      rating: 4,
      image: '/images/home/person.png',
      description:
        'We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other',
    },
    {
      name: 'sara saad',
      rating: 4,
      image: '/images/home/person.png',
      description:
        'We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other',
    },
    {
      name: 'sara saad',
      rating: 1,
      image: '/images/home/person.png',
      description:
        'We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other We really care about you and your website as much as you do.Porto or any other',
    },
  ];
  return (
    <div className="mt-12">
      <div className="container">
        <SectionTitle title={title} />
        <div
          className={`flex flex-wrap md:flex-nowrap gap-4 justify-between items-center ${
            row ? 'grid lg:grid-cols-2' : ''
          }`}
        >
          {reviews.map((review, index) => (
            <TestimonialCard key={index} review={review} row={row} />
          ))}
        </div>
      </div>
    </div>
  );
};
