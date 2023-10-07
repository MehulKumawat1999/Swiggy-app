import { MENU_API, RES_API } from "../config";

export async function fetchResData () {
    const data = await fetch(RES_API);
    const json = await data.json();
    return json;
}
export async function fetchMenuData (resId) {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    return json;
}
