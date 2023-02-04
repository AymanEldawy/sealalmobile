import React from 'react';
import { ProfileLayout } from './../components/ProfileSidebar/ProfileLayout';
import { AddressCard } from './../components/Address/AddressCard';
import { addresses } from './../data/cardData';
const Addresses = () => {
  return (
    <ProfileLayout breadcrumbPath="Addresses" title="Addresses">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {addresses?.map((address) => (
          <AddressCard key={address?.id} address={address} />
        ))}
      </div>
    </ProfileLayout>
  );
};

export default Addresses;
