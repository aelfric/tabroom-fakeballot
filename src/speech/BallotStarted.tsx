import {
  ChangeEvent,
  Dispatch,
  MouseEvent,
  MouseEventHandler,
  SetStateAction,
  useState,
} from "react";
import { Column, dynamicSort, SortableTable } from "../SortableTable";
import { CommentPanel } from "./CommentPanel";
import { BallotRow } from "./BallotRow";
import { TabroomError } from "../TabroomError";
import { SpeechEntry } from "./types";
import { Events } from "tinymce";
import { EventHandler } from "@tinymce/tinymce-react/lib/cjs/main/ts/Events";

const includePoints = true;

interface BallotStartedFormProps {
  entries: SpeechEntry[];
  onSubmit: (a: SpeechEntry[]) => unknown;
  setRFD: Dispatch<SetStateAction<string>>;
  rfd: string;
}
export function BallotStartedForm(props: BallotStartedFormProps) {
  const [entries, setEntries] = useState(props.entries);
  const [errors, setErrors] = useState<string[]>([]);

  const setTitle = (idx: number) => (evt: ChangeEvent<HTMLInputElement>) => {
    entries[idx].title = evt.target.value;
    setEntries(entries);
  };

  const setRank = (idx: number) => (evt: ChangeEvent<HTMLInputElement>) => {
    entries[idx].ranks = evt.target.value;
    setEntries(entries);
  };

  const setPoints = (idx: number) => (evt: ChangeEvent<HTMLInputElement>) => {
    entries[idx].points = evt.target.value;
    setEntries(entries);
  };

  const setComments: (
    idx: number | `${number}` | "rfd",
  ) => EventHandler<Events.EditorEventMap["blur"]> =
    (idx: number | `${number}` | "rfd") => (evt) => {
      if (idx !== "rfd") {
        entries[idx].comments = evt.target.getContent();
        setEntries(entries);
      }
    };

  const checkErrors = (evt: MouseEvent<HTMLInputElement>) => {
    const counts = [];
    const errors = [];
    for (const element of entries) {
      const points = Number(element.points) || 0;
      const rank = Number(element.ranks);
      if (rank === undefined) {
        errors.push(`Rank missing for ${element.code}`);
      }

      if (includePoints) {
        if (points < 75 || points > 100) {
          errors.push(`Points ${points} are outside of range 75 - 100`);
        }
        if (counts[points] === undefined) {
          counts[points] = 1;
        } else {
          errors.push(
            `Tied points forbidden: you have two speakers with points ${points}`,
          );
        }
      }
      if (rank !== undefined) {
        if (counts[rank] === undefined) {
          counts[rank] = 1;
        } else {
          errors.push(
            `You have repeated the rank ${rank}.  All ranks must be unique`,
          );
        }
      }
    }

    if (includePoints) {
      const lowPointErrors = [];
      const sortedEntries = entries.sort(dynamicSort("ranks", "ascending"));
      for (let i = 0; i < sortedEntries.length - 1; i++) {
        if (
          (sortedEntries[i + 1].points ?? 0) > (sortedEntries[i].points ?? 0)
        ) {
          lowPointErrors.push(sortedEntries[i].ranks);
        }
      }

      if (lowPointErrors.length > 0) {
        errors.push(
          `Entry ranked ${lowPointErrors.join(
            ", ",
          )} has worse points than a lower ranked entry`,
        );
        errors.push("Rank order must match the order of points given.");
      }
    }
    evt.preventDefault();
    setErrors(errors);

    return errors.length === 0;
  };

  const handleSubmit: MouseEventHandler<HTMLInputElement> = (
    evt: MouseEvent<HTMLInputElement>,
  ) => {
    if (checkErrors(evt)) {
      props.onSubmit(entries);
    }
  };

  const columns: Column<SpeechEntry>[] = [
    {
      label: "Code",
      property: "code",
      ariaLabel: "",
    },
    {
      label: "Name",
      property: "name",
      ariaLabel: "",
    },
    {
      label: "Title/Question",
      property: "title",
      ariaLabel: "",
    },
    {
      label: includePoints ? ["Ranks", "Points"] : "Ranks",
      property: "ranks",
      ariaLabel: "",
    },
  ];

  return (
    <>
      <div>
        <span className="twothirds nospace">
          <h4>OBT Round 1 Ballot for Riccobono</h4>
        </span>

        <span className="third rightalign right">
          <h5 className="normalweight bluetext">Room: 12</h5>
        </span>
      </div>

      {errors.length > 0 && <TabroomError errors={errors} />}

      <form method="post">
        <input type="hidden" name="panel_id" value="3209946" />

        <input type="hidden" name="judge_id" value="961185" />

        <div className="padvert marbottommore marleftmore">
          <span className="half leftalign">
            <span className="semibold redtext inline marright">Points:</span>{" "}
            Range: 75-100 *. Whole points only. No ties. Ranks and points must
            agree.
          </span>
        </div>
        <SortableTable<SpeechEntry>
          entries={entries}
          defaultSort="order"
          columns={columns}
          rowComponent={({ entry, i }) => (
            <BallotRow
              includePoints={includePoints}
              key={entry.code}
              {...entry}
              row={i}
              setTitle={setTitle(i)}
              setRank={setRank(i)}
              setPoints={setPoints(i)}
              even={i % 2 === 0}
            />
          )}
        >
          <tbody aria-live="polite" aria-relevant="all">
            <tr className="liblrow odd" role="row">
              <td colSpan={10} className="rightalign">
                <input
                  type="button"
                  value=" Submit Ballot "
                  onClick={handleSubmit}
                />
              </td>
            </tr>
          </tbody>
        </SortableTable>

        <div className="row smallish redtext semibold centeralign padvertmore even">
          * The full point range is 1 - 100 but you must ask the tab room to
          give points outside of 75 - 100.
        </div>

        <CommentPanel
          entries={entries}
          setComments={setComments}
          setRFD={props.setRFD}
          rfd={props.rfd}
        />
        <div className="libl full rightalign">
          <div className="half centeralign">
            <input
              type="button"
              value="Save Comments Only"
              name="skipme"
              className="med"
              onClick={checkErrors}
            />
          </div>

          <div className="half">
            <input
              onClick={handleSubmit}
              type="button"
              value="Save Comments &amp; Ballot"
              className="med"
            />
          </div>
        </div>
      </form>
    </>
  );
}
