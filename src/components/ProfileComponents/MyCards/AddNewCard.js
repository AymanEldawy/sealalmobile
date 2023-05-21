import { InputField } from '@/components/Forms/InputField'
import { Switch } from '@/components/Forms/Switch';
import { Button } from '@/components/Global/Button/Button'
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React from 'react'
import { useState } from 'react';
import { useContext } from 'react';

// 
// 
// Save
export const AddNewCard = ({ onClickCancel, operation }) => {
  const { lang } = useContext(LanguageContext)
  const [msg, setMsg] = useState('')
  const [error, setError] = useState('')
  const [card, setCard] = useState({
    name_card: "",
    card_number: "",
    year: "",
    month: "",
    cvc: "",
    default: ""
  })
  const handelChangeField = (e) => {
    setCard(prev => {
      return {
        ...prev,
        [e.target.name]: e.target.value
      }
    })
  }

  const onSubmit = () => {

  }
  return (
    <form>
      {error ? <p className='text-red-500 my-4 text-sm bg-red-200 p-1 rounded-md text-center'>{error}</p> : null}
      {msg ? <p className='text-green-500 my-4 text-sm bg-green-200 p-1 rounded-md text-center'>{msg}</p> : null}
      <InputField
        containerClassName="!mb-6"

        label={fetchWord('Name_card', lang)}
        placeholder={fetchWord('Name_card', lang)} value={card?.name_card} name="name_card" onChange={handelChangeField}
      />
      <InputField
        containerClassName="!mb-6"
        label={fetchWord('Card_number', lang)}
        placeholder='344110' value={card?.card_number} name="card_number" onChange={handelChangeField}

      />
      <div className='grid gap-4  mb-6'>
        <InputField
          type="month"
          containerClassName="!mb-0"
          label={fetchWord('month', lang)}
          placeholder={fetchWord('month', lang)} value={card?.month} name="month" onChange={handelChangeField}
        />
        {/* <InputField
          type="year"
          containerClassName="!mb-0"
          label={fetchWord('year', lang)}
          placeholder={fetchWord('year', lang)} value={card?.year} name="year" onChange={handelChangeField}
        /> */}
      </div>
      <div className='grid grid-cols-2 gap-4 items-end mb-8'>
        <InputField
          containerClassName="!mb-0"
          label={fetchWord('cvc', lang)}
          placeholder={fetchWord('cvc', lang)} value={card?.cvc} name="cvc" onChange={handelChangeField}
        />
        <p className='text-lead text-sm mb-3'>
          {fetchWord('card_cvc_msg', lang)}
        </p>
      </div>
      <div className='mb-12'>
        <Switch msg={fetchWord('SET_DEFAULT', lang)} name="default" onChange={handelChangeField} />
      </div>
      <div className='flex gap-4 mt-4'>
        {!!onClickCancel ? (
          <button onClick={onClickCancel} className='border border-red-500 text-red-500 py-2 rounded-md px-4'>{fetchWord('cancel', lang)}</button>
        ) : null}
        <Button onClick={onSubmit} classes="px-6 ">{fetchWord('save', lang)}</Button>
      </div>
    </form>
  )
}
