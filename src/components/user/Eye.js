import React, {useState, useEffect} from 'react';
import axios from 'axios';
import ReactHtmlParser from 'react-html-parser'; 
import CreateSlip from './CreateSlip';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Estyle = ()=>{
    return (
        <style>
            {`
            .container-edit{
                width:40%;
            }
            @media screen and (max-width:700px){
                .container-edit{
                    width:100%;
                    overflow:auto;
                }
            }
            `}
        </style>
    )
}
const Eye = (props) => {
    const [res, setRes] = useState([])
    const [second, setSecond] = useState("d-none")
    const [form, setForm] = useState("d-block")
    const [showDetail, setShowDetail] = useState({
        Buyer_Name:"",
        Sold:"",
    })
    const [anOther, setAnOther] = useState("d-block")
    const {id} = props
    const loadUserDetail = async ()=>{
        const result = await axios.get(`http://localhost:3002/users/${id}`)
        setShowDetail(result.data)
    }
    const openHtml = async ()=>{
        setSecond("d-block w-100")
        setForm("d-none")
        setAnOther("d-block")
        const {data} = await axios.get(`https://ferltilizer.herokuapp.com/api/v1/getSlip?id=624559725ea428e656d1cc72&sold=2&buyer=rohit`,{
            headers:{
                auth:"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InJodHJveTE3MkBnbWFpbC5jb20iLCJpYXQiOjE2NDg3MTI2NjJ9.2fZ_5QnL44q95up2KHbguE8y0jgU8u43Gux7L4F-neQ"
            }
        })
        if(data.html){
            res.push(data.html)
        }
        else{
            toast(data.message)
        }
        // setSecond("d-block w-100")
        // setForm("d-none")
        // setAnOther("d-block")
        console.log(data)
    }
    console.log(res)
    const anOtherSlip =()=>{
        setForm("d-block w-100")
        setAnOther("d-none")
    }
    useEffect(()=>{
        loadUserDetail() 
    },[])

  return (
      <div className='w-100'>
    <div className={`container-edit m-auto shadow-light ${form} shadow px-4 py-5 rounded`}>
        <CreateSlip/>
        <div className="div w-100">  
            <button className="btn btn-success w-100" onClick={openHtml}>Create Slip</button>
        </div>
    </div>
    <div className={second}>
            <div style={{overflow:"auto"}} id="addSlip" className='my-3 p-2 mt-2'>
                { res.map((res)=>{
                    return (
                        ReactHtmlParser(res.substring(247,1810))
                    )
                }) }
            </div>
        <div className={`div w-100 py-3 ${anOther}`}>
            <button className={`btn btn-success w-100`} id="addBtn" onClick={anOtherSlip}>Create Another Slip</button>
        </div>
    </div>
    <ToastContainer />
        <Estyle/>
    </div>
    // https://ferltilizer.herokuapp.com/api/v1/getSlip?id=6242ff53815413e7e95ebd1a&sold=2&buyer=rohit
  )
}

export default Eye