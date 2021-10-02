import React from "react";
import Content from "./Content";
import SortableTable from "./SortableTable";
import { FakeLink } from "./App";

export function DefaultMenu() {
  return (
    <>
      <div className="sidenote">
        <h4>Tournaments</h4>

        <FakeLink
          className="blue full"
          href="/user/tourn/select.mhtml?tourn_id=10669"
        >
          <span className="fivesixth">Sample Tournament</span>

          <span className="sixth mono smaller rightalign">NY/US</span>
        </FakeLink>

        <FakeLink
          className="martop-half blue full"
          href="/user/tourn/all.mhtml"
        >
          See Past Tournaments
        </FakeLink>
      </div>

      <div className="sidenote">
        <h4>Judging</h4>

        <FakeLink className="yellow full" href="/user/judge/panels.mhtml">
          Current Ballots &amp; Panels
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/index.mhtml">
          Upcoming
        </FakeLink>

        <FakeLink
          className="blue half"
          href="/user/judge/history.mhtml?person_id=5820"
        >
          History
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/conflicts.mhtml">
          Conflicts
        </FakeLink>

        <FakeLink className="blue half" href="/user/judge/paradigm.mhtml">
          Paradigm
        </FakeLink>

        <FakeLink
          className="blue full"
          href="/user/judge/hire.mhtml?person_id=5820"
        >
          Offer Hired Judging Rounds
        </FakeLink>
      </div>

      <div className="sidenote">
        <h4>Your Account</h4>

        <FakeLink className="yellow full" href="/user/unfollow.mhtml">
          Edit Live Updates/Parent Memos
        </FakeLink>

        <FakeLink className="yellow full" href="/user/chapter/create.mhtml">
          Create a new school/team
        </FakeLink>

        <FakeLink className="yellow full" href="/user/tourn/request.mhtml">
          Request a new tournament
        </FakeLink>

        <FakeLink className="yellow full" href="/user/judge/search.mhtml">
          Link your person to a judge
        </FakeLink>

        <FakeLink className="yellow full" href="/user/student/search.mhtml">
          Link your person to a student
        </FakeLink>
      </div>
    </>
  );
}

export default class Ballot extends React.Component {
  render() {
    const rounds = [
      {
        name: "OBT Round 1",
        time: "9:00 AM EST",
        room: "12",
        entries: this.props.entries,
      },
    ];
    return (
      <Content
        menu={<DefaultMenu />}
        main={
          <>
            <p>
              <strong>
                NOTE: This page is provided as an example of the Tabroom Online
                Ballot experience. No information entered on this page will be
                saved. If you refresh the page, everything will reset.
              </strong>
            </p>
            <p>
              <strong>
                Tabroom is a constantly evolving piece of software. There may be
                minor differences between this example and the actual Tabroom
                interface.
              </strong>
            </p>
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
                  label: "Round",
                },
                {
                  label: " Room",
                },
                {
                  label: "Starts",
                },
                {
                  label: "Entries",
                },
                {
                  label: "",
                },
              ]}
              defaultSort="name"
              entries={rounds}
              rowComponent={({ entry }) => (
                <tr role="row" className="odd" key={entry.name}>
                  <td className="">
                    <span className="hidden">1-1</span>

                    <FakeLink
                      className="white padless full"
                      href="/index/tourn/postings/round.mhtml?tourn_id=11542&amp;round_id=373544"
                    >
                      {entry.name}
                    </FakeLink>
                  </td>

                  <td className="">
                    <form
                      id="privateTest"
                      action="https://campus.speechanddebate.org"
                      method="post"
                      target="_blank"
                    >
                      <input
                        name="json"
                        type="hidden"
                        value="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzb3VyY2UiOiJ0YWJyb29tIiwicm9vbU5hbWUiOiJUZXN0IENvbXBldGl0aW9uIFJvb20iLCJyb29tSW5zdHJ1Y3Rpb25zIjoiVGhpcyBpcyBhIHRlc3Qgb2YgYW4gTlNEQSBDYW1wdXMgQ29tcGV0aXRpb24gUm9vbSAtIHRoaXMgcm9vbSBpcyBOT1QgcHJpdmF0ZS4iLCJkaXNwbGF5TmFtZSI6IlRlc3QiLCJyb2xlIjoic3R1ZGVudCIsInV1aWQiOiJOU0RBQ2FtcHVzQ29tcGV0aXRpb25UZXN0Iiwic2VydmVyIjoicHJpdmF0ZSIsInN1cHBvcnRFbWFpbCI6ImluZm9Ac3BlZWNoYW5kZGViYXRlLm9yZyIsImlhdCI6MTYwMzQwODcwMywiZXhwIjoxNjAzNDUxOTAzfQ.OxN4jFmRw89dSjf4rxOc1ShVc8FgeVzJbKaOsyCH7UY"
                      />
                      <button
                        type="submit"
                        className="invert fa fa-video-camera fa-sm buttonwhite bluetext marno"
                      />
                    </form>
                  </td>

                  <td className="centeralign">{entry.time}</td>

                  <td className="leftalign">
                    {entry.entries.map((ent, i) => (
                      <span key={ent.code} className="eighth leftalign">
                        {i + 1}. {ent.code}
                      </span>
                    ))}
                  </td>

                  <td className="centeralign padless">
                    <button
                      className="greentext buttonwhite invert"
                      onClick={this.props.start}
                    >
                      START ROUND
                    </button>
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
