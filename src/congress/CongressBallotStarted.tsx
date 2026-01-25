import Content from "../Content";
import { BallotStartedMenu } from "./BallotStartedMenu";
import { useCallback, useState } from "react";
import { CommentBox } from "../CommentBox";
import { ConfirmSubmit } from "./ConfirmBallot";
import { CongressEntry, Speech } from "./types";
import { Updater, useImmer } from "use-immer";
import { TabNav } from "../TabNav";

type CongressRound = {
  entries: CongressEntry[];
  errors: string[];
  speechNumber: number;
  poNumber: number;
};

export const CONGRESS_NAMES = [
  "Alannah Meadows",
  "Casper Howard",
  "Cory McDonald",
  "Farah Petersen",
  "Kirsten Arias",
  "Siobhan Wang",
  "Zain Swanson",
  "Huhana Rhodes",
  "Sepphora Herman",
  "Nicholas Charlotte",
  "Devin Kino",
  "Adrien O'Hannigan",
  "Susheela Innes",
];

export function CongressBallotStarted() {
  const [round, setRound] = useImmer<CongressRound>({
    entries: CONGRESS_NAMES.map(generateEntry),
    errors: [],
    speechNumber: 1,
    poNumber: 1,
  });

  const [confirming, setConfirming] = useState(false);
  if (confirming) {
    return (
      <ConfirmSubmit
        entries={round.entries}
        confirm={() => setConfirming(false)}
      />
    );
  } else {
    return (
      <Content
        main={
          <CongressBallotMain
            round={round}
            setRound={setRound}
            onSubmit={() => setConfirming(true)}
          />
        }
        menu={<BallotStartedMenu />}
      />
    );
  }
}

function CongressSpeech({
  speech,
  onSave,
}: Readonly<{
  speech: Speech;
  onSave: (f: FormData) => void;
}>) {
  const [comments, setComments] = useState(speech.comments ?? "");
  return (
    <form action={onSave}>
      <div className="lightbordertop martop">
        <div className="odd noborder">
          <span className="quarter marno">
            <p className="speech bluetext semibold bigger">
              {speech.name ?? "New speech:"}
            </p>
          </span>

          <span className="eighth semibold bigger bluetext centeralign topic">
            Topic/Bill:
          </span>

          <span className="centeralign threetenths topic">
            <input
              type="text"
              name="topic"
              size={32}
              data-style={{ width: "190.313px" }}
              defaultValue={speech.topic}
            />
          </span>

          <span className="twenty semibold bigger bluetext centeralign side">
            Side:
          </span>

          <span className="true quarter side padno">
            <label htmlFor="new_aff">
              <span className="half hover">
                <input
                  id="new_aff"
                  type="radio"
                  name="side"
                  value="1"
                  defaultChecked={speech.side === "1"}
                />{" "}
                For the bill
              </span>
            </label>

            <label htmlFor="new_neg">
              <span className="half hover">
                <input
                  id="new_neg"
                  type="radio"
                  name="side"
                  value="2"
                  defaultChecked={speech.side === "2"}
                />{" "}
                Against
              </span>
            </label>
          </span>
        </div>

        <input type="hidden" name="comments" value={comments} />
        <div className="padmuchmore odd noborder">
          <CommentBox
            key={speech.comments}
            currentComments={comments}
            setComments={(evt) => {
              setComments(evt.target.getContent());
            }}
          />
        </div>

        <div className="full marno blueborderbottom even">
          <span className="tenth leftalign"></span>

          <span className="fifth leftalign"></span>

          <span className="threetenths rightalign semibold redtext bigger">
            Points for this speech period (1 - 6):
          </span>

          <span className="eighth leftalign">
            <input
              type="number"
              name="points"
              min="1"
              max="6"
              defaultValue={speech.points}
            />
          </span>

          <span className="fifth rightalign">
            <button
              type="submit"
              className="buttonwhite bluetext bigger invert"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}

function CongressPoSession({
  speech,
  onSave,
}: Readonly<{
  speech: Speech;
  onSave: (f: FormData) => void;
}>) {
  const [comments, setComments] = useState(speech.comments ?? "");
  return (
    <form action={onSave}>
      <div className="lightbordertop martop">
        <div className="odd noborder">
          <div className="odd noborder">
            <span className="quarter marno">
              <p className="po bluetext semibold bigger">
                {speech.name ?? "New PO rating:"}
              </p>
            </span>
            <span className="threequarters padvertmore bigger rightalign semibold bluetext po">
              Presiding Officership
            </span>
          </div>
        </div>

        <input type="hidden" name="comments" value={comments} />
        <div className="padmuchmore odd noborder">
          <CommentBox
            key={speech.comments}
            currentComments={comments}
            setComments={(evt) => {
              setComments(evt.target.getContent());
            }}
          />
        </div>

        <div className="full marno blueborderbottom even">
          <span className="tenth leftalign"></span>

          <span className="fifth leftalign"></span>

          <span className="threetenths rightalign semibold redtext bigger">
            Points for this period (1 - 6):
          </span>

          <span className="eighth leftalign">
            <input
              type="number"
              name="points"
              min="1"
              max="6"
              defaultValue={speech.points}
            />
          </span>

          <span className="fifth rightalign">
            <button
              type="submit"
              className="buttonwhite bluetext bigger invert"
            >
              Save
            </button>
          </span>
        </div>
      </div>
    </form>
  );
}

function generateEntry(name: string): CongressEntry {
  let hash = 0;
  for (let i = 0; i < name.length; i++) {
    const chr = name.charCodeAt(i);
    hash = (hash << 5) - hash + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return {
    name,
    id: Math.abs(hash),
    speeches: [],
  };
}

function CongressBallotMain({
  round,
  setRound,
  onSubmit,
}: Readonly<{
  round: {
    errors: string[];
    entries: CongressEntry[];
  };
  setRound: Updater<CongressRound>;
  onSubmit: () => unknown;
}>) {
  const [po, setPo] = useState(-1);
  const [selected, setSelected] = useState(0);
  const addSpeech = useCallback(
    (formData: FormData) => {
      console.log("Add speech");
      const topic = String(formData.get("topic"));
      const points = Number(formData.get("points"));
      const side = String(formData.get("side")) as "1" | "2";
      const comments = String(formData.get("comments"));
      setRound((draft) => {
        draft.entries[selected].speeches.push({
          name: "Speech #" + draft.speechNumber,
          topic,
          points,
          comments,
          side,
        });
        draft.speechNumber = draft.speechNumber + 1;
      });
    },
    [selected],
  );

  const addPoSession = useCallback(
    (formData: FormData) => {
      const points = Number(formData.get("points"));
      const comments = String(formData.get("comments"));

      setRound((draft) => {
        draft.entries[selected].speeches.push({
          name: "PO Session #" + draft.poNumber,
          po: true,
          points,
          comments,
        });
        draft.poNumber = draft.poNumber + 1;
      });
    },
    [selected],
  );

  function updateSpeech(idx: number) {
    return function (formData: FormData) {
      const topic = String(formData.get("topic"));
      const points = Number(formData.get("points"));
      const side = formData.get("side") as "1" | "2";
      const comments = String(formData.get("comments"));

      setRound((draft) => {
        draft.entries[selected].speeches[idx] = {
          name: draft.entries[selected].speeches[idx].name,
          topic,
          points,
          comments,
          side,
        };
      });
    };
  }

  function updatePoSession(idx: number) {
    return function (formData: FormData) {
      const points = Number(formData.get("points"));
      const comments = String(formData.get("comments"));
      setRound((draft) => {
        draft.entries[selected].speeches[idx] = {
          name: draft.entries[selected].speeches[idx].name,
          po: true,
          points,
          comments,
        };
      });
    };
  }

  function saveRankings(formData: FormData) {
    let errors: string[] = [];

    const rankings: number[] = [...formData.entries()]
      .filter((e) => e[0].endsWith("_ranks"))
      .map((e) => Number(e[1]));

    for (let i = 1; i <= 8; i++) {
      if (!rankings.includes(i)) {
        errors = [...errors, `You are missing the rank ${i}`];
      }
    }

    const counts: Record<number, number> = {};
    for (const ranking of rankings) {
      counts[ranking] = (counts[ranking] || 0) + 1;
    }

    for (const entry of Object.entries(counts)) {
      if (entry[1] > 1 && entry[0] !== "9" && entry[0] !== "0") {
        errors = [...errors, `You have repeated the rank ${entry[0]}`];
      }
    }

    setRound((oldState) => {
      const entries = oldState.entries.map((e: CongressEntry) => {
        return {
          ...e,
          rank: Number(formData.get(`${e.id}_ranks`) || 9),
        };
      });
      return {
        ...oldState,
        entries,
        errors,
      };
    });
    if (errors.length === 0) {
      onSubmit();
    }
  }

  return (
    <div>
      <div className="ltborderbottom flexrow">
        <span className="third">
          <p className="bluetext biggish semibold">Room: 405</p>
        </span>

        <span className="third centeralign">
          <h4 className="graytext">CON Session 1</h4>
        </span>

        <span
          className="third rightalign top"
          title="Many will judge, but I like you the best!"
        >
          <h5>Frank Riccobono</h5>
        </span>
      </div>

      <TabNav
        tabs={[
          {
            name: "Speeches",
            children: (
              <div
                className="speeches screens"
                data-select2-id="select2-data-82-5nzn"
              >
                <div className="full" data-select2-id="select2-data-81-12wv">
                  <span className="twofifths bluetext">
                    <h5>Per-Speech Points</h5>
                  </span>

                  <span className="fifth rightalign redtext semibold">
                    Select a speaker:
                  </span>

                  <span
                    className="twofifths"
                    data-select2-id="select2-data-80-n8xo"
                  >
                    <select
                      name="entry_id"
                      className="fixedbig select2-hidden-accessible"
                      onChange={(evt) => setSelected(Number(evt.target.value))}
                      value={selected}
                      tabIndex={-1}
                      aria-hidden="true"
                      data-select2-id="select2-data-76-q41r"
                    >
                      <option
                        value=""
                        data-select2-id="select2-data-86-kqdt"
                      ></option>
                      {round.entries.map((e, i) => (
                        <option value={i} key={e.name}>
                          {e.name}
                        </option>
                      ))}
                    </select>
                  </span>
                </div>

                <div className="martop ltbordertop padvert">
                  <span className="half nospace">
                    <h5 className="nospace">{round.entries[selected].name}</h5>
                  </span>

                  <span className="half nospace rightalign">
                    <span className="threequarters semibold redtext">
                      Presiding Officer this session
                    </span>
                    <span className="quarter nospace centeralign">
                      <label
                        className="switch smaller"
                        aria-label={"Presiding officer this session"}
                      >
                        <input
                          className="padsettingbox"
                          type="checkbox"
                          value="1"
                          id="po"
                          name="po"
                          onChange={(evt) => {
                            if (evt.target.checked) {
                              setPo(selected);
                            } else {
                              setPo(-1);
                            }
                          }}
                        />
                        <div className="slider"></div>
                      </label>
                    </span>
                  </span>
                </div>
                <div id="new">
                  {po === selected ? (
                    <CongressPoSession speech={{}} onSave={addPoSession} />
                  ) : (
                    <CongressSpeech
                      key={round.entries[selected].speeches.length}
                      speech={{}}
                      onSave={addSpeech}
                    />
                  )}
                  {round.entries[selected].speeches.map((s, i) =>
                    s.po ? (
                      <CongressPoSession
                        key={s.name}
                        speech={s}
                        onSave={updatePoSession(i)}
                      />
                    ) : (
                      <CongressSpeech
                        key={s.name}
                        speech={s}
                        onSave={updateSpeech(i)}
                      />
                    ),
                  )}
                </div>
              </div>
            ),
          },
          {
            name: "Rankings",
            children: (
              <div className="rankings screens">
                <div className="full nospace centeralign">
                  <span className="nineteen leftalign nospace ballotshell">
                    <div className="padvertmuchless ltborderbottom marbottom">
                      <p dir="ltr">
                        We are all influenced by implicit bias or stereotypes
                        that, when unchecked, influence our judging in ways that
                        may negatively impact the students we are called to
                        judge impartially. Before writing comments or making a
                        decision, please take a moment to reflect on any
                        preconceived notions you may hold that may impact your
                        decision-making process and/or jeopardize the student
                        experience.
                      </p>
                      <p>&nbsp;</p>
                    </div>

                    <h6 className="bluetext centeralign padmore marbottom semibold half">
                      Blanks will be auto-filled with a 9
                    </h6>
                  </span>
                </div>

                {round.errors.length > 0 && (
                  <div className="borderred centeralign martopmore marbottommore">
                    <h6 className="bluetext semibold">
                      Oh, drat. Your ballot had errors.
                    </h6>
                    {round.errors.map((e) => (
                      <p className="bigger semibold redtext" key={e}>
                        {e}
                      </p>
                    ))}
                    <p className="bigger semibold bluetext">
                      Please correct these before continuing.
                    </p>
                  </div>
                )}

                <form action={saveRankings} method="post">
                  <table
                    id="sortable"
                    className="tablesorter tablesorter-default tablesorterb8b1a23feee53 hasStickyHeaders tablesorter9781b859d7f2a"
                  >
                    <thead>
                      <tr
                        className="yellowrow smallish centeralign tablesorter-headerRow"
                        role="row"
                      >
                        <th
                          data-column="0"
                          className="tablesorter-header sortable tablesorter-headerUnSorted"
                          tabIndex={0}
                          scope="col"
                          role="columnheader"
                          aria-disabled="false"
                          aria-controls="sortable"
                          aria-sort="none"
                          aria-label="Entry Code: No sort applied, activate to apply a descending sort"
                          style={{ userSelect: "none" }}
                        >
                          <div className="tablesorter-header-inner">
                            Entry Code
                          </div>
                        </th>

                        <th
                          data-column="1"
                          className="tablesorter-header sortable tablesorter-headerUnSorted"
                          tabIndex={0}
                          scope="col"
                          role="columnheader"
                          aria-disabled="false"
                          aria-controls="sortable"
                          aria-sort="none"
                          aria-label="Speech Points: No sort applied, activate to apply a descending sort"
                          style={{ userSelect: "none" }}
                        >
                          <div className="tablesorter-header-inner">
                            Speech Points
                          </div>
                        </th>

                        <th
                          data-column="2"
                          className="tablesorter-header sortable tablesorter-headerUnSorted"
                          tabIndex={0}
                          scope="col"
                          role="columnheader"
                          aria-disabled="false"
                          aria-controls="sortable"
                          aria-sort="none"
                          aria-label="Average: No sort applied, activate to apply a descending sort"
                          style={{ userSelect: "none" }}
                        >
                          <div className="tablesorter-header-inner">
                            Average
                          </div>
                        </th>

                        <th
                          data-column="3"
                          className="tablesorter-header sortable tablesorter-headerUnSorted"
                          tabIndex={0}
                          scope="col"
                          role="columnheader"
                          aria-disabled="false"
                          aria-controls="sortable"
                          aria-sort="none"
                          aria-label="Rank: No sort applied, activate to apply a descending sort"
                          style={{ userSelect: "none" }}
                        >
                          <div className="tablesorter-header-inner">Rank</div>
                        </th>
                      </tr>
                    </thead>

                    <tbody
                      id="ballottable"
                      aria-live="polite"
                      aria-relevant="all"
                    >
                      {round.entries.map((entry, i) => (
                        <tr
                          key={entry.id}
                          className={
                            i % 2 === 0 ? "ballotrows even" : "ballotrows"
                          }
                        >
                          <td
                            className="leftalign padvertmore"
                            title="Doubled 0 daggers "
                          >
                            <div className="full flexrow grow semibold">
                              <label htmlFor={`${entry.id}_ranks`}>
                                {entry.name}
                              </label>
                            </div>
                          </td>
                          <td className="centeralign">
                            {entry.speeches.map((s) => s.points).join(",")}
                          </td>

                          <td className="centeralign">
                            {entry.speeches.length > 0 &&
                              entry.speeches
                                .map((s) => Number(s.points))
                                .reduce(function (sum, value) {
                                  return sum + value;
                                }, 0) / entry.speeches.length}
                          </td>
                          <td className="centeralign">
                            <input
                              type="number"
                              step="1"
                              size={5}
                              name={`${entry.id}_ranks`}
                              id={`${entry.id}_ranks`}
                              max="9"
                              defaultValue={entry.rank}
                            />
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                  <div className="liblrow rightalign padvert">
                    <span className="half centeralign nospace">
                      <input type="submit" value="Submit Ballot" />
                    </span>
                  </div>
                </form>
              </div>
            ),
          },
        ]}
      />
    </div>
  );
}
