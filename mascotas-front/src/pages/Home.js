import React from 'react'
import Crud from '../components/Crud'
import Header from '../components/Header'
import { useHistory } from "react-router-dom";

const Home = () => {

    let history = useHistory();
    const user = localStorage.getItem('user');

    return (
        <div className="App">
            {
                user ? (
                    <div>
                        <Header />
                        <Crud />
                    </div>
                )
                    : history.push('/login')
            }


        </div>
    )
}

export default Home
