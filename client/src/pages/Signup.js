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
        <div className="signup-body">
            <div className="signup-body-pic">
            <section className="signup">
            <div className="signup1">
            {/* <form className="col-sm-4 my-5 py-3" style={{ "backgroundColor": "white", "borderRadius": "10px" }} onSubmit={e => handleSubmit(e)}> */}
                <div className="mb-3">
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="name" className="form-control" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email </label>
                    <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label for="password" className="form-label" >Password</label>
                    <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} />
                </div>
                <button type="submit" className="signupButton" onClick={handleSubmit} disabled={!validateForm()}>Sign Up!</button>
            {/* </form> */}
            </div>
            </section>
            </div>
        </div>
    );
}

export default SignUp;
