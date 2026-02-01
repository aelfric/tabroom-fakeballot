import { useContext } from "react";
import ConfirmSubmit from "./ConfirmBallot";
import Content from "../Content";
import { BallotStartedForm } from "./BallotStarted";

import { AppContext } from "../app-context";
import { useNavigate } from "@tanstack/react-router";
import { BallotStartedMenu } from "./BallotStartedMenu";

export const SPEECH_ENTRIES = [
  {
    code: "2661",
    name: "Silvia Mcbee",
    order: "1st",
  },
  {
    code: "2940",
    name: "Carlos Fey",
    order: "2nd",
  },
  {
    code: "2858",
    name: " Dulcie Torrance",
    order: "3rd",
  },
  {
    code: "2720",
    name: "Fletcher Pietz",
    order: "4th",
  },
  {
    code: "2395",
    name: "Joye Hinkley",
    order: "5th",
  },
  {
    code: "2603",
    name: "Kristopher Kinzer",
    order: "6th",
  },
];

export default function FakeSpeechBallot() {
  const { speechRound } = useContext(AppContext);
  const navigate = useNavigate();
  const { entries, setEntries, rfd, setRfd, ballotState, setBallotState } =
    speechRound!; // TODO
  if (ballotState === "entered") {
    return (
      <ConfirmSubmit
        rfd={rfd}
        entries={entries}
        onSubmit={async () => {
          setBallotState("confirmed");
          await navigate({ to: "/" });
        }}
        unConfirm={() => setBallotState("started")}
      />
    );
  } else {
    return (
      <Content
        main={
          <>
            <BallotStartedForm
              entries={entries}
              setEntries={setEntries}
              setRFD={setRfd}
              rfd={rfd}
              onSubmit={() => {
                setBallotState("entered");
              }}
            />
          </>
        }
        menu={<BallotStartedMenu />}
      />
    );
  }
}
