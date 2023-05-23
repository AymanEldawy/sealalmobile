import React from 'react'

const CategoryGridIcon = ({ view }) => {
  return (
    <>
      {
        view === 'grid' ? (
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="16.1429" height="19" stroke="#EA4958" />
            <line y1="9.5" x2="17.1429" y2="9.5" stroke="#EA4958" />
            <line x1="8.5" y1="-2.18557e-08" x2="8.5" y2="19" stroke="#EA4958" />
          </svg>

        ) : (
          <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect x="0.5" y="0.5" width="16.1429" height="19" stroke="#EA4958" />
            <line y1="9.5" x2="17.1429" y2="9.5" stroke="#EA4958" />
          </svg>
        )
      }
    </>
  )
}

export default CategoryGridIcon