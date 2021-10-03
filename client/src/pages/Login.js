import React, { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { loginUserApi } from '../utils/api'
import { Button } from 'reactstrap';

const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        console.log(email, password)
        const response = await loginUserApi(email, password);
        const data = await response.json()
        if (data.message) {
            alert(data.message)
        } else {
            setEmail('');
            setPassword('');
            localStorage.setItem('jwt', data);
            history.push('/shop');
        }

    }

    return (
        <div className="login-body">
            <div className="login-body-pic">
                <section className="login">
                    <div className="login1">
                        <div className="formcontrol">
                            <label htmlFor="email" className="form-label"> Customer Login </label>
                            <input type="email" placeHolder="Email Address" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="formcontrol">
                            <input type="password" placeHolder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>

                        <div className="login-buttons">
                            <button className="loginButton" type="submit" onClick={handleSubmit} disabled={!validateForm()}>Submit</button>
                            <a href="/signup">
                                <button className="loginButton" type="button">Sign Up</button>
                            </a>
                        </div>
                    </div>
                </section >
            </div >
        </div >
    );
}

export default Login;


