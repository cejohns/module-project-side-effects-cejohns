// You do not need to change this file.
import React from 'react';
import PropTypes from 'prop-types';

const Comment = props => {
  // 🔥 Make sure the parent of Comment is passing the right props!
  const { comment } = props;

  return (
    <div className='comment-text'>
      <span className='user'>{comment.username}: </span>
      <span className='comment'>{comment.text}</span>
    </div>
  );
};

Comment.propTypes = {
  comment: PropTypes.shape({
    username: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
  }).isRequired,
};


export default Comment;
