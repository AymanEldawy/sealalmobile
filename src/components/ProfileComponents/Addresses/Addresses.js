import React, { useState, useContext, useEffect } from 'react'
import { AddressCard } from './AddressCard'
import { addresses as allAddresses } from './../../../data/dummyData';
import { ProfileTitle } from '../ProfileTitle';
import { Button } from '@/components/Global/Button/Button';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from '@/context/LangContext';
import AddNewAddress from './AddNewAddress';

export const Addresses = () => {
  const { lang } = useContext(LanguageContext)
  const [addresses, setAddresses] = useState([]);
  const [updatedAddress, setUpdatedAddress] = useState(false);
  const [stage, setStage] = useState('display')
  const [refresh, setRefresh] = useState(false)

  useEffect(() => {
    setAddresses(allAddresses);
  }, [])

  const handleDeleteAddress = (addressId) => {

  }


  return (
    <div>
      <div className="flex justify-between gap-4 items-center mb-4">
        <ProfileTitle title={fetchWord(stage !== 'create' ? 'My_Addresses' : !!updatedAddress ? 'Update_address' : 'add_new_address', lang)} />
        {
          stage !== 'create' ?
            <Button onClick={() => setStage('create')} classes="text-sm capitalize  border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('add_new_address', lang)}</Button>
            : null
        }
      </div>
      {
        stage === 'create' ? (
          <AddNewAddress onClickCancel={() => setStage('display')} setStage={setStage} operation={updatedAddress?.id ? 'update' : 'create'} address={updatedAddress || {}} />
        ) : (

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {addresses?.map((address) => (
              <AddressCard key={address?.id} address={address} />
            ))}
          </div>
        )
      }
    </div >
  )
}
