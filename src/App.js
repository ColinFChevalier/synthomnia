import './App.css';
import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./ApplicationViews"
import NavBar from "./components/nav/NavBar"
import 'semantic-ui-react'

const App = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("synthomnia_user")) {
          return (
            <>
              <div className="ui attatched pushable" style={{ height: '100vh' }}>
                <NavBar />
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