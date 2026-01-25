import { ChangeEvent } from "react";

type BallotRowProps = {
  code: string;
  name: string;
  title?: string;
  ranks?: string;
  points?: string;
  setTitle: (evt: ChangeEvent<HTMLInputElement>) => void;
  setPoints: (evt: ChangeEvent<HTMLInputElement>) => void;
  setRank: (evt: ChangeEvent<HTMLInputElement>) => void;
  even: boolean;
  row: number;
  includePoints: boolean;
};

export function BallotRow({
  code,
  name,
  title,
  ranks,
  points,
  setTitle,
  setRank,
  setPoints,
  even,
  row,
  includePoints,
}: BallotRowProps) {
  return (
    <tr className={`ballotrows ${even ? "even" : "odd"}`} role="row">
      <td className="leftalign semibold">{code}</td>

      <td className="padleftmore">{name}</td>

      <td className="centeralign">
        <input
          type="text"
          tabIndex={3 * row + 1}
          name="12863154"
          size={30}
          placeholder="Enter title or extemp question"
          value={title}
          onChange={setTitle}
        />
      </td>

      <td className="centeralign">
        <input
          tabIndex={3 * row + 2}
          type="number"
          step="1"
          size={5}
          name="12863154_ranks"
          max="3"
          value={ranks}
          onChange={setRank}
        />
      </td>

      {includePoints && (
        <td className="centeralign">
          <input
            className="2108733"
            type="number"
            step="1"
            name="12863154_points"
            id="12863154_points"
            size={5}
            min={1}
            max={100}
            value={points}
            onChange={setPoints}
            tabIndex={3 * row + 3}
          />
        </td>
      )}
    </tr>
  );
}
