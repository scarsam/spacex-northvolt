import Card from "./Card";
import { CardListTypes } from "../types/CardList";

const CardList: React.VFC<CardListTypes> = ({
  showImage = true,
  data,
  metaData,
}) => {
  return (
    <div className="max-w-full md:max-w-4xl m-auto">
      {data.map((item) => (
        <div key={item?.id} className="mb-10">
          <Card
            showImage={showImage}
            id={item?.id}
            name={item?.name}
            description={item?.description || item?.details}
            metaData={metaData(item)}
          />
        </div>
      ))}
    </div>
  );
};

export default CardList;
