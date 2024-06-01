import { useEffect, useState } from "react";
import Shimmer from "../common/Shimmer";
import RestaurantListComponent from "./RestaurantListComponent";
const RestaurantsContainerComponent = () => {
  const [restaurants, setRestaurants] = useState();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setRestaurants(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  if (restaurants.length === 0) {
    return <Shimmer />;
  }
  return (
    <div className="restaurants-container">
      <button
        onClick={() => {
          const filteredRestaurants = restaurants.filter(
            (r) => r.info.avgRating > 4
          );
          setRestaurants(filteredRestaurants);
        }}
      >
        Top rated restaurants
      </button>
      <RestaurantListComponent restaurants={restaurants} />
    </div>
  );
};
export default RestaurantsContainerComponent;
