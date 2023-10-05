import RestaurantCard from "../restaurantCard/RestaurantCard";
import "./body.css";
import { data } from "../../utils/mockData.js";
import { useState } from "react";
const Body = () => {
    let resList = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const [resListt, setResList] = useState(resList);



  return (
    <div className="body">
      <div className="search">
        <div className="search-text">
          <button className="filter-btn" onClick={() => {
                setResList(resList.filter((res) => res.info.avgRating>4));
          }}>
            Top Rated Restraunts
          </button>
        </div>
        {/* <div className="search-input"><input /></div> */}
      </div>
      <div className="res-container">
        {resListt.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
