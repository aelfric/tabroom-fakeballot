import React from "react";
import $ from "jquery";
import Content from "./Content";

function EntryRow({ ranks, points, code, name, title, order, even }) {
  return (
    <tr role="row" className={even ? "even" : "odd"}>
      <td className="centeralign">{ranks}</td>

      <td className="centeralign">{points ? points : "ZERO"}</td>

      <td className="centeralign">{code}</td>

      <td>{name}</td>

      <td>{title}</td>

      <td className="centeralign">{order}</td>
    </tr>
  );
}

export function dynamicSort(property) {
  var sortOrder = 1;
  if (property[0] === "-") {
    sortOrder = -1;
    property = property.substr(1);
  }
  return function(a, b) {
    var result =
      a[property] < b[property] ? -1 : a[property] > b[property] ? 1 : 0;
    return result * sortOrder;
  };
}

export default class ConfirmSubmit extends React.Component {
  state = {
    sort: "ranks"
  };

  changeSort = value => {
    if (value === this.state.sort) {
      if (value[0] !== "-") {
        value = "-" + value;
      } else {
        value = value.substr(1);
      }
    }
    this.setState({ sort: value });
  };

  componentDidMount() {
    $(document).ready(function() {
      $("#final_buttonarea").addClass("martop");
    });
  }
  render() {
    return (
      <Content
        main={
          <>
            <h4 className="marbottommore">
              Please confirm your ranking of this round:
            </h4>
            <table
              id="final"
              className="tablesorter tablesorter-default tablesorter95ca6926f0dcf hasStickyHeaders"
              role="grid"
            >
              <thead>
                <tr
                  className="smallish yellowrow nosort centeralign tablesorter-headerRow"
                  role="row"
                >
                  <th
                    data-column="0"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Rank: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("ranks")}
                  >
                    <div className="tablesorter-header-inner">Rank</div>
                  </th>

                  <th
                    data-column="1"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Points: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("ranks")}
                  >
                    <div className="tablesorter-header-inner">Points</div>
                  </th>

                  <th
                    data-column="2"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Code: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("code")}
                  >
                    <div className="tablesorter-header-inner">Code</div>
                  </th>

                  <th
                    data-column="3"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Name: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("name")}
                  >
                    <div className="tablesorter-header-inner">Name</div>
                  </th>
                  <th
                    data-column="4"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Title/Question: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("title")}
                  >
                    <div className="tablesorter-header-inner">
                      Title/Question
                    </div>
                  </th>
                  <th
                    data-column="5"
                    className="tablesorter-header sortable tablesorter-headerUnSorted"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="final"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Spoke: No sort applied, activate to apply an ascending sort"
                    style={{ userSelect: "none" }}
                    onClick={() => this.changeSort("order")}
                  >
                    <div className="tablesorter-header-inner">Spoke</div>
                  </th>
                </tr>
              </thead>

              <tbody aria-live="polite" aria-relevant="all">
                {this.props.entries
                  .sort(dynamicSort(this.state.sort))
                  .map((entry, i) => (
                    <EntryRow key={entry.code} {...entry} even={i % 2 === 0} />
                  ))}
              </tbody>
            </table>

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
                <a className="greentext buttonwhite invert full confirm">
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
