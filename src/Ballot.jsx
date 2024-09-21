import React from "react";
import Content from "./Content";
import { SortableTable } from "./SortableTable";
import { FakeLink } from "./App";

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

              <div
                className="bluebordertop odd marbottom "
                id="7146353"
                title="Round at 49th University of Pennsylvania Tournament in Speech for Riccobono"
              >
                <div className="full">
                  <span className="quarter semibold">Round</span>
                  <span className="threequarters nospace">
                    <span className="fourfifths true nospace padvertless">
                      {rounds[0].name}
                    </span>
                    <span className="fifth rightalign padvertless">
                      <a
                        className="buttonwhite bluetext fa fa-table fa-sm"
                        target="_blank"
                        title="Public Round Schematic"
                        href="https://www.tabroom.com/index/tourn/postings/round.mhtml?tourn_id=&amp;round_id=1095808"
                      ></a>
                    </span>
                  </span>
                </div>

                <div className="full ltbordertop">
                  <span className="quarter semibold padvert">Room</span>

                  <span className="threequarters nospace">{rounds[0].room}</span>
                </div>

                <div className="full ltbordertop">
                  <span className="quarter semibold padvert">Start</span>

                  <span className="threequarters nospace">{rounds[0].time}</span>
                </div>

                <div className="full ltborderbottom ltbordertop">
                  <span className="quarter semibold">Entries</span>

                  <span className="threequarters nospace padvertless">
                    {rounds[0].entries.map((ent, i) => (
                      <span className="threetenths marno padno padvertless padvertless smallish" key={ent.code}>
                        <span className="fifth semibold nospace">{i + 1}</span>
                        <span className="fourfifths nospace">{ent.code}</span>
                      </span>
                    ))}
                  </span>
                </div>

                <div className="full ltbordertop">
                  <div className="full padvertless nospace explain semibold centeralign graytext padbottom">
                    Press the Button!
                  </div>
                  <span className="fifth centeralign"></span>

                  <span className="fourfifths rightalign">
                    <button
                      className="greentext invert buttonwhite"
                      onClick={props.start}
                    >
                      ON MY WAY!
                    </button>

                    <span className="quarterspacer"></span>
                  </span>
                </div>
              </div>
            </span>
          </div>
        </>
      }
    />
  );
}
