import React from "react";
import Header from "./Components/Header/Header";
import { Switch, Route } from "react-router-dom";
import { compose } from "redux";
import { withRouter } from "react-router";

import SearchPage from "./Components/SearchPage/SearchPage";
import { FooterContainer } from "./Components/Footer";
import Movies from "./Pages/Movies/Movies";
import MovieDetails from "./Pages/MovieDetails";
import SignIn from "./Pages/SignIn/SignIn";
import SignUp from "./Pages/SignUp/SignUp";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header currentRoute={this.props.location.pathname} />
        <Switch>
          <Route exact path="/" component={Movies} />
          <Route path="/movies" component={Movies} />
          <Route path="/movie-detail/:id" component={MovieDetails} />
          <Route exact path="/signin" component={SignIn} />
          <Route exact path="/signup" component={SignUp} />
          <Route exact path="/searchresults" component={SearchPage} />
        </Switch>
        <FooterContainer />
      </div>
    );
  }
}

export default compose(withRouter)(App);
