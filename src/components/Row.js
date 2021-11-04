import React from 'react'
import { Link } from 'react-router-dom';

const Row = ({ mascota, setMascotaEdit, deleteMascota }) => {

    const { id, nombre, tipo } = mascota;

    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>
                <Link to={`/detalle/${id}`} > Detalle </Link>
                <button onClick={() => { setMascotaEdit(mascota) }}>Update</button>
                <button onClick={() => { deleteMascota(id) }}>Delete</button>
            </td>
        </tr>
    )
}

export default Row
