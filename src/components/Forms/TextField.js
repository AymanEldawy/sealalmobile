import { LanguageContext } from '@/context/LangContext';
import { fetchWord } from '@/lang/fetchWord';
import React, { useContext } from 'react';

export const TextField = ({
  label,
  style,
  resize,
  classes,
  allowUploadText,
  ...textField
}) => {
  const { lang } = useContext(LanguageContext)
  return (
    <div className="mb-4 w-full">
      <div className='flex justify-between items-center mb-2'>
        {label ? <label className="flex items-center justify-between ">{label}</label> : null}
        {
          allowUploadText ?
            <button type="button" className="text-xs underline">{fetchWord('Upload_text', lang)}</button>
            : null
        }
      </div>
      <textarea
        className={`border border-gray-300 w-full p-2 rounded-md h-28 ${classes}`}
        style={{ resize: resize ? resize : 'none' }}
        {...textField}
      ></textarea>
    </div>
  );
};
