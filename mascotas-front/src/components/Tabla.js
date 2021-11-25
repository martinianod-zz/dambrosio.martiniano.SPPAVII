import React from 'react'
import Row from './Row'

const Tabla = ({ data, setMascotaEdit, deleteMascota }) => {
    return (
        <div className="container is-fluid">
            <div className="table-container">
                <h2 className="subtitle">Lista de Mascotas</h2>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>

                        {
                            data.length ? (
                                data.map(
                                    (mascota) => (<Row
                                        key={mascota.id}
                                        mascota={mascota}
                                        setMascotaEdit={setMascotaEdit}
                                        deleteMascota={deleteMascota}
                                    />)
                                )
                            ) :
                                (<tr>
                                    <td colSpan={3}>No hay Datos</td>
                                </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Tabla
