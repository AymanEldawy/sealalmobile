import React from 'react'

export const FilterTitle = ({ title, titleClassName }) => {
  return (
    <h4 className={`text-primary font-semibold mb-5 px-4 uppercase ${titleClassName}`}>{title}</h4>
  )
}
