import React from 'react'

export const EmptyPage = ({ msg, extraContent }) => {
  return (
    <div class="flex flex-col items-center justify-center w-full my-4 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-2 capitalize font-medium leading-none text-center text-red-500 bg-red-100 rounded-md w-full max-w-[800px]">{msg}</div>
      {extraContent}
    </div>
  )
}
