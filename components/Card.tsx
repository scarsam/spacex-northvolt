import Pill from "./Pill";

const Card = () => {
  return (
    <div className="bg-white rounded-md text-black flex max-w-4xl m-auto">
      <div className="bg-black rounded-md py-16 px-32 m-4">
        <img src="/images/rockets/rocket-1.svg" />
      </div>
      <div className="content flex-1 text-left p-10">
        <h2 className="text-2xl font-semibold pb-2">Falcon 1</h2>
        <p>
          Description: The Falcon 1 was an expendable launch system privately
          developed and manufactured by SpaceX during 2006-2009. On 28 September
          2008, Falcon 1 became the first privately-developed liquid-fuel launch
          vehicle to go into orbit around the Earth.
        </p>
        {/* Pill Component */}
        <div className="flex pt-4">
          <Pill data="32.25m" />
          <Pill data="2 landing legs" />
          <Pill data="First flight 2006-03-04" />
        </div>
      </div>
    </div>
  );
};

export default Card;
