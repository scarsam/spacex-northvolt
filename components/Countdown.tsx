import { useNextLaunch } from "../hooks/useNextLaunch";

const Countdown = ({ launchDate }) => {
  const { days, hours, minutes, seconds } = useNextLaunch();

  return (
    <time className="text-sm tracking-wide" dateTime={launchDate}>
      <p>
        Next launch in:{" "}
        <strong className="tabular-nums">
          {days === null
            ? "Loading.."
            : `${days}d ${hours}h ${minutes}m ${seconds}s`}
        </strong>
      </p>
    </time>
  );
};

export default Countdown;
