import { useRouteError } from "react-router-dom"

const Error = ()=>{

    const err = useRouteError();
    return (
        <>
        <h1> Opps something went wrong</h1>
        <h4>{err.status} : {err.statusText}</h4>
        </>
    )
}

export default Error;