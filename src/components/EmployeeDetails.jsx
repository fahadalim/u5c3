import axios from "axios";
import { useEffect,useState } from "react";
import { useParams } from "react-router-dom";

export const EmployeeDetails = () => {
  const {id} = useParams();
  const [user,setUser] = useState({})
  useEffect(()=>{
    axios.get(`http://localhost:8080/employee/${id}`).then(({data})=>{
      setUser(data)
    })
  })
  return (
    <div className="user_details">
      <img className="user_image" src={user.image}/>
      <h4 className="user_name">{user.employee_name}</h4>
      <span className="user_salary">${user.salary}</span>
      <span className="tasks">
        <li className="task">{user.tasks}</li>
      </span>
      Status: <b className="status">{user.status}</b>
      Title: <b className="title"></b>
      {/* Show this button only if user is not already terminated (users status is working) */}
      <button className="fire">Fire Employee</button>
      {/* Show this button only if user is not already team lead or terminated */}
      <button className="promote">promote</button>
    </div>
  );
};
