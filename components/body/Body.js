import RestaurantCard from "../restaurantCard/RestaurantCard";
import { SearchInput } from "../searchInput/SearchInput";
import Shimmer from "../shimmer/Shimmer";
import "./body.css";
import {fetchResData} from "../../utils/utils.js"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import useOnlineStatus from "../../utils/useOnlineStatus";
const Body = () => {
    // let resList = data?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const [resList, setResList] = useState([]);
    const [restaurantList, setRestaurantList] = useState([]);
    useEffect(() =>{
      (async ()=> {
        const data = await fetchResData();
        setResList(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setRestaurantList(data?.data?.cards[2]?.card?.card?.gridElements?.infoWithStyle?.restaurants);      
      })();
    },[])
    const onlineStatus = useOnlineStatus();
    if(onlineStatus === false) return (
      <div>
        <h1>Looks like you are offline</h1>
        <h3>Please check your internet connection.</h3>
      </div>
    )

    const getFilteredList = (filteredList) => {
      setRestaurantList(filteredList)
    }

  return resList.length === 0? <Shimmer/> : (
    <div className="body">
      <SearchInput resList={resList} filteredList={getFilteredList}/>
      <div className="res-container">
        {restaurantList.map((restaurant) => (
          <Link className="res-restaurant-card" key={restaurant.info.id}
          to={"/restaurant/"+restaurant.info.id}><RestaurantCard resData={restaurant} /></Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
