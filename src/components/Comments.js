import React, { Component } from "react";

class Comments extends Component {
  render() {
    const { comments } = this.props;
    return (
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <strong>{comment.name}</strong> {comment.comment}
          </li>
        ))}
      </ul>
    );
  }
}

export default Comments;
