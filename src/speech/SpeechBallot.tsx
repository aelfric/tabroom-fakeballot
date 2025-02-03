import React from "react";
import { Link } from "@tanstack/react-router";
import { FakeLink } from "../FakeLink";
import { SpeechEntry } from "./types";

type SpeechBallotProps = {
  round: {
    name: string;
    room: string;
    time: string;
    entries: SpeechEntry[];
  };
};

export function SpeechBallot({ round }: Readonly<SpeechBallotProps>) {
  return (
    <div
      className="bluebordertop odd marbottom "
      id="7146353"
      title="Round at 49th University of Pennsylvania Tournament in Speech for Riccobono"
    >
      <div className="full">
        <span className="quarter semibold">Round</span>
        <span className="threequarters nospace">
          <span className="fourfifths true nospace padvertless">
            {round.name}
          </span>
          <span className="fifth rightalign padvertless">
            <FakeLink
              className="buttonwhite bluetext fa fa-table fa-sm"
              target="_blank"
              title="Public Round Schematic"
            ></FakeLink>
          </span>
        </span>
      </div>

      <div className="full ltbordertop">
        <span className="quarter semibold padvert">Room</span>

        <span className="threequarters nospace">{round.room}</span>
      </div>

      <div className="full ltbordertop">
        <span className="quarter semibold padvert">Start</span>

        <span className="threequarters nospace">{round.time}</span>
      </div>

      <div className="full ltborderbottom ltbordertop">
        <span className="quarter semibold">Entries</span>

        <span className="threequarters nospace padvertless">
          {round.entries.map((ent, i) => (
            <span
              className="threetenths marno padno padvertless padvertless smallish"
              key={ent.code}
            >
              <span className="fifth semibold nospace">{i + 1}</span>
              <span className="fourfifths nospace">{ent.code}</span>
            </span>
          ))}
        </span>
      </div>

      <div className="full ltbordertop">
        <span className="half centeralign"></span>

        <span className="half centeralign padright">
          <Link to="/speech" className="greentext invert buttonwhite">
            ON MY WAY!
          </Link>
        </span>
      </div>
    </div>
  );
}
