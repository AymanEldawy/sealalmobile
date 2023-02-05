import React from 'react';
import { Layout } from './../components/Layout/Layout';
import { SectionTitle } from './../components/Global/SectionTitle';
import { InputField } from './../components/Forms/InputField';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';

const TrackOrder = () => {
  return (
    <Layout>
      <div className="container !mb-12">
        <Breadcrumb paths="Track Order" />
        <div className="h-7" />
        <SectionTitle title="Track order" center />
        <div className="flex gap-4">
          <InputField type="email" label="Your email" />
          <InputField type="text" label="Order Code" />
        </div>
        <PrimaryButton
          classes="mt-6 min-w-[200px] max-w-sm w-full mx-auto block !p-3"
          text="Track Order"
        />
      </div>
    </Layout>
  );
};

export default TrackOrder;
