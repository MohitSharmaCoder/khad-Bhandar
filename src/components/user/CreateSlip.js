import React,{useState} from 'react'
const Dstyle = ()=>{
  return (
    <style>
      {`
        @media screen and (max-width:968px){
          .form{
              width:100%;
              padding-top:50px;
          }
      }
      `}
    </style>
  )
}
const CreateSlip = () => {
    const [showDetail,setShowDetail] = useState({
        Buyer_Name:"",
        Sold:""
    })
  return (
    <div className='form'>
        <div className="my-2 w-100">  
        <div className="mb-3">
        <input type="text" className="form-control" value={showDetail.Buyer_Name} onChange={e=> setShowDetail(e.target.value)} id="in1" name='name'  placeholder="Buyer Name"/>
        </div>
        <div className="mb-3">
        <input type="text" className="form-control" value={showDetail.Sold} onChange={e=> setShowDetail(e.target.value)} id="in1" name='name' placeholder="Sold"/>
        </div>
        </div>
        <Dstyle/>
    </div>
  )
}

export default CreateSlip