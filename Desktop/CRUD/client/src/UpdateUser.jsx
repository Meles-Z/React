
import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom'

function UpdateUser() {
  const {_id:id}=useParams();
  const [name, setName] = useState();
  const [email, setEmail]= useState();
  const [age, setAge]=useState();
  const navigate=useNavigate()

  useEffect(()=>{ 
    axios.get(`http://localhost:3000/getUser/${id}`)
    .then((result=>{console.log(result)
      setName(result.data.name)
      setEmail(result.data.email)
      setAge(result.data.age)
    }))
    .catch((error=>console.log(error)))
  },[id])
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
    <div className="w-50 bg-white rounded p-3">
      <div className="mb-2">
        <label htmlFor="">Name</label>
        <input type="text" placeholder="Enter Name" className="form-control" value={name}/>
      </div>
      <div className="mb-2">
        <label htmlFor="">Email</label>
        <input type="email" placeholder="Enter Email" className="form-control" value={email}/>
      </div>
      <div className="mb-2">
        <label htmlFor="">Age</label>
        <input type="number" placeholder="Enter Age" className="form-control" value={age}/>
      </div>
      <button className="btn btn-success">Update</button>
    </div>

   </div>
  )
}

export default UpdateUser