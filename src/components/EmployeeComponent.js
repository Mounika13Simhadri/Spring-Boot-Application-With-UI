import React, { useEffect, useState } from 'react';
import {useParams,Link} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';
import AddEmployee from './AddEmployee';
const EmployeeComponent=()=> {
    const [employees, setEmployees] = useState([])
    useEffect(()=>{
        getAllEmployees();
    },[])

    const getAllEmployees=()=>{
        EmployeeService.getAllEmployees().then((response)=>{
            setEmployees(response.data);
            console.log(response.data);
        }).catch(error=>{
            console.log(error);
        })
 }
   const deleteEmployee=(Id)=>{
    EmployeeService.deleteEmployee(Id).then((response)=>{
        getAllEmployees();
    }).catch(error=>{
        console.log(error);
    })
   }

  return (
    <div className="container">
        <h2 className="text-center">Employee Details</h2>
        <Link to={"/add-employee"} className="btn btn-primary mb-2">Add Employee</Link>
        <table className="table table-bordered table-striped">
            <thead>
                <th>Employee Id</th>
                <th>Employee Name</th>
                <th>Employee Salary</th>
                <th>Employee Designation</th>
                <th>Actions</th>
            </thead>
            <tbody>
                {
                    employees.map(
                        e=>
                        <tr key={e.id}>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.salary}</td>
                            <td>{e.designation}</td>
                            <td>
                                <Link className='btn btn-info' to={`/edit-employee/${e.id}`}>Edit</Link>
                                <Link className='btn btn-danger' onClick={()=>deleteEmployee(e.id)}>Delete</Link>
                            </td>
                        </tr>
                    )
                }
            </tbody>
        </table>
        
    </div>
  );
}

export default EmployeeComponent;