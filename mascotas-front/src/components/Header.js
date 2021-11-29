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
                <nav class="navbar" role="navigation" aria-label="main navigation">
                    <h1 class="title">CRUD Mascotas</h1>
                    <div class="navbar-end">
                        <div class="navbar-item">
                            <div class="buttons">
                                <a onClick={handleLogout} class="button is-primary">
                                    <strong>Cerrar Sesion
                                    </strong>
                                </a>
                            </div>
                        </div>
                    </div>
                </nav>
            </header>

        </div >
    )
}

export default Header
