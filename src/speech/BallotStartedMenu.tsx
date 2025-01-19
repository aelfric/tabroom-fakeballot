import { FakeLink } from "../FakeLink";
import Timer from "../Timer";
import React from "react";

export const BallotStartedMenu = () => (
  <>
    <div className="sidenote">
      <h6 className="bluetext semibold marbottom">This round</h6>

      <div className="row even">
        <span className="quarter semibold">Round:</span>

        <span className="threequarter">Round 1</span>
      </div>

      <div className="row odd">
        <span className="quarter semibold">Room:</span>
        <span className="threequarter">12</span>
      </div>

      <div className="row even">
        <span className="quarter semibold">Start</span>
        <span className="threequarter" />
      </div>

      <div className="row nospace odd">
        <span className="quarter semibold">Panel:</span>

        <span className="threequarters nospace">
          <div className="nowrap padless marno">Charles Sloat</div>
        </span>
      </div>

      <FakeLink
        href="/index/tourn/postings/round.mhtml?tourn_id=11542&amp;round_id=373544"
        className="blue full martopmore"
      >
        Full Pairing/Schematic
      </FakeLink>
    </div>

    <div className="sidenote">
      <span className="third">
        <h4>Timers</h4>
      </span>

      <span className="twothirds explain rightalign">
        If you refresh or navigate away, these timers will reset
      </span>

      <div className="bigger centeralign semibold" />
      <Timer initialDuration={10} />
      <h4>Other ballots</h4>
    </div>
  </>
);
