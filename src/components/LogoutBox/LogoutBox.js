import React, { useContext } from 'react'
import Modal from '../Modal/Modal'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'

export const LogoutBox = ({ onClickCancel, onClickConfirm }) => {
  const { lang } = useContext(LanguageContext)
  return (
    <Modal open={true} close={onClickCancel} containerClassName="z-[99]" contentClassName="w-full rounded-t-[40px] absolute bottom-0 top-auto z-[99]">
      <div className="flex flex-col gap-4 items-center">
        <h3 className="text-primary border-b pb-3 capitalize text-lg font-semibold">{fetchWord('logout', lang)}</h3>
        <p className='text-[#667080] text-xs'>{fetchWord('logout_msg1', lang)}</p>
        <div className='flex gap-4'>
          <button onClick={onClickCancel} className='text-xs rounded-md px-4 font-medium py-2 min-w-[107px] bg-secondary text-white '>{fetchWord('cancel', lang)}</button>
          <button onClick={onClickConfirm} className='text-xs rounded-md px-4 font-medium py-2 min-w-[107px] text-secondary border border-secondary'>{fetchWord('logout_ms2', lang)}</button>
        </div>
      </div>
    </Modal>
  )
}
