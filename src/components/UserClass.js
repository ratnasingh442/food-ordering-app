import React from 'react';

//Class based example
class UserClass extends React.Component{

    constructor(props){
        super(props) //H.W. why do we write super props?
        this.state = {
            count:0,
            count2:1,
            cont3:1
        }
        console.log(this.props.name + " Child Constructor")
    }
    componentDidMount(){
        console.log(this.props.name+"Child componet did mount")
    }
    componentWillUnmount(){
        console.log(this.props.name+"Child Componet Unmounted")
    }
    render(){
        console.log(this.props.name+" Child Render")
        const {name,location} = this.props;
        const {count, count2} = this.state;
        return (<div className="user-card">
             <h2>Count1: {count}</h2>
        <h2>Count2: {count2}</h2>
        <button onClick={()=>{
            this.setState({count:this.state.count+1,
            count2:this.state.count2+2});
        }}>Increase</button>
        <h2>Name: {name}</h2>
        <h3>Location: {location}</h3>
        <h4>Contact: ratnasingh442@</h4>
    </div>)
    }
    
}

export default UserClass;