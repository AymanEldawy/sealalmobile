import React from 'react'

export const ProfileTitle = ({ title, className }) => {
  return (
    <h2 className={`my-5 capitalize text-secondary font-semibold text-lg ${className}`}>{title}</h2>
  )
}
