import {render, screen} from '@testing-library/react';
import "@testing-library/jest-dom";
import Card from '../components/Card';
import { MOCK_DATA } from '../mocks/mockData';

describe("card component tests", ()=>{
    it("Render card", ()=>{
        const v = MOCK_DATA;
        render(<Card name={v.name} rating={v.rating} address={v.address} image={v.image} />)
        const name = screen.getByText('GOPIZZA');
        expect(name).toBeInTheDocument();

    })
})

//write test case for withPromotedLabel