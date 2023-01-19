import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Create = () => {

    const[name,setName]=useState("")
    const[email,setEmail]=useState("")

    const history= useNavigate();

    const url = "https://63c9bc51c3e2021b2d5d45fa.mockapi.io/Form"
    const header={"Access-Control-Allow-Origin":"*"}
    const handleSubmit=(e)=>{
        e.preventDefault();
        axios.post(url,{
           name: name,email:email,header
        })
        history("/read")
    };

  return (
    <>
   <form>
    <div className="mb-3">
          <label  className="form-label">Name</label>
          <input type="text" className="form-control"
          onChange={(e)=>setName(e.target.value)}  />
        </div>
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input type="email" className="form-control"
            onChange={(e)=>setEmail(e.target.value)}
          aria-describedby="emailHelp" />
          
        </div>
        
        
        <button type="submit" className="btn btn-primary"
        onClick={handleSubmit}>Submit</button>
      </form>
    </>
  )
}

export default Create
