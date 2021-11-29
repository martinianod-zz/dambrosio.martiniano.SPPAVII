import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/api/mascotas/";

const Detalle = () => {

    const token = JSON.parse(localStorage.getItem("user")).token;

    const { id } = useParams();

    const [mascota, setMascota] = useState({});

    const { nombre, edad, tipo, vacunado, observaciones } = mascota;

    useEffect(() => {

        fetch(URL + id, {
            method: 'GET',
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
        })
            .then(res => res.json())
            .then(mascota => {
                setMascota(mascota);
            })

    }, [])

    return (
        <div>
            <Link to="/home">Volver</Link>
            <h1>nombre: {nombre}</h1>
            <p>edad: {edad}</p>
            <p>tipo: <span>{tipo}</span>  </p>
            <p>vacunado: {vacunado ? "Si" : "No"}</p>
            <p>observaciones: {observaciones}</p>
        </div>
    )
}

export default Detalle
