import RestaurantListItemComponent from "./RestaurantListItemComponent";
const RestaurantListComponent = ({ restaurants }) => {
  return (
    <div className="restaurant-list">
      {restaurants?.map((restaurant, i) => (
        <RestaurantListItemComponent key={i} restaurant={restaurant} />
      ))}
    </div>
  );
};
export default RestaurantListComponent;
