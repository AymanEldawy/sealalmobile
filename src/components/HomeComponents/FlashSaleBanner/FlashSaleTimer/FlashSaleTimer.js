import PrimaryLink from '@/components/Global/PrimaryLink/PrimaryLink'
import { LanguageContext } from '@/context/LangContext'
import { fetchWord } from '@/lang/fetchWord'
import React, { useContext, useState, useEffect } from 'react'
import { useRouter } from 'next/router';

export const FlashSaleTimer = () => {
  const { lang } = useContext(LanguageContext);
  const router = useRouter();
  const [remainingTime, setRemainingTime] = useState({
    days: 100,
    hours: 21,
    minutes: 56,
    seconds: 59
  });

  useEffect(() => {
    const timer = setInterval(() => {
      if (remainingTime.days === 0 && remainingTime.hours === 0 && remainingTime.minutes === 0 && remainingTime.seconds === 0) {
        clearInterval(timer);
      } else {
        setRemainingTime(prevState => {
          const { days, hours, minutes, seconds } = prevState;
          if (seconds > 0) {
            return { days, hours, minutes, seconds: seconds - 1 };
          } else if (minutes > 0) {
            return { days, hours, minutes: minutes - 1, seconds: 59 };
          } else if (hours > 0) {
            return { days, hours: hours - 1, minutes: 59, seconds: 59 };
          } else {
            return { days: days - 1, hours: 23, minutes: 59, seconds: 59 };
          }
        });
      }
    }, 1000);
    return () => clearInterval(timer);
  }, [remainingTime]);

  return (
    <div className="flex flex-col px-4 justify-center items-center gap-1 max-w-fit h-full relative z-[5]">
      <h2 className='font-semibold text-sm capitalize text-secondary  ltr:text-right rtl:text-left w-full'>{fetchWord('flash_sale', lang)} 24 {fetchWord('hours', lang)}</h2>
      <div className='flex items-center gap-4'>
        <span className="text-primary -mt-4 font-medium capitalize text-[10px]">{fetchWord('ends_in', lang)}</span>
        <div className='flex items-center gap-4'>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-sm font-semibold bg-white py-1 px-3  min-w-[30px] text-center rounded-md border border-[#DBDBDB] '>{remainingTime.hours.toString().padStart(2, '0')}</span>
            <p className='text-[10px] capitalize'>{fetchWord('hours', lang)}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-sm font-semibold bg-white py-1 px-3  min-w-[30px] text-center rounded-md border border-[#DBDBDB] '>{remainingTime.minutes.toString().padStart(2, '0')}</span>
            <p className='text-[10px] capitalize'>{fetchWord('minutes', lang)}</p>
          </div>
          <div className='flex flex-col gap-1 items-center'>
            <span className='text-sm font-semibold bg-white py-1 px-3  min-w-[30px] text-center rounded-md border border-[#DBDBDB] '>{remainingTime.seconds.toString().padStart(2, '0')}</span>
            <p className='text-[10px] capitalize'>{fetchWord('seconds', lang)}</p>
          </div>
        </div>
      </div>
      {
        router?.pathname !== '/sale' ? (
          <PrimaryLink link="" className="!border-none mt-2 text-xs !rounded-3xl !p-1 !px-4">{fetchWord('shop_now', lang)}</PrimaryLink>
        ) : null
      }
    </div>
  )
}
