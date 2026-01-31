import { Dispatch, SetStateAction, useState } from "react";

import { CommentBox } from "../CommentBox";
import { SpeechEntry } from "./types";
import type { EventHandler } from "@tinymce/tinymce-react/lib/cjs/main/ts/Events";
import { Events } from "tinymce";

interface CommentPanelProps {
  entries: SpeechEntry[];
  rfd?: string;
  setRFD?: Dispatch<SetStateAction<string>>;
  setComments: (code: string) => EventHandler<Events.EditorEventMap["blur"]>;
}

export function CommentPanel({ entries, ...props }: CommentPanelProps) {
  const [currentStudent, setCurrentStudent] = useState<
    number | `${number}` | "rfd"
  >("rfd");
  return (
    <>
      <div className="full">
        <span className="third">
          <h4>General Feedback</h4>
        </span>

        <span className="twothirds rightalign">
          <span className="half rightalign bigger semibold bluetext">
            Comments go to:
          </span>

          <span className="half centeralign">
            <select
              className="fixedmed"
              onChange={(evt) =>
                setCurrentStudent(
                  evt.target.value === "rfd" ? "rfd" : Number(evt.target.value),
                )
              }
            >
              <option value="rfd">Everyone (Reason for Rankings)</option>
              {entries.map((entry, idx) => {
                return (
                  <option key={entry.code} value={idx}>
                    {entry.code}&nbsp;&nbsp;{entry.name}
                  </option>
                );
              })}
            </select>
          </span>
        </span>
      </div>
      {currentStudent === "rfd" ? (
        <div className="commentary">
          <p className="semibold greentext centeralign full">
            These comments go to all participants in the round.
          </p>
          <CommentBox
            setComments={(evt) => {
              if (props.setRFD && evt.target) {
                return props.setRFD(evt.target.getContent());
              }
            }}
            currentComments={props.rfd}
          />
        </div>
      ) : (
        <div className="commentary">
          <p className="semibold bluetext centeralign full">
            These comments go only to {entries[currentStudent]?.code} –{" "}
            {entries[currentStudent]?.name} – &amp; coaches
          </p>
          <CommentBox
            key={entries[currentStudent]?.code}
            setComments={props.setComments(entries[currentStudent]?.code)}
            currentComments={entries[currentStudent]?.comments}
          />
        </div>
      )}
    </>
  );
}
