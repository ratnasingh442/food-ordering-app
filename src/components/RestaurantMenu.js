import { useEffect, useState } from "react"
import { MENU_ITEM } from "../utils/constants"
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestaurantCategories from "./RestaurantCategories";

const RestaurantMenu = () =>{

    const {resId} = useParams();
    const [showIndex, setShowIndex] = useState(null);

    // MADE CUSTOM HOOK


    // const [item, setItem] = useState(null);

    // useEffect(()=>{
    //     fetchItem();
    // },[]);
    // const fetchItem = async() =>{
    //    const data = await fetch(MENU_ITEM+ resId); 
    //    const json = await data.json();

    // //    console.log(json);
    //    setItem(json);
    // //    console.log(item);

    // }

    const item = useRestaurantMenu(resId)



   if(item === null){
    return (
        <div>
    <h1>Loading..</h1>
    </div>)
   }

   const {name} = item?.data?.cards[0]?.card?.card?.info;
   const items = item?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards[1].card.card.itemCards;
   const categories = item?.data?.cards[2]?.groupedCard.cardGroupMap.REGULAR.cards.filter((val)=>
    val.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")
    console.log(categories);
    return (
        <div className="text-center">
        <h1 className="font-bold my-6 text-2xl">Name: {name} </h1>
        <h4>Menu Items</h4>

        {/* categories accordian */}
       { categories.map((res, index)=><RestaurantCategories data={res?.card?.card} showItem = {showIndex==index?true:false} 
       setShowIndex  = {()=>setShowIndex(index)}/>)}
        
        </div>
    )
}

export default RestaurantMenu;