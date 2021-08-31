import React from "react";

class SelectedUser extends React.Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="selectedUser">
        <img src={this.props.user.avatar_url} alt="user avatar" />
        <p>{this.props.user.login}</p>
        <p>followers: {this.props.user.followers}</p>
        <p>following: {this.props.user.following}</p>
        <p>url: {this.props.user.url}</p>
      </div>
    );
  }
}

export default SelectedUser;
