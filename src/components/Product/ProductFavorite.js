import React, { useState } from 'react'

import { HeartIcon } from '../Icons'

export const ProductFavorite = ({ favorite, className }) => {
  const [isFavorite, setIsFavorite] = useState(favorite)
  const changeFavorite = () => {
    setIsFavorite(p => !p)
  }
  return (
    <button onClick={changeFavorite} className={` absolute ltr:right-4 rtl:left-4 top-6 ${className}`}>
      <HeartIcon className={isFavorite ? '!stroke-red-500 fill-red-500' : 'text-transparent stroke-red-500'} />
    </button>
  )
}
