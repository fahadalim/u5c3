import { useEffect,useState } from "react";
import axios from "axios"
import {Link} from "react-router-dom"

export const EmployeeList = () => {
  const [data,setData] = useState([])
  useEffect(()=>{
    axios.get("http://localhost:8080/employee")
    .then(function(response){
      setData([...response.data])
    })
    .catch(function(error){
      console.log(error)
    })
    .then(function(){

    });},[])
  return (
    <div className="list_container">
      {/* On clicking this card anywhere, user goes to user details */}
      {data.map((user)=>(
        <Link to={`/employee/${user.id}`}className="employee_card">
      <div className="employee_card">
        <img className="employee_image" src={user.image}/>
        <span className="employee_name">{user.employee_name}</span>
        <span className="employee_title">{user.title}</span>
      </div>
      </Link>
      ))}
    </div>
  );
};
