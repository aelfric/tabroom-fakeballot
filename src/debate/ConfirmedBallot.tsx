import { Link } from "@tanstack/react-router";
import { useContext } from "react";
import { AppContext } from "../app-context";

function dueDate() {
  const date = new Date();
  date.setHours(21, 0, 0);
  return new Intl.DateTimeFormat("en-US", {
    dateStyle: "medium",
    timeStyle: "short",
    timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone,
  }).format(date);
}

export default function ConfirmedBallot() {
  const { debateRound } = useContext(AppContext);
  const { entries } = debateRound!.round;
  return (
    <>
      <div className="full nospace martopmore odd bluebordertop thinborder flexrow">
        <span className="fifth nospace bigger semibold italic padleft">
          PF Round 1
        </span>

        <span className="threetenths biggish semibold bluetext rightalign italic padrightless">
          Example Tournament
        </span>
        <span className="threetenths padleftless italic">
          Edit deadline {dueDate()}
        </span>

        <span className="fifth rightalign">
          <Link
            className="bluetext buttonwhite smallish hover padvertless padleft padright invert"
            to="/debate-feedback"
          >
            Edit Feedback
          </Link>
        </span>
      </div>
      <div className="ltbordertop odd">
        {entries.map((e) => (
          <div className="nospace ltborderbottom flexrow full" key={e.code}>
            <span className="twenty padvert smaller centeralign">{e.side}</span>

            <span className="twenty padvert smaller"></span>

            <span className="fifth">{e.code}</span>

            <span className="tenth centeralign semibold">
              {debateRound?.round.winningSide &&
                (debateRound?.round.winningSide === e.side ? "W" : "L")}
            </span>
            <span className="quarter nospace smallish">
              {e.speakers.map((s) => (
                <span className="full padless marno" key={s.name}>
                  {s.name}
                </span>
              ))}
            </span>

            <span className="tenth nospace smallish rightalign">
              {e.speakers.map((s) => (
                <span className="full padless marno" key={s.name}>
                  {s.points}
                </span>
              ))}
            </span>
          </div>
        ))}
      </div>
    </>
  );
}
