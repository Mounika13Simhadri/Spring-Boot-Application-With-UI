import React,{useState,useEffect} from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService';
import EmployeeComponent from './EmployeeComponent';

const AddEmployee=()=> {

    const [id,setId]=useState(null);
    const [name,setName]=useState("");
    const [salary,setSalary]=useState(null);
    const [designation,setDesignation]=useState("");
    const {Id}=useParams();
    const navigate=useNavigate();


    const handleSubmit=(e)=>{
        e.preventDefault();
       const employee={id,name,salary,designation};
        if(Id){
            EmployeeService.updateEmployee(Id,employee).then((response)=>{
                navigate("/employees");
            }).catch(error=>{
                console.log(error);
            })
        }
        else{
            EmployeeService.createEmployee(employee).then((response)=>{
                navigate("/employees");
            }).catch(error=>{
             console.log(error);
            })
        }
    }
    useEffect(()=>{
        EmployeeService.getEmployeeById(Id).then((response)=>{
            setId(response.data.id);
            setName(response.data.name);
            setSalary(response.data.salary);
            setDesignation(response.data.designation);
        }).catch(error=>{
            console.log(error);
        })
    },[])
  return (
    <>
    <div className="container">
        <div className='row'>
            <div className='card col-md-6 offset-md-3 offset-md-3'>
            <h2 className='text-center'>Add a Employee</h2>
                <div className='card-body'>
             
                    <form>
                        <div className='form-group mb-2'>
                            <label className='form-label'>ID</label>
                            <input
                                type="text"
                                name="id"
                                required="required"
                                placeholder="Enter id..."
                                value={id}
                                className='form-control'
                                onChange={(e)=>setId(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Name</label>
                            <input
                                type="text"
                                name="name"
                                required="required"
                                placeholder="Enter Name..."
                                value={name}
                                className='form-control'
                                onChange={(e)=>setName(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Salary</label>
                            <input
                                type="text"
                                name="salary"
                                required="required"
                                placeholder="Enter Salary..."
                                value={salary}
                                className='form-control'
                                onChange={(e)=>setSalary(e.target.value)}/>
                        </div>
                        <div className='form-group mb-2'>
                            <label className='form-label'>Designation</label>
                            <input
                                type="text"
                                name="designation"
                                required="required"
                                placeholder="Enter Designation..."
                                value={designation}
                                className='form-control'
                                onChange={(e)=>setDesignation(e.target.value)}/>
                        </div>  
                        <button className='btn btn-success' onClick={(e)=>handleSubmit(e)}>Submit</button>  
                    </form>
                </div>
            </div>
        </div>
    </div>
    
    </>
  );
}

export default AddEmployee;