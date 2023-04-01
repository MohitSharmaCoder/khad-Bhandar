import React, {useState,useEffect} from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'
import * as FaIcon from 'react-icons/fa'
import * as BiIcon from 'react-icons/bi'
import * as MdIcon from 'react-icons/md'
import Eye from './user/Eye'
const TabStyle = ()=> {
    return (
        <style>
            {`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@200;300&display=swap');
                .popin{
                    font-family: 'Poppins', sans-serif;
                }
                .card-icon{
                    color:rgba(52, 197, 52, 0.767);
                    font-size:30px;
                }
                .card-amount{
                    font-size:30px;
                }
                .table-main{
                    width:100%;
                }
                .item-tab{
                    padding:10px 5px;
                    margin:10px 0px;
                    height:60px;
                    display:block;
                    margin-bottom:55px;
                }
                
                .d-phone{
                    display:none;
                }
                @media screen and (max-width:980px){
                    .d-laptop{
                        display:none;
                    }
                    .d-phone{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    .ddf{
                        display:flex;
                        justify-content:center;
                    }
                }
                @media screen and (max-width:780px){
                    .main-card{
                        height:150px;
                        display:flex;
                        justify-content:center;
                        align-items:center;
                        flex-direction:column;
                    }
                    .card-amount{
                        font-size:20px;
                        font-weight:600;
                    }
                    .d-laptop{
                        display:none;
                    }
                    .d-phone{
                        display:flex;
                        flex-wrap:wrap;
                    }
                    
                }
                .item-tab tr{
                    margin-bottom:55px;
                }
                .main-r{
                    align-items:center;

                }
                .container-fluid-main{
                    width:90%;
                }
                .br-one{
                    display:flex;
                    align-items:center;
                }
                .btn-succ{
                    background-color: rgba(52, 197, 52, 0.767);
                    color:white;
                }
                .btn-dan{
                    background-color: white;
                    font-size:20px;
                    color:#f7575c;
                }
                .btn-dan:hover{
                    color:#f7575c;
                }
                .product{
                    display:flex;
                    justify-content:center; 
                    align-items:center;
                }
                h2{
                    font-size:20px;
                    font-weight:600;
                    font-family: 'Poppins', sans-serif;
                }
                h5{
                    font-size:15px;
                    font-weight:500;
                }
                h3{
                    font-size:15px;
                    font-weight:600;
                }
                .w-n{
                    font-size:17px;
                    font-weight:600;
                }
                .w-dd{
                    width:98%;
                }
            `}
        </style>
    )
}

const TableCon = () => {
    const [data, setData] = useState("")
    const [users, setUsers] = useState([])
    const loadUsers = async ()=>{
      const resultone = await axios.get("http://localhost:3002/users").catch((error)=>{console.log(error)})
      // console.log(result.data)
      setUsers(resultone.data)
    }
    useEffect(() => {
      loadUsers()
    }, [])
    const deleteUser = async (id)=>{
      await axios.delete(`http://localhost:3002/users/${id}`)
      loadUsers()
    }

    useEffect(() => {
        axios.get("https://ferltilizer.herokuapp.com/api/v1/get_all_products_detail")
        .then((resp)=>{
            setData(resp.data.data[0])
        }).catch((error)=>{console.log(error)})
        // eslint-disable-next-line
      }, [])
  return (
    <>
        <div className="container-fluid-main m-auto my-5 popin">
            <div className="row">
                <div className="col-6 col-md-3 mb-3">
                    <div className="shadow p-3 bg-white rounded text-center">
                        <div className="card-body main-card">
                            <div className="card-icon mb-3"><FaIcon.FaShoppingBag/></div>
                            <h5 className="card-title">Total Product</h5>
                            <p className="card-amount">{data.count}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <div className="shadow p-3 bg-white rounded text-center">
                        <div className="card-body main-card">
                            <div className="card-icon  mb-3"><FaIcon.FaStore/></div>
                            <h5 className="card-title">Quantity</h5>
                            <p className="card-amount">{data.Quantity}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <div className="shadow p-3 bg-white rounded text-center">
                        <div className="card-body main-card">
                            <div className="card-icon  mb-3"><FaIcon.FaShoppingCart/></div>
                            <h5 className="card-title">Sold</h5>
                            <p className="card-amount">{data.Sold}</p>
                        </div>
                    </div>
                </div>
                <div className="col-6 col-md-3 mb-3">
                    <div className="shadow p-3 bg-white rounded text-center">
                        <div className="card-body main-card">
                            <div className="card-icon  mb-3"><BiIcon.BiMeteor/></div>
                            <h5 className="card-title">Total</h5>
                            <p className="card-amount">{data.total}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className={`container mt-5 mb-3 d-laptop`}>
                <div className="row d-laptop">
                    <div className="col-12 col-md-2 m-auto">
                    <h2 className="my-2 text-center">No</h2>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h2 className="my-2 text-center">Product Name</h2>
                    </div>
                    <div className="col-12 col-md-2 m-auto"> 
                    <h2 className="my-2 text-center">Quantity</h2>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h2 className="my-2 text-center">Sold</h2>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h2 className="my-2 text-center">Action</h2>
                    </div>
                </div>
            </div>

            <div className={`container d-laptop`}>
            {users.map((user, index)=>{
                return(
            <div className="row mb-5 d-laptop pt-3 pb-2 d-flex flex-wrap popin bg-light m-auto w-100 rounded-3">
                    <div className="col-12 col-md-2 m-auto pe-4">
                    <h3 className="my-2 text-center">{index+1}</h3>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h5 className="my-2 text-center"><span className='pe-2'><img style={{width:"50px", height:"50px"}} src="./images/fz3.png" alt="" /></span> {user.username.slice(0,7)}..
                    </h5>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h5 className="my-2 text-center">{index}..</h5>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <h5 className="my-2 text-center">{user.email.slice(0,12)}..</h5>
                    </div>
                    <div className="col-12 col-md-2 m-auto">
                    <div className="my-2 text-center">
                    <button className="btn btn-dan me-3" onClick={()=> deleteUser(user.id)}> <span><MdIcon.MdDelete/></span> </button>
                    <Link to={`/users/edit/${user.id}`} className="btn btn-succ">Edit</Link>
                    </div>
                    </div>
                    <p>
                    <button className="btn btn-light w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${user.id}`} aria-expanded="false" aria-controls={`collapseExample${user.id}`}>
                        <div className='text-center pt-3  w-n text-success'><p>Click Here To Create Slip</p></div>
                    </button>
                    </p>
                    <div className="collapse" id={`collapseExample${user.id}`}>
                    <div className="card card-body">
                        <div className="div my-3">
                            <Eye id={user.id} /> 
                        </div>
                    </div>
                    </div>
                </div>
                )
            }
            )}
        </div>
        <div className={`container d-phone my-5`}>
            {users.map((user, index)=>{
                return(
            <div className="row mb-5 pt-3 pb-2 d-flex flex-wrap popin bg-light m-auto w-100 rounded-3">
                    <div className="col-12 col-md-12 m-auto  product d-flex my-3">
                        <span className='pe-4 pb-2 me-5'><img style={{width:"50px", height:"50px"}} src="./images/fz3.png" alt="" /></span>
                    <h5 className="my-2 text-center pt-2">{user.username.slice(0,7)}....</h5>
                    </div>
                    <div className="col-12 col-md-12 text-center m-auto my-3">
                    <h5 className="my-2 text-center d-flex ddf me-2">
                        <div className='mx-3'><p className='w-n '>Quantuty</p><p>{index}.</p></div>
                        <div className='mx-3'><p className='w-n'>Sold</p><p>{user.email.slice(0,12)}..</p></div>
                    </h5>
                    </div>
                    <div className="col-12 col-md-12 m-auto my-4">
                    <div className="my-2 text-center">
                    <button className="btn btn-dan me-3" onClick={()=> deleteUser(user.id)}> <span><MdIcon.MdDelete/></span> </button>
                    <Link to={`/users/edit/${user.id}`} className="btn btn-succ">Edit</Link>
                    </div>
                    </div>
                    <p>
                    <button className="btn btn-light w-100" type="button" data-bs-toggle="collapse" data-bs-target={`#collapseExample${user.id}`} aria-expanded="false" aria-controls={`collapseExample${user.id}`}>
                        <div className='text-center pt-3  w-n text-success'><p>Click Here To Create Slip</p></div>
                    </button>
                    </p>
                    <div className="collapse" id={`collapseExample${user.id}`}>
                    <div className="card card-body">
                        <div className="div my-3">
                            <Eye id={user.id} />
                        </div>
                    </div>
                    </div>
                </div>
                )
            }
            )}
        </div>












        </div>
        <TabStyle/>
    </>
  )
}

export default TableCon