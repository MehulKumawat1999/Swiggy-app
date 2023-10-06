import RestaurantCard from "../restaurantCard/RestaurantCard";
import Shimmer from "../shimmer/Shimmer";
import "./body.css";
// import { data } from "../../utils/mockData.js";
import { useEffect, useState } from "react";
const Body = () => {
    // let resList = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const [resList, setResList] = useState([]);
    useEffect(()=>{
      // const data = fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9166595&lng=75.7960106&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      // const json = data.json();
      // setResList(json?.data?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      console.log("hello effect");
      fetchData();
    },[])

    const fetchData = async () => {
      const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9166595&lng=75.7960106&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
      const json = await data.json();
      await setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      // console.log(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    

    

  return resList.length === 0? <Shimmer/> : (
    <div className="body">
      <div className="search">
        <div className="search-text">
          <button className="filter-btn" onClick={() => {
                setResList(resList.filter((res) => res.info.avgRating>5));
          }}>
            Top Rated Restraunts
          </button>
        </div>
        {/* <div className="search-input"><input /></div> */}
      </div>
      <div className="res-container">
        {resList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
