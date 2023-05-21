import React from 'react'
import { GridViewIcon, ListViewIcon } from '../Icons'

export const ViewAs = ({ activeView, setActiveView }) => {
  return (
    <div className='flex items-center shrink-0 border rounded-md overflow-hidden'>
      <button onClick={() => setActiveView('list')} className={`p-2 rounded-md ${activeView === 'list' ? "bg-primary text-white" : "text-primary"} `}>
        <ListViewIcon className="w-4 h-4" />
      </button>
      <button onClick={() => setActiveView('grid')} className={`p-2 rounded-md ${activeView === 'grid' ? "bg-primary text-white" : "text-primary"} `}>
        <GridViewIcon className="w-4 h-4" />
      </button>
    </div>
  )
}
