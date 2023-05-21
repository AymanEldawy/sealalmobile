import React from 'react'
import ReviewCard from './ReviewCard'
import { reviews } from '@/data/dummyData'

export const ProductReviews = () => {
  return (
    <div className="my-12">
      <div className="lg:max-w-[800px] mx-auto">
        {
          reviews?.map(review => (
            <ReviewCard key={review?.id} review={review} />
          ))
        }
      </div>
    </div>
  )
}
