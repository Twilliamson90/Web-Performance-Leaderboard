import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Board from "./pages/Board";
import Profile from "./pages/Profile";
import AddBoardForm from "./components/AddBoardForm";
import AddSiteForm from "./components/AddSiteForm";
import SignUpForm from "./components/SignUpForm";
import SignInForm from "./components/SignInForm";
import NotFound from "./components/NotFound";
import Auth from "./components/Auth";
import Utility from "./components/Utility";

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Component {...props} {...rest} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      )
    }
  />
);

const LoggedOutRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      Auth.isUserAuthenticated() ? (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location }
          }}
        />
      ) : (
        <Component {...props} {...rest} />
      )
    }
  />
);

const PropsRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => <Component {...props} {...rest} />} />
);

class App extends Component {
  state = {
    boards: {},
    isLoggedIn: false
  };

  componentDidMount() {
    this.setState({ isLoggedIn: Auth.isUserAuthenticated() });
  }

  render() {
    return (
      <Router>
        <div className="app">
          <Header
            appTitle="Web Performance Index"
            isLoggedIn={this.state.isLoggedIn}
          />
          <main id="main-content" className="container">
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/add/board" exact component={AddBoardForm} />
              <Route path="/b/:boardSlug" exact component={Board} />
              <Route
                path="/b/:boardId/add/site"
                exact
                component={AddSiteForm}
              />
              <Route path="/user/:id" exact component={Profile} />
              <Route
                path="/sign-in"
                exact
                render={props => (
                  <SignInForm {...props} setToken={Auth.setToken} />
                )}
              />
              <Route path="/sign-up" exact component={SignUpForm} />
              <Route component={NotFound} />
            </Switch>
          </main>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
