import Content from "../Content";

export function ConfirmBallot({
  entries,
  confirm,
  winningEntry,
  rfd,
}: {
  entries: TeamDebateEntry[];
  confirm: () => void;
  winningEntry?: number | undefined;
  rfd?: string;
}) {
  return (
    <Content
      main={
        <div className="full ltborderbottom">
          <h2>Your ballot is almost complete</h2>

          {winningEntry && (
            <div className="full flexrow centeralign">
              <h5 className="semibold bluetext">
                You voted for {["Aff", "Neg"][winningEntry]}:{" "}
                {entries[winningEntry].code}{" "}
                {entries[winningEntry].speakers.map((s) => s.last).join(" & ")}
              </h5>
            </div>
          )}

          {entries.map((team) => {
            return (
              <span className="pagehalf">
                <span className="semibold bigger full padvertmore martopmore">
                  {team.code} scores
                </span>

                {team.speakers.map((speaker) => (
                  <div className="odd padmore">
                    <span className="half rightalign">{speaker.name}:</span>
                    <span className="quarter centeralign">
                      {speaker.points}
                    </span>
                  </div>
                ))}
              </span>
            );
          })}

          <h6 className="centeralign padtop martopmuchmore  semibold bluebordertop">
            Please check the accuracy of the information above &amp; confirm
          </h6>

          <h6 className="centeralign  semibold">
            You cannot change confirmed ballots online
          </h6>

          <p className="centeralign graytext bigger semibold marbottommore">
            You may write further feedback until the end of the tournament
          </p>

          <div className="full martopmuchmore flexrow">
            <span className="half centeralign ballotconfirm padleft padright">
              <button
                className="redtext buttonwhite invert full confirm"
                onClick={confirm}
              >
                NO! RE-ENTER BALLOT
              </button>
            </span>

            <span className="half centeralign ballotconfirm padleft padright">
              <button
                className="greentext buttonwhite invert full confirm"
                onClick={() => alert("you're done")}
              >
                YES! CORRECT! CONFIRM!
              </button>
            </span>
          </div>
        </div>
      }
      menu={
        <div className="sidenote">
          <h4>RFD</h4>
          <div dangerouslySetInnerHTML={{__html: rfd || ""}} />
        </div>
      }
    />
  );
}
