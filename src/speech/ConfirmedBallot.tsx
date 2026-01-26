import { MouseEventHandler } from "react";
import Content from "../Content";
import { DefaultMenu } from "../CurrentBallots";
import { SpeechEntry } from "./types";

function Result({
  order,
  code,
  name,
  title,
  ranks,
  points,
  even,
}: SpeechEntry & { even: boolean }) {
  return (
    <div className={`row ${even ? "even" : "odd"}`}>
      <span className="sixth padvert smaller">{order} Speaker</span>

      <span className="third semibold bluetext">
        {code} {name}
        <div className="full nospace">{title}</div>
      </span>

      <span className="half centeralign marno padno">
        Rank: {ranks} – {points}
      </span>
    </div>
  );
}

export default function ConfirmedBallot({
  entries,
  editFeedback,
}: {
  entries: SpeechEntry[];
  editFeedback: MouseEventHandler<HTMLButtonElement>;
}) {
  return (
    <Content
      menu={<DefaultMenu />}
      main={
        <>
          <h3>Current Ballots</h3>

          <span className="third nospace">
            <h6 className="padleftmore greentext marbottommore semibold">
              None Posted...yet!
            </h6>
          </span>
          <span className="twothirds rightalign semibold nospace">
            <p>
              Ballots will appear here once rounds have been published on the
              web
            </p>
          </span>

          <h4 className="martopmore">Previously Entered Results</h4>

          <p className="martop marbottom bluetext semibold">
            Note: You cannot edit past results; you can only view them. Once you
            have confirmed a ballot, you must contact the tournament officials
            to make changes. You may edit/extend past comments until the
            tournament ends.
          </p>

          <div className="full nospace martop">
            <span className="threefifths padleft">
              <h5>Online Ballot Test</h5>
            </span>

            <span className="fifth nospace">
              <h6>Round 1</h6>
            </span>

            <span className="fifth rightalign">
              <button
                type="button"
                className="bluetext buttonwhite hover smallish invert"
                onClick={editFeedback}
              >
                Edit Feedback
              </button>
            </span>
          </div>

          {entries.map((e, i) => (
            <Result key={e.code} {...e} even={i % 2 === 0} />
          ))}
        </>
      }
    />
  );
}
