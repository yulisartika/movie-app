import React from "react";
import Header from "./Components/Header/Header";
import { Switch, Route, Redirect } from "react-router-dom";
import Movies from "./Pages/Movies/Movies";

import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";
import { auth } from "./Firebase/firebase.utils";
import { CreateUserProfileDocument } from "./Firebase/firebase.utils";
import { setCurrentUser } from "./Redux/User/user-actions";
import { selectCurrentUser } from "./Redux/User/user-selectors";
import { connect } from "react-redux";
import SearchPage from "./Components/SearchPage/SearchPage";
import { compose } from "redux";
import { withRouter } from "react-router";
import { FooterContainer } from "./Components/Footer";

class App extends React.Component {
  // unsubscribeFromAuth = null;

  // componentDidMount() {
  //   this.unsubscribeFromAuth = auth.onAuthStateChanged(async (userAuth) => {
  //     if (userAuth) {
  //       const userRef = await CreateUserProfileDocument(userAuth);

  //       userRef.onSnapshot((snapShot) => {
  //         this.props.setCurrentUser({
  //           id: snapShot.id,
  //           ...snapShot.data(),
  //         });
  //       });
  //     } else {
  //       this.props.setCurrentUser(userAuth);
  //     }
  //   });
  // }

  // componentWillUnmount() {
  //   this.unsubscribeFromAuth();
  // }

  render() {
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route
            exact
            path="/signin"
            render={() =>
              this.props.currentUser ? <Redirect to="/movies" /> : <SignIn />
            }
          />
          <Route
            exact
            path="/signup"
            render={() =>
              this.props.currentUser ? <Redirect to="/movies" /> : <SignUp />
            }
          />
          <Route exact path="/searchresults" component={SearchPage} />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  currentUser: selectCurrentUser(state),
});

const mapDispatchToProps = (dispatch) => ({
  setCurrentUser: (user) => dispatch(setCurrentUser(user)),
});

export default compose(
  withRouter,
  connect(mapStateToProps, mapDispatchToProps)
)(App);
