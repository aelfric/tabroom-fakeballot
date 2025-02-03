import { Link } from "@tanstack/react-router";
import Content from "../Content";

export function BallotConfirmed(
  props: Readonly<{
    entries: TeamDebateEntry[];
    winningEntry?: number;
    rfd?: string;
  }>,
) {
  const sides = ["Aff", "Neg"];
  return (
    <Content
      main={
        <div>
          <div className="full padvert marbottom nospace">
            <span className="true twofifths nospace">
              <h4 className="nospace">Results Confirmed</h4>
            </span>

            <span
              className="fifth nospace rightalign bluetext semibold"
              title="the Nathan Fleming Experience"
            >
              <span className="halfspacer"></span>
            </span>

            <span
              className="fifth nospace leftalign bluetext semibold"
              title="the Nathan Fleming Experience"
            ></span>
            <span className="fifth rightalign nospace padbottom">
              <Link
                className="buttonwhite bluetext fa fa-lg fa-home"
                to={"/"}
                title="Return home"
              ></Link>
            </span>
          </div>

          <p
            title="You're clearly our favorite. Keep on being awesome!"
            className="bigger bluetext centeralign padvertmore odd"
          >
            You were the <span className="redtext inline">1st</span> judge out
            of <span className="redtext inline">1</span> to submit your ballot
            for Round 1
          </p>

          <span className="padvertmore"></span>

          <div className="martopmuchmore">
            <span className="third nospace">
              <h5 className="nospace">Decision Complete</h5>
            </span>

            <span className="twothirds rightalign bigger semibold bluetext nospace">
              {props.entries[props.winningEntry!].code} wins on the{" "}
              {sides[props.winningEntry!]}
            </span>
          </div>

          <div className="odd ltbordertop martopmore">
            <span className="padvertmore sixth"></span>

            <span className="padvertmore threetenths biggish">
              <span className="halfspacer"></span> Frank Riccobono votes for
            </span>

            <span className="sixth biggish redtext marno">
              <span className="quarterspacer"></span>{" "}
              {sides[props.winningEntry!]}
            </span>

            <span className="threetenths biggish">
              {props.entries[props.winningEntry!].code}
            </span>
          </div>

          <h5 className="martopmuchmore">Your RFD</h5>

          <div
            className="padleftmuchmore"
            dangerouslySetInnerHTML={{ __html: props.rfd ?? "" }}
          ></div>
        </div>
      }
      menu={null}
    />
  );
}
