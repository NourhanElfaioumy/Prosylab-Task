import React, {useEffect, useState} from 'react';

// style
import '../styles/Login.scss';

const Login = () => {
    const [form, setForm] = useState({email: '', password: ''});
    const [error, setError] = useState("");

    useEffect(() => {
        if (sessionStorage.getItem("auth-user")) {
            window.location.pathname = "/admin/students"
        }
    }, [])

    return <div>
        <div id="page-content">
            <div className="container py-5 boxes">
                <div className="row">
                    <div className="col-12">
                        <h1>Login</h1>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-lg-8 mx-auto">
                                    {error && <span className="alert-danger p-2 w-100 d-block"
                                                    style={{margin: "10px 0", borderRadius: "5px"}}>{error}</span>}
                                    <form>
                                        <label htmlFor="email">E-mail*</label>
                                        <input type="email" placeholder="Enter E-mail"
                                               value={form.email}
                                               onChange={(e) => setForm({...form, email: e.target.value})}
                                        />
                                        <label htmlFor="password">Password*</label>
                                        <input type="password" placeholder="Enter Password"
                                               value={form.password}
                                               onChange={(e) => setForm({...form, password: e.target.value})}
                                        />
                                    </form>
                                    <button className="submit" onClick={() => {
                                        if (form.email === "admin@prosylab" && form.password === "admin") {
                                            Promise.resolve()
                                                .then(() => {
                                                    sessionStorage.setItem("auth-user", JSON.stringify({
                                                        email: "admin@prosylab",
                                                        password: "admin"
                                                    }))
                                                })
                                                .then(() => {
                                                    window.location.pathname = "/admin/students"
                                                })
                                        } else {
                                            setError("Invalid credentials");
                                        }
                                    }}>Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Login;
