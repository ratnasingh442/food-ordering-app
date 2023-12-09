import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items);
    const dispatch = useDispatch();
    const clearCartAction = ()=>{

        dispatch(clearCart())

    }
    return (
        <div>
        <div className="text-center p-10 font-bold w-6/12 m-auto">
        <div><button className="m-5 bg-black text-white p-5" onClick={clearCartAction}>Clear Cart</button></div>
           <ItemList items = {cartItems}></ItemList>
        </div>
        </div>
    )
}

export default Cart;