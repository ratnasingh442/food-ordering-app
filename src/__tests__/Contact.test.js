import { render, screen } from "@testing-library/react";

import Contact from  '../components/Contact';

import "@testing-library/jest-dom"


describe("Contact Us test cases", ()=>{
    it("Should load contact us component", ()=>{
        render(<Contact/>);
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    })
    
    fit("Should have button", ()=>{
        render(<Contact/>);
        const button = screen.getByRole("button");
        const btn = screen.getByText('Submit');
        const inputBoxes = screen.getAllByRole('textbox');
        expect(inputBoxes).toBeTruthy();
        expect(button).toBeInTheDocument();
        expect(btn).toBeInTheDocument();
        expect(inputBoxes.length).toBe(2);
    })

})
