import React, { useState } from 'react'
import { loginUserApi } from '../utils/api'
import { Button } from 'reactstrap';

const Login = () => {

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
        <div className="login-body">
            <section className="login">
                <div className="row" style={{ "minHeight": "80vh" }}>
                <div className="login1">
                    {/* <form className="login1" style={{ "backgroundColor": "white", "borderRadius": "10px" }} onSubmit={handleSubmit}> */}
                        <div className="login2">
                            <label htmlFor="email" className="form-label">Email </label>
                            <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="mb-3">
                            <label htmlFor="password" className="form-label" >Password</label>
                            <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <button color="" size="sm" type="submit" disabled={!validateForm()}>Submit</button>
                        <a href="/signup"><button type="button" size="lg">Signup</button>
                        </a>
                    {/* </form> */}
                </div>
                </div>
            </section>
        </div>


    );
}

export default Login;


