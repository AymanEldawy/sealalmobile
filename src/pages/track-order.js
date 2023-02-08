import React, { useContext } from 'react';
import { Layout } from './../components/Layout/Layout';
import { SectionTitle } from './../components/Global/SectionTitle';
import { InputField } from './../components/Forms/InputField';
import { Breadcrumb } from './../components/Breadcrumb/Breadcrumb';
import { PrimaryButton } from './../components/Global/PrimaryButton/PrimaryButton';
import { LanguageContext } from './../context/LangContext';
import { fetchWord } from '@/lang/fetchWord';

const TrackOrder = () => {
  const { lang } = useContext(LanguageContext);
  return (
    <Layout>
      <div className="container !mb-12">
        <Breadcrumb paths="Track Order" />
        <div className="h-7" />
        <SectionTitle title={fetchWord('Track Order', lang)} center />
        <div className="flex gap-4">
          <InputField type="email" label={fetchWord('your_email', lang)} />
          <InputField type="text" label={fetchWord('Order_Code', lang)} />
        </div>
        <PrimaryButton
          classes="mt-6 min-w-[200px] max-w-sm w-full mx-auto block !p-3"
          text={fetchWord('Track Order', lang)}
        />
      </div>
    </Layout>
  );
};

export default TrackOrder;
