import React, { useContext } from 'react';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';
import { PaymentCardVisa } from './../components/PaymentCardVisa/PaymentCardVisa';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from './../context/LangContext';

const SavedCards = () => {
  const { lang } = useContext(LanguageContext);
  const cards = [];
  return (
    <ProfileLayout
      breadcrumbPath="SavedCards"
      title={fetchWord('SavedCards', LanguageContext)}
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <PaymentCardVisa color="bg-green-500" />
        <PaymentCardVisa color="bg-blue-500" />
        <PaymentCardVisa color="bg-orange-500" />
      </div>
    </ProfileLayout>
  );
};

export default SavedCards;
