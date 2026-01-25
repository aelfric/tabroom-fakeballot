import sparky from "./images/sparky.png";
import logo from "./images/nsda-header-logo.png";
import search from "./images/search.png";
import { FakeLink } from "./FakeLink";
import { Link } from "@tanstack/react-router";

export function Menus() {
  return (
    <div className={"flexrow menuright"}>
      <ul id="nav">
        <li className="top">
          <FakeLink className="centeralign top_link" href="/">
            <span className="down">Home</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink
            className="centeralign top_link"
            href="/index/circuits.mhtml"
          >
            <span className="down">Circuits</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink className="centeralign top_link" href="/index/results">
            <span className="down">Results</span>
          </FakeLink>
        </li>

        <li className="top">
          <FakeLink
            className="centeralign top_link"
            href="/index/paradigm.mhtml"
          >
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
    </div>
  );
}

export default function Header() {
  return (
    <div id="header">
      <div id="headerarch">
        <span id="logo">
          <span className="headline">
            <span id="sparky">
              <img src={sparky} alt="National Speech and Debate Association" />
            </span>

            <span id="sparked">
              <Link tabIndex={-1} to="/">
                Tabroom.com
              </Link>
            </span>
          </span>

          <span className="nsda">
            <span className="blurb">a project of the</span>

            <span className="nsdalogo">
              <a tabIndex={-1} href="https://www.speechanddebate.org">
                <img src={logo} alt="National Speech and Debate Association" />
              </a>
            </span>
          </span>
        </span>

        <span id="toprow" className={"grow"}>
          <FakeLink
            tabIndex={-1}
            className="fa fa-2x fa-sign-out loginicons"
            id="tabroom_logout"
            title="Log Out of Tabroom"
          ></FakeLink>
          <FakeLink
            tabIndex={-1}
            className="fa fa-2x fa-user loginicons"
            id="tabroom_homescreen"
            title="Tabroom Account Profile"
          ></FakeLink>
          <FakeLink
            tabIndex={-1}
            className="fa fa-2x fa-home loginicons"
            id="tabroom_profile"
            title="Tabroom Home Screen"
          ></FakeLink>
          <FakeLink
            tabIndex={-1}
            className="fa fa-sm fa-envelope borderright orangetext"
            id="tabroom_inbox"
            title="Tabroom Inbox"
          >
            <span id={"inbox_count"}>1</span>
          </FakeLink>

          <FakeLink
            tabIndex={-1}
            href="/user/home.mhtml"
            className={"noborder padvert"}
          >
            email@example.com
          </FakeLink>

          <span id="search" title="Search for tournaments">
            <form>
              <input
                type="text"
                maxLength={128}
                size={15}
                name="search"
                placeholder="SEARCH TOURNAMENTS"
                autoComplete="off"
                autoCorrect="off"
                autoCapitalize="off"
                spellCheck="false"
                id="searchtext"
                className="notfirst"
                tabIndex={-1}
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
              tabIndex={-1}
              href="https://docs.tabroom.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa fa-question-circle" />
            </FakeLink>
          </span>
        </span>
      </div>
      <Menus />
    </div>
  );
}
