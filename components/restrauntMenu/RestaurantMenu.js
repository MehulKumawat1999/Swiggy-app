import Shimmer from "../shimmer/Shimmer";
import { useParams } from "react-router-dom";
import useRestrauntMenu from "../../utils/useRestrauntMenu";

const RestaurantMenu = ( ) => {
    // const [menuList, setMenuList] = useState([]);
    const {resId} = useParams();
    const menuList = useRestrauntMenu(resId);

    if(menuList.length === 0) return <Shimmer/>
    debugger
    const {itemCards} = menuList[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards ? menuList[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card : menuList[2].groupedCard.cardGroupMap.REGULAR.cards[2].card.card;
    
    // console.log(menuList[2].groupedCard.cardGroupMap.REGULAR.cards[1].card.card)
    // console.log(itemCards);
    
    return (
        <div className="restaurant-menu">
            <div className="restaurant-details">
                <div className="restaurant-detail">
                    <div className="restaurant-name">{menuList[0]?.card?.card?.info.name}</div>
                    <div className="restaurant-cuisine">{menuList[0]?.card?.card?.info.cuisines.join(", ")}</div>
                    <div className="restaurant-location">{menuList[0]?.card?.card?.info.locality}</div>
                </div>
                <div className="res-ratings"></div>
            </div>
            <div className="menu-items">
                    {itemCards.map((res) => <div key={res.card.info.id} className="menu-item">{res.card.info.name}</div>)}
            </div>
        </div>
    );
}
export default RestaurantMenu;