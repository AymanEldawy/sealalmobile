import React from 'react'
import { useState } from 'react'

import { CheckIcon, DoubleCheckIcon } from '../Icons'

const ChatMessageCard = ({ author, status, children }) => {
  const [showDate, setShowDate] = useState(false)
  console.log(status)
  return (
    <div>
      {
        showDate ? (
          <span className='text-xs block text-center mb-1'>{new Date()?.toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'


          })}</span>
        ) : null
      }
      <div onClick={() => setShowDate(true)} className={`rounded-[10px] py-2 px-4 text-black w-fit max-w-[80%] ${author === 'me' ? 'bg-[#FFC33A29] ltr:ml-auto rtl:mr-auto' : 'bg-[#0063C629] ltr:mr-auto rtl:ml-auto'}`}>
        {children}
        <div className='flex justify-end text-xs -mt-1'>
          {
            author === 'me' ? (
              <>
                {
                  status === 'send' ? (
                    <CheckIcon className="w-4" />
                  ) : (
                    <DoubleCheckIcon className={`${status === "read" ? 'text-green-500' : 'text-black'}`} />
                  )
                }
              </>
            ) : null
          }

        </div>
      </div>
    </div>
  )
}

export default ChatMessageCard