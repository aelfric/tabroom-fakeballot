import Content from "../Content";
import { BallotStartedMenu } from "./BallotStartedMenu";
import React, { useState } from "react";
import { CommentBox } from "../CommentBox";

export function CongressBallotStarted() {
  return <Content main={<CongressBallotMain />} menu={<BallotStartedMenu />} />;
}

function CongressBallotMain() {
  const [selected, setSelected] = useState(0);
  const [round, setRound] = useState({
    entries: [
      { name: "Alannah Meadows", speeches: [] },
      { name: "Casper Howard", speeches: [] },
      { name: "Cory McDonald", speeches: [] },
      { name: "Farah Petersen", speeches: [] },
      { name: "Kirsten Arias", speeches: [] },
      { name: "Siobhan Wang", speeches: [] },
      { name: "Zain Swanson", speeches: [] },
    ],
  });

  return (
    <div className="main ballotmain" data-select2-id="select2-data-83-i6m2">
      <div className="ltborderbottom flexrow">
        <span className="third">
          <p className="bluetext biggish semibold">Room: 405</p>
        </span>

        <span className="third centeralign">
          <h4 className="graytext">CON Session 1</h4>
        </span>

        <span
          className="third rightalign top"
          title="Many will judge, but I like you the best!"
        >
          <h5>Frank Riccobono</h5>
        </span>
      </div>

      <ul id="tabnav" className="marbottom">
        <li
          id="button_speeches"
          className="tabs selected invert"
          onClick="updateTab('speeches')"
        >
          Speeches
        </li>

        <li
          id="button_rankings"
          className="tabs"
          onClick="updateTab('rankings')"
        >
          Rankings
        </li>
      </ul>

      <div className="feedback screens hidden">
        <div className="full">
          <div className="full blueborderbottom nospace">
            <span className="twofifths bluetext">
              <h5>General Feedback</h5>
            </span>

            <span className="fifth rightalign redtext semibold">
              Select a speaker:
            </span>

            <span className="twofifths">
              <select
                id="speaker"
                className="fixedmost select2-hidden-accessible"
                onChange={(evt) => setSelected(Number(evt.target.value))}
                value={selected}
                tabIndex="-1"
                aria-hidden="true"
                data-select2-id="select2-data-speaker"
              >
                <option
                  value=""
                  data-select2-id="select2-data-68-p39t"
                ></option>
                {round.entries.map((e, i) => (
                  <option value={i} key={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
              {selected}
              <span
                className="select2 select2-container select2-container--default"
                dir="ltr"
                data-select2-id="select2-data-67-eo6q"
                style={{ width: "100%" }}
              >
                <span className="selection" style={{ width: "0" }}>
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex="-1"
                    aria-disabled="false"
                    aria-labelledby="select2-speaker-container"
                    aria-controls="select2-speaker-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-speaker-container"
                      role="textbox"
                      aria-readonly="true"
                    ></span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true"></span>
              </span>
              <span
                className="select2 select2-container select2-container--default"
                dir="ltr"
                data-select2-id="select2-data-70-ro2o"
                style={{ width: "100%" }}
              >
                <span className="selection" style={{ width: "0" }}>
                  <span
                    className="select2-selection select2-selection--single"
                    role="combobox"
                    aria-haspopup="true"
                    aria-expanded="false"
                    tabIndex="0"
                    aria-disabled="false"
                    aria-labelledby="select2-speaker-container"
                    aria-controls="select2-speaker-container"
                  >
                    <span
                      className="select2-selection__rendered"
                      id="select2-speaker-container"
                      role="textbox"
                      aria-readonly="true"
                    ></span>
                    <span
                      className="select2-selection__arrow"
                      role="presentation"
                    >
                      <b role="presentation"></b>
                    </span>
                  </span>
                </span>
                <span className="dropdown-wrapper" aria-hidden="true"></span>
              </span>
            </span>
          </div>

          <div id="5922949" className="ballot full nospace hidden">
            <span className="half leftalign">
              <h6 className="semibold">{round.entries[selected].name}</h6>
            </span>

            <span className="half rightalign">
              <h5></h5>
            </span>

            <div className="centeralign marno even padleft">
              <textarea
                id="comments_44882571"
                data-ballot_id="44882571"
                className="comments tall"
                name="comments_44882571"
                rows="32"
                cols="60"
                data-style="width: 0px; display: none; visibility: hidden;"
                aria-hidden="true"
              ></textarea>
              <div
                role="application"
                className="tox tox-tinymce"
                aria-disabled="false"
                data-style="visibility: hidden; width: 98%; height: 384px;"
                data-mce-data-style="visibility: hidden; width: 98%; height: 384px;"
              >
                <div className="tox-editor-container">
                  <div
                    data-alloy-vertical-dir="toptobottom"
                    className="tox-editor-header"
                  >
                    <div className="tox-toolbar-overlord">
                      <div
                        role="group"
                        className="tox-toolbar"
                        aria-disabled="false"
                      >
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabIndex="-1"
                          className="tox-toolbar__group"
                        >
                          <button
                            aria-label="Fullscreen"
                            title="Fullscreen"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="m15.3 10-1.2-1.3 2.9-3h-2.3a.9.9 0 1 1 0-1.7H19c.5 0 .9.4.9.9v4.4a.9.9 0 1 1-1.8 0V7l-2.9 3Zm0 4 3 3v-2.3a.9.9 0 1 1 1.7 0V19c0 .5-.4.9-.9.9h-4.4a.9.9 0 1 1 0-1.8H17l-3-2.9 1.3-1.2ZM10 15.4l-2.9 3h2.3a.9.9 0 1 1 0 1.7H5a.9.9 0 0 1-.9-.9v-4.4a.9.9 0 1 1 1.8 0V17l2.9-3 1.2 1.3ZM8.7 10 5.7 7v2.3a.9.9 0 0 1-1.7 0V5c0-.5.4-.9.9-.9h4.4a.9.9 0 0 1 0 1.8H7l3 2.9-1.3 1.2Z"
                                  fillRule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Undo"
                            title="Undo"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn tox-tbtn--disabled"
                            aria-disabled="true"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M6.4 8H12c3.7 0 6.2 2 6.8 5.1.6 2.7-.4 5.6-2.3 6.8a1 1 0 0 1-1-1.8c1.1-.6 1.8-2.7 1.4-4.6-.5-2.1-2.1-3.5-4.9-3.5H6.4l3.3 3.3a1 1 0 1 1-1.4 1.4l-5-5a1 1 0 0 1 0-1.4l5-5a1 1 0 0 1 1.4 1.4L6.4 8Z"
                                  fillRule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Bold"
                            title="Bold"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M7.8 19c-.3 0-.5 0-.6-.2l-.2-.5V5.7c0-.2 0-.4.2-.5l.6-.2h5c1.5 0 2.7.3 3.5 1 .7.6 1.1 1.4 1.1 2.5a3 3 0 0 1-.6 1.9c-.4.6-1 1-1.6 1.2.4.1.9.3 1.3.6s.8.7 1 1.2c.4.4.5 1 .5 1.6 0 1.3-.4 2.3-1.3 3-.8.7-2.1 1-3.8 1H7.8Zm5-8.3c.6 0 1.2-.1 1.6-.5.4-.3.6-.7.6-1.3 0-1.1-.8-1.7-2.3-1.7H9.3v3.5h3.4Zm.5 6c.7 0 1.3-.1 1.7-.4.4-.4.6-.9.6-1.5s-.2-1-.7-1.4c-.4-.3-1-.4-2-.4H9.4v3.8h4Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Italic"
                            title="Italic"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="m16.7 4.7-.1.9h-.3c-.6 0-1 0-1.4.3-.3.3-.4.6-.5 1.1l-2.1 9.8v.6c0 .5.4.8 1.4.8h.2l-.2.8H8l.2-.8h.2c1.1 0 1.8-.5 2-1.5l2-9.8.1-.5c0-.6-.4-.8-1.4-.8h-.3l.2-.9h5.8Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Strikethrough"
                            title="Strikethrough"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <g fillRule="evenodd">
                                  <path d="M15.6 8.5c-.5-.7-1-1.1-1.3-1.3-.6-.4-1.3-.6-2-.6-2.7 0-2.8 1.7-2.8 2.1 0 1.6 1.8 2 3.2 2.3 4.4.9 4.6 2.8 4.6 3.9 0 1.4-.7 4.1-5 4.1A6.2 6.2 0 0 1 7 16.4l1.5-1.1c.4.6 1.6 2 3.7 2 1.6 0 2.5-.4 3-1.2.4-.8.3-2-.8-2.6-.7-.4-1.6-.7-2.9-1-1-.2-3.9-.8-3.9-3.6C7.6 6 10.3 5 12.4 5c2.9 0 4.2 1.6 4.7 2.4l-1.5 1.1Z"></path>
                                  <path
                                    d="M5 11h14a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z"
                                    fillRule="nonzero"
                                  ></path>
                                </g>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabIndex="-1"
                          className="tox-toolbar__group"
                        >
                          <button
                            aria-label="Align left"
                            title="Align left"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 4h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Zm0-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Align center"
                            title="Align center"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm3 4h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 1 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1H8a1 1 0 0 1 0-2Zm-3-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Align right"
                            title="Align right"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            aria-pressed="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M5 5h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 1 1 0-2Zm6 4h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm0 8h8c.6 0 1 .4 1 1s-.4 1-1 1h-8a1 1 0 0 1 0-2Zm-6-4h14c.6 0 1 .4 1 1s-.4 1-1 1H5a1 1 0 0 1 0-2Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                        <div
                          title=""
                          role="toolbar"
                          data-alloy-tabstop="true"
                          tabIndex="-1"
                          className="tox-toolbar__group"
                        >
                          <button
                            aria-label="Clear formatting"
                            title="Clear formatting"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M13.2 6a1 1 0 0 1 0 .2l-2.6 10a1 1 0 0 1-1 .8h-.2a.8.8 0 0 1-.8-1l2.6-10H8a1 1 0 1 1 0-2h9a1 1 0 0 1 0 2h-3.8ZM5 18h7a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Zm13 1.5L16.5 18 15 19.5a.7.7 0 0 1-1-1l1.5-1.5-1.5-1.5a.7.7 0 0 1 1-1l1.5 1.5 1.5-1.5a.7.7 0 0 1 1 1L17.5 17l1.5 1.5a.7.7 0 0 1-1 1Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Find and replace"
                            title="Find and replace"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M16 17.3a8 8 0 1 1 1.4-1.4l4.3 4.4a1 1 0 0 1-1.4 1.4l-4.4-4.3Zm-5-.3a6 6 0 1 0 0-12 6 6 0 0 0 0 12Z"
                                  fillRule="nonzero"
                                ></path>
                              </svg>
                            </span>
                          </button>
                          <button
                            aria-label="Word count"
                            title="Word count"
                            type="button"
                            tabIndex="-1"
                            className="tox-tbtn"
                            aria-disabled="false"
                            style={{ width: "34px" }}
                          >
                            <span className="tox-icon tox-tbtn__icon-wrap">
                              <svg width="24" height="24" focusable="false">
                                <path
                                  d="M4 11.5h16v1H4v-1Zm4.8-6.8V10H7.7V5.8h-1v-1h2ZM11 8.3V9h2v1h-3V7.7l2-1v-.9h-2v-1h3v2.4l-2 1Zm6.3-3.4V10h-3.1V9h2.1V8h-2.1V6.8h2.1v-1h-2.1v-1h3.1ZM5.8 16.4c0-.5.2-.8.5-1 .2-.2.6-.3 1.2-.3l.8.1c.2 0 .4.2.5.3l.4.4v2.8l.2.3H8.2V18.7l-.6.3H7c-.4 0-.7 0-1-.2a1 1 0 0 1-.3-.9c0-.3 0-.6.3-.8.3-.2.7-.4 1.2-.4l.6-.2h.3v-.2l-.1-.2a.8.8 0 0 0-.5-.1 1 1 0 0 0-.4 0l-.3.4h-1Zm2.3.8h-.2l-.2.1-.4.1a1 1 0 0 0-.4.2l-.2.2.1.3.5.1h.4l.4-.4v-.6Zm2-3.4h1.2v1.7l.5-.3h.5c.5 0 .9.1 1.2.5.3.4.5.8.5 1.4 0 .6-.2 1.1-.5 1.5-.3.4-.7.6-1.3.6l-.6-.1-.4-.4v.4h-1.1v-5.4Zm1.1 3.3c0 .3 0 .6.2.8a.7.7 0 0 0 1.2 0l.2-.8c0-.4 0-.6-.2-.8a.7.7 0 0 0-.6-.3l-.6.3-.2.8Zm6.1-.5c0-.2 0-.3-.2-.4a.8.8 0 0 0-.5-.2c-.3 0-.5.1-.6.3l-.2.9c0 .3 0 .6.2.8.1.2.3.3.6.3.2 0 .4 0 .5-.2l.2-.4h1.1c0 .5-.3.8-.6 1.1a2 2 0 0 1-1.3.4c-.5 0-1-.2-1.3-.6a2 2 0 0 1-.5-1.4c0-.6.1-1.1.5-1.5.3-.4.8-.5 1.4-.5.5 0 1 0 1.2.3.4.3.5.7.5 1.2h-1v-.1Z"
                                  fillRule="evenodd"
                                ></path>
                              </svg>
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="tox-anchorbar"></div>
                  </div>
                  <div className="tox-sidebar-wrap">
                    <div className="tox-edit-area">
                      <iframe
                        id="comments_44882571_ifr"
                        frameBorder="0"
                        allowTransparency="true"
                        title="Rich Text Area"
                        className="tox-edit-area__iframe"
                        src="./Tabroom-Congress_files/saved_resource.html"
                      ></iframe>
                    </div>
                    <div role="presentation" className="tox-sidebar">
                      <div
                        data-alloy-tabstop="true"
                        tabIndex="-1"
                        className="tox-sidebar__slider tox-sidebar--sliding-closed"
                        style={{ width: "0" }}
                      >
                        <div className="tox-sidebar__pane-container"></div>
                      </div>
                    </div>
                  </div>
                  <div className="tox-bottom-anchorbar"></div>
                </div>
                <div
                  aria-hidden="true"
                  className="tox-view-wrap"
                  style={{ display: "none" }}
                >
                  <div className="tox-view-wrap__slot-container"></div>
                </div>
                <div
                  aria-hidden="true"
                  className="tox-throbber"
                  style={{ display: "none" }}
                ></div>
              </div>
            </div>

            <span className="libl full rightalign semibold padvert marno">
              <span className="third centeralign nospace padvertless">
                <button
                  type="button"
                  onClick="saveComments(false);"
                  className="bluetext buttonwhite invert bigger"
                >
                  Save Feedback
                </button>
              </span>
            </span>
          </div>
        </div>
      </div>

      <div className="speeches screens" data-select2-id="select2-data-82-5nzn">
        <div className="full" data-select2-id="select2-data-81-12wv">
          <form
            action="https://www.tabroom.com/user/judge/ballot.mhtml"
            method="post"
          >
            <input type="hidden" name="panel_id" value="7502338" />

            <input type="hidden" name="comments_only" value="" />

            <input type="hidden" name="judge_id" value="2317256" />

            <span className="twofifths bluetext">
              <h5>Per-Speech Points</h5>
            </span>

            <span className="fifth rightalign redtext semibold">
              Select a speaker:
            </span>

            <span className="twofifths" data-select2-id="select2-data-80-n8xo">
              <select
                name="entry_id"
                className="fixedbig select2-hidden-accessible"
                onChange={(evt) => setSelected(Number(evt.target.value))}
                value={selected}
                tabIndex="-1"
                aria-hidden="true"
                data-select2-id="select2-data-76-q41r"
              >
                <option
                  value=""
                  data-select2-id="select2-data-86-kqdt"
                ></option>
                {round.entries.map((e, i) => (
                  <option value={i} key={e.name}>
                    {e.name}
                  </option>
                ))}
              </select>
            </span>
          </form>
        </div>

        <div className="martop ltbordertop padvert">
          <span className="half nospace">
            <h5 className="nospace">{round.entries[selected].name}</h5>
          </span>

          <span className="half nospace rightalign">
            <span className="threequarters semibold redtext">
              Presiding Officer this session
            </span>
            <span className="quarter nospace centeralign">
              <label className="switch smaller">
                <input
                  className="padsettingbox"
                  type="checkbox"
                  value="1"
                  id="po"
                  name="po"
                  data-target_id="5922949"
                  data-setting_name="7502338"
                  onChange="postSwitch(this, 'po_switch.mhtml');
												 poSwitch();"
                />
                <div className="slider"></div>
              </label>
            </span>
          </span>
        </div>

        <div id="new">
          <form
            action="https://www.tabroom.com/user/judge/congress_speech_save.mhtml"
            method="post"
          >
            <input type="hidden" name="new_score" value="1" />

            <input type="hidden" name="comments_only" value="" />

            <input type="hidden" name="panel_id" value="7502338" />

            <input type="hidden" name="judge_id" value="2317256" />

            <input type="hidden" name="entry_id" value="5922949" />

            <div className="lightbordertop martop">
              <div className="odd noborder">
                <span className="quarter marno">
                  <p className="speech bluetext semibold bigger">New speech:</p>

                  <p className="po bluetext semibold bigger hidden">
                    New PO rating:
                  </p>
                </span>

                <span className="eighth semibold bigger bluetext centeralign topic">
                  Topic/Bill:
                </span>

                <span className="centeralign threetenths topic">
                  <input
                    type="text"
                    name="topic"
                    size="32"
                    value=""
                    data-style="width: 190.313px;"
                  />
                </span>

                <span className="twenty semibold bigger bluetext centeralign side">
                  Side:
                </span>

                <span className="true quarter side padno">
                  <label htmlFor="new_aff">
                    <span className="half hover">
                      <input id="new_aff" type="radio" name="side" value="1" />
                      For the bill
                    </span>
                  </label>

                  <label htmlFor="new_neg">
                    <span className="half hover">
                      <input id="new_neg" type="radio" name="side" value="2" />
                      Against
                    </span>
                  </label>
                </span>

                <span className="threequarters padvertmore bigger rightalign semibold bluetext po hidden">
                  Presiding Officership
                </span>
              </div>

              <div className="padmuchmore odd noborder">
                <CommentBox />
              </div>

              <div className="full marno blueborderbottom even">
                <span className="tenth leftalign"></span>

                <span className="fifth leftalign"></span>

                <span className="threetenths rightalign semibold redtext bigger">
                  Points for this <span className="inline speech">speech</span>
                  <span className="inline po hidden">period</span> (1 - 6):
                </span>

                <span className="eighth leftalign">
                  <input type="number" name="points" min="1" max="6" value="" />
                </span>

                <span className="fifth rightalign">
                  <button className="buttonwhite bluetext bigger invert">
                    Save
                  </button>
                </span>
              </div>
            </div>
          </form>
        </div>
      </div>

      <div className="rankings screens hidden">
        <div className="full nospace centeralign">
          <span className="nineteen leftalign nospace ballotshell">
            <div className="padvertmuchless ltborderbottom marbottom">
              <p dir="ltr">
                We are all influenced by implicit bias or stereotypes that, when
                unchecked, influence our judging in ways that may negatively
                impact the students we are called to judge impartially. Before
                writing comments or making a decision, please take a moment to
                reflect on any preconceived notions you may hold that may impact
                your decision-making process and/or jeopardize the student
                experience.
              </p>
              <p>&nbsp;</p>
            </div>

            <h6 className="bluetext centeralign padmore marbottom semibold half">
              Blanks will be auto-filled with a 9
            </h6>
          </span>
        </div>

        <div className="padvert centeralign ltbordertop">
          <span className="ninetenths leftalign"></span>
        </div>

        <form
          action="https://www.tabroom.com/user/judge/ballot_save.mhtml"
          method="post"
        >
          <input type="hidden" name="panel_id" value="7502338" />

          <input type="hidden" name="judge_id" value="2317256" />

          <table
            id="sortable"
            className="tablesorter tablesorter-default tablesorterb8b1a23feee53 hasStickyHeaders tablesorter9781b859d7f2a"
            role="grid"
          >
            <thead>
              <tr
                className="yellowrow smallish centeralign tablesorter-headerRow"
                role="row"
              >
                <th
                  data-column="0"
                  className="tablesorter-header sortable tablesorter-headerUnSorted"
                  tabIndex="0"
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  unselectable="on"
                  aria-sort="none"
                  aria-label="Entry Code: No sort applied, activate to apply a descending sort"
                  style={{ userSelect: "none" }}
                >
                  <div className="tablesorter-header-inner">Entry Code</div>
                </th>

                <th
                  data-column="1"
                  className="tablesorter-header sortable tablesorter-headerUnSorted"
                  tabIndex="0"
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  unselectable="on"
                  aria-sort="none"
                  aria-label="Speech Points: No sort applied, activate to apply a descending sort"
                  style={{ userSelect: "none" }}
                >
                  <div className="tablesorter-header-inner">Speech Points</div>
                </th>

                <th
                  data-column="2"
                  className="tablesorter-header sortable tablesorter-headerUnSorted"
                  tabIndex="0"
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  unselectable="on"
                  aria-sort="none"
                  aria-label="Average: No sort applied, activate to apply a descending sort"
                  style={{ userSelect: "none" }}
                >
                  <div className="tablesorter-header-inner">Average</div>
                </th>

                <th
                  data-column="3"
                  className="tablesorter-header sortable tablesorter-headerUnSorted"
                  tabIndex="0"
                  scope="col"
                  role="columnheader"
                  aria-disabled="false"
                  aria-controls="sortable"
                  unselectable="on"
                  aria-sort="none"
                  aria-label="Rank: No sort applied, activate to apply a descending sort"
                  style={{ userSelect: "none" }}
                >
                  <div className="tablesorter-header-inner">Rank</div>
                </th>
              </tr>
            </thead>

            <tbody id="ballottable" aria-live="polite" aria-relevant="all">
              <tr
                id="44882565"
                data-side="0"
                data-entry="5922946"
                className="ballotrows odd"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Kirsten Arias</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="1"
                    type="number"
                    step="1"
                    size="5"
                    name="44882565_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882566"
                data-side="0"
                data-entry="5922936"
                className="ballotrows even"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Farah Petersen</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="2"
                    type="number"
                    step="1"
                    size="5"
                    name="44882566_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882567"
                data-side="0"
                data-entry="5922951"
                className="ballotrows odd"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Siobhan Wang</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="3"
                    type="number"
                    step="1"
                    size="5"
                    name="44882567_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882568"
                data-side="0"
                data-entry="5922950"
                className="ballotrows even"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Zain Swanson</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="4"
                    type="number"
                    step="1"
                    size="5"
                    name="44882568_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882569"
                data-side="0"
                data-entry="5922947"
                className="ballotrows odd"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Casper Howard</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="5"
                    type="number"
                    step="1"
                    size="5"
                    name="44882569_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882570"
                data-side="0"
                data-entry="5922948"
                className="ballotrows even"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Cory McDonald</span>
                  </div>
                </td>

                <td className="centeralign"></td>

                <td className="centeralign"></td>
                <td className="centeralign">
                  <input
                    tabIndex="6"
                    type="number"
                    step="1"
                    size="5"
                    name="44882570_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
              <tr
                id="44882571"
                data-side="0"
                data-entry="5922949"
                className="ballotrows odd"
                role="row"
              >
                <td
                  className="leftalign padvertmore"
                  title="Doubled 0 daggers "
                >
                  <div className="full flexrow grow semibold">
                    <span>Alannah Meadows</span>
                  </div>
                </td>

                <td className="centeralign">5</td>

                <td className="centeralign">5</td>
                <td className="centeralign">
                  <input
                    tabIndex="7"
                    type="number"
                    step="1"
                    size="5"
                    name="44882571_ranks"
                    max="7"
                    value=""
                  />
                </td>
              </tr>
            </tbody>
          </table>
          <div
            className="tablesorter-sticky-wrapper tablesorter-sticky-hidden"
            data-style="position: fixed; top: 0px; left: 0px; visibility: hidden; z-index: 2; width: 0px;"
          >
            <table
              id="sortable-sticky"
              className="tablesorter tablesorter-default tablesorterb8b1a23feee53 containsStickyHeaders tablesorter-stickyHeader tablesorterb8b1a23feee53_extra_table"
              role="grid"
              data-style="height: 0px; width: 1090.55px; margin: 0px; min-width: 1090.55px; max-width: 1090.55px;"
            >
              <thead>
                <tr
                  className="yellowrow smallish centeralign tablesorter-headerRow"
                  role="row"
                >
                  <th
                    data-column="0"
                    className="tablesorter-header sortable tablesorter-headerUnSorted tablesorterb8b1a23feee53_extra_headers"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Entry Code: No sort applied, activate to apply a descending sort"
                    data-style="user-select: none; width: 365.562px; min-width: 365.562px; max-width: 365.562px;"
                  >
                    <div className="tablesorter-header-inner">Entry Code</div>
                  </th>

                  <th
                    data-column="1"
                    className="tablesorter-header sortable tablesorter-headerUnSorted tablesorterb8b1a23feee53_extra_headers"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Speech Points: No sort applied, activate to apply a descending sort"
                    data-style="user-select: none; width: 254.5px; min-width: 254.5px; max-width: 254.5px;"
                  >
                    <div className="tablesorter-header-inner">
                      Speech Points
                    </div>
                  </th>

                  <th
                    data-column="2"
                    className="tablesorter-header sortable tablesorter-headerUnSorted tablesorterb8b1a23feee53_extra_headers"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Average: No sort applied, activate to apply a descending sort"
                    data-style="user-select: none; width: 161.844px; min-width: 161.844px; max-width: 161.844px;"
                  >
                    <div className="tablesorter-header-inner">Average</div>
                  </th>

                  <th
                    data-column="3"
                    className="tablesorter-header sortable tablesorter-headerUnSorted tablesorterb8b1a23feee53_extra_headers"
                    tabIndex="0"
                    scope="col"
                    role="columnheader"
                    aria-disabled="false"
                    aria-controls="sortable"
                    unselectable="on"
                    aria-sort="none"
                    aria-label="Rank: No sort applied, activate to apply a descending sort"
                    data-style="user-select: none; width: 227.641px; min-width: 227.641px; max-width: 227.641px;"
                  >
                    <div className="tablesorter-header-inner">Rank</div>
                  </th>
                </tr>
              </thead>
            </table>
          </div>

          <div className="liblrow rightalign padvert">
            <span className="half centeralign nospace">
              <input type="submit" value="Submit Ballot" />
            </span>
          </div>
        </form>
      </div>

      <pre>{JSON.stringify(round, null, 2)}</pre>
    </div>
  );
}
