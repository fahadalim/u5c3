
import axios from "axios";
import { useState } from "react";


export const Admin = () => {
  const [formdata,setFormdata]= useState({});
  const handle=(e)=>{
    const {name,value} = e.target
    setFormdata({
      ...formdata,[name]:value
    })
  }

  async function handleSubmit(e){
    e.preventDefault()
    axios.post("http://localhost:8080/employee",{
      ...formdata
    })
  }

  return (
    <form className="createEmployee" onSubmit={handleSubmit}>
      <input type="text" placeholder="Employee Name" name="employee_name"  onChange={handle}/>
      <input type="text" placeholder="Employee id" name="employee_id" onChange={handle}/>
      <select name="title" onChange={handle}>
        <option value="intern">Intern</option>
        <option value="Jr Software Developer">Jr Software Developer</option>
        <option value="Sr Software Developer">Sr Software Developer</option>
        <option value="Team Lead">Team Lead</option>
      </select>
      <input type="number" placeholder="Salary" name="salary" onChange={handle}/>
      <input type="text" placeholder="Image" name="image" onChange={handle}/>
      <input type="text" placeholder="User Name" name="username" onChange={handle}/>
      <input type="password" placeholder="Password" name="password" onChange={handle}/>
      <input
        type="text"
        placeholder="Enter tasks separated by commas"
        name="tasks"
        onChange={handle}/>
      <select name="status" id="status" onChange={handle}>
        <option value="">Select Status</option>
        <option value="terminated">Terminated</option>
        <option value="working">Working</option>
      </select>
      <select name="team" id="team" onChange={handle}>
        <option value="">Select team</option>
        <option value="frontend">Frontend</option>
        <option value="backend">Backend</option>
        <option value="qa">QA</option>
      </select>
      <input className="createUser" type="submit" value={"submit"} />
    </form>
  );
};
