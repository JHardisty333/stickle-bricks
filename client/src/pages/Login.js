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
        const response = await loginUserApi(email, password);
        const data = await response.json()
        console.log(data, email, password)
        localStorage.setItem('jwt', data);
    }

    return (
        <div className="row">
        <div className="col-sm-4"></div>
        <form className="col-sm-4 my-5 py-3" style={{"backgroundColor": "white", "borderRadius": "10px"}} onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="email" className="form-label">Email </label>
                <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
            </div>
            <div className="mb-3">
                <label htmlFor="password" className="form-label" >Password</label>
                <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <button type="submit" className="btn btn-primary" disabled={!validateForm()}>Submit</button>
            <a href="/signup">
            <button type="button" className="btn btn-primary mx-3" >Signup</button>
            </a>
        </form>
        <div className="col-sm-4"></div>
        </div>
    );
}

export default Login;



{/* <div classNameName="Login">
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Submit" disabled={!validateForm()} />
    </form>
</div> */}
