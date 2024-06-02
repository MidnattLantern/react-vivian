// functional
import React, { createContext, useEffect, useState } from "react";
import {Route, Switch} from 'react-router-dom';
import './api/axiosDefaults';
import axios from "axios";

// styles
import styles from "./App.module.css";
import './global.css';

// bootstrap and components
import NavBar from './components/NavBar';
import HomePage from "./pages/home_page/HomePage";
import SignUpForm from "./pages/authentication/SignUpForm";
import SignInForm from "./pages/authentication/SignInForm";
import SignOutPage from "./pages/authentication/SignOutPage";


export const CurrentUserContext = createContext();
export const SetCurrentUserContext = createContext();

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  const handleMount = async () => {
    try {
      const {data} = await axios.get('dj-rest-auth/user/')
      setCurrentUser(data)
    } catch(err) {
      console.log(err)
    }
  }

  useEffect(() => {
    handleMount()
  }, []);

  return (
    <div>
      <CurrentUserContext.Provider value={currentUser}>
        <SetCurrentUserContext.Provider value={setCurrentUser}>

          <div className={styles.AppContainer}>
            <div className={styles.MainViewContainer}>
              <Switch>
                <Route exact path="/signin" render={() => <SignInForm /> } />
                <Route exact path="/signup" render={() => <SignUpForm />} />
                <Route exact path="/signout" render={() => <SignOutPage />} />
                <Route exact path="/" render={() => <HomePage />} />
                <Route path="/" render={() => <h1>Page not found</h1>} />
              </Switch>
            </div>
            <div className={styles.NavBarContainer}>
              <NavBar/>
            </div>
          </div>

        </SetCurrentUserContext.Provider>
      </CurrentUserContext.Provider>
    </div>
  )
};

export default App;
