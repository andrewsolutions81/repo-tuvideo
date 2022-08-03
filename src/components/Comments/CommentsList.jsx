import React from 'react';
import SingleComment from './SingleComment';

function CommentsList({ comments }) {
  return (
    comments.map((comment) => <SingleComment key={comment.id} comment={comment} />)
  );
}
export default CommentsList;
