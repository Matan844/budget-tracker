import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [username, setusername] = useState();
  const [password, setpassword] = useState();
  const navigate = useNavigate();

  function checkuser() {
    if (username === "matan" && password === "1234") {
      navigate("./main");
    }
  }
  return (
    <div className="login">
      
      <div className="loginform" >
      <h1>log in</h1>
      <form onSubmit={checkuser}>
        <input type="text" placeholder="user name" onChange={(e) => setusername(e.target.value)} />
        <input type="password" placeholder="password" onChange={(e) => setpassword(e.target.value)} />
        <input type="submit" value={"log in"} />
      </form>
      </div>
    </div>
  );
}


