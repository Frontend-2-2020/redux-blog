import React, { Component } from "react";
import Comments from "./Comments";
import { connect } from "react-redux";

class Blogpost extends Component {
  render() {
    const { post, isLoggedIn } = this.props;
    return (
      <div className="card mb-4">
        <div className="card-body">
          <h5 className="card-title">{post.name}</h5>
          <p className="card-text">{post.body}</p>

          {isLoggedIn && <Comments comments={post.comments} />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  isLoggedIn: state.auth
});
export default connect(mapStateToProps)(Blogpost);
