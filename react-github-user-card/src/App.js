import React from "react";
import axios from "axios";
import "./App.css";

import SelectedUser from "./Components/SelectedUser";
import ListOfFollowers from "./Components/ListOfFollowers";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      selectedUser: "https://api.github.com/users/rowofpixels",
      user: {},
      followers: []
    };
  }

  componentDidMount() {
    console.log("----- Initial Mount -----");
    axios
      .get(`${this.state.selectedUser}`)
      .then((res) => {
        console.log("api call---");
        this.setState({
          ...this.state,
          user: res.data
        });
      })
      .then()
      .catch((err) => {
        console.error(err);
      });
    axios
      .get(`${this.state.selectedUser}/followers`)
      .then((res) => {
        console.log("2nd api call----");
        this.setState({
          ...this.state,
          followers: res.data
        });
      })
      .catch((err) => {
        console.error(err);
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.selectedUser !== prevState.selectedUser) {
      console.log("hmm");
      axios
        .get(`${this.state.selectedUser}`)
        .then((res) => {
          this.setState({
            ...this.state,
            user: res.data
          });
        })
        .catch((err) => {
          console.error(err);
        });
      axios
        .get(`${this.state.selectedUser}/followers`)
        .then((res) => {
          console.log(res);
          this.setState({
            ...this.state,
            followers: res.data
          });
        })
        .catch((err) => {
          console.error(err);
        });

      // this.setState({ ...this.state, user: { ...this.state.user, login: "matthew" } });
    } else {
      console.log("done?");
    }

    // axios
    //   .get(`${this.state.selectedUser}`)
    //   .then((res) => {
    //     // console.log(res.data);
    //     this.setState({
    //       ...this.state,
    //       user: res.data
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
    // axios
    //   .get(`${this.state.selectedUser}/followers`)
    //   .then((res) => {
    //     // console.log(res.data);
    //     this.setState({
    //       ...this.state,
    //       followers: res.data
    //     });
    //   })
    //   .catch((err) => {
    //     console.error(err);
    //   });
  }

  handleClick = (userURL) => {
    console.log("----- changing selected user -----");
    console.log(userURL);
    this.setState({
      ...this.state,
      selectedUser: userURL
    });
    console.log(this.state.selectedUser);
  };

  render() {
    console.log("----- App renders DOM -----");
    return (
      <div className="App">
        <h1> github user card</h1>
        <SelectedUser user={this.state.user} />
        <ListOfFollowers handleClick={this.handleClick} followers={this.state.followers} />
      </div>
    );
  }
}

export default App;
