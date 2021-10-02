import React from "react";
import sparky from './images/sparky.png'
import logo from './images/nsda-header-logo.png';
import search from './images/search.png';
import {FakeLink} from "./App";

export function Menus() {
  return (
    <span id="menus">
      <ul id="nav">
        <li className="top">
          <FakeLink className="centeralign top_link" href="/">
            <span className="down">Home</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink className="centeralign top_link" href="/index/circuits.mhtml">
            <span className="down">Circuits</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink className="centeralign top_link" href="/index/results">
            <span className="down">Results</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink className="centeralign top_link" href="/index/paradigm.mhtml">
            <span className="down">Paradigms</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink
            className="centeralign top_link"
            href="https://support.tabroom.com"
          >
            <span className="down">Help</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink className="centeralign top_link" href="/index/about.mhtml">
            <span className="down">About</span>
          </FakeLink>
        </li>
      </ul>

      <span />
    </span>
  );
}

export default function Header() {
  return (
    <div id="header">
      <span id="logo">
        <span className="headline">
          <span id="sparky">
            <img
              src={sparky}
              alt="National Speech and Debate Association"
            />
          </span>

          <span id="sparked">
            <FakeLink tabIndex="-1" href="/index/index.mhtml">
              Tabroom.com
            </FakeLink>
          </span>
        </span>

        <span className="nsda">
          <span className="blurb">a project of the</span>

          <span className="nsdalogo">
            <FakeLink tabIndex="-1" href="https://www.speechanddebate.org">
              <img
                src={logo}
                alt="National Speech and Debate Association"
              />
            </FakeLink>
          </span>
        </span>
      </span>

      <span id="toprow">
        <FakeLink tabIndex="-1" href="/user/login/logout.mhtml">
          Logout
        </FakeLink>

        <FakeLink tabIndex="-1" href="/user/login/profile.mhtml">
          Profile
        </FakeLink>

        <FakeLink tabIndex="-1" href="/user/home.mhtml">
          email@example.com
        </FakeLink>

        <span id="search" title="Search for tournaments">
          <form>
            <input
              type="text"
              maxLength="128"
              size="15"
              name="search"
              placeholder="SEARCH"
              autoComplete="off"
              autoCorrect="off"
              autoCapitalize="off"
              spellCheck="false"
              id="searchtext"
              className="notfirst"
              tabIndex="-1"
            />

            <input
              type="hidden"
              name="caller"
              value="/user/judge/ballot.mhtml?panel_id=3209946&amp;judge_id=961185"
            />

            <button type="submit" className="search notfirst">
              <img src={search} alt="Search" />
            </button>
          </form>
        </span>

        <span id="helpbutton" title="Tabroom Help">
          <FakeLink
            tabIndex="-1"
            href="https://docs.tabroom.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <i className="fa fa-question-circle" />
          </FakeLink>
        </span>
      </span>
      <Menus />
    </div>
  );
}
