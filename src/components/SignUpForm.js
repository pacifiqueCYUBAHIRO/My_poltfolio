// import React, { useState } from 'react';
// import './signup.css';

// const SignUpForm = () => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   const handleNameChange = (e) => {
//     setName(e.target.value);
//   };

//   const handleEmailChange = (e) => {
//     setEmail(e.target.value);
//   };

//   const handlePasswordChange = (e) => {
//     setPassword(e.target.value);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Your sign-up logic here
//     console.log('Sign Up - Name:', name);
//     console.log('Sign Up - Email:', email);
//     console.log('Sign Up - Password:', password);
//   };

//   return (
//     <form onSubmit={handleSubmit}>
//       <h2>Sign Up</h2>
//       <label>
//         Name:
//         <input type="text" value={name} onChange={handleNameChange} required />
//       </label>
//       <br />
//       <label>
//         Email:
//         <input type="email" value={email} onChange={handleEmailChange} required />
//       </label>
//       <br />
//       <label>
//         Password:
//         <input type="password" value={password} onChange={handlePasswordChange} required />
//       </label>
//       <br />
//       <button type="submit">Sign Up</button>
//     </form>
//   );
// };

// export default SignUpForm;
