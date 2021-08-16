import React from 'react'
import { useParams, useLocation, useHistory } from 'react-router-dom'
//useParams returns: an object of key/value pairs of URL parameters. Use it to access match.

const User = () => {
    const {fname,lname}=useParams();    //name should match
    const location =useLocation();
    const history =useHistory();
    return (
        <>
           <h1>My name is {fname} {lname}</h1> 
           <p>My url is {location.pathname}</p>
           {location.pathname===`/user/aditi/khot`?
           <button onClick ={history.goBack()}>Click Me</button>: null}
        </>
    )
}
export default User;
