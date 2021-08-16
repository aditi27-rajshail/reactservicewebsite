import React, { useState } from 'react'


const Contact = () => {
    const [data, setData]=useState({
        fname:"",
        email:"",
        num:" ",
        msg:" "
    });
    const InputEvent=(event)=>{
        const{name,value}=event.target;
        setData((olddata)=>{
            return{
                ...olddata,
                [name]:value
            }
        })
       
        
    }

    const formSubmit=(e)=>{
        e.preventDefault();
        alert(
            `my name is ${data.fname}.
            my phone number is ${data.num}
            my Email is ${data.email}
            my msg is ${data.msg}`
        )
        setData("");
        

    }
    return (
        <>
            <div className="my-3">
                <h1 className="text-center">Contact Us</h1>
            </div>
            <div className="container" contact_div>
                <div className="row" >
                    <div className="col-md-6 col-10 mx-auto">
                        <form onSubmit={formSubmit}>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Full name</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"  name="fname" value={data.fname} onChange={InputEvent} placeholder="Enter your full name" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Email address</label>
                                <input type="email" className="form-control" id="exampleFormControlInput1"  name="email" value={data.email} onChange={InputEvent} placeholder="name@example.com" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlInput1" className="form-label">Phone Number</label>
                                <input type="text" className="form-control" id="exampleFormControlInput1"  name="num" value={data.num} onChange={InputEvent} placeholder="Enter Phone Number" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleFormControlTextarea1" className="form-label">Any Comments</label>
                                <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" name="msg" value={data.msg} onChange={InputEvent}></textarea>
                            </div>
                            <div className="col-12 my-3">
                                <button className="btn btn-outline-primary" type="submit">Submit form</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Contact;