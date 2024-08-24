import { CDN_URL } from "../../utils/constants";

const RestaurantCard = (props) => {
  const { resData } = props;
  console.log("props", resData);
  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    deliveryTime,
  } = resData;
  return (
    <div className="m-4 p-4 w-[250px] rounded-xl bg-grey-300 hover:bg-gray-400">
      <img className="res-logo" src={CDN_URL + cloudinaryImageId}></img>
      <h3 className="font-bold py-4">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating}</h4>
      <h4>{costForTwo}</h4>
      <h4>{deliveryTime}</h4>
    </div>
  );
};

export const RestaurantWithLabel = (RestaurantCard) => {
  return (props) => {
    console.log("props with label", props);
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-lg">
          Promoted
        </label>
        <RestaurantCard {...props} />
      </div>
    );
  };
};

export default RestaurantCard;
