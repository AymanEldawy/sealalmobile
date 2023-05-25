import React, { useContext } from 'react'
import { BanIcon, CardFlatIcon, DollarIcon, MessageFlatIcon, TagIcon, TrunkFlatIcon, TrunkIcon } from '../Icons';
import { fetchWord } from '@/lang/fetchWord';
import { LanguageContext } from '@/context/LangContext';

export const Help = () => {
  const { lang } = useContext(LanguageContext)
  const faqs = [
    {
      icon: <MessageFlatIcon color="var(--primary-color)" />,
      question: fetchWord('question_1', lang),
      answer: fetchWord('answer_1', lang),
    },
    {
      icon: <CardFlatIcon width={20} color="var(--primary-color)" />,
      question: fetchWord('question_2', lang),
      answer: fetchWord('answer_2', lang),
    },
    {
      icon: <BanIcon className="text-primary" />,
      question: fetchWord('question_3', lang),
      answer: fetchWord('answer_3', lang),
    },
    {
      icon: <TrunkFlatIcon />,
      question: fetchWord('question_4', lang),
      answer: fetchWord('answer_4', lang),
    },
    {
      icon: <DollarIcon />,
      question: fetchWord('question_5', lang),
      answer: fetchWord('answer_5', lang),
    },
    {
      icon: <TagIcon />,
      question: fetchWord('question_6', lang),
      answer: fetchWord('answer_6', lang),
    },
  ];
  return (
    <div className="px-2">
      {faqs?.map((question) => (
        <div className='flex gap-4 items-start bg-bmain px-2 py-4 rounded-md mb-4' key={question?.icon}>
          <span className='p-4 bg-white flex items-center justify-center rounded-full'>{question?.icon}</span>
          <div>
            <h3 className='text-sm text-secondary'>{question?.question}</h3>
            <p className='text-[10px] text-[#363636]'>{question?.answer}</p>
          </div>
        </div>
      ))}

    </div>
  )
}
