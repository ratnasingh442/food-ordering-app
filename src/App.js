import React , {lazy, Suspense, useState, useEffect}from 'react';
import ReactDOM  from 'react-dom/client';
import Body from "../src/components/Body";
import Header from './components/Header';
// import About from './components/About';
import Error from './components/Error';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Contact from './components/Contact';
import RestaurantMenu from './components/RestaurantMenu';
// import Grocery from './components/Grocery';
import UserContext from './utils/UserContext';

import { Provider } from 'react-redux';
import appStore from './utils/appStore';
import Cart from './components/Cart';


//LAZY LOADING
//Chucnking
//on demand loading
//dynamic bundling
//code splitting

const Grocery = lazy(()=>import('./components/Grocery'));
const About = lazy(()=>import('./components/About'));
const AppLayout = ()=>{
    const [userName, setUserName] = useState("Default User");
useEffect(()=>{
    const data = {
        name: "Ratna Singh"
    }
    setUserName(data.name);
},[])
    return(
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setUserName}}>
        <Header />
        <Outlet />
        </UserContext.Provider>
        </Provider>
    )
}


const appRoutes = createBrowserRouter([{
    path:'/',
    element: <AppLayout />,
    children:[
        {
            path: '/',
            element: <Body />
        },
        {
            path: '/about',
            element: <Suspense fallback={<h1>Loading....</h1>}>
            <About />
            </Suspense> 
        },
            {
                path: '/contact',
                element: <Contact />
            },
            {
                path: '/:resId',
                element: <RestaurantMenu/>
            },
            {
                path: '/grocery',
                element:
                <Suspense fallback={<h1>Loading....</h1>}>
                <Grocery />
                </Suspense> 
            },
            {
                path: '/cart',
                element: <Cart />
            }
    ],
    errorElement: <Error />
}
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRoutes}/>);