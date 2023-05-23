import React, { useState } from 'react'

import { HeartIcon } from '../Icons'

export const ProductFavorite = ({ favorite, count, className }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const changeFavorite = () => {
    setIsFavorite(p => !p)
  }
  return (
    <button onClick={changeFavorite} className={`flex gap-1 items-center absolute ltr:right-4 rtl:left-4 top-6 ${className}`}>
      <HeartIcon className={isFavorite ? '!stroke-red-500 fill-red-500' : 'text-transparent stroke-red-500'} />
      {count ? <span className="text-sm text-gray-500">{count}</span> : null}
    </button>
  )
}
