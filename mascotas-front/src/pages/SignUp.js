import React, { useState } from 'react'
import { useHistory } from "react-router-dom";

const API_URL = "http://localhost:5000/api/users";

const SignUp = () => {

    let history = useHistory();

    const initialUser = {
        username: "",
        password: "",
        confirmPassword: "",
    }

    const [user, setUser] = useState(initialUser);


    const { username, password, confirmPassword } = user;


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (username.length === 0) {
            alert('el usuario no puede estar vacio')
        }

        if (!password === confirmPassword) {
            alert('las contraseñas no coincicen');
        }

        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(user),
        })

        const data = await response.json();

        if (data.username) {
            alert('usuario registardo');
            history.push("/login");
        } else {
            alert(data.message);
        }
    }

    const handleChange = (e) => {
        setUser((form) => {
            return { ...form, [e.target.name]: e.target.value };
        });
    }

    const handleLogin = (e) => {
        e.preventDefault();
        history.push("/login");
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
                                <div className="field">
                                    <label htmlFor="" className="label">Confirm Password</label>
                                    <div className="control has-icons-left">
                                        <input type="password" placeholder="*******" onChange={handleChange} value={confirmPassword} name="confirmPassword" className="input" required />
                                        <span className="icon is-small is-left">
                                            <i className="fa fa-lock"></i>
                                        </span>
                                    </div>
                                </div>
                                <div className="field buttons">
                                    <button className="button is-success control">
                                        Register
                                    </button>
                                    <button onClick={handleLogin} className="button is-info control">
                                        Login
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

export default SignUp
