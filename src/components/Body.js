import {useState,React, useEffect} from 'react';
import ReactDOM  from 'react-dom/client';
import Card, {withPromotedLabel} from './Card';
import { resList } from '../utils/data';
import { SWIGGY_API } from '../utils/constants';
import Shimmer from './Shimmer';
import { Link } from 'react-router-dom';
import RestaurantMenu from './RestaurantMenu';
import useOnlineStatus from '../utils/useOnlineStatus';
import UserContext from '../utils/UserContext';
import { useContext } from 'react';




const Body = () => {
    //Local state variable-Superpowerful variable
    
    //Whenever state variable changes, React rerender the component

    //Hooks are normal js functions


    //This below line is simple array destructuring
    let [mockData,setMockData] = useState([]);
    let [searchText, setSearchText] = useState("");
    let [filterData, setFilterData] = useState([]);
    const PromotedComponent = withPromotedLabel(Card);

    //Loads->First render->API call-> Re-render

    //If no depedency array - use effect is called on every render.
    //If depedency array is empty = only initial render, just once.
    // if something present in array, on changing that variable , it is called.

    const {loggedInUser, setUserName} = useContext(UserContext);


    useEffect(()=>{
        fetchData(); //api call
    },[]);
    const fetchData = async () => {
        const data = await fetch(SWIGGY_API);
        const json  = await data.json();
        console.log("Mock data = ", json);

        //Optional chaining

        setFilterData(json?.data?.cards?.slice(3));
        setMockData(json?.data?.cards?.slice(3)); //re-renders
        
    };

    const onlinestatus = useOnlineStatus();
    if(onlinestatus === false){
        return (
            <div>
                <h1>Looks like you are offline! Please check your internet</h1>
            </div>
        )
    }

    
    // console.log("Body rendered first time");// first time render

    //conditional rendering
   
    return  mockData.length === 0?(
        <div>

       <Shimmer />
       </div>
       ) : (
        <div data-testid="resCard">
            <div className="flex">


            <div className='search m-4 p-4 '>
            <input data-testid="searchText"  className = "border border-solid border-black rounded-lg " value={searchText} onChange={(e)=>{
                setSearchText(e.target.value);
               
            }}/>
            <button className = "px-4 py-2 m-4 bg-green-100 rounded-lg"onClick={()=>{
                let filteredData =  mockData.filter((val)=>val.card.card.info.name.toLowerCase().includes(searchText.toLowerCase()))
                setFilterData(filteredData)}}>Search</button>
            </div>
            <div className='top-rated-res flex items-center'>
            <button className='px-4 py-2 bg-gray-100 rounded-lg' onClick={()=>{
                //normal variable
                // console.log(v);
                let filteredData = filterData.filter((v)=>v.card.card.info.avgRating>=4)
                setFilterData(filteredData);
            }}>Top Rated Restaurants</button>
            </div>
            
            <input className='border border-solid border-black rounded-lg m-4 p-4' onChange={(e)=>setUserName(e.target.value)} value={loggedInUser} />
            </div>
            <div className='container flex flex-wrap'>
                {
                filterData.map(v => 
                <Link to={"/"+ v.card.card.info.id} key={v.card.card.info.id}>
                    {v.card.card.info.aggregatedDiscountInfoV3
?( <PromotedComponent name={v.card.card.info.name} rating={v.card.card.info.avgRating} address={v.card.card.info.areaName} image={v.card.card.info.cloudinaryImageId
} />): 
                    (<Card  name={v.card.card.info.name} rating={v.card.card.info.avgRating} address={v.card.card.info.areaName} image={v.card.card.info.cloudinaryImageId} />)}
                </Link>)
                }
            </div>
        </div>
    )
}


export default Body;