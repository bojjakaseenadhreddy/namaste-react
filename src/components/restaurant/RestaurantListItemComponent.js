const RestaurantListItemComponent = ({ restaurant }) => {
  const IMG_URL =
    "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +
    restaurant.info.cloudinaryImageId;
  return (
    <div className="restaurant-list-item">
      <img className="restaurant-list-item-banner" src={IMG_URL} />
      <div className="restaurant-list-item-content">
        <p className="restaurant-name">{restaurant.info.name}</p>
        <p className="price-for-two">
          Price For Two - ${restaurant.info.costForTwo}
        </p>
        <p className="rating">Rating {restaurant.info.avgRating}</p>
      </div>
    </div>
  );
};

export default RestaurantListItemComponent;
