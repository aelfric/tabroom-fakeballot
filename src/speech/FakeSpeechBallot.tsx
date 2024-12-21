import React, { useState } from "react";
import ConfirmSubmit from "./ConfirmBallot";
import Content from "../Content";
import { BallotStartedMenu } from "./BallotStartedMenu";
import { BallotStartedForm } from "./BallotStarted";
import {SpeechEntry} from "./types";

export const SPEECH_ENTRIES: SpeechEntry[] = [
  {
    code: "2661",
    name: "Silvia Mcbee",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "1st",
  },
  {
    code: "2940",
    name: "Carlos Fey",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "2nd",
  },
  {
    code: "2858",
    name: " Dulcie Torrance",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "3rd",
  },
  {
    code: "2720",
    name: "Fletcher Pietz",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "4th",
  },
  {
    code: "2395",
    name: "Joye Hinkley",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "5th",
  },
  {
    code: "2603",
    name: "Kristopher Kinzer",
    title: undefined,
    ranks: undefined,
    points: undefined,
    order: "6th",
  },
];

export default function FakeSpeechBallot() {
  const [entries, setEntries] = useState(SPEECH_ENTRIES);
  const [confirming, setConfirming] = useState(false);
  if (confirming) {
    return (
      <ConfirmSubmit
        entries={entries}
        onSubmit={() => undefined}
        confirm={() => setConfirming(false)}
      />
    );
  } else {
    return (
      <Content
        main={
          <BallotStartedForm
            entries={entries}
            setRFD={() => undefined}
            rfd={""}
            onSubmit={(es) => {
              setEntries(es);
              setConfirming(true);
            }}
          />
        }
        menu={<BallotStartedMenu />}
      />
    );
  }
}
