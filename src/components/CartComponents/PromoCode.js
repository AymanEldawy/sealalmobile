import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState } from 'react'
import { Button } from '../Global/Button/Button';

export const PromoCode = ({ code, setCode, applyCode, error, msg }) => {
  const { lang } = useContext(LanguageContext);
  return (
    <div className="flex-1">
      <p className='text-sm text-lead mb-2'>{fetchWord('promo_code_msg', lang)}</p>
      {error ? <p className='p-2 text-xs my-2 rounded-md bg-red-100 text-red-500 text-center'>{error}</p> : null}
      {msg ? <p className='p-2 text-xs my-2 rounded-md bg-green-100 text-green-500 text-center'>{msg}</p> : null}
      <form className='rounded-lg overflow-hidden bg-white flex shadow flex-1 max-w-xl'>
        <input
          type="text"
          value={code}
          onChange={e => setCode(e.target.value)}
          className="bg-transparent flex-1 text-xs text-gray-500 px-6"

        />
        <Button disabled={msg} onClick={applyCode} classes="disabled:!bg-gray-400 disabled:pointer-none !p-3 !px-8 hover:!px-10 duration-200 !text-xs !rounded-none">{fetchWord('apply', lang)}</Button>
      </form>
    </div>
  )
}
