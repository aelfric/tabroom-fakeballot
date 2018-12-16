import React from 'react';

export function Menus(props){
    return <span id="menus">
              <ul id="nav">
                <li className="top">
                  <a className="centeralign top_link" href="/">
                    <span className="down">Home</span>
                  </a>
                </li>

                <li className="top">
                  <a
                    className="centeralign top_link"
                    href="/index/circuits.mhtml"
                  >
                    <span className="down">Circuits</span>
                  </a>
                </li>

                <li className="top">
                  <a className="centeralign top_link" href="/index/results">
                    <span className="down">Results</span>
                  </a>
                </li>

                <li className="top">
                  <a
                    className="centeralign top_link"
                    href="/index/paradigm.mhtml"
                  >
                    <span className="down">Paradigms</span>
                  </a>
                </li>

                <li className="top">
                  <a
                    className="centeralign top_link"
                    href="https://support.tabroom.com"
                  >
                    <span className="down">Help</span>
                  </a>
                </li>

                <li className="top">
                  <a className="centeralign top_link" href="/index/about.mhtml">
                    <span className="down">About</span>
                  </a>
                </li>
              </ul>

              <span />
            </span>;
}

export default function Header(){
    return <div id="header">
    <span id="logo">
      <span className="headline">
        <span id="sparky">
          <img
            src="/lib/images/sparky.png"
            alt="National Speech and Debate Association"
          />
        </span>

        <span id="sparked">
          <a tabIndex="-1" href="/index/index.mhtml">
            Tabroom.com
          </a>
        </span>
      </span>

      <span className="nsda">
        <span className="blurb">a project of the</span>

        <span className="nsdalogo">
          <a tabIndex="-1" href="http://www.speechanddebate.org">
            <img
              src="/lib/images/nsda-header-logo.png"
              alt="National Speech and Debate Association"
            />
          </a>
        </span>
      </span>
    </span>

    <span id="toprow">
      <a tabIndex="-1" href="/user/login/logout.mhtml">
        Logout
      </a>

      <a tabIndex="-1" href="/user/login/profile.mhtml">
        Profile
      </a>

      <a tabIndex="-1" href="/user/home.mhtml">
        f.riccobono@gmail.com
      </a>

      <span id="search" title="Search for tournaments">
        <form action="/index/search.mhtml">
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
            <img src="/lib/images/search.png" />
          </button>
        </form>
      </span>

      <span id="helpbutton" title="Tabroom Help">
        <a
          tabIndex="-1"
          href="http://docs.tabroom.com"
          target="_blank"
          className="fa fa-question-circle"
        />
      </span>
    </span>
    <Menus/>
    </div>;
}