import React, { useContext, useState } from 'react';
import { LOGO_URL } from '../utils/constants';
import {Link } from 'react-router-dom';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import {useSelector} from 'react-redux';
const Header = () => {
    const [btnName, setBtnName] = useState('Login');
    const onlinestatus = useOnlineStatus();
    const {loggedInUser} = useContext(UserContext);

    //subscribing to store. Here we are just subscribing to items in store
    const cartItems = useSelector((store)=>store.cart.items)
    return (
        <div className='flex justify-between bg-pink-100 shadow-lg mb-2 sm:bg-green-100 lg:bg-yellow-100'>
            <div>
            <img className="w-56" src={LOGO_URL} alt="food-logo"></img> 
</div>
<div className='flex items-center'>
           <ul className='flex p-4 m-4'>
            <li className="px-4">
               Online Status: {onlinestatus? "🟢": "🔴" }
            </li>
            <li className="px-4"><Link to="/">
                Home
                </Link>
            </li>
            <li className="px-4"><Link to="/about">About</Link></li>
            <li className="px-4"> <Link to="/contact">Contact</Link></li>
            <li className="px-4"><Link to="/grocery">Grocery</Link></li>
            <li className="px-4 font-bold"><Link to='/cart'>Cart: {" "+cartItems.length+" "}items</Link></li>
            <li className="px-4"> <button onClick={()=>{
                btnName==='Login'?setBtnName('Logout'):setBtnName('Login')
            }} >{btnName}</button></li>
            <li>{loggedInUser}</li>
           </ul>
        </div>
        </div>
    )
}

export default Header;