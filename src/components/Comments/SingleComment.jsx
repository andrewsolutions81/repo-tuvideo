import React from 'react';

function SingleComment({ comment }) {
  return (
    <div className="single-comment__container">
      {comment.name}
    </div>
  );
}

export default SingleComment;
