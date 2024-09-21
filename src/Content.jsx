import React from "react";

export default class Content extends React.Component {
  state = {
    collapseMenu: false,
  };

  toggleCollapse = () => {
    this.setState((prevState) => ({
      collapseMenu: !prevState.collapseMenu,
    }));
  };

  render() {
    return (
      <div id="content">
        {this.state.collapseMenu && (
          <button
            className="shade closedshade fa fa-backward"
            onClick={this.toggleCollapse}
          />
        )}

        <div className={`main ${this.state.collapseMenu ? "mainfull" : ""}`}>
          {this.props.main}
        </div>
        <div className={`menu ${this.state.collapseMenu ? "hidden" : ""}`}>
          <button
            className="shade openshade fa fa-forward"
            onClick={this.toggleCollapse}
          />
          {this.props.menu}
        </div>
      </div>
    );
  }
}
