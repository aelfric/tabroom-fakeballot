import {Editor} from "@tinymce/tinymce-react";
import React from "react";
// Import TinyMCE
// eslint-disable-next-line no-unused-vars
import tinymce from "tinymce/tinymce";

// A theme is also required
import "tinymce/themes/silver";
// Toolbar icons
import "tinymce/icons/default";
// Editor styles
import "tinymce/skins/ui/oxide/skin.min.css";

const tinyMCEConfig = {
    mode: "textarea",
    external_plugins: {},
    toolbar: [
        "undo redo | bold italic strikethrough | alignleft aligncenter alignright | bullist numlist outdent indent | removeformat emoticons | link styleselect",
    ],
    height: "235",
    statusbar: false,
    // theme_advanced_toolbar_location: "top",
    menubar: false,
    browser_spellcheck: true,
    content_style:
        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",
};


export function CommentBox({setComments, currentComments}) {
    return (
        <div className="row centeralign odd">
            <Editor
                init={tinyMCEConfig}
                initialValue={currentComments}
                onBlur={setComments}
            />
        </div>
    );
}
