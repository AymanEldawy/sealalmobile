import React, { useContext } from 'react'
import { InputField } from '../Forms/InputField';
import { Button } from '../Global/Button/Button';
import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
export const ProfileForm = ({
  firstFieldType,
  secondFieldType,
  firstField,
  secondField,
  firstFieldPlaceholder,
  secondFieldPlaceholder,
  firstFieldValue,
  secondFieldValue,
  onFirstFieldChange,
  onSecondFieldChange,
  submit
}) => {
  const { lang } = useContext(LanguageContext);
  return (
    <form className="mt-5" onSubmit={submit}>
      <div className="flex gap-3 items-end">
        <InputField
          firstFieldType={firstFieldType}
          containerClassName="!mb-0"
          classes="border-[#D5D5D5] px-4"
          label={firstField}
          placeholder={firstFieldPlaceholder}
          value={firstFieldValue}
          onChange={e => onFirstFieldChange(e.target.value)}
        />
        <InputField
          secondFieldType={secondFieldType}
          containerClassName="!mb-0"
          classes="border-[#D5D5D5] px-4"
          label={secondField}
          placeholder={secondFieldPlaceholder}
          value={secondFieldValue}
          onChange={e => onSecondFieldChange(e.target.value)}
        />
        <Button classes="!py-3 text-sm !px-8 h-[46px]">{fetchWord('update', lang)}</Button>
      </div>
    </form>)
}
