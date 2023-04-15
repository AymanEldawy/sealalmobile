import React from 'react'

const ChatMessageCard = ({author, children}) => {
  return (
    <div className={`rounded-[50px] py-2 px-4 text-black w-fit max-w-[80%] ${author === 'me'? 'bg-[#FFC33A29] ltr:ml-auto rtl:mr-auto' : 'bg-[#0063C629] ltr:mr-auto rtl:ml-auto'}`}>
      {children}
    </div>
  )
}

export default ChatMessageCard