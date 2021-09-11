import './App.css';
import React from "react";
import { Route, Redirect } from "react-router-dom"
import { Login } from "./components/auth/Login";
import { Register } from "./components/auth/Register"
import { ApplicationViews } from "./ApplicationViews"
import { NavBar } from "./components/nav/NavBar"


const App = () => (
  <>
    <Route
      render={() => {
        if (sessionStorage.getItem("synthomnia_user")) {
          return (
            <>
            <div className="container">
              <NavBar name='sidenav'/>
              <ApplicationViews />
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

export default App;

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
