import React from 'react'

export default function SingleComment({ comment }) {
  return (
    <div>
      {comment.name}
      {comment.comment}
      </div>
  )
}
