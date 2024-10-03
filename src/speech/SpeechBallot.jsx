import React from "react";

export function SpeechBallot({round, start}) {
    return (
        <div
            className="bluebordertop odd marbottom "
            id="7146353"
            title="Round at 49th University of Pennsylvania Tournament in Speech for Riccobono"
        >
            <div className="full">
                <span className="quarter semibold">Round</span>
                <span className="threequarters nospace">
          <span className="fourfifths true nospace padvertless">
            {round.name}
          </span>
          <span className="fifth rightalign padvertless">
            <a
                className="buttonwhite bluetext fa fa-table fa-sm"
                target="_blank"
                title="Public Round Schematic"
                href="https://www.tabroom.com/index/tourn/postings/round.mhtml?tourn_id=&amp;round_id=1095808"
            ></a>
          </span>
        </span>
            </div>

            <div className="full ltbordertop">
                <span className="quarter semibold padvert">Room</span>

                <span className="threequarters nospace">{round.room}</span>
            </div>

            <div className="full ltbordertop">
                <span className="quarter semibold padvert">Start</span>

                <span className="threequarters nospace">{round.time}</span>
            </div>

            <div className="full ltborderbottom ltbordertop">
                <span className="quarter semibold">Entries</span>

                <span className="threequarters nospace padvertless">
          {round.entries.map((ent, i) => (
              <span
                  className="threetenths marno padno padvertless padvertless smallish"
                  key={ent.code}
              >
              <span className="fifth semibold nospace">{i + 1}</span>
              <span className="fourfifths nospace">{ent.code}</span>
            </span>
          ))}
        </span>
            </div>

            <div className="full ltbordertop">
                <div className="full padvertless nospace explain semibold centeralign graytext padbottom">
                    Press the Button!
                </div>
                <span className="fifth centeralign"></span>

                <span className="fourfifths rightalign">
          <button className="greentext invert buttonwhite" onClick={start}>
            ON MY WAY!
          </button>

          <span className="quarterspacer"></span>
        </span>
            </div>
        </div>
    );
}