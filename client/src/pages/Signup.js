// // import React, {useState} from 'react';
// import {Button, Form } from "reactstrap";
// import { signUpUserApi } from '../utils/api'

// function SignUp() {
//     const [name, setName] = useState("");
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
  
//     function validateForm() {
//       return name.length > 0 && email.length > 0 && password.length > 0;
//     }
  
//     function handleSubmit(event) {
//       event.preventDefault();
//       signUpUserApi();
//     }
  
//     return (
//       <div className="Signup">
//         <Form onSubmit={handleSubmit}>
//           <Form.Group size="lg" controlId="name">
//             <Form.Label>Name</Form.Label>
//             <Form.Control
//               autoFocus
//               type="name"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group size="lg" controlId="email">
//             <Form.Label>Email</Form.Label>
//             <Form.Control
//               autoFocus
//               type="email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </Form.Group>
//           <Form.Group size="lg" controlId="password">
//             <Form.Label>Password</Form.Label>
//             <Form.Control
//               type="password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//           </Form.Group>
//           <Button block size="lg" type="submit" disabled={!validateForm()}>
//             Sign Up!
//           </Button>
//         </Form>
//       </div>
//     );
// }

// export default SignUp;
