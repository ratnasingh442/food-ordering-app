import { sum } from "../components/sum";


xit("Sum function should calculate sum of two numbers", ()=>{

    const result = sum(2,3)
    expect(result).toBe(5);
})