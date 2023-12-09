import { useDispatch } from "react-redux";
import { IMAGE } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items}) => {
    const dispatch  = useDispatch();
    const handleItemAdd = (item)=>{
        //dispatch this action
        dispatch(addItem(item))

    }
    return (
        <div>
           {items.map((item)=>(
           <div key={item.card.info.id} className="p-2 m-4  border-black border-b-4 text-left ">
            <div >
            <div className="flex justify-between">
            <span>{item.card.info.name}</span>
            <img className="w-10"src={IMAGE+item.card.info.imageId}></img>
            <button className="bg-black text-white w-20 rounded-sm shadow-lg" onClick={()=>handleItemAdd(item)}>Add+</button>
            </div>
            <span className="mx-4">Rs. {item.card.info.price/100}</span>
            <div>
             <span className="text-sm">{item.card.info.description}</span></div></div>
           </div>
        ))}
        </div>

    )
}

export default ItemList;