import React from "react";

// import tinymce from "tinymce/tinymce";
 
// import alertify from "alertifyjs";
import { Editor } from "@tinymce/tinymce-react";
import Menus from "./Menus";
import { dynamicSort } from "./ConfirmBallot";
import Timer from './Timer';
// Import TinyMCE
import tinymce from 'tinymce/tinymce';

// A theme is also required
import 'tinymce/themes/modern/theme';
import Content from "./Content";


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
  statusbar: false,
  theme: "modern",
  theme_advanced_toolbar_location: "top",
  menubar: false,
  browser_spellcheck: true
};

function CommentBox({ id, setComments, currentComments, code, name }) {
  return (
    <div id={`box_${id}`} className="commentary">
    {id === "rfd" ? <p className="semibold greentext centeralign full">
                These comments go to all participants in the round.
              </p> : 
      <p className="semibold bluetext centeralign full">
        These comments go only to {code} – {name} – &amp; coaches
      </p>}

      <div className="row centeralign odd">
        <Editor
          init={tinyMCEConfig}
          value={currentComments}
          onChange={setComments}
        />
      </div>
    </div>
  );
}

function BallotRow({ code, name, title, ranks, points, setTitle, setRank,setPoints, even }) {
  return (
    <tr className={`ballotrows ${even ? "even" : "odd"}`} role="row">
      <td className="leftalign semibold">{code}</td>

      <td className="padleftmore">{name}</td>

      <td className="centeralign">
        <input
          type="text"
          tabIndex="1"
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
          tabIndex="2"
          type="number"
          step="1"
          size="5"
          name="12863154_ranks"
          max="3"
          value={ranks}
          onChange={setRank}
        />
      </td>

      <td className="centeralign">
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
          tabIndex="3"
        />
      </td>
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

export default class FakeBallot extends React.Component {
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

  checkErrors = (evt) => {
    const counts = [];
    const errors = []
    for(var i = 0; i < this.state.entries.length; i++) {
        if(this.state.entries[i].ranks===undefined){
          errors.push(`You ommirtted the rank for ${this.state.entries[i].code} - ${this.state.entries[i].name}.  All speakers must be ranked`)
        } else {
          if(counts[this.state.entries[i].ranks] === undefined) {
              counts[this.state.entries[i].ranks] = 1;
          } else {
              errors.push(`You have repeated the rank ${this.state.entries[i].ranks}.  All ranks must be unique`)
              break;
          }
        }
    }

    evt.preventDefault();
    this.setState({
      errors: errors
    });
  

    return errors.length === 0;
  };

  handleSubmit = (evt) => {
    if(this.checkErrors(evt)){
      this.props.onSubmit(this.state.entries);
    }
  }

  doneSwitch(which) {
    this.setState({ currentStudent: which });
  }
  render() {
    const sortArrows = (style, prop)=>{
      const direction = this.state.sort === prop ? "UP" : this.state.sort === "-" + prop ? "DOWN" : undefined;

      let url;
      switch(direction){
        case "UP":
        url =  "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjI8Bya2wnINUMopZAQA7)"
        break;
        case "DOWN":
        url = "url(data:image/gif;base64,R0lGODlhFQAEAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAQAAAINjB+gC+jP2ptn0WskLQA7)"
        break;
        default:
          url = "url(data:image/gif;base64,R0lGODlhFQAJAIAAACMtMP///yH5BAEAAAEALAAAAAAVAAkAAAIXjI+AywnaYnhUMoqt3gZXPmVg94yJVQAAOw==)"
      }
      return {...style, backgroundImage: url};
    }
    return (
      <Content main={
      <>
          <div>
            <span className="twothirds nospace">
              <h4>OBT Round 1 Ballot for Riccobono</h4>
            </span>

            <span className="third rightalign right">
              <h5 className="normalweight bluetext">Room: 12</h5>
            </span>
          </div>

          {this.state.errors.length > 0 && <Error errors={this.state.errors} />}

          <form action="ballot_save.mhtml" method="post">
            <input type="hidden" name="panel_id" value="3209946" />

            <input type="hidden" name="judge_id" value="961185" />

            <div className="padvert marbottommore marleftmore">
              <span className="half leftalign">
                <span className="semibold redtext inline marright">
                  Points:
                </span>
                Range: 75-100 *. Whole points only. No ties. Ranks and points
                must agree.
              </span>
            </div>

            <table
              id="sortable"
              className="tablesorter tablesorter-default tablesorterb5b9d657ed08a hasStickyHeaders"
              role="grid"
            >
              <thead>
                <tr
                  className="yellowrow smallish centeralign tablesorter-headerRow"
                  role="row"
                >
                  <th
                    data-column="0"
                    className="sortable"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Code: No sort applied, activate to apply an ascending sort"
                    onClick={() => this.changeSort("code")}
                    style={sortArrows({},"code")}
                  >
                    <div className="tablesorter-header-inner">Code</div>
                  </th>

                  <th
                    data-column="1"
                    className="sortable"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Name: No sort applied, activate to apply an ascending sort"
                    onClick={() => this.changeSort("name")}
                    style={sortArrows({},"name")}
                  >
                    <div className="tablesorter-header-inner">Name</div>
                  </th>

                  <th
                    data-column="2"
                    className="sortable"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Title/Question: No sort applied, activate to apply an ascending sort"
                    onClick={() => this.changeSort("title")}
                    style={sortArrows({},"title")}
                  >
                    <div className="tablesorter-header-inner">
                      Title/Question
                    </div>
                  </th>

                  <th
                    colSpan="2"
                    data-column="3"
                    className="sortable"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Ranks
                            
    
    
                            
    
                                Points: No sort applied, activate to apply an ascending sort"
                    onClick={() => this.changeSort("ranks")}
                    style={sortArrows({},"ranks")}
                  >
                    <div className="tablesorter-header-inner">
                      <span className="half marno centeralign">Ranks</span>

                      <span className="half marno centeralign">Points</span>
                    </div>
                  </th>
                </tr>
              </thead>

              <tbody id="ballottable" aria-live="polite" aria-relevant="all">
                {this.props.entries
                  .sort(dynamicSort(this.state.sort))
                  .map((entry, i) => (
                    <BallotRow
                      key={entry.code}
                      {...entry}
                      even={i % 2 === 0}
                      setTitle={this.setTitle(i)}
                      setRank={this.setRank(i)}
                      setPoints={this.setPoints(i)}
                      even={i%2===0}
                    />
                  ))}
              </tbody>

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
            </table>
            
            <div className="row smallish redtext semibold centeralign padvertmore even">
              * The full point range is 1 - 100 but you must ask the tab room to
              give points outside of 75 - 100.
            </div>

            <div className="full">
              <span className="third">
                <h4>General Feedback</h4>
              </span>
            </div>

            <ul id="tabnav">
              <li id="header_rfd" className={`${this.state.currentStudent === "rfd" ? "selected" : ""} commentzing`}>
                <a href="#rfd" onClick={() => this.doneSwitch("rfd")}>
                  Reason for Rankings
                </a>
              </li>

              <li id="header_12863156" className={`${this.state.currentStudent === 12863156 ? "selected" : ""} commentzing`}>
                <a href="#header_12863156" onClick={() => this.doneSwitch(12863156)}>1</a>
              </li>

              <li id="header_12863154" className={`${this.state.currentStudent === 12863154 ? "selected" : ""} commentzing`}>
                <a href="header_12863154" onClick={() => this.doneSwitch(12863154)}>2</a>
              </li>

              <li id="header_12863155" className={`${this.state.currentStudent === 12863155 ? "selected" : ""} commentzing`}>
                <a href="header_12863155" onClick={() => this.doneSwitch(12863155)}>3</a>
              </li>
            </ul>

            {this.state.currentStudent === "rfd" && (
              <CommentBox
                id="rfd"
                setComments={(evt)=>this.props.setRFD(evt)}
                currentComments={this.state.rfd}
              />
            )}

            {this.state.currentStudent === 12863156 && (
              <CommentBox
                id="12863156"
                setComments={this.setComments(0)}
                currentComments={this.state.entries[0].comments}
                code={1}
                name={"Malachi Allen"}
              />
            )}
            {this.state.currentStudent === 12863154 && (
              <CommentBox
                id="12863154"
                setComments={this.setComments(1)}
                currentComments={this.state.entries[1].comments}
                code={2}
                name={"Connor Breen"}
              />
            )}
            {this.state.currentStudent === 12863155 && (
              <CommentBox
                id="12863155"
                setComments={this.setComments(2)}
                currentComments={this.state.entries[2].comments}
                code={3}
                name={"Joshua Darden"}
              />
            )}
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
        </>}
        menu={<>
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
              <span className="threequarter" />
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

            <h6 className="bigger centeralign semibold" />
            <Timer />
            <h4>Other ballots</h4>
          </div>
        </>} />
    );
  }
}
