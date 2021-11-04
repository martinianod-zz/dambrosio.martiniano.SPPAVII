import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import { Link } from 'react-router-dom';

const URL = "http://localhost:5000/mascotas/";

const Detalle = () => {

    const { id } = useParams();

    const [mascota, setMascota] = useState({});

    const { nombre, edad, tipo, vacunado, observaciones } = mascota;

    useEffect(() => {

        fetch(URL+ id)
        .then(res => res.json())
        .then(mascota =>{
            setMascota(mascota);
        })

    }, [])

    return (
        <div>
            <Link to="/">Volver</Link>
            <h1>nombre: {nombre}</h1>
            <p>edad: {edad}</p>
            <p>tipo: <span>{tipo}</span>  </p>
            <p>vacunado: {vacunado? "Si" : "No"}</p>
            <p>observaciones: {observaciones}</p>
        </div>
    )
}

export default Detalle
