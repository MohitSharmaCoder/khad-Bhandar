import React, {useState, useEffect} from 'react'

import axios from 'axios'
import { useDispatch } from 'react-redux'

const Nstyle = ()=>{
    return(
        <style>
            {`
             @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
             .popin{
                 font-family: 'Poppins', sans-serif;
             }
             .colr{
                background-color: rgba(52, 197, 52, 0.767);
                }
                @media screen and (max-width:990px){
                    .bb-buttonv{
                        margin-top:10px;
                    }
                    .form-n{
                        margin:auto;
                        display:none;
                    }
                    
                }
                    @media screen and (max-width:800px){
                        .div{
                            display:flex;
                            justify-content:space-between;
                        }
                    }
            `}
        </style>
    )
}

const Fboard = () => {
    const dispatch = useDispatch()
    const [text, setText] = useState("")
    const [click,setClick] = useState(false)
    const handleClick =(e)=>{
        e.preventDefault()
        // console.log(text)
        setClick(true)
    }
    

    useEffect(()=>{
        axios.get(`https://ferltilizer.herokuapp.com/api/v1//product?name=${text}`)
        .then((resp)=>{
            dispatch({type:'products',data:resp.data})
            
        })
    },[click])
    
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light popin">
            <div className="container-fluid">
                <a className="navbar-brand form-n" href="/">
                    <img src="./images/fz3.png" alt="" width="42" height="42"/>
                </a>
                <div className="navbar-collapse" id="navbarSupportedContent">
                <form className="d-flex m-auto">
                    <input className="form-control me-2" type="search" value={text}  onChange={e=>setText(e.target.value)} placeholder="Search" aria-label="Search"/>
                    <button onClick={handleClick} className="btn text-white border colr" type="submit">Search</button>
                </form>
                <div className="div">
                <span className="bb-buttonv">
                <a href="/users/add" className="btn text-white colr bb-buttonv">Create Item</a></span>
                <span className="ms-3 bb-buttonv"><button className="btn text-white ms-3 bb-buttonv colr" type="submit">Logout</button></span>
                </div>
                </div>
            </div>
        </nav>
        <Nstyle/>
    </div>
  )
}

export default Fboard