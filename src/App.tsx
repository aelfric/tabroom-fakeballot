import React, { AnchorHTMLAttributes, Component } from "react";
import "./App.css";
import "./tabroom.css";
import "./fonts.css";

import Ballot from "./Ballot";

import ConfirmSubmit from "./speech/ConfirmBallot";
import Layout from "./Layout";
import ConfirmedBallot from "./speech/ConfirmedBallot";
import EditFeedback from "./EditFeedback";
import { CongressBallotStarted } from "./congress/CongressBallotStarted";
import { SpeechEntry } from "./speech/types";
import { Events } from "tinymce";
import FakeSpeechBallot from "./speech/FakeSpeechBallot";

export function FakeLink<T>(props: AnchorHTMLAttributes<T>) {
  return (
    <a href={"#"} className={props.className}>
      {props.children}
    </a>
  );
}

interface AppProps {}

interface AppState {
  entries: SpeechEntry[];
  rfd?: string;
  congressStarted: boolean;
  started: boolean;
  confirming: boolean;
  confirmed: boolean;
  editing: boolean;
}

class App extends Component<AppProps, AppState> {
  state: AppState = {
    congressStarted: false,
    started: false,
    confirming: false,
    confirmed: false,
    editing: false,
    entries: [
      {
        code: "2661",
        name: "Silvia Mcbee",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "1st",
      },
      {
        code: "2940",
        name: "Carlos Fey",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "2nd",
      },
      {
        code: "2858",
        name: " Dulcie Torrance",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "3rd",
      },
      {
        code: "2720",
        name: "Fletcher Pietz",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "4th",
      },
      {
        code: "2395",
        name: "Joye Hinkley",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "5th",
      },
      {
        code: "2603",
        name: "Kristopher Kinzer",
        title: undefined,
        ranks: undefined,
        points: undefined,
        order: "6th",
      },
    ],
  };

  toggleStarted = () => {
    this.setState(({ started }) => ({ started: !started }));
  };

  toggleConfirm = () => {
    this.setState(({ confirming }) => ({ confirming: !confirming }));
  };

  toggleFinished = () => {
    this.setState(({ confirmed }) => ({ confirmed: !confirmed }));
  };

  setRFD = (evt: Events.EditorEventMap["blur"]) => {
    this.setState({ rfd: evt.focusedEditor.getContent() });
  };

  onSubmit = (entries: SpeechEntry[]) => {
    this.setState({
      entries: entries,
      confirming: true,
    });
  };

  render() {
    let component;
    if (this.state.editing) {
      component = (
        <EditFeedback
          rfd={this.state.rfd}
          setRFD={this.setRFD}
          entries={this.state.entries}
          onSubmit={this.onSubmit}
        />
      );
    } else if (this.state.confirmed) {
      component = (
        <ConfirmedBallot
          entries={this.state.entries}
          editFeedback={() => this.setState({ editing: true })}
        />
      );
    } else if (this.state.confirming) {
      component = (
        <ConfirmSubmit
          entries={this.state.entries}
          confirm={this.toggleConfirm}
          rfd={this.state.rfd}
          onSubmit={this.toggleFinished}
        />
      );
    } else if (this.state.started) {
      component = (
        <FakeSpeechBallot/>
      );
    } else if (this.state.congressStarted) {
      component = <CongressBallotStarted />;
    } else {
      component = (
        <Ballot
          start={this.toggleStarted}
          entries={this.state.entries}
        />
      );
    }

    return <Layout>{component}</Layout>;
  }
}

export default App;
