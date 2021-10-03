import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { signUpUserApi } from '../utils/api'

function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return name.length > 0 && email.length > 0 && password.length > 0;
    }

    const history = useHistory();

    async function handleSubmit(event) {
        event.preventDefault();
        const response = await signUpUserApi(name, email, password);
        const data = await response.json();
        history.push('/shop')
        console.log(data)
        console.log(name, email, password)
    }

    return (
        <div className="signup-body" style={{"minHeight": "80vh"}}>
            <div className="signup-body-pic">
                <section className="signup">
                    <div className="signup1">
                        <div className="formcontrol">
                            <label htmlFor="name" className="form-label">Sign Up</label>
                            <input type="name" placeHolder="Name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                        </div>
                        <div className="formcontrol">
                            <input type="email" placeHolder="Email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                        </div>
                        <div className="formcontrol">
                            <input type="password" placeHolder="Password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                        </div>
                        <div className="signup-buttons">
                            <button type="submit" className="signupButton" onClick={handleSubmit} disabled={!validateForm()}>Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default SignUp;
