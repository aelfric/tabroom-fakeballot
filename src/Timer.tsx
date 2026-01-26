import { Dispatch, SetStateAction, useRef, useState } from "react";
import moment, { Duration } from "moment";

function useRafTimer(cb: Dispatch<SetStateAction<Duration>>) {
  const requestRef = useRef<number | undefined>(undefined);
  const previousTimeRef = useRef<number | undefined>(undefined);
  const [started, setStarted] = useState(false);

  const animate = (time: number) => {
    if (previousTimeRef.current != undefined) {
      const deltaTime = time - previousTimeRef.current;

      // Pass on a function to the setter of the state
      // to make sure we always have the latest state
      cb((duration) => duration.clone().subtract(deltaTime, "milliseconds"));
    }
    previousTimeRef.current = time;
    requestRef.current = requestAnimationFrame(animate);
  };

  function stop() {
    previousTimeRef.current = undefined;
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    setStarted(false);
  }

  function start() {
    // Canceling in case this is called multiple times
    if (requestRef.current) {
      cancelAnimationFrame(requestRef.current);
    }
    requestRef.current = requestAnimationFrame(animate);
    setStarted(true);
  }

  function reset() {
    stop();
  }

  return { start, stop, reset, started };
}

export function Timer({ initialDuration }: { initialDuration: number }) {
  const [duration, setDuration] = useState(
    moment.duration(initialDuration, "minutes"),
  );

  const { start, stop, reset, started } = useRafTimer(setDuration);

  function changeTime(minutes: number) {
    if (!started) {
      setDuration((prevDuration) => {
        return prevDuration.clone().add(minutes, "minutes");
      });
    }
  }

  return (
    <div className="full centeralign even border">
      <span className="tenth marno">
        <button
          className="fa fa-caret-up greentext fa-2x marno padmore padbottomless inverthover"
          onClick={() => changeTime(1)}
        />

        <button
          className="fa fa-caret-down greentext fa-2x marno padmore padtopless inverthover"
          onClick={() => changeTime(-1)}
        />
      </span>

      <span className="half marno">
        <span
          className={`stopwatch ${duration.seconds() < 0 ? "expired" : ""}`}
          id="3209946_timer"
        >
          {duration.seconds() < 0 ? "-" : ""}
          {Math.abs(duration.minutes())}:
          {Math.abs(duration.seconds()) < 10 ? "0" : ""}
          {Math.abs(duration.seconds())}
        </span>
      </span>

      <span className="twofifths marno">
        {started ? (
          <button
            onClick={stop}
            id="3209946_timerStart"
            className="buttonwhite bluetext fa fa-pause fa-lg"
          />
        ) : (
          <button
            onClick={start}
            id="3209946_timerStart"
            className="buttonwhite bluetext fa fa-play fa-lg"
          />
        )}
        <button
          onClick={() => {
            reset();
            setDuration(moment.duration(initialDuration, "minutes"));
          }}
          className="buttonwhite redtext fa fa-undo fa-lg"
        />
      </span>
    </div>
  );
}
