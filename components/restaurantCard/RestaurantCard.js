import "./restaurantCard.css";
const RestaurantCard = (props) => {
    const {resData} = props;
    const {cloudinaryImageId, cuisines, areaName , avgRating, name} = resData?.info;
    return (
        <div className="res-card">
                <img className="res-img" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" +cloudinaryImageId} />
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