import React, { Component } from "react";
import LoginBtn from "./components/LoginBtn";
import Blogpost from "./components/Blogpost";
import { connect } from "react-redux";
import "bootstrap/dist/css/bootstrap.min.css";

class App extends Component {
  render() {
    const { posts } = this.props;
    return (
      <div className="container">
        <LoginBtn />

        {posts.map((post, index) => (
          <Blogpost post={post} key={post.id} />
        ))}
      </div>
    );
  }
}

// const mapStateToProps = state => {
//   return {
//     posts: state.posts
//   };
// };

const mapStateToProps = state => ({
  posts: state.posts
});

export default connect(mapStateToProps)(App);
