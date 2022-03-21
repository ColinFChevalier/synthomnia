import './App.css';
import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./ApplicationViews"
import NavBar from "./components/nav/NavBar"
import { FooterLinks } from './components/Footer/Footer';
import 'semantic-ui-react'

const App = () => (
  <>
    <Route
      render={() => {
        if (localStorage.getItem("su_token")) {
          return (
            <>
              <div className="ui attatched pushable" style={{ height: '100vh' }}>
                <NavBar />
                <div className="footer">
                  <FooterLinks />
                </div>
              </div>
            </>
          );
        } else {
          return <Redirect to="/login" />;
        }
      }}
    />

    <Route path="/login">
      <Login />
    </Route>
    <Route path="/register">
      <Register />
    </Route>
  </>
);

export default App