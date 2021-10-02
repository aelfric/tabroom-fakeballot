import React from "react";
import moment from "moment";
export default class Timer extends React.Component {
  initialDuration = moment.duration(10, "minutes");
  state = {
    started: false,
    duration: this.initialDuration
  };

  handleClick = () => {
    this.setState(state => {
      if (state.status) {
        clearInterval(this.timer);
      } else {
        const interval = 1000;
        this.timer = setInterval(() => {
          this.setState({
            duration: moment.duration(
              this.state.duration - interval,
              "milliseconds"
            ),
            started: true
          });
        }, interval);
      }
      return { status: !state.status };
    });
  };

  handleReset = () => {
    clearInterval(this.timer);
    this.setState({ duration: this.initialDuration, started: false });
  };

  changeTime = minutes => {
    if (!this.state.started) {
      this.setState({ duration: this.state.duration.add(minutes, "minutes") });
    }
  };

  render() {
    return (
      <div className="full centeralign even border">
        <span className="tenth marno">
          <button
            className="fa fa-caret-up greentext fa-2x marno padmore padbottomless inverthover"
            onClick={() => this.changeTime(1)}
          />

          <button
            className="fa fa-caret-down greentext fa-2x marno padmore padtopless inverthover"
            onClick={() => this.changeTime(-1)}
          />
        </span>

        <span className="half marno">
          <span
            className={`stopwatch ${
              this.state.duration.seconds() < 0 ? "expired" : ""
            }`}
            id="3209946_timer"
          >
            {this.state.duration.seconds() < 0 ? "-" : ""}
            {Math.abs(this.state.duration.minutes())}:
            {Math.abs(this.state.duration.seconds()) < 10 ? "0" : ""}
            {Math.abs(this.state.duration.seconds())}
          </span>
        </span>

        <span className="twofifths marno">
          {this.state.started ? (
            <button
              onClick={this.handleClick}
              id="3209946_timerStart"
              className="buttonwhite bluetext fa fa-pause fa-lg"
            />
          ) : (
            <button
              onClick={this.handleClick}
              id="3209946_timerStart"
              className="buttonwhite bluetext fa fa-play fa-lg"
            />
          )}
          <button
            onClick={this.handleReset}
            className="buttonwhite redtext fa fa-undo fa-lg"
          />
        </span>
      </div>
    );
  }
}
