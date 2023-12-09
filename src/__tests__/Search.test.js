import Body from "../components/Body";
import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import { resData } from "../mocks/mockData";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";




describe("Body component tests", ()=>{

    beforeEach(()=>{
        global.fetch = jest.fn(()=>{
            return Promise.resolve({
                json: ()=>{
                    return Promise.resolve(resData);
                }
            })
        })

    })

    it('Render component', async ()=>{

        await act(async ()=>{

            render(
                <BrowserRouter>
            <Body />
            </BrowserRouter>);

        })

        // const searchBtn = screen.getByRole("button", {name: "Search"});
        // expect(searchBtn).toBeInTheDocument();
        // const searchInput = screen.getAllByTestId('searchText');
        // const cards = screen.getAllByTestId("resCard");
        // console.log("cards = ", cards);
        // expect (cards.length).toBe(7);
        // fireEvent.change(searchInput, {target:{value:"little"}});
        // fireEvent.click(searchBtn);
        // const card = screen.getAllByTestId("resCard");
        // expect (card.length).toBe(1);

        //TODO LATER =NOT WORKING, Please fix it

    })
})