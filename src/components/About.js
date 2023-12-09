import User from './User'
import UserClass from './UserClass';
import React from 'react';
import { GITHUB_API } from '../utils/constants';
import UserContext from '../utils/UserContext';


class About extends React.Component{
    constructor(props){
        super(props);
        console.log("Parent Constructor")
        this.state = {
            userInfo:{name: "Dummy Name", location:"Dummy Location", avatar_url:"http://dummy_url"}
        }
    }
    render(){
        console.log("Parent Render")
        const {name, location, avatar_url} = this.state.userInfo;
        return (
            <div>
            <h1>This is about is component</h1>
            <div>Logged In User:&nbsp;
                <UserContext.Consumer>
                    {(data)=>{
                        return(<span>{data.loggedInUser}</span>)
                        }}
                </UserContext.Consumer>
            </div>
            <img src={avatar_url} ></img>
            <h3>Name: {name}</h3>
            <h3>Location: {location}</h3>
            <User name={"Ratna Singh(function)"} location={"Bangalore(function)"} />
            <UserClass  name={"Ratna Singh(Class)"}location={"Bangalore(class)"} />
            <UserClass  name={"Elon Musk(Class)"}location={"Bangalore(class)"} />

            </div>
        )

    }
    async componentDidMount(){
        console.log("Parent componet did mount")

        //making API call
    const data = await fetch(GITHUB_API);
    const json = await data.json();
    console.log(json)
    this.setState({
        userInfo: {name: json.name,
        location:json.location,
    avatar_url:json.avatar_url}
    })


    }
    
    componentDidUpdate(){
        console.log("Change happend")
    }
    componentWillUnmount(){
        console.log("Componet Unmounted")
    }
}
// const About = ()=>{
//     return (
//         <div>
//         <h1>This is about is component</h1>
//         <User name={"Ratna Singh(function)"} location={"Bangalore(function)"} />
//         <UserClass  name={"Ratna Singh(Class)"}location={"Bangalore(class)"} />
//         </div>
//     )
// }

export default About;