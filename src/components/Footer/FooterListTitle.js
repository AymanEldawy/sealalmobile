import React from 'react'

export const FooterListTitle = ({ title }) => {
  return (
    <h4 className="font-semibold capitalize text-secondary text-lg whitespace-nowrap relative mb-4 before:border-b-2 before:border-secondary before:w-6 before:absolute before:-bottom-1 before:left-0">{title}</h4>
  )
}
