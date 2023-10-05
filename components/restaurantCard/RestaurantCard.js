import "./restaurantCard.css";
import { CDN_URL } from "../../utils/utils";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, cuisines, areaName , avgRating, name} = resData?.info;
    return (
        <div className="res-card">
                <img className="res-img" src={CDN_URL +cloudinaryImageId} />
            <div className="res-details">
                <div className="res-name overflow">
                    {name}
                </div>
                <div className="res-rating detail-text">
                    {avgRating} star
                </div>
                <div className="res-cuisine overflow detail-text">
                    {cuisines.join(", ")}
                </div>
                <div className="res-location overflow detail-text">
                    {areaName}
                </div>
            </div>
        </div>   
    );
}
export default RestaurantCard;