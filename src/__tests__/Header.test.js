import {fireEvent, render, screen} from '@testing-library/react'
import Header from '../components/Header';
import { Provider } from 'react-redux';
import appStore from '../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";


describe("Header component tests", ()=>{
    it('Should render header component with login button', ()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

        const loginBtn = screen.getByRole('button');
        expect(loginBtn).toBeInTheDocument();
    })

    it('Should render header component with cart items 0', ()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);

        const cart= screen.getByText('Cart: 0 items');

        expect(cart).toBeInTheDocument();
       
    })

    it('Should change login to logout on click', ()=>{
        render(
            <BrowserRouter>
            <Provider store={appStore}>
        <Header/>
        </Provider>
        </BrowserRouter>);
        const loginBtn = screen.getByRole("button", {name: "Login"});
        expect(loginBtn).toBeInTheDocument();
        fireEvent.click(loginBtn);
        const logoutBtn = screen.getByRole("button", {name: "Logout"});
        expect(logoutBtn).toBeInTheDocument();

    })

})

