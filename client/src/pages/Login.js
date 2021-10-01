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
      const response = await loginUserApi(email, password);

      if (!response.ok) console.log('not ok')
      const data = await response.json();
      console.log(data, email, password)
    //   localStorage.setItem('jwt', response);
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