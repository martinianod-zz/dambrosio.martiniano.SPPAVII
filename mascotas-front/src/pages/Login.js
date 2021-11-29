import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const API_URL = "http://localhost:5000/api/login";

const Login = () => {

    let history = useHistory();

    const initialUser = {
        username: "",
        password: "",
    }

    const [user, setUser] = useState(initialUser);


    const { username, password } = user;

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        const data = await response.json();

        if (data.token) {
            localStorage.setItem("user", JSON.stringify(data));

            history.push("/home");
        } else {
            alert(data.message);
        }

    }

    const handleRegistrarse = async (e) => {
        e.preventDefault();
        history.push("/signup");

    }

    const handleChange = (e) => {
        setUser((form) => {
            return { ...form, [e.target.name]: e.target.value };
        });
    }

    return (

        <section className="hero is-primary is-fullheight">
            <div className="hero-body">
                <div className="container">
                    <div className="columns is-centered">
                        <div className="column is-5-tablet is-4-desktop is-3-widescreen">
                            <form onSubmit={handleSubmit} className="box">
                                <div className="field">
                                    <label htmlFor="" className="label">Username</label>
                                    <div className="control has-icons-left">
                                        <input type="text" placeholder="username" onChange={handleChange} value={username} name="username" className="input" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-envelope"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field">
                                    <label htmlFor="" className="label">Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" onChange={handleChange} value={password} name="password" className="input" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field buttons">
                                    <button className="button is-success control">
                                        Login
                                    </button>
                                    <button onClick={handleRegistrarse} className="button is-info control">
                                        Registrarse
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}

export default Login
