import RestaurantCard, { RestaurantWithLabel } from "./ResturantCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../../utils/useOnlineStatus";

const Body = () => {
  const [resturantList, setResList] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    console.log("jsonData", json);
    let resData =
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    console.log("promoted", resData[0].info.promoted);
    setResList(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
    setfilterRes(
      json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const [searchText, setSearchText] = useState("");
  const [filterRes, setfilterRes] = useState([]);

  const onlineStatus = useOnlineStatus();
  const RestaurantCardPromoted = RestaurantWithLabel(RestaurantCard);

  if (onlineStatus === false) {
    return <h1>You are offline. Please check your internet connection</h1>;
  }

  return resturantList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="m-4 p-4">
          <input
            className="border border-black border-solid"
            type="text"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          ></input>
          <button
            className="px-4 py-2 bg-green-400 m-4 rounded-lg"
            onClick={() => {
              const filterResList = resturantList.filter((res) =>
                res.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setfilterRes(filterResList);
            }}
          >
            search
          </button>
        </div>
        <div>
          <button
            className="px-4 py-2 bg-gray-400 m-4 rounded-lg"
            onClick={() => {
              const filteredList = resturantList.filter(
                (res) => res.info.avgRating > 4.3
              );
              setfilterRes(filteredList);
            }}
          >
            Top Rated Restaurant
          </button>
        </div>
      </div>
      <div className="flex flex-wrap">
        {filterRes.map((restaurant) => (
          <Link key={restaurant.id} to={"/restaurants/" + restaurant.info.id}>
            {restaurant.info.promoted ? (
              <RestaurantCardPromoted resData={restaurant.info} />
            ) : (
              <RestaurantCard resData={restaurant.info} />
            )}

            {/* <RestaurantCard  resData={restaurant.info}/> */}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
