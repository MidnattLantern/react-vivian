// functional
import React from "react";
import {Route, Switch} from 'react-router-dom';
import "./api/axiosDefaults";

// styles
import styles from "./App.module.css";
import './global.css';

// bootstrap and components
import NavBar from './components/NavBar';
import SignUpForm from "./pages/authentication/SignUpForm";
import SignInForm from "./pages/authentication/SignInForm";
import SignOutPage from "./pages/authentication/SignOutPage";
import AddressPage from "./pages/address_book/AddressPage";
import HomePage from "./pages/home_page/HomePage";

function App() {

  return (
    <div>

          <div className={styles.AppContainer}>
            <div className={styles.MainViewContainer}>
              <Switch>
                <Route exact path="/signin" render={() => <SignInForm /> } />
                <Route exact path="/signup" render={() => <SignUpForm />} />
                <Route exact path="/signout" render={() => <SignOutPage />} />
                <Route exact path="/" render={() => <HomePage />} />
                <Route exact path="/address" render={() => <AddressPage />} />
                <Route path="/" render={() => <h1>Page not found</h1>} />
              </Switch>
            </div>
            <div className={styles.NavBarContainer}>
              <NavBar/>
            </div>
          </div>

    </div>
  )
};

export default App;
