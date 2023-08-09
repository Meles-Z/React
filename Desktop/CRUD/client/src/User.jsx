
import { Link } from "react-router-dom"
import { useState } from "react"


function User() {
    const [users, setUsers]=useState([
        {
            Name:'Meles', Email:"meles.zawdie@gmail.com", Age:24
        }
      
    ])
    
  return (
    <div className="d-flex vh-100 bg-primary justify-content-center align-items-center">
        <div className="w-50 bg-white rounded p-3">
            <Link to="/create" className="btn btn-success">Add +</Link>
            <div className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index)=>{
                            return <tr key={index}>
                                <td>{user.Name}</td>
                                <td>{user.Email}</td>
                                <td>{user.Age}</td>  
                                <td>
                                <Link to={`/update/${user._id}`} className="btn btn-success">Update</Link> 
                                    <button className="btn btn-success mx-1">Delete</button>
                                </td>
                            </tr>
                        })
                    }
                </tbody>
            </div>
        </div>  
    </div>
  )
}

export default User