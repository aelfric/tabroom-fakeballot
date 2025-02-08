import React, { ChangeEvent, Dispatch, SetStateAction, useState } from "react";
import { CommentBox } from "../CommentBox";
import { TabroomError } from "../TabroomError";

type DebateBallotMainProps = {
  round: DebateRound;
  setRound: Dispatch<SetStateAction<DebateRound>>;
  onSubmit: () => void;
};

export function DebateBallotMain({
  round,
  setRound,
  onSubmit,
}: DebateBallotMainProps) {
  const { entries } = round;
  const [errors, setErrors] = useState<string[]>([]);
  const [tab, setTab] = useState<string>("rfd");
  const [comments, setComments] = useState<Record<string, string>>({
    rfd: "",
  });
  const [winningEntry, setWinningEntry] = useState<undefined | string>(
    undefined,
  );
  const [winningSide, setWinningSide] = useState<undefined | string>(undefined);

  function saveDecision(evt: FormData) {
    const tmpErrors = [];
    for (const [key, value] of evt.entries()) {
      console.log(key, value);
      if (key.endsWith("_points")) {
        if (Number(value) < 25) {
          tmpErrors.push(`Points ${value || 0} below minimum of 25`);
        }
        if (Number(value) > 30) {
          tmpErrors.push(`Points ${value || 0} above maximum of 30`);
        }
      }
    }

    const updatedEntries = entries.map((team) => {
      return {
        ...team,
        speakers: team.speakers.map((speaker, index) => {
          return {
            ...speaker,
            points: Number(evt.get(`${team.code}_${index}_points`)),
          };
        }),
      };
    });

    if (!winningEntry) {
      tmpErrors.push(
        "You didn't choose a winner. There are no ties in debate, though there are sometimes tears. Be strong.",
      );
    }
    if (tmpErrors.length === 0) {
      setRound((round) => ({
        ...round,
        entries: updatedEntries,
        winningEntry: Number(winningEntry),
        rfd: comments.rfd,
      }));
      onSubmit();
    } else {
      setErrors(tmpErrors);
    }
  }

  function saveComments() {
    setRound((round) => {
      const update = { ...round };
      update.entries = round.entries.map((e) => {
        return {
          ...e,
          comments: comments[e.code],
        };
      });
      update.rfd = comments.rfd;
      return update;
    });
  }

  function checkSide(evt: ChangeEvent<HTMLInputElement>) {
    setWinningSide(evt.target.value);
    if (winningEntry && evt.target.value != winningEntry) {
      setWinningEntry(undefined);
    }
  }

  function checkLPW(evt: ChangeEvent<HTMLSelectElement>) {
    setWinningEntry(evt.target.value);
    if (winningSide && evt.target.value != winningSide) {
      setWinningSide(undefined);
    }
  }

  return (
    <>
      <div className="ltborderbottom flexrow">
        <span className="third">
          <p className="bluetext biggish semibold">Room: 405</p>
        </span>

        <span className="third centeralign">
          <h4 className="graytext">PF Round 1</h4>
        </span>

        <span
          className="third rightalign top"
          title="Many will judge, but I like you the best!"
        >
          <h5>Frank Riccobono</h5>
        </span>
      </div>

      <div className="full nospace centeralign">
        <span className="nineteen leftalign nospace ballotshell">
          <div className="padvertmuchless ltborderbottom marbottom">
            <p dir="ltr">
              We are all influenced by implicit bias or stereotypes that, when
              unchecked, influence our judging in ways that may negatively
              impact the students we are called to judge impartially. Before
              writing comments or making a decision, please take a moment to
              reflect on any preconceived notions you may hold that may impact
              your decision-making process and/or jeopardize the student
              experience.
            </p>
            <p>&nbsp;</p>
          </div>
        </span>
      </div>

      <div className="padvert centeralign ltbordertop">
        <span className="ninetenths leftalign">
          <div className="full nospace italic semibold centeralign">
            <span className="semibold redtext inline biggish">
              Points Rules:
            </span>
            <span className="halfspacer"></span>
            <span className="inline nospace bluetext semibold">Range:</span>
            0-30.
            <span className="halfspacer"></span>
            No ties.
            <span className="halfspacer"></span>
          </div>
        </span>
      </div>

      {errors.length > 0 && <TabroomError errors={errors} />}
      <form action={saveDecision} method="post">
        <table id="sortable">
          <thead>
            <tr className="yellowrow smallish centeralign">
              <th>Select Side</th>

              <th>Entry Code</th>

              <th colSpan={1}>
                <span className="half marno padless leftalign">Speaker</span>

                <span className="half marno centeralign">Points</span>
              </th>
            </tr>
          </thead>

          <tbody id="ballottable">
            {entries.map((entry, i) => (
              <tr
                key={entry.code}
                className={i % 2 == 0 ? "ballotrows odd" : "ballotrows even"}
              >
                <td className="centeralign">
                  <input
                    type="hidden"
                    name={`side_${i}`}
                    value={i == 0 ? "Aff" : "Neg"}
                  />
                  {i == 0 ? "Aff" : "Neg"}
                </td>
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>{entry.code}</span>
                  </div>
                </td>
                <td colSpan={4} className={"nospace"}>
                  {entry.speakers.map((s, j) => (
                    <div className="padless marno ltbordertop centeralign">
                      <span className="smallish half marno padless leftalign 158778_row">
                        {s.name}:
                      </span>

                      <span className="half marno padless centeralign">
                        <span className="third marno padless centeralign">
                          <input
                            type="number"
                            className="totals"
                            step="0.1"
                            name={`${entry.code}_${j}_points`}
                            size={5}
                            min="0"
                            max="30"
                            defaultValue={s.points}
                            tabIndex={2}
                          />
                        </span>
                      </span>
                    </div>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="odd">
          <span className="fifth semibold bluetext rightalign">Winner</span>

          <span className="quarter leftalign" id="winbox">
            <select
              id="winner"
              name="winner"
              className="fixedmed select2-hidden-accessible"
              onChange={checkLPW}
              tabIndex={-1}
              aria-hidden="true"
              data-select2-id="select2-data-winner"
              value={winningEntry}
            >
              <option data-select2-id="select2-data-6-2al8">
                Choose Winning Entry
              </option>

              {entries.map((e, i) => (
                <option
                  key={e.code}
                  value={i}
                  selected={winningEntry === String(i)}
                >
                  {e.code}
                </option>
              ))}
            </select>
          </span>

          <span className="half rightalign">
            <div className="nowrap nospace">
              <span className="quarter rightalign semibold bluetext bluetext">
                On the
              </span>

              <span className="threequarters leftalign">
                <label htmlFor="winner_1">
                  <span className="hover half">
                    <input
                      type="radio"
                      name="winner_side"
                      className="winner_side"
                      value="0"
                      id="winner_1"
                      onChange={checkSide}
                      checked={winningSide === "0"}
                    />
                    Aff
                  </span>
                </label>

                <label htmlFor="winner_2">
                  <span className="hover half">
                    <input
                      type="radio"
                      name="winner_side"
                      className="winner_side"
                      value="1"
                      id="winner_2"
                      onChange={checkSide}
                      checked={winningSide === "1"}
                    />
                    Neg
                  </span>
                </label>
              </span>
            </div>
          </span>
        </div>
        <div className="liblrow rightalign padvert">
          <span className="half centeralign nospace">
            <input type="submit" value="Submit Ballot" />
          </span>
        </div>
        <div className="full padtopmore">
          <span className="third nospace">
            <h5 className="nospace martopless">Feedback</h5>
          </span>
        </div>
        <p className="full centeralign italic semibold graytext">
          You can write &amp; edit feedback until Sat November 30, 2024 4:00 PM.
          Please fill out ranks, scores and winners promptly after your decision
          before writing or giving extensive feedback. Look under the Past tab
          of your judging home screen to see past results &amp; edit feedback.
        </p>
        <ul id="tabnav">
          <li
            id="header_rfd"
            className={`commentzing ${tab === "rfd" ? "selected" : null}`}
          >
            <a onClick={() => setTab("rfd")}>Reason for Decision</a>
          </li>
          {entries.map((e) => (
            <li
              id="header_45718286"
              className={`commentzing ${tab === e.code ? "selected" : null}`}
            >
              <a onClick={() => setTab(e.code)}>{e.code}</a>
            </li>
          ))}
        </ul>
        <div id="box_rfd" className="commentary">
          <span className="threequarters">
            {tab === "rfd" ? (
              <p className="semibold greentext full">
                These comments go to all participants in the round.
              </p>
            ) : (
              <p className="semibold bluetext full">
                These comments go only to {tab} &amp; coaches
              </p>
            )}
          </span>

          <span className="quarter rightalign semibold bluetext">
            Save Feedback
            <button
              type="button"
              onClick={saveComments}
              className="bluetext buttonwhite fa fa-lg fa-save"
            ></button>
          </span>
        </div>
        <CommentBox
          setComments={(evt: { target: { getContent: () => any } }) =>
            setComments((comments) => ({
              ...comments,
              [tab]: evt.target.getContent(),
            }))
          }
          currentComments={comments[tab] || ""}
        />
      </form>
    </>
  );
}
