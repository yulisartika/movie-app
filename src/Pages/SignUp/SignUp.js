import React, { useState } from "react";
import "./SignUp.scss";
import Background from "../../Assets/Background.jpg";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
import { auth, CreateUserProfileDocument } from "../../Firebase/firebase.utils";

import { connect } from "react-redux";
import { signUpUser } from "../../Redux/User/user-actions";

function SignUp(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password, email);

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    props.signUpUser(username, password, email);
    props.history.push("/signin");
  };

  return (
    <div className="signup">
      <div
        className="signup__bg"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className="signup__container">
        <div className="signup__shadow">
          <h1 className="signup__title">Sign Up</h1>
          <form action="POST" onSubmit={handleSubmit}>
            <FormInput
              name="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              label="Email"
              required
            />

            <FormInput
              name="displayName"
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              label="Name"
              required
            />

            <FormInput
              name="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              label="Password"
              required
            />

            <FormInput
              name="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              label="Confirm Password"
              required
            />

            <div className="signup__btn-container">
              <div className="signup__btn">
                <CustomButton type="submit"> Sign Up </CustomButton>
              </div>
            </div>
          </form>
          <div className="signup__option">
            <span className="signup__option--newuser">Already signed up?</span>
            <Link to="/signin" className="signup__option--link">
              Log in now.
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    token: state.user.token,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    signUpUser: (username, password, email) =>
      dispatch(signUpUser(username, password, email)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignUp);

// class SignUp extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       displayName: "",
//       email: "",
//       password: "",
//       confirmPassword: "",
//     };
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();

//     const { displayName, email, password, confirmPassword } = this.state;

//     if (password !== confirmPassword) {
//       alert("Passwords dont match");
//       return;
//     }
//     try {
//       const { user } = await auth.createUserWithEmailAndPassword(
//         email,
//         password
//       );

//       await CreateUserProfileDocument(user, { displayName });

//       this.setState({
//         displayName: "",
//         email: "",
//         password: "",
//         confirmPassword: "",
//       });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   handleChange = (event) => {
//     const { name, value } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     const { displayName, email, password, confirmPassword } = this.state;
//     return (
//       <div className="signup">
//         <div
//           className="signup__bg"
//           style={{ backgroundImage: `url(${Background})` }}
//         />
//         <div className="signup__container">
//           <div className="signup__shadow">
//             <h1 className="signup__title">Sign Up</h1>

//             <form action="POST" onSubmit={this.handleSubmit}>
//               <FormInput
//                 name="displayName"
//                 type="name"
//                 value={displayName}
//                 handleChange={this.handleChange}
//                 label="Name"
//                 required
//               />

//               <FormInput
//                 name="email"
//                 type="email"
//                 value={email}
//                 handleChange={this.handleChange}
//                 label="Email"
//                 required
//               />

//               <FormInput
//                 name="password"
//                 type="password"
//                 value={password}
//                 handleChange={this.handleChange}
//                 label="Password"
//                 required
//               />

//               <FormInput
//                 name="confirmPassword"
//                 type="password"
//                 value={confirmPassword}
//                 handleChange={this.handleChange}
//                 label="Confirm Password"
//                 required
//               />

//               <div className="signup__btn-container">
//                 <div className="signup__btn">
//                   <CustomButton type="submit"> Sign Up </CustomButton>
//                 </div>
//               </div>
//             </form>
//             <div className="signup__option">
//               <span className="signup__option--newuser">
//                 Already signed up?
//               </span>
//               <Link to="/signin" className="signup__option--link">
//                 Log in now.
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default SignUp;
