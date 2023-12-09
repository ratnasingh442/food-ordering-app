import { useEffect, useState } from "react";
import { MENU_ITEM } from "../utils/constants"


//Custom hook


const useRestaurantMenu = (resId) => {
    const [resInfo, setResInfo] = useState(null);

    useEffect(()=>{
        fetchData()

    },[])

    const fetchData = async ()=>{
        const data = await fetch(MENU_ITEM+resId);
        const json = await data.json();
        setResInfo(json);
    }
    

    return resInfo
}


export default useRestaurantMenu;