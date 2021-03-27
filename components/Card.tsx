import Pill from "./Pill";
import { CardTypes } from "../types/Card";

const Card: React.VFC<Partial<CardTypes>> = ({
  id,
  name,
  description,
  metaData,
}) => {
  return (
    <div className="bg-white rounded-md text-black flex">
      {id && (
        <div className="bg-black rounded-md py-16 px-32 m-4">
          <img src={`/images/rockets/${id}.svg`} />
        </div>
      )}
      <div className="content flex-1 text-left p-10">
        <h2 className="text-2xl font-semibold pb-2">{name}</h2>
        <p>{description}</p>
        <div className="flex pt-4">
          {metaData.map((data) => (
            <Pill key={data} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
