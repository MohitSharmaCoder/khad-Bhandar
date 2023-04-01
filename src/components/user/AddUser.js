import axios from 'axios'
import React, {useState} from 'react'
import {useHistory} from 'react-router-dom'
// import Fboard from '../Fboard'

const Addstyle = ()=>{
    return (
        <style>
            {`
            .container-add{
                width:40%;
            }
            @media screen and (max-width:700px){
                .container-add{
                    width:95%;
                }
            }

            `}
        </style>
    )
}


const AddUser = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",
        email:"",
        username:"",
        phone:"",
        website:"",
    })
    const inputChnage = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        await axios.post("http://localhost:3002/users", user)
        history.push("/")
    }
  return (
      <>
    <div className='container-add m-auto shadow-light my-5 shadow px-4 py-5 rounded'>
        <form onSubmit={e=> onSubmit(e)}>
        <div className="mb-3">
        <input type="text" className="form-control" id="in1" name='name' value={user.name} onChange={e=> inputChnage(e)} placeholder="Product Name"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in2" name='username' value={user.username} onChange={e=> inputChnage(e)} placeholder="Quantity"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in3" name='email' value={user.email} onChange={e=>inputChnage(e)} placeholder="Buyer name"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in4" name='phone' value={user.phone} onChange={e=> inputChnage(e)} placeholder="Total"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in5" name='website' value={user.website} onChange={e=> inputChnage(e)} placeholder="Description"/>
        </div>
        <div className="div w-100">  
            <button className="btn btn-success w-100">Add Item</button>
        </div>
        
        </form>

    </div>
        <Addstyle/>
    </>
  )
}

export default AddUser