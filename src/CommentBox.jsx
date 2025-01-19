import { Editor } from "@tinymce/tinymce-react";
import React from "react";

const tinyMCEConfig = {
  external_plugins: {},
  toolbar: [
    "undo redo | bold italic strikethrough | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat emoticons | link styleselect",
  ],
  height: "235",
  statusbar: false,
  menubar: false,
  browser_spellcheck: true,
  content_style:
    "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
};

/**
 *
 * @param { {setComments: (evt: import("tinymcr").Events.EditorEventMap["blur"]) => unknown, currentComments?: string} } props
 * @returns {ReactNode}
 */
export function CommentBox({ setComments, currentComments }) {
  return (
    <div className="row centeralign odd">
      <Editor
        tinymceScriptSrc="/ballot-example/tinymce/tinymce.min.js"
        init={tinyMCEConfig}
        licenseKey={"gpl"}
        initialValue={currentComments}
        onBlur={setComments}
      />
    </div>
  );
}
