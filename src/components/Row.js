import React from 'react'
import { Link } from 'react-router-dom';

const Row = ({ mascota, setMascotaEdit, deleteMascota }) => {

    const { id, nombre, tipo } = mascota;

    return (
        <tr key={id}>
            <td>{nombre}</td>
            <td>{tipo}</td>
            <td>
                <div class="buttons">
                    <Link className="button is-info" to={`/detalle/${id}`} > Detalle </Link>
                    <button className="button is-warning" onClick={() => { setMascotaEdit(mascota) }}>Update</button>
                    <button className="button is-danger" onClick={() => { deleteMascota(id) }}>Delete</button>
                </div>
            </td>
        </tr>
    )
}

export default Row
