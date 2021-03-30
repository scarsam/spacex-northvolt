import { useNextLaunch } from "../hooks/useNextLaunch";

const Countdown: React.VFC<{ launchDate: string }> = ({ launchDate }) => {
  const { days, hours, minutes, seconds } = useNextLaunch();

  return (
    <time className="text-sm tracking-wide mb-2 sm:mb-0" dateTime={launchDate}>
      <p>
        Next launch in:{" "}
        <strong className="tabular-nums text-xs md:text-sm">
          {days === null
            ? "Loading.."
            : `${days}d ${hours}h ${minutes}m ${seconds}s`}
        </strong>
      </p>
    </time>
  );
};

export default Countdown;
