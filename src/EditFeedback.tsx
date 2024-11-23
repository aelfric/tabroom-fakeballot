import React from "react";
import Content from "./Content";
import { FakeLink } from "./App";
import { CommentBox } from "./CommentBox";
import { SpeechEntry } from "./speech/types";
import { Events } from "tinymce";

interface EditFeedbackProps {
  entries: SpeechEntry[];
  rfd?: string;
  setRFD: (evt: Events.EditorEventMap["blur"]) => unknown;
  onSubmit: (e: SpeechEntry[]) => unknown;
}

interface EditFeedbackState {
  entries: SpeechEntry[];
}

export default class EditFeedback extends React.Component<
  EditFeedbackProps,
  EditFeedbackState
> {
  state = {
    entries: JSON.parse(JSON.stringify(this.props.entries)),
  };

  setComments = (idx: number) => (evt: Events.EditorEventMap["blur"]) => {
    this.setState(({ entries }) => {
      entries[idx].comments = evt.focusedEditor.getContent();
      return { entries: entries };
    });
  };

  render() {
    return (
      <Content
        menu={
          <>
            <div className="shade openshade fa fa-forward" />

            <div className="sidenote">
              <h4>This round:</h4>

              <div className="evenrownohover block padless smallish">
                <span className="smallspan">Round:</span>

                <span className="namespan">Round 1</span>
              </div>

              <div className="evenrownohover block padless smallish">
                <span className="smallspan">Room:</span>
                <span className="namespan">Lower Gym I</span>
              </div>

              <FakeLink
                href="/index/tourn/postings/round.mhtml?tourn_id=12009&amp;round_id=393269"
                className="blue block"
              >
                Full Pairing/Schematic
              </FakeLink>
            </div>

            <div className="sidenote">
              {this.state.entries.map((e: SpeechEntry) => (
                <FakeLink
                  className="yellow block"
                  href="ballot_comments.mhtml?judge_id=963334&amp;ballot_id=12883649"
                  key={e.code}
                >
                  For {e.code}
                </FakeLink>
              ))}
            </div>

            <div className="sidenote">
              <h4>Other ballots</h4>
            </div>
          </>
        }
        main={
          <>
            <span className="hugespan nowrap padno" data-style="width: 450px;">
              <h3>OBT Round 1 RFD/Comments for Riccobono</h3>
            </span>

            <span className="medbigspan nowrap right">
              <h4 data-style="text-align: right;">In Lower Gym I</h4>
            </span>

            <h4>Reason for Rankings</h4>
            <CommentBox
              id="rfd"
              setComments={(evt) => this.props.setRFD(evt)}
              currentComments={this.props.rfd}
            />
            <p className="explain">
              RFDs are sent to everyone in the round; comments only to the entry
              &amp; coaches
            </p>
            {this.state.entries.map((e: SpeechEntry, i: number) => (
              <React.Fragment key={e.code}>
                <h4>
                  Comments for {e.code} – {e.name} – "{e.title}"
                </h4>

                <CommentBox
                  key={e.code}
                  id={i}
                  setComments={this.setComments(i)}
                  currentComments={e.comments}
                  code={e.code}
                  name={e.name}
                />
              </React.Fragment>
            ))}
            <div className="liblrow rightalign">
              <input
                type="submit"
                value="Save RFD &amp; Comments"
                className="med"
                onClick={() => this.props.onSubmit(this.state.entries)}
              />
            </div>
          </>
        }
      />
    );
  }
}
