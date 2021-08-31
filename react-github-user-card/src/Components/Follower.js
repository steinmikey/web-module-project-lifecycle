import React from "react";

class Follower extends React.Component {
  render() {
    // console.log(this.props.follower);
    return (
      <div onClick={() => this.props.handleClick(this.props.follower.url)} className="follower">
        <img src={this.props.follower.avatar_url} alt="user avatar" />
        <div className="followerInfo">
          <h3>{this.props.follower.login}</h3>
          <p>followers: {this.props.follower.followers}</p>
          <p>following: {this.props.follower.following}</p>
        </div>
      </div>
    );
  }
}

export default Follower;
