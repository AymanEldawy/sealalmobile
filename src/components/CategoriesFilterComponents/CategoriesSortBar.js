import React from 'react'
import { SortBy } from './SortBy'
import { ViewAs } from './ViewAs'
import { suggestionsKeywords } from '@/data/dummyData'
export const CategoriesSortBar = ({ sortBy, setSortBy, activeView, setActiveView, activeKeywords, setActiveKeywords }) => {

  return (
    <div className="overflow-hidden mt-4">
      <div className='flex gap-4 items-center'>
        <SortBy sortBy={sortBy} setSortBy={setSortBy} />
        <div className="flex-1 flex gap-4 overflow-auto scroll-hide">
          {
            suggestionsKeywords?.map(item => (
              <button onClick={() => setActiveKeywords(item)}  className={`${activeKeywords === item ? "bg-secondary text-white ": "text-secondary bg-[#F1F1F1] "} p-1 px-4 rounded-3xl whitespace-nowrap`} key={item?.id}>{item?.keyword} </button>
            ))
          }
        </div>
        <ViewAs activeView={activeView} setActiveView={setActiveView} />
      </div>
    </div>
  )
}
