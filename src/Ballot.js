import React from "react";
import Content from "./Content";
import SortableTable from "./SortableTable";

export default class Ballot extends React.Component {
  render() {
    const rounds = [
      {
        name: "OBT Round 1",
        time: "9:00 AM EST",
        room: "12",
        entries: this.props.entries
      }
    ];
    return (
      <Content
        menu={
          <>
            <div className="sidenote">
              <h4>Tournaments</h4>

              <a
                className="blue full"
                href="/user/tourn/select.mhtml?tourn_id=10669"
              >
                <span className="fivesixth">Sample Tournament</span>

                <span className="sixth mono smaller rightalign">NY/US</span>
              </a>

              <a className="martop-half blue full" href="/user/tourn/all.mhtml">
                See Past Tournaments
              </a>
            </div>

            <div className="sidenote">
              <h4>Judging</h4>

              <a className="yellow full" href="/user/judge/panels.mhtml">
                Current Ballots &amp; Panels
              </a>

              <a className="blue half" href="/user/judge/index.mhtml">
                Upcoming
              </a>

              <a
                className="blue half"
                href="/user/judge/history.mhtml?person_id=5820"
              >
                History
              </a>

              <a className="blue half" href="/user/judge/conflicts.mhtml">
                Conflicts
              </a>

              <a className="blue half" href="/user/judge/paradigm.mhtml">
                Paradigm
              </a>

              <a
                className="blue full"
                href="/user/judge/hire.mhtml?person_id=5820"
              >
                Offer Hired Judging Rounds
              </a>
            </div>

            <div className="sidenote">
              <h4>Your Account</h4>

              <a className="yellow full" href="/user/unfollow.mhtml">
                Edit Live Updates/Parent Memos
              </a>

              <a className="yellow full" href="/user/chapter/create.mhtml">
                Create a new school/team
              </a>

              <a className="yellow full" href="/user/tourn/request.mhtml">
                Request a new tournament
              </a>

              <a className="yellow full" href="/user/judge/search.mhtml">
                Link your person to a judge
              </a>

              <a className="yellow full" href="/user/student/search.mhtml">
                Link your person to a student
              </a>
            </div>
          </>
        }
        main={
          <>
            <h3>Current Ballots</h3>
            <span className="half">
              <h4>Pending Rounds</h4>
            </span>

            <span
              id="pendingrounds_buttonarea"
              className="half rightalign martop"
            >
              <button
                id="print_pendingrounds"
                tabIndex="-1"
                className="notfirst printbutton buttonwhite redtext fa fa-sm fa-print marleft"
              />
              <button
                id="output_pendingrounds"
                tabIndex="-1"
                className="notfirst printbutton buttonwhite greentext fa fa-sm fa-file-excel-o marleft"
              />
            </span>

            <SortableTable
              columns={[
                {
                  label: "Round"
                },
                {
                  label: " Room"
                },
                {
                  label: "Starts"
                },
                {
                  label: "Entries"
                },
                {
                  label: ""
                }
              ]}
              defaultSort="name"
              entries={rounds}
              rowComponent={({ entry, i }) => (
                <tr role="row" className="odd">
                  <td className="">
                    <span className="hidden">1-1</span>

                    <a
                      className="white padless full"
                      href="/index/tourn/postings/round.mhtml?tourn_id=11542&amp;round_id=373544"
                    >
                      {entry.name}
                    </a>
                  </td>

                  <td className="">{entry.room}</td>

                  <td className="centeralign">{entry.time}</td>

                  <td className="centeralign">
                    {entry.entries.map((ent, i) => (
                      <span key={ent.code} className="threequarter nowrap">
                        {i + 1}. {ent.code}
                      </span>
                    ))}
                  </td>

                  <td className="centeralign padless">
                    <a
                      className="greentext buttonwhite invert"
                      onClick={this.props.start}
                      href="#"
                    >
                      START ROUND
                    </a>
                  </td>
                </tr>
              )}
            />
          </>
        }
      />
    );
  }
}
