import Content from "../Content";
import { Column, SortableTable } from "../SortableTable";
import { CongressEntry } from "./congress.types";

function EntryRow({
  rank,
  name,
  even,
}: Readonly<{
  rank?: number;
  name: string;
  even: boolean;
}>) {
  return (
    <tr role="row" className={even ? "even" : "odd"}>
      <td className="centeralign">{rank}</td>
      <td>{name}</td>
    </tr>
  );
}

interface ConfirmSubmitProps {
  entries: CongressEntry[];
  confirm: () => void;
  unConfirm: () => void;
  rfd?: string;
}

export function ConfirmSubmit(props: Readonly<ConfirmSubmitProps>) {
  const columns: Column<CongressEntry>[] = [
    {
      label: "Rank",
      property: "rank",
      ariaLabel: "",
    },
    {
      label: "Code",
      property: "name",
      ariaLabel: "",
    },
  ];
  return (
    <Content
      main={
        <>
          <h4 className="marbottommore">
            Please confirm your ranking of this round:
          </h4>
          <SortableTable<CongressEntry>
            columns={columns}
            entries={props.entries}
            defaultSort="rank"
            renderRow={({ entry, i }) => (
              <EntryRow key={entry.id} {...entry} even={i % 2 === 0} />
            )}
          />

          <hr />

          <h6 className="centeralign martopmuchmore redtext semibold">
            Once you confirm your ballot, you cannot change it online.
          </h6>

          <p className="centeralign martopmuchmore redtext semibold bigger">
            You&#39;ll have to contact the tournament staff to make any further
            changes
          </p>

          <p className="centeralign bluetext bigger semibold marbottommore">
            You are able to write more comments/feedback until the end of the
            tournament; you just may not change scores.
          </p>

          <div className="full martopmuchmore">
            <span className="pagehalf centeralign">
              <button
                className="redtext buttonwhite invert full confirm"
                onClick={props.unConfirm}
              >
                NO! RE-ENTER BALLOT
              </button>
            </span>

            <span className="pagehalf centeralign">
              <button
                className="greentext buttonwhite invert full confirm"
                onClick={props.confirm}
              >
                YES! CORRECT! CONFIRM IT
              </button>
            </span>
          </div>
        </>
      }
      menu={
        <div className="sidenote">
          <h4>RFD</h4>

          <div dangerouslySetInnerHTML={{ __html: props.rfd || "" }} />
        </div>
      }
    />
  );
}
