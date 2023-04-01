import axios from 'axios'
import React, {useState, useEffect} from 'react'
import {useHistory, useParams} from 'react-router-dom'

const Estyle = ()=>{
    return (
        <style>
            {`
            .container-edit{
                width:40%;
            }
            @media screen and (max-width:700px){
                .container-edit{
                    width:95%;
                }
            }

            `}
        </style>
    )
}

const Edit = () => {
    const history = useHistory()
    const [user, setUser] = useState({
        name:"",
        email:"",
        username:"",
        phone:"",
        website:"",
    })
    const {id} = useParams()
    const inputChnage = (e)=>{
        setUser({...user, [e.target.name]:e.target.value})
    }
    const onSubmit = async (e)=>{
        e.preventDefault()
        await axios.put(`http://localhost:3002/users/${id}`, user)
        history.push("/")
    }
    const loadUser = async ()=>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setUser(result.data)
    }
    useEffect(()=>{
        loadUser() 
    },[])

  return (
    <div className='container-edit m-auto shadow-light  shadow px-4 py-5 rounded'>
        <form onSubmit={e=> onSubmit(e)}>
        <div className="mb-3">
        <input type="text" className="form-control" id="in1" name='name' value={user.name} onChange={e=> inputChnage(e)} placeholder="Product Name"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in2" name='username' value={user.username} onChange={e=> inputChnage(e)} placeholder="Quantity"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" id="in3" name='email' value={user.email} onChange={e=>inputChnage(e)} placeholder="Sold"/>
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



        <Estyle/>
    </div>
  )
}

export default Edit