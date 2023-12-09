import React, {useContext} from 'react';
import ReactDOM  from 'react-dom/client';
import { CARD_IMG } from '../utils/constants';
import { IMAGE } from '../utils/constants';
import UserContext from '../utils/UserContext';

const Card = (props) =>{
    // console.log("Inside")
    console.log("Data = ", props);
    const {name, rating, address, image} = props;
    const {loggedInUser} = useContext(UserContext);
    // console.log("Inside card", name);
    return (
        <div className='card p-4 m-4 w-[250px] bg-gray-100 hover:bg-gray-200'>
                    <img className="rounded-lg" src={IMAGE+image}></img>
                    <ul>
                        <li className='font-bold py-2 text-lg'>{name}</li>
                        <li>{rating}</li>
                        <li>{address}</li>
                        <li className='font-bold'>{loggedInUser}</li>
                    </ul>

                </div>
    )
}
//Higher order component

// input - Card, output  - PromotedCard

export const withPromotedLabel = (Card)=>{
    return (props)=>{
        return (
            <div>
                <label className='absolute bg-black text-white m-2 p2 rounded-lg'>Discounted</label>
                <Card {...props}/>
            </div>
        )
    }
}
export default Card;