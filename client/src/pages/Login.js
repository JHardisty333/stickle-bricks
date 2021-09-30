import React, { useState } from 'react'
import { loginUserApi } from '../utils/api'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    async function handleSubmit(event) {
      event.preventDefault();
      console.log(email, password)
      const jwt = await loginUserApi(email, password);
      console.log(jwt, email, password)
      localStorage.setItem('jwt', jwt);
    }

    return (
        <div className="Login">
            <form onSubmit={handleSubmit}>
                <label>Email</label>
                <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label>Password</label>
                <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
                <input type="submit" value="Submit" disabled={!validateForm()} />
            </form>
        </div>
    );
}

export default Login;