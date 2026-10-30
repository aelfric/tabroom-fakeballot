import Content from "../Content";
import { DefaultMenu } from "../CurrentBallots";
import { Fragment, useContext } from "react";
import { Events } from "tinymce";
import { CommentBox } from "../CommentBox";
import { EventHandler } from "@tinymce/tinymce-react/lib/cjs/main/ts/Events";
import { AppContext } from "../app-context";
import { useNavigate } from "@tanstack/react-router";

export default function EditFeedback() {
  const { speechRound } = useContext(AppContext);
  const { entries, setEntries, rfd, setRfd } = speechRound!;
  const navigate = useNavigate();
  const setComments: (
    code: string,
  ) => EventHandler<Events.EditorEventMap["blur"]> =
    (code: string) => (evt) => {
      if (code !== "rfd") {
        setEntries((entries) =>
          entries.map((e) =>
            e.code === code ? { ...e, comments: evt.target.getContent() } : e,
          ),
        );
      }
    };

  return (
    <Content
      menu={<DefaultMenu />}
      main={
        <>
          <div className="full nospace ltborderbottom">
            <span className="third nospace">
              <h3>Edit Comments</h3>
            </span>

            <span className="twothirds rightalign nospace bottomalign padbottom">
              <p className="nospace marvertno rightalign semibold redtext">
                OBT Round 1
              </p>

              <p className="nospace marvertless semibold bluetext">In 237</p>
            </span>
          </div>

          <div className="bottomalign">
            <span className="third nospace">
              <h5>Reason for Rankings</h5>
            </span>

            <span className="twothirds nospace padbottom rightalign graytext semibold bottomalign">
              Reasons for Rankings are sent to everyone in the round; comments
              only go to that entry
            </span>
          </div>

          <form
            method="post"
            onSubmit={async (e) => {
              e.preventDefault();
              await navigate({ to: "/" });
            }}
          >
            <p className="centeralign marleftmuchmore">
              <CommentBox
                setComments={(evt) => {
                  if (setRfd && evt.target) {
                    return setRfd(evt.target.getContent());
                  }
                }}
                currentComments={rfd}
              />
            </p>
            {entries.map((entry) => {
              return (
                <Fragment key={entry.code}>
                  <div className="full flexrow martopmore padtop bordertop">
                    <span className="twofifths grow padleft nospace">
                      <h5>
                        Comments for {entry.code} – Name: {entry.name}
                      </h5>
                    </span>

                    <span className="bigger padbottom padtop twofifths rightalign grow italic padrightmore">
                      &ldquo;{entry.title}&rdquo;
                    </span>
                  </div>
                  <CommentBox
                    key={`${entry.code}-comments`}
                    setComments={setComments(entry.code)}
                    currentComments={entry.comments}
                  />
                </Fragment>
              );
            })}

            <div className="liblrow rightalign">
              <span className="third centeralign">
                <input type="submit" value="Save RFD &amp; Comments" />
              </span>
            </div>
          </form>
        </>
      }
    />
  );
}
