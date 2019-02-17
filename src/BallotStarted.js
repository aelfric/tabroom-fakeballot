import React from "react";



// import tinymce from "tinymce/tinymce";

// import alertify from "alertifyjs";
import { Editor } from "@tinymce/tinymce-react";
import Menus from "./Menus";
import { dynamicSort } from "./SortableTable";
import Timer from "./Timer";
// Import TinyMCE
import tinymce from "tinymce/tinymce";

// A theme is also required
import "tinymce/themes/modern/theme";
import Content from "./Content";
import SortableTable from "./SortableTable";

const includePoints = false;

const tinyMCEConfig = {
  mode: "textareas",
  external_plugins: {
    // emoticons: "/lib/javascript/tinymce/plugins/emoticons/plugin.min.js",
    // autosave: "/lib/javascript/tinymce/plugins/autosave/plugin.min.js",
    // autolink: "/lib/javascript/tinymce/plugins/autolink/plugin.min.js",
    // link: "/lib/javascript/tinymce/plugins/link/plugin.min.js"
  },
  toolbar: [
    "undo redo | bold italic strikethrough | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat emoticons | link styleselect"
  ],
  height: "235",
  statusbar: false,
  theme: "modern",
  theme_advanced_toolbar_location: "top",
  menubar: false,
  browser_spellcheck: true
};

class CommentPanel extends React.Component {
  state = {
    currentStudent: "rfd"
  };
  doneSwitch(which) {
    this.setState({ currentStudent: which });
  }
  setComments = idx => evt => {
    this.props.setComments(idx);
  };

  render() {
    const entries = this.props.entries;
    return (
      <>
        <div className="full">
          <span className="third">
            <h4>General Feedback</h4>
          </span>
        </div>

        <ul id="tabnav">
          <li
            id="header_rfd"
            className={`${
              this.state.currentStudent === "rfd" ? "selected" : ""
            } commentzing`}
          >
            <a href="#rfd" onClick={() => this.doneSwitch("rfd")}>
              Reason for Rankings
            </a>
          </li>
          {entries.map((entry, idx) => {
            return (
              <li
                id="header_12863156"
                key={entry.code}
                className={`${
                  this.state.currentStudent === idx ? "selected" : ""
                } commentzing`}
              >
                <a href="#header_12863156" onClick={() => this.doneSwitch(idx)}>
                  {entry.code}
                </a>
              </li>
            );
          })}
        </ul>

        {this.state.currentStudent === "rfd" ? (
          <div className="commentary">
            <p className="semibold greentext centeralign full">
              These comments go to all participants in the round.
            </p>
            <CommentBox
              id="rfd"
              setComments={evt => this.props.setRFD(evt)}
              currentComments={this.props.rfd}
            />
          </div>
        ) : (
          <div className="commentary">
            <p className="semibold bluetext centeralign full">
              These comments go only to{" "}
              {entries[this.state.currentStudent].code} –{" "}
              {entries[this.state.currentStudent].name} – &amp; coaches
            </p>
            <CommentBox
              key={entries[this.state.currentStudent].code}
              id={entries[this.state.currentStudent]}
              setComments={this.props.setComments(this.state.currentStudent)}
              currentComments={entries[this.state.currentStudent].comments}
              code={entries[this.state.currentStudent].code}
              name={entries[this.state.currentStudent].name}
            />
          </div>
        )}
      </>
    );
  }
}

export function CommentBox({ id, setComments, currentComments, code, name }) {
  return (
    <div className="row centeralign odd">
      <Editor
        init={tinyMCEConfig}
        value={currentComments}
        onChange={setComments}
      />
    </div>
  );
}

function BallotRow({
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
  includePoints
}) {
  return (
    <tr className={`ballotrows ${even ? "even" : "odd"}`} role="row">
      <td className="leftalign semibold">{code}</td>

      <td className="padleftmore">{name}</td>

      <td className="centeralign">
        <input
          type="text"
          tabIndex={3 * row + 1}
          name="12863154"
          target_id="12863154"
          property_name="title"
          size="30"
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
          size="5"
          name="12863154_ranks"
          max="3"
          value={ranks}
          onChange={setRank}
        />
      </td>

      {includePoints && <td className="centeralign">
        <input
          className="2108733"
          type="number"
          step="1"
          name="12863154_points"
          id="12863154_points"
          size="5"
          min={1}
          max={100}
          value={points}
          onChange={setPoints}
          tabIndex={3 * row + 3}
        />
      </td>}
    </tr>
  );
}

function Error(props) {
  return (
    <div class="borderred centeralign martopmore marbottommore">
      <h6 class="bluetext semibold">Oh, drat. Your ballot had errors.</h6>

      <span class="semibold redtext bigger">
        {props.errors.map((e, i) => (
          <p key={i}>{e}</p>
        ))}
      </span>

      <p class="bigger semibold bluetext">
        Please correct these before continuing.
      </p>
    </div>
  );
}

export default function FakeBallot(props){
    return (
      <Content
        main={
          <BallotStartedForm {...props} />
        }
        menu={
          BallotStartedMenu
        }
      />
    );
}

const BallotStartedMenu = <>
  <div className="sidenote">
    <h6 className="bluetext semibold marbottom">This round</h6>

    <div className="row even">
      <span className="quarter semibold">Round:</span>

      <span className="threequarter">Round 1</span>
    </div>

    <div className="row odd">
      <span className="quarter semibold">Room:</span>
      <span className="threequarter">12</span>
    </div>

    <div className="row even">
      <span className="quarter semibold">Start</span>
      <span className="threequarter"/>
    </div>

    <div className="row nospace odd">
      <span className="quarter semibold">Panel:</span>

      <span className="threequarters nospace">
            <div className="nowrap padless marno">Charles Sloat</div>
          </span>
    </div>

    <a
        href="/index/tourn/postings/round.mhtml?tourn_id=11542&amp;round_id=373544"
        className="blue full martopmore"
    >
      Full Pairing/Schematic
    </a>
  </div>

  <div className="sidenote">
        <span className="third">
          <h4>Timers</h4>
        </span>

    <span className="twothirds explain rightalign">
          If you refresh or navigate away, these timers will reset
        </span>

    <h6 className="bigger centeralign semibold"/>
    <Timer/>
    <h4>Other ballots</h4>
  </div>
</>;

class BallotStartedForm extends React.Component {
  state = {
    entries: this.props.entries,
    errors: [],
    sort: "order",
    currentStudent: "rfd"
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

  setTitle = idx => evt => {
    let entries = this.state.entries;
    entries[idx].title = evt.target.value;
    this.setState({ entries: entries });
  };

  setRank = idx => evt => {
    let entries = this.state.entries;
    entries[idx].ranks = evt.target.value;
    this.setState({ entries: entries });
  };

  setPoints = idx => evt => {
    let entries = this.state.entries;
    entries[idx].points = evt.target.value;
    this.setState({ entries: entries });
  };

  setComments = idx => evt => {
    let entries = this.state.entries;
    entries[idx].comments = evt.target.getContent();
    this.setState({ entries: entries });
  };

  checkErrors = evt => {
    const counts = [];
    const errors = [];
    for (let i = 0; i < this.state.entries.length; i++) {
      const points = this.state.entries[i].points || 0;
      const rank = this.state.entries[i].ranks;
      if (rank === undefined) {
        errors.push(`Rank missing for ${this.state.entries[i].code}`);
      }

      if(includePoints) {
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

    if(includePoints) {
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
      errors: errors
    });

    return errors.length === 0;
  };

  handleSubmit = evt => {
    if (this.checkErrors(evt)) {
      this.props.onSubmit(this.state.entries);
    }
  };


  render() {
    const columns = [
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
        label: includePoints ? ["Ranks", "Points"] : "Ranks",
        property: "ranks",
        ariaLabel: ""
      }

    ];

    return <>
      <div>
        <span className="twothirds nospace">
          <h4>OBT Round 1 Ballot for Riccobono</h4>
        </span>

        <span className="third rightalign right">
          <h5 className="normalweight bluetext">Room: 12</h5>
        </span>
      </div>

      {this.state.errors.length > 0 && (
          <Error errors={this.state.errors}/>
      )}

      <form action="ballot_save.mhtml" method="post">
        <input type="hidden" name="panel_id" value="3209946"/>

        <input type="hidden" name="judge_id" value="961185"/>

        <div className="padvert marbottommore marleftmore">
          <span className="half leftalign">
            <span className="semibold redtext inline marright">
              Points:
            </span>
            Range: 75-100 *. Whole points only. No ties. Ranks and points
            must agree.
          </span>
        </div>
        <SortableTable
            entries={this.state.entries}
            defaultSort="order"
            columns={columns}
            rowComponent={({entry, i}) => (
                <BallotRow
                    includePoints={includePoints}
                    key={entry.code}
                    {...entry}
                    row={i}
                    even={i % 2 === 0}
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

        <div
            className="row smallish redtext semibold centeralign padvertmore even">
          * The full point range is 1 - 100 but you must ask the tab room
          to give points outside of 75 - 100.
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
    </>;
  }
}