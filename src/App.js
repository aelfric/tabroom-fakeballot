import React, { Component } from "react";
import "./App.css";
import "./tabroom.css";
import "./fonts.css";

import Ballot from "./Ballot";

import FakeBallot from "./BallotStarted";
import ConfirmSubmit from "./ConfirmBallot";
import Layout from "./Layout";

class App extends Component {
  state = {
    started: false,
    confirming: false,
    entries: [
      {
        code: "301",
        name: "Connor Breen",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "1st"
      },
      {
        code: "302",
        name: "Joshua Darden",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "2nd"
      },
      {
        code: "303",
        name: "Malachi Allen",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "3rd"
      }
    ]
  };

  toggleStarted = () => {
    this.setState({ started: !this.state.started });
  };

  toggleConfirm = () => {
    this.setState({ confirming: !this.state.confirming });
  };

  setRFD = evt => {
    this.setState({ rfd: evt.target.getContent() });
  };

  onSubmit = entries => {
    this.setState({
      entries: entries,
      confirming: true
    });
  };

  render() {
    let component;
    if (this.state.confirming) {
      component = (
        <ConfirmSubmit
          entries={this.state.entries}
          confirm={this.toggleConfirm}
          rfd={this.state.rfd}
        />
      );
    } else if (this.state.started) {
      component = (
        <FakeBallot
          entries={this.state.entries}
          confirm={this.toggleConfirm}
          onSubmit={this.onSubmit}
          setRFD={this.setRFD}
          rfd={this.state.rfd}
        />
      );
    } else {
      component = <Ballot start={this.toggleStarted} />;
    }

    return <Layout>{component}</Layout>;
  }
}

export default App;
