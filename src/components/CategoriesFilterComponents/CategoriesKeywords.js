import React from 'react'
import { suggestionsKeywords } from '@/data/dummyData'
export const CategoriesKeywords = ({ activeKeywords, setActiveKeywords }) => {

  return (

    <div className="grid grid-cols-3 gap-4 border-b pb-4">
      {
        suggestionsKeywords?.slice(0,9)?.map(item => (
          <button onClick={() => setActiveKeywords(item)} className={`text-ellipsis overflow-hidden ${activeKeywords === item ? "bg-secondary text-white " : "text-secondary bg-[#F1F1F1] "} p-1 px-4 rounded-3xl whitespace-nowrap`} key={item?.id}>{item?.keyword} </button>
        ))
      }
    </div>
  )
}
