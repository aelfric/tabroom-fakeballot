import Content from "./Content";
import { FakeLink } from "./FakeLink";
import { SpeechBallot } from "./speech/SpeechBallot";
import { CongressBallot } from "./congress/CongressBallot";
import { DebateBallot } from "./debate/DebateBallot";
import { SPEECH_ENTRIES } from "./speech/FakeSpeechBallot";
import { TabNav } from "./TabNav";
import ConfirmedBallot from "./speech/ConfirmedBallot";

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

        <FakeLink className="blue half">Judge Certifications</FakeLink>
        <FakeLink
          className="blue half"
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

export default function CurrentBallots() {
  const rounds = [
    {
      name: "OBT Round 1",
      time: "9:00 AM EST",
      room: "12",
      entries: SPEECH_ENTRIES,
    },
    {
      name: "CON Session 1",
      time: "9:00 AM EST",
      room: "405",
      entries: [],
    },
    {
      name: "PF Round 1",
      time: "9:00 AM EST",
      room: "109",
      entries: [],
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
          <TabNav
            tabs={[
              {
                name: "Current ballots",
                children: (
                  <div className="screens darkscreen current_ballots padleft padright marno">
                    <span className="pagehalf">
                      <h5>Current Assignments</h5>
                      <SpeechBallot round={rounds[0]} />
                      <CongressBallot round={rounds[1]} />
                      <DebateBallot round={rounds[2]} />
                    </span>
                    <span className="padleft pagehalf">
                      <h6 className="semibold blueborderbottom padbottom martopmore">
                        Tournament Live Docs
                      </h6>
                      <div className="padvertless wrap odd">
                        <div className="flexrow padvertless italic padleft">
                          Example Tournament
                        </div>
                        <div className="flexrow full">
                          <span className="eighth semibold padvertless padleft">
                            IE
                          </span>
                          <a
                            href="https://www.example.com"
                            target="_blank"
                            className="plain white bluetext link-underline seveneighths"
                            rel="noreferrer"
                          >
                            <div className="nospace flexrow">
                              <span className="fivesixths padleft">
                                Live Doc
                              </span>

                              <span className="sixth centeralign">
                                <span className="fa fa-sm fa-file buttonwhite bluetext"></span>
                              </span>
                            </div>
                          </a>
                        </div>
                      </div>
                    </span>
                  </div>
                ),
              },
              {
                name: "Past scores and feedback",
                children: (
                  <div className="screens darkscreen past_scores_and_feedback padtop">
                    <div className="full martop">
                      <span className="quarter nospace">
                        <h5 className="nospace">Past Ballots</h5>
                      </span>
                      <span className="threequarters true rightalign semibold italic graytext nospace">
                        You may edit comments until the tournament ends. <br />
                        You cannot change scores once confirmed; contact
                        tournament officials to fix errors
                      </span>
                    </div>
                    <ConfirmedBallot />
                  </div>
                ),
              },
            ]}
          />
        </>
      }
    />
  );
}
