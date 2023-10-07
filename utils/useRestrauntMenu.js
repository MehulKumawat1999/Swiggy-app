import { useEffect, useState } from "react";
import { fetchMenuData } from "./utils";

const useRestrauntMenu = (resId) => {
    const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        (async () => {
            const data = await fetchMenuData(resId);
            setMenuList(data?.data.cards);
        })();
    }, []);
    return menuList;
}

export default useRestrauntMenu;