import { Link } from "@tanstack/react-router";
import { SPEECH_ENTRIES } from "./FakeSpeechBallot";

const pr = new Intl.PluralRules("en-US", { type: "ordinal" });
const suffixes = new Map([
  ["one", "st"],
  ["two", "nd"],
  ["few", "rd"],
  ["other", "th"],
]);
const formatOrdinals = (n: number) => {
  const rule = pr.select(n);
  const suffix = suffixes.get(rule);
  return `${n}${suffix}`;
};

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
  return (
    <>
      <div className="full nospace martopmore odd bluebordertop thinborder flexrow">
        <span className="fifth nospace bigger semibold italic padleft">
          OBT Round 1
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
            to="/speech-feedback"
          >
            Edit Feedback
          </Link>
        </span>
      </div>
      <div className="ltbordertop odd">
        {SPEECH_ENTRIES.map((entry, index) => (
          <div key={entry.code} className="nospace ltborderbottom flexrow full">
            <span className="tenth padvert smaller">
              {formatOrdinals(index + 1)} spkr
            </span>

            <span className="fifth grow">{entry.code}</span>

            <span className="tenth semibold">{entry.ranks ?? index + 1}</span>

            <span className="tenth">{entry.points ?? 99 - index}</span>
          </div>
        ))}
      </div>
    </>
  );
}
