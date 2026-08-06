import { useState } from "react";
import {register} from "../services/auth";


export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = async () => {
      const res = await register({ email, password });
      alert("login success");
    }
    return (
    <>
      <input onChange={e => setEmail(e.target.value)} />
      <input type="password" onChange={e => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </>
  );
}