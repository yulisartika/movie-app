import React, { useState, useEffect } from "react";
import "./SignIn.scss";
import Background from "../../Assets/Background.jpg";
import FormInput from "../../Components/FormInput/FormInput";
import CustomButton from "../../Components/CustomButton/CustomButton";
import { Link } from "react-router-dom";
// import { faGoogle } from "@fortawesome/free-brands-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { signInWithGoogle } from "../../Firebase/firebase.utils";
// import { auth } from "../../Firebase/firebase.utils";

import { connect } from "react-redux";
import { signInUser } from "../../Redux/User/user-actions";

function SignIn(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(username, password);

    props.signInUser(username, password);
  };

  useEffect(() => {
    if (props.token) {
      props.history.push("/");
    }
  }, [props]);

  return (
    <div className="signin">
      <div
        className="signin__bg"
        style={{ backgroundImage: `url(${Background})` }}
      />
      <div className="signin__container">
        <div className="signin__shadow">
          <h1 className="signin__title">Sign In</h1>

          <form
            action="POST"
            autoComplete="new-password"
            onSubmit={handleSubmit}
          >
            <FormInput
              name="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              value={username}
              label="Username"
              required
            />

            <FormInput
              name="password"
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              value={password}
              label="Password"
              required
            />

            <div className="signin__btn-container">
              <div className="signin__btn">
                <CustomButton type="submit" signin>
                  {" "}
                  Sign In{" "}
                </CustomButton>
                {/* <CustomButton onClick={signInWithGoogle}>
                  <FontAwesomeIcon
                    icon={faGoogle}
                    className="signin__google-icon"
                  />
                  Sign In With Google
                </CustomButton> */}
              </div>
            </div>
          </form>
          <div className="signin__option">
            <span className="signin__option--newuser">New to Cineflix?</span>
            <Link to="/signup" className="signin__option--link">
              Sign up now.
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
    signInUser: (username, password) =>
      dispatch(signInUser(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignIn);

// class SignIn extends React.Component {
//   constructor() {
//     super();
//     this.state = {
//       email: "",
//       password: "",
//     };
//   }

//   handleSubmit = async (event) => {
//     event.preventDefault();
//     const { email, password } = this.state;

//     try {
//       await auth.signInWithEmailAndPassword(email, password);
//       this.setState({ email: "", password: "" });
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   handleChange = (event) => {
//     const { value, name } = event.target;

//     this.setState({ [name]: value });
//   };

//   render() {
//     return (
//       <div className="signin">
//         <div
//           className="signin__bg"
//           style={{ backgroundImage: `url(${Background})` }}
//         />
//         <div className="signin__container">
//           <div className="signin__shadow">
//             <h1 className="signin__title">Sign In</h1>

//             <form
//               action="POST"
//               autoComplete="new-password"
//               onSubmit={this.handleSubmit}
//             >
//               <FormInput
//                 name="email"
//                 type="email"
//                 value={this.state.email}
//                 handleChange={this.handleChange}
//                 label="Email"
//                 required
//               />

//               <FormInput
//                 name="password"
//                 type="password"
//                 value={this.state.password}
//                 handleChange={this.handleChange}
//                 label="Password"
//                 required
//               />

//               <div className="signin__btn-container">
//                 <div className="signin__btn">
//                   <CustomButton type="submit" signin>
//                     {" "}
//                     Sign In{" "}
//                   </CustomButton>
//                   <CustomButton onClick={signInWithGoogle}>
//                     <FontAwesomeIcon
//                       icon={faGoogle}
//                       className="signin__google-icon"
//                     />
//                     Sign In With Google
//                   </CustomButton>
//                 </div>
//               </div>
//             </form>
//             <div className="signin__option">
//               <span className="signin__option--newuser">New to Cineflix?</span>
//               <Link to="/signup" className="signin__option--link">
//                 Sign up now.
//               </Link>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }
