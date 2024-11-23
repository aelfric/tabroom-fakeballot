import React from "react";
import {FakeLink} from "../App";

export function DebateBallot({
  round = {name: "", room: "", time: ""},
  start,
}: {
  round: { name: string; room: string, time: string };
  start: () => unknown;
}) {
  return (
    <div
      className="bluebordertop odd marbottom  flexkids"
      id="7502338"
      title="Round at Franks Test Tournament in PF Debate for Riccobono"
    >
      <div className="full flexrow">
        <span className="quarter semibold padvert padleft">Round</span>
        <span className="threequarters">
          <span className="fourfifths true nospace padvertless">
            {round.name}
          </span>
          <span className="fifth rightalign padright padvertless">
            <FakeLink
              className="buttonwhite bluetext fa fa-table fa-sm"
              target="_blank"
              title="Public Round Schematic"
            ></FakeLink>
          </span>
        </span>
      </div>

      <div className="full ltbordertop flexrow">
        <span className="quarter semibold padvert padleft">Room</span>

        <span className="threequarters flexrow leftalign">{round.room}</span>
      </div>

      <div className="full ltbordertop flexrow">
        <span className="quarter semibold padleft">Start</span>

        <span className="threequarters flexrow">{round.time}</span>
      </div>

      <div className="full ltbordertop flexrow">
        <div className="full flexrow">
          <span className="half centeralign"></span>

          <span className="fourfifths rightalign">
            <button className="greentext invert buttonwhite" onClick={start}>
              ON MY WAY!
            </button>

            <span className="quarterspacer"></span>
          </span>
        </div>
      </div>
    </div>
  );
}
