import { Activity, ReactNode, useState } from "react";

interface TabNavProps {
  tabs: {
    name: string;
    children: ReactNode;
  }[];
}

export function TabNav(props: TabNavProps) {
  const [selectedTab, setSelectedTab] = useState(0);
  return (
    <>
      <ul id="tabnav" className="marbottom">
        {props.tabs.map((aTab, index) => (
          <li
            id={`button_${index}`}
            className={selectedTab === index ? "tabs selected invert" : "tabs"}
          >
            <button onClick={() => setSelectedTab(index)} type={"button"}>
              {aTab.name}
            </button>
          </li>
        ))}
      </ul>
      {props.tabs.map((aTab, index) => (
        <Activity mode={selectedTab === index ? "visible" : "hidden"}>
          {aTab.children}
        </Activity>
      ))}
    </>
  );
}
