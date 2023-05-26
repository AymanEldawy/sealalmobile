import React from 'react'

export const ProductCardColors = ({ colors }) => {
  return (
    <div className='absolute bottom-8 left-2 flex gap-[2px] z-10'>
      {colors?.map(color=>(
        <span className='h-3 w-3 rounded-full border border-white' style={{ background: color }} key={color} />
        ))}
    </div>
  )
}
