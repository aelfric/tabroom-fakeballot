import React from "react";
import Content from "./Content";
import { FakeLink } from "./App";
import { SpeechBallot } from "./SpeechBallot";
import { CongressBallot } from "./CongressBallot";

export function DefaultMenu() {
  return (
    <>
      <div className="sidenote">
        <h4>Tournaments</h4>

        <FakeLink
          className="blue full"
          href="/user/tourn/select.mhtml?tourn_id=10669"
        >
          <span className="fivesixth">Sample Tournament</span>

          <span className="sixth mono smaller rightalign">NY/US</span>
        </FakeLink>

        <FakeLink
          className="martop-half blue full"
          href="/user/tourn/all.mhtml"
        >
          See Past Tournaments
        </FakeLink>
      </div>

      <div className="sidenote">
        <h4>Judging</h4>

        <FakeLink className="yellow full" href="/user/judge/panels.mhtml">
          Current Ballots &amp; Panels
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/index.mhtml">
          Upcoming
        </FakeLink>

        <FakeLink
          className="blue half"
          href="/user/judge/history.mhtml?person_id=5820"
        >
          History
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/conflicts.mhtml">
          Conflicts
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/paradigm.mhtml">
          Paradigm
        </FakeLink>

        <FakeLink
          className="blue full"
          href="/user/judge/hire.mhtml?person_id=5820"
        >
          Offer Hired Judging Rounds
        </FakeLink>
      </div>

      <div className="sidenote">
        <h4>Your Account</h4>

        <FakeLink className="yellow full" href="/user/unfollow.mhtml">
          Edit Live Updates/Parent Memos
        </FakeLink>

        <FakeLink className="yellow full" href="/user/chapter/create.mhtml">
          Create a new school/team
        </FakeLink>

        <FakeLink className="yellow full" href="/user/tourn/request.mhtml">
          Request a new tournament
        </FakeLink>

        <FakeLink className="yellow full" href="/user/judge/search.mhtml">
          Link your person to a judge
        </FakeLink>

        <FakeLink className="yellow full" href="/user/student/search.mhtml">
          Link your person to a student
        </FakeLink>
      </div>
    </>
  );
}

export default function Ballot(props) {
  const rounds = [
    {
      name: "OBT Round 1",
      time: "9:00 AM EST",
      room: "12",
      entries: props.entries,
    },
    {
      name: "CON Session 1",
      time: "9:00 AM EST",
      room: "405",
      entries: props.entries,
    },
  ];
  return (
    <Content
      menu={<DefaultMenu />}
      main={
        <>
          <p>
            <strong>
              NOTE: This page is provided as an example of the Tabroom Online
              Ballot experience. No information entered on this page will be
              saved. If you refresh the page, everything will reset.
            </strong>
          </p>
          <p>
            <strong>
              Tabroom is a constantly evolving piece of software. There may be
              minor differences between this example and the actual Tabroom
              interface.
            </strong>
          </p>
          <ul id="tabnav" className="marvertno">
            <li
              id="button_current_ballots"
              className="tabs selected_dark invert"
              onClick="updateTab('current_ballots')"
            >
              Current ballots
            </li>

            <li
              id="button_past_scores_and_feedback"
              className="tabs"
              onClick="updateTab('past_scores_and_feedback')"
            >
              Past scores and feedback
            </li>
          </ul>
          <div className="screens darkscreen current_ballots padleft padright marno">
            <span className="pagehalf">
              <h5>Current Assignments</h5>
              <SpeechBallot round={rounds[0]} start={props.start} />
              <CongressBallot round={rounds[1]} start={props.start} />
            </span>
          </div>
        </>
      }
    />
  );
}
