import { ReactNode, useState } from "react";

interface ContentProps {
  main: ReactNode;
  menu: ReactNode;
}

export default function Content(props: ContentProps) {
  const [collapseMenu, setCollapseMenu] = useState(false);
  const toggleCollapse = () => setCollapseMenu((status) => !status);
  return (
    <div id="content">
      {collapseMenu && (
        <button
          className="shade closedshade fa fa-backward"
          onClick={toggleCollapse}
        />
      )}

      <div className={`main ${collapseMenu ? "mainfull" : ""}`}>
        {props.main}
      </div>
      <div className={`menu ${collapseMenu ? "hidden" : ""}`}>
        <button
          className="shade openshade fa fa-forward"
          onClick={toggleCollapse}
        />
        {props.menu}
      </div>
    </div>
  );
}
