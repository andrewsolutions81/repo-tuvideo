import React from 'react'
import SingleComment from './SingleComment'


function CommentsList({ comments }) {
  return(
    comments.map(comment => {
      return <SingleComment key={comment.id} comment={comment}/>
    })
  )
}
export default CommentsList
