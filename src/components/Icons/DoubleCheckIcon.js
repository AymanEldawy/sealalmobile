import React from 'react'

const DoubleCheckIcon = ({ ...classes }) => {
  return (
    <svg width="20px" height="20px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" {...classes}>
      <path d="M1.5 12.5L5.57574 16.5757C5.81005 16.8101 6.18995 16.8101 6.42426 16.5757L9 14" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
      <path d="M16 7L12 11" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
      <path d="M7 12L11.5757 16.5757C11.8101 16.8101 12.1899 16.8101 12.4243 16.5757L22 7" stroke="currentcolor" stroke-width="1.5" stroke-linecap="round" />
    </svg>)
}

export default DoubleCheckIcon