import React from 'react'
import Row from './Row'

const Tabla = ({ data, setMascotaEdit, deleteMascota }) => {
    return (
        <>
            <h2>Lista de Mascotas</h2>
            <table>
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
        </>
    )
}

export default Tabla
