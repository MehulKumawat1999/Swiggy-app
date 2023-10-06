import RestaurantCard from "../restaurantCard/RestaurantCard";
import { SearchInput } from "../searchInput/SearchInput";
import Shimmer from "../shimmer/Shimmer";
import "./body.css";
import {fetchData} from "../../utils/utils.js"

import { useEffect, useState } from "react";
const Body = () => {
    // let resList = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const [resList, setResList] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect( async() =>{
      const data = await fetchData();
      setResList(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
      setRestaurantList(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);      
    },[])

    // const fetchData = async () => {
    //   const data = await fetch("https://corsproxy.io/?https://www.swiggy.com/dapi/restaurants/list/v5?lat=26.9166595&lng=75.7960106&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    //   const json = await data.json();
    //   setResList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    //   setRestaurantList(json?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    // };

    const getFilteredList = (filteredList) => {
      setRestaurantList(filteredList)
    }
    
  return resList.length === 0? <Shimmer/> : (
    <div className="body">
      <SearchInput resList={resList} filteredList={getFilteredList}/>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
