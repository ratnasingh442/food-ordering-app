import { useState, useEffect } from "react";

const User = ({name,location}) =>{

    const [count, setCount] = useState(0);
    const [count2, setCount2] = useState(1);

    // useEffect(()=>{
    //     //API call
    //     setInterval(()=>{     // need to double chcek this!
    //         console.log("Namaste React app")

    //     },1000)

    //     //Will be called when unmounting, inplace of componentWillUnmount in functional component

    //     return ()=>{
    //     }
    // },[])
    

    return (<div className="user-card">
        <h2>Count1: {count}</h2>
        <h2>Count2: {count2}</h2>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ratnasingh442@</h4>
    </div>)
};
export default User;