// import axios from "axios";
import React from "react";

import Follower from "./Follower";

class ListOfFollowers extends React.Component {
  //   constructor() {
  //     super();
  //     this.state = {
  //       followers: [
  //         { name: "follower1", login: "handle1", followers: 5 },
  //         { name: "follower2", login: "handle2", followers: 7 },
  //         { name: "follower3", login: "handle3", followers: 9 }
  //       ]
  //     };
  //   }

  componentDidMount() {
    // console.log("----- List component Mounted -----");
  }

  render() {
    // console.log("----- List renders DOM -----");
    return (
      <div className="listOfFollowers">
        {this.props.followers.map((follower, index) => {
          return <Follower handleClick={this.props.handleClick} key={index} follower={follower} />;
        })}
      </div>
    );
  }
}

export default ListOfFollowers;
