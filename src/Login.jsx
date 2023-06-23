// import React, { useState } from "react";
// import {
//   MDBBtn,
//   MDBContainer,
//   MDBRow,
//   MDBCol,
//   MDBCard,
//   MDBCardBody,
//   MDBInput,
//   MDBIcon,
// } from "mdb-react-ui-kit";
// import Dashboard from "../../Pages/Dashboard/Dashboard.jsx";
// import { json } from "react-router-dom";

// function LoginPage() {
//   const [authenticated, setAuthenticated] = useState(false);
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   const handleLogin = (e) => {
//     e.preventDefault();

//     fetch("http://localhost:8080/auth/signin", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify({ username, password }),
//     }).then((response) => {
//       if (response.ok) {
//         // Authentication successful
//         setAuthenticated(true);

//         // Clear the form
//         setUsername("");
//         setPassword("");
//       }
//     });
//   };
//   return (
//     <div>
//       {authenticated ? (
//         /* Render site content when authenticated */
//         <div>{/* Your site content goes here */}</div>
//       ) : (
//         /* Render login form when not authenticated */
//         <MDBContainer fluid>
//           <MDBRow className="d-flex justify-content-center align-items-center h-100">
//             <MDBCol col="12">
//               <MDBCard
//                 className="bg-dark text-white my-5 mx-auto"
//                 style={{ borderRadius: "1rem", maxWidth: "400px" }}
//               >
//                 <MDBCardBody className="p-5 d-flex flex-column align-items-center mx-auto w-100">
//                   <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
//                   <p className="text-white-50 mb-5">
//                     Please enter your login and password!
//                   </p>
//                   <form onSubmit={handleLogin}>
//                     <MDBInput
//                       wrapperClass="mb-4 mx-5 w-100"
//                       labelClass="text-white"
//                       label="Username"
//                       id="formControlLg"
//                       type="username"
//                       size="lg"
//                       value={username}
//                       onChange={(e) => setUsername(e.target.value)}
//                     />
//                     <MDBInput
//                       wrapperClass="mb-4 mx-5 w-100"
//                       labelClass="text-white"
//                       label="Password"
//                       id="formControlLg"
//                       type="password"
//                       size="lg"
//                       value={password}
//                       onChange={(e) => setPassword(e.target.value)}
//                     />
//                     <p className="small mb-3 pb-lg-2">
//                       <a className="text-white-50" href="#!">
//                         Forgot password?
//                       </a>
//                     </p>
//                     <MDBBtn
//                       outline
//                       className="mx-2 px-5"
//                       color="white"
//                       size="lg"
//                       type="submit"
//                     >
//                       Login
//                     </MDBBtn>
//                   </form>
//                 </MDBCardBody>
//               </MDBCard>
//             </MDBCol>
//           </MDBRow>
//         </MDBContainer>
//       )}
//     </div>
//   );
// }

// export default LoginPage;
