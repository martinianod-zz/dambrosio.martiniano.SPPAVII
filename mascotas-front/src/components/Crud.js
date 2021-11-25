import React, { useState, useEffect } from 'react'
import Formulario from './Formulario';
import Loader from './Loader';
import Tabla from './Tabla';

const URL = "http://localhost:5000/api/mascotas/";
const URL_TIPOS = "http://localhost:5000/api/tipos-mascotas";

const Crud = () => {

    const [mascotas, setMascotas] = useState([]);

    const [tiposMascotas, setTiposMascotas] = useState([]);

    const [mascotaEdit, setMascotaEdit] = useState(null);

    const [isLoading, setIsLoading] = useState(false);

    const token = JSON.parse(localStorage.getItem("user")).token;

    useEffect(() => {

        const getMascotas = async (url) => {
            try {

                setIsLoading(true);

                console.log(token)

                const res = await fetch(url, {
                    method: 'GET',
                    headers: new Headers({
                        'Authorization': 'Bearer ' + token,
                        'Content-Type': 'application/json'
                    }),
                });
                const data = await res.json();
                data.forEach((mascota) => {
                    setMascotas((mascotas) => {
                        return [...mascotas, mascota];
                    })
                });
                setIsLoading(false);
            } catch (err) {

            }
        }

        const getTiposMascotas = async (url) => {
            try {

                const res = await fetch(url);
                const data = await res.json();
                data.forEach((tipomascota) => {
                    setTiposMascotas((tiposmascotas) => {
                        return [...tiposmascotas, tipomascota];
                    })
                });
                setIsLoading(false);
            } catch (err) {

            }
        }

        getMascotas(URL);

        getTiposMascotas(URL_TIPOS);

    }, [])

    const createMascota = (nuevaMascota) => {

        setIsLoading(true);

        console.log(nuevaMascota)

        fetch(URL, {
            method: "POST",
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(nuevaMascota),
        })
            .then(res => res.json())
            .then(nuevaMascota => {
                setMascotas(
                    (mascotas) => {
                        return [...mascotas, nuevaMascota];
                    }
                )
            })
            .finally(() => {
                setIsLoading(false);
            })


    }

    const updateMascota = (mascotaUpdated) => {

        setIsLoading(true);

        fetch(URL + mascotaUpdated.id, {
            method: "PUT",
            headers: new Headers({
                'Authorization': 'Bearer ' + token,
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(mascotaUpdated),
        })
            .then(res => res.json())
            .then(mascotaUpdated => {
                setMascotas(
                    (mascotas) => {

                        return mascotas.map((mascota) => mascota.id === mascotaUpdated.id ? mascotaUpdated : mascota);

                    }
                )
            })
            .finally(() => {
                setIsLoading(false);
            });
    }

    const deleteMascota = (id) => {

        if (window.confirm("Confirma eliminacion de " + id)) {

            setIsLoading(true);

            fetch(URL + id, {
                method: "DELETE",
                headers: new Headers({
                    'Authorization': 'Bearer ' + token,
                    'Content-Type': 'application/json'
                }),
            })
                .then(res => {

                    if (res.ok) {
                        setMascotas(
                            (mascotas) => {

                                return mascotas.filter((mascota) => mascota.id !== id);

                            }
                        )
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        }

    }

    return (
        <section>
            <Formulario
                tiposMascotas={tiposMascotas}
                createMascota={createMascota}
                updateMascota={updateMascota}
                mascotaEdit={mascotaEdit}
                setMascotaEdit={setMascotaEdit}
            />

            <br /><br />

            {

                isLoading ? <Loader />
                    :
                    <Tabla
                        data={mascotas}
                        setMascotaEdit={setMascotaEdit}
                        deleteMascota={deleteMascota}
                    />

            }


        </section>
    )
}

export default Crud