import React from 'react';

export default class Timer extends React.Component {
    state = {
        runningTime: 0
    }

    handleClick = () => {
        this.setState(state => {
          if (state.status) {
            clearInterval(this.timer);
          } else {
            const startTime = Date.now() - this.state.runningTime;
            this.timer = setInterval(() => {
              this.setState({ runningTime: Date.now() - startTime });
            });
          }
          return { status: !state.status };
        });
      };

    render(){
        return             <div className="full centeralign even border">
              <span className="tenth marno">
                <a
                  className="fa fa-caret-up greentext fa-2x marno padmore padbottomless inverthover"
                  onClick="addMinute('3209946_timer')"
                />

                <a
                  className="fa fa-caret-down greentext fa-2x marno padmore padtopless inverthover"
                  onClick="subtractMinute('3209946_timer')"
                />
              </span>

              <span className="half marno">
                <span className="stopwatch" id="3209946_timer">
                  10:00 {this.state.runningTime}
                </span>
              </span>

              <span className="twofifths marno">
                <button
                  onClick={this.handleClick}
                  id="3209946_timerStart"
                  className="buttonwhite bluetext fa fa-play fa-lg"
                />

                <button
                  onClick="resetTimer('3209946_timer')"
                  className="buttonwhite redtext fa fa-undo fa-lg"
                />
              </span>
            </div>;
    }
}