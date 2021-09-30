import React, {useState} from 'react';
import {Button, Form } from "reactstrap";
import { loginUserApi } from '../utils/api'

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
  
    function validateForm() {
      return email.length > 0 && password.length > 0;
    }
  
    async function handleSubmit(event) {
      event.preventDefault();
      const jwt = await loginUserApi(email, password);
      if (jwt)
      localStorage.setItem('jwt', jwt);
      document.location('/')
    }
  
    return (
        <div className="Login">
    <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
        <label>Password</label>
        <input type="text" value={password} onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="Submit" />
    </form>
</div>


      
    );
}

export default Login;


{/* <div className="Login">
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login
          </Button>
        </Form>
      </div> */}