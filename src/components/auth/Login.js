import React, { useRef } from "react"
import { Link, useHistory } from "react-router-dom"
import "./Auth.css"


export const Login = () => {
    const email = useRef()
    const password = useRef()
    const invalidDialog = useRef()
    const history = useHistory()

    const handleLogin = (e) => {
        e.preventDefault()

        return fetch("http://127.0.0.1:8000/login", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Accept": "application/json"
            },
            body: JSON.stringify({
                username: email.current.value,
                password: password.current.value
            })
        })
            .then(res => res.json())
            .then(res => {
                if ("valid" in res && res.valid) {
                    localStorage.setItem("su_token", res.token )
                    history.push("/")
                }
                else {
                    invalidDialog.current.showModal()
                }
            })
    }

    return (
        <main className="container--login">
            <dialog className="dialog dialog--auth" ref={invalidDialog}>
                <div>Email or password was not valid.</div>
                <button className="button--close" onClick={e => invalidDialog.current.close()}>Close</button>
            </dialog>
            <section>
                <form className="form--login" onSubmit={handleLogin}>
                    <h1>Synthomnia</h1>
                    <h2>Please sign in</h2>
                    <fieldset>
                        <label htmlFor="inputEmail"> Email address </label>
                        <input ref={email} type="email" id="email" className="form-control" defaultValue="me@me.com" placeholder="Email address" required autoFocus />
                    </fieldset>
                    <fieldset>
                        <label htmlFor="inputPassword"> Password </label>
                        <input ref={password} type="password" id="password" className="form-control" defaultValue="me" placeholder="Password" required />
                    </fieldset>
                    <fieldset style={{
                        textAlign:"center"
                    }}>
                        <button className="btn btn-1 btn-sep icon-send" type="submit">Sign In</button>
                    </fieldset>
                </form>
            </section>
            <section className="link--register">
                <Link to="/register">Not a member yet?</Link>
            </section>
        </main>
    )
}








// import React, { useRef, useState } from "react"
// import { Link, useHistory } from "react-router-dom";
// import "./Login.css"
// import "semantic-ui-react"


// export const Login = () => {
//     const [loginUser, setLoginUser] = useState({ email: "" })
//     const [existDialog, setExistDialog] = useState(false)

//     const history = useHistory()

//     const handleInputChange = (event) => {
//         const newUser = { ...loginUser }
//         newUser[event.target.id] = event.target.value
//         setLoginUser(newUser)
//     }


//     const existingUserCheck = () => {
//         // If your json-server URL is different, please change it below!
//         return fetch(`http://localhost:8088/users?email=${loginUser.email}`)
//             .then(res => res.json())
//             .then(user => user.length ? user[0] : false)
//     }

//     const handleLogin = (e) => {
//         e.preventDefault()

//         existingUserCheck()
//             .then(exists => {
//                 if (exists) {
//                     // The user id is saved under the key nutshell_user in session Storage. Change below if needed!
//                     sessionStorage.setItem("synthomnia_user", exists.id)
//                     history.push("/")
//                 } else {
//                     setExistDialog(true)
//                 }
//             })
//     }

//     return (
//         <main className="container--login">
//             <dialog className="dialog dialog--auth" open={existDialog}>
//                 <div>User does not exist</div>
//                 <button className="button--close" onClick={e => setExistDialog(false)}>Close</button>
//             </dialog>
//             <section>
//                 <form className="form--login" onSubmit={handleLogin}>
//                 <div class="ui sizer vertical segment">
//                     <div class="ui huge header">S Y N T H O M N I A</div>
//                 </div>
//                     <h2>Please sign in</h2>
//                     <fieldset>
//                         <label htmlFor="inputEmail"> Email address </label>
//                         <input type="email"
//                             id="email"
//                             className="form-control"
//                             placeholder="Email address"
//                             required autoFocus
//                             value={loginUser.email}
//                             onChange={handleInputChange} />
//                     </fieldset>
//                     <fieldset>
//                         <button type="submit">
//                             Sign in
//                         </button>
//                     </fieldset>
//                 </form>
//             </section>
//             <section className="link--register">
//                 <Link to="/register">Register for an account</Link>
//             </section>
//         </main>
//     )
// }