import React from 'react';
import { useHistory } from "react-router-dom";

const Header = () => {

    let history = useHistory();

    const handleLogout = () => {

        localStorage.removeItem("user");
        history.push("/login");
    }

    return (
        <div>
            <header>
                <nav className="navbar" role="navigation" aria-label="main navigation">
                    <h1 className="title">CRUD Mascotas</h1>
                    <div className="navbar-end">
                        <div className="navbar-item">
                            <div className="buttons">
                                <button onClick={handleLogout} className="button is-primary">
                                    <strong>Cerrar Sesion
                                    </strong>
                                </button>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div >
    )
}

export default Header
