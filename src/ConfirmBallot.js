import React from "react";
import $ from "jquery";
import Content from "./Content";
import SortableTable from "./SortableTable";

const includePoints = false;

function EntryRow({ ranks, points, code, name, title, order, even }) {
  return (
    <tr role="row" className={even ? "even" : "odd"}>
      <td className="centeralign">{ranks}</td>

      {includePoints && <td className="centeralign">{points ? points : "ZERO"}</td>}

      <td className="centeralign">{code}</td>

      <td>{name}</td>

      <td>{title}</td>

      <td className="centeralign">{order}</td>
    </tr>
  );
}

export default class ConfirmSubmit extends React.Component {
  state = {
    sort: "ranks"
  };

  render() {
    let columns = [
      {
        label: "Rank",
        property: "ranks",
        ariaLabel: ""
      },
      {
        label: "Points",
        property: "ranks",
        ariaLabel: ""
      },
      {
        label: "Code",
        property: "code",
        ariaLabel: ""
      },
      {
        label: "Name",
        property: "name",
        ariaLabel: ""
      },
      {
        label: "Title/Question",
        property: "title",
        ariaLabel: ""
      },
      {
        label: "Spoke",
        property: "order",
        ariaLabel: ""
      }
    ];
    columns = columns.filter(c => c.label !== "Points");
    return (
      <Content
        main={
          <>
            <h4 className="marbottommore">
              Please confirm your ranking of this round:
            </h4>
            <SortableTable
              columns={columns}
              entries={this.props.entries}
              defaultSort="ranks"
              rowComponent={({ entry, i }) => (
                <EntryRow key={entry.code} {...entry} even={i % 2 === 0} />
              )}
            />

            <hr />

            <h6 className="centeralign martopmuchmore redtext semibold">
              Once you confirm your ballot, you cannot change it online.
            </h6>

            <p className="centeralign martopmuchmore redtext semibold bigger">
              You'll have to contact the tournament staff to make any further
              changes
            </p>

            <p className="centeralign bluetext bigger semibold marbottommore">
              You are able to write more comments/feedback until the end of the
              tournament; you just may not change scores.
            </p>

            <div className="full martopmuchmore">
              <span className="pagehalf centeralign">
                <a
                  className="redtext buttonwhite invert full confirm"
                  onClick={this.props.confirm}
                >
                  NO! RE-ENTER BALLOT
                </a>
              </span>

              <span className="pagehalf centeralign">
                <a className="greentext buttonwhite invert full confirm" onClick={this.props.onSubmit}>
                  YES! CORRECT! CONFIRM IT
                </a>
              </span>
            </div>
          </>
        }
        menu={
          <>
            <div className="sidenote">
              <h4>RFD</h4>

              <div dangerouslySetInnerHTML={{ __html: this.props.rfd }} />
            </div>
          </>
        }
      />
    );
  }
}
