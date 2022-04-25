import { useContext } from "react";
import { AuthContext } from "../contexts/authContext";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  //  use reqres to log user in.
  const {handleAuth} = useContext(AuthContext)
  const navigate= useNavigate();
  return (
    <form className="loginform"
    onSubmit={()=>{
      handleAuth(true);
      navigate(-2,{replace:true});
    }}
    >
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit" onChange={()=>{
      handleAuth(true);
      // console.log(handleAuth)
      navigate(-2,{replace:true});
    }}/>
    </form>
  );
};
