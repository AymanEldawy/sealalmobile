import { Button } from '@/components/Global/Button/Button';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext, useEffect, useState } from 'react'

import { ProfileTitle } from '../ProfileTitle';
import { addresses as allAddresses } from './../../../data/dummyData';
import AddNewAddress from './AddNewAddress';
import { AddressCard } from './AddressCard'

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
      <div className="mt-8">
        {
          stage !== 'create' ?
            <Button onClick={() => setStage('create')} classes="text-sm block w-full capitalize  border-primary bg-transparent border font-semibold !text-primary hover:!bg-primary hover:!text-white">{fetchWord('add_new_address', lang)}</Button>
            : null
        }
      </div>
    </div >
  )
}
