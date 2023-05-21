import React from 'react'

export const LoadingBar = () => {
  return (
    <div class="flex items-center justify-center w-full my-4 h-56 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-800 dark:border-gray-700">
      <div class="px-3 py-2 text-lg capitalize font-medium leading-none text-center text-blue-800 bg-blue-200 rounded-full animate-pulse dark:bg-blue-900 dark:text-blue-200">loading...</div>
    </div>
  )
}
