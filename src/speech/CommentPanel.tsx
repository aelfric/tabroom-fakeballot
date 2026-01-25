// @ts-nocheck
import React from "react";

import { CommentBox } from "../CommentBox";
import { SpeechEntry } from "./types";

interface CommentPanelProps {
  entries: SpeechEntry[];
  rfd?: string;
  setRFD?: any;
  setComments: (i: number) => unknown;
}

interface CommentPanelState {
  currentStudent: number | `${number}` | "rfd";
}

export class CommentPanel extends React.Component<
  CommentPanelProps,
  CommentPanelState
> {
  state = {
    currentStudent: "rfd",
  };

  doneSwitch(which: number | `${number}`) {
    this.setState({ currentStudent: which });
  }

  render() {
    const entries = this.props.entries;
    return (
      <>
        <div className="full">
          <span className="third">
            <h4>General Feedback</h4>
          </span>

          <span className="twothirds rightalign">
            <span className="half rightalign bigger semibold bluetext">
              Comments go to:
            </span>

            <span className="half centeralign">
              <select
                className="fixedmed"
                onChange={(evt) => this.doneSwitch(evt.target.value)}
                // style={{display: "none"}}>
              >
                <option value="rfd">Everyone (Reason for Rankings)</option>
                {entries.map((entry, idx) => {
                  return (
                    <option key={entry.code} value={idx}>
                      {entry.code}&nbsp;&nbsp;{entry.name}
                    </option>
                  );
                })}
              </select>
            </span>
          </span>
        </div>
        {this.state.currentStudent === "rfd" ? (
          <div className="commentary">
            <p className="semibold greentext centeralign full">
              These comments go to all participants in the round.
            </p>
            <CommentBox
              id="rfd"
              setComments={(evt) => this.props.setRFD(evt)}
              currentComments={this.props.rfd}
            />
          </div>
        ) : (
          <div className="commentary">
            <p className="semibold bluetext centeralign full">
              These comments go only to{" "}
              {entries[this.state.currentStudent].code} –{" "}
              {entries[this.state.currentStudent].name} – &amp; coaches
            </p>
            <CommentBox
              key={entries[this.state.currentStudent].code}
              id={entries[this.state.currentStudent]}
              setComments={this.props.setComments(this.state.currentStudent)}
              currentComments={entries[this.state.currentStudent].comments}
              code={entries[this.state.currentStudent].code}
              name={entries[this.state.currentStudent].name}
            />
          </div>
        )}
      </>
    );
  }
}
