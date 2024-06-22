import React from "react";
import { dynamicSort, SortableTable } from "./SortableTable";

import Content from "./Content";
import { CommentPanel } from "./CommentPanel";
import { BallotRow } from "./BallotRow";
import { TabroomError } from "./TabroomError";
import { BallotStartedMenu } from "./BallotStartedMenu";

const includePoints = true;
export default function FakeBallot(props) {
  return (
    <Content
      main={<BallotStartedForm {...props} />}
      menu={<BallotStartedMenu />}
    />
  );
}

class BallotStartedForm extends React.Component {
  state = {
    entries: this.props.entries,
    errors: [],
    sort: "order",
    currentStudent: "rfd",
  };

  changeSort = (value) => {
    if (value === this.state.sort) {
      if (value[0] !== "-") {
        value = "-" + value;
      } else {
        value = value.substr(1);
      }
    }
    this.setState({ sort: value });
  };

  setTitle = (idx) => (evt) => {
    let entries = this.state.entries;
    entries[idx].title = evt.target.value;
    this.setState({ entries: entries });
  };

  setRank = (idx) => (evt) => {
    let entries = this.state.entries;
    entries[idx].ranks = evt.target.value;
    this.setState({ entries: entries });
  };

  setPoints = (idx) => (evt) => {
    let entries = this.state.entries;
    entries[idx].points = evt.target.value;
    this.setState({ entries: entries });
  };

  setComments = (idx) => (evt) => {
    let entries = this.state.entries;
    entries[idx].comments = evt.target.getContent();
    this.setState({ entries: entries });
  };

  checkErrors = (evt) => {
    const counts = [];
    const errors = [];
    for (const element of this.state.entries) {
      const points = element.points || 0;
      const rank = element.ranks;
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
            `Tied points forbidden: you have two speakers with points ${points}`
          );
        }
      }
      if (rank !== undefined) {
        if (counts[rank] === undefined) {
          counts[rank] = 1;
        } else {
          errors.push(
            `You have repeated the rank ${rank}.  All ranks must be unique`
          );
        }
      }
    }

    if (includePoints) {
      const lowPointErrors = [];
      const sortedEntries = this.state.entries.sort(dynamicSort("ranks"));
      for (let i = 0; i < sortedEntries.length - 1; i++) {
        if (sortedEntries[i + 1].points > sortedEntries[i].points) {
          lowPointErrors.push(sortedEntries[i].ranks);
        }
      }

      if (lowPointErrors.length > 0) {
        errors.push(
          `Entry ranked ${lowPointErrors.join(
            ", "
          )} has worse points than a lower ranked entry`
        );
        errors.push("Rank order must match the order of points given.");
      }
    }
    evt.preventDefault();
    this.setState({
      errors: errors,
    });

    return errors.length === 0;
  };

  handleSubmit = (evt) => {
    if (this.checkErrors(evt)) {
      this.props.onSubmit(this.state.entries);
    }
  };

  render() {
    const columns = [
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

        {this.state.errors.length > 0 && (
          <TabroomError errors={this.state.errors} />
        )}

        <form action="ballot_save.mhtml" method="post">
          <input type="hidden" name="panel_id" value="3209946" />

          <input type="hidden" name="judge_id" value="961185" />

          <div className="padvert marbottommore marleftmore">
            <span className="half leftalign">
              <span className="semibold redtext inline marright">Points:</span>{" "}
              Range: 75-100 *. Whole points only. No ties. Ranks and points must
              agree.
            </span>
          </div>
          <SortableTable
            entries={this.state.entries}
            defaultSort="order"
            columns={columns}
            rowComponent={({ entry, i }) => (
              <BallotRow
                includePoints={includePoints}
                key={entry.code}
                {...entry}
                row={i}
                setTitle={this.setTitle(i)}
                setRank={this.setRank(i)}
                setPoints={this.setPoints(i)}
                even={i % 2 === 0}
              />
            )}
          >
            <tbody aria-live="polite" aria-relevant="all">
              <tr className="liblrow odd" role="row">
                <td colSpan="10" className="rightalign">
                  <input
                    type="button"
                    value=" Submit Ballot "
                    onClick={this.handleSubmit}
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
            entries={this.state.entries}
            setComments={this.setComments}
            setRFD={this.props.setRFD}
            rfd={this.props.rfd}
          />
          <div className="libl full rightalign">
            <div className="half centeralign">
              <input
                type="button"
                value="Save Comments Only"
                name="skipme"
                className="med"
                onClick={this.checkErrors}
              />
            </div>

            <div className="half">
              <input
                onClick={this.handleSubmit}
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
}
