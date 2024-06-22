import React from "react";

export function TabroomError(props) {
    return (
        <div className="borderred centeralign martopmore marbottommore">
            <h6 className="bluetext semibold">Oh, drat. Your ballot had errors.</h6>

            <span className="semibold redtext bigger">
        {props.errors.map((e, i) => (
            <p key={i}>{e}</p>
        ))}
      </span>

            <p className="bigger semibold bluetext">
                Please correct these before continuing.
            </p>
        </div>
    );
}
