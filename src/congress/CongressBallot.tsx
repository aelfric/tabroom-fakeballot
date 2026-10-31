import { FakeLink } from "../FakeLink";
import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { AppContext } from "../app-context";

export function CongressBallot({
  round,
}: Readonly<{
  round: { room: string; name: string; time: string };
}>) {
  const { congressRound } = useContext(AppContext);
  if (congressRound?.ballotState === "confirmed") {
    return null;
  }
  return (
    <div
      className="bluebordertop odd marbottom  flexkids"
      id="7502338"
      title="Round at Franks Test Tournament in Congress for Riccobono"
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
              href="/index/tourn/postings/round.mhtml?tourn_id=&amp;round_id=1239260"
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
        <span className="half centeralign"></span>
        <span className="half centeralign padright">
          <Link to={"/congress"} className="greentext invert buttonwhite">
            ON MY WAY!
          </Link>

          <span className="quarterspacer"></span>
        </span>
      </div>
    </div>
  );
}
