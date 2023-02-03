import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { SectionTitle } from './../components/Global/SectionTitle';

const terms = () => {
  return (
    <Layout>
      <div className="pt-[1px] bg-white mb-8">
        <div className="container">
          <Breadcrumb paths="Terms and conditions" />
          <SectionTitle title="Terms and conditions" />
          <h2 className="text-primary font-medium text-xl mb-4">1. Terms</h2>
          <p className="px-4">
            It is a long established fact that a reader will be using Lorem Ipsu
            distracted by the readable content of a page when t that a reader
            looking at its layout. The point of using Lorem Ipsum look like rea
            is that it has a more-or-less normal distribution of letters look
            like as opposed to using Content here, content here, making it look
            la look like readable English. looking at its layout. The point of
            using Lorem Ipsum look like rea is that it has a more-or-less normal
            distribution of letters look like as opposed to using Content here,
            content here, making it look la look like readable English.
          </p>
          <h2 className="text-primary font-medium text-xl mb-4 mt-6">2. Use License</h2>
          <p className="px-4">
            It is a long established fact that a reader will be using Lorem Ipsu
            distracted by the readable content of a page when t that a reader
            looking at its layout. The point of using Lorem Ipsum look like rea
            is that it has a more-or-less normal distribution of letters look
            like as opposed to using Content here, content here, making it look
            la look like{' '}
          </p>
          <ul className="px-4">
            <li>
              he point of using Lorem Ipsum look like rea is that it has a
              more-or-less normal distribution of letters
            </li>
            <li>
              Lorem Ipsum look like rea is that it has a more-or-less normal
              distribution of letters
            </li>
            <li>
              using Lorem Ipsum look like rea is that it has a more-or-less
              normal distribution of letters
            </li>
            <li>
              psum look like rea is that it has a more-or-less normal
              distribution of letters
            </li>
          </ul>
          <p className="mt-8">
            he point of using Lorem Ipsum look like rea is that it has a
            more-or-less normal distribution of letters he point of using Lorem
            Ipsum look like rea is that it has a more-or-less normal
            distribution of letters
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default terms;
