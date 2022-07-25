import React from 'react'

export default function SingleComment({ comment }) {
  return (
    <div className='single-comment__container'>
      {comment.name}
      </div>
  )
}
