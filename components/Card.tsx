import Pill from "./Pill";
import { CardTypes } from "../types/Card";

const Card: React.VFC<Partial<CardTypes>> = ({
  showImage,
  id,
  name,
  description,
  metaData,
}) => {
  return (
    <div className="bg-white rounded-md text-black flex flex-col lg:flex-row">
      {id && showImage && (
        <div className="bg-black rounded-md lg:w-72 h-60 m-4 mb-0 lg:mb-4">
          <div className="h-full flex items-center justify-center">
            <img src={`/images/rockets/${id}.svg`} />
          </div>
        </div>
      )}
      <div className="content flex-1 text-left p-5 lg:p-10">
        <h2 className="text-2xl font-semibold pb-2">{name}</h2>
        <p>{description}</p>
        <div className="flex pt-4 flex-col sm:flex-row">
          {metaData.map((data) => (
            <Pill key={data} data={data} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Card;
