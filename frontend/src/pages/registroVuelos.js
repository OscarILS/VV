import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Estilos/registroVuelo.css";

export default function RegistroVuelo() {
    const navigate = useNavigate();
    const [aerolinea, setAerolinea] = useState("");
    const [origen, setOrigen] = useState("");
    const [destino, setDestino] = useState("");
    const [precio, setPrecio] = useState("");
    const [cantidad, setCantidad] = useState("");
    const [fechavuelo, setFechavuelo] = useState("");
    const [horasalida, setHorasalida] = useState("");

    const comprobarCambiosAerolinea = (event) => {
        setAerolinea(event.target.value);
    };
    const comprobarCambiosOrigen = (event) => {
        setOrigen(event.target.value);
    };
    const comprobarCambiosDestino = (event) => {
        setDestino(event.target.value);
    };
    const comprobarCambiosPrecio = (event) => {
        setPrecio(event.target.value);
    };
    const comprobarCambiosCantidad = (event) => {
        setCantidad(event.target.value);
    };
    const comprobarCambiosFechavuelo = (event) => {
        setFechavuelo(event.target.value);
    };
    const comprobarCambiosHorasalida = (event) => {
        setHorasalida(event.target.value);
    };

    useEffect(() => {
        const adminEmail = localStorage.getItem("admin");
        if (adminEmail == null) {
            navigate("/loginadmin");
        }
    });

    const guardarDatos = async (e) => {
        e.preventDefault();
        try {
            const formData = {
                aerolinea: aerolinea,
                origen: origen,
                destino: destino,
                precio: precio,
                cantidad: cantidad,
                fechavuelo: fechavuelo,
                horasalida: horasalida,
                id: null,
            };
            const url = "http://localhost:9000/api/registerflights";
            const { response } = await axios.post(url, formData);
            console.log(response);
            alert("Registro exitoso");
            setAerolinea("");
            setCantidad("");
            setDestino("");
            setFechavuelo("");
            setHorasalida("");
            setOrigen("");
            setPrecio("");
        } catch (error) {
            console.error("Error al enviar la solicitud:", error);
        }
    };

    const Atras = () => {
        navigate("/menuadmin");
    };

    return (
        <main>
            <html>
                <button onClick={Atras}>Retornar</button>
                <form onSubmit={guardarDatos}>
                    <h1>Registro de Vuelo</h1>
                    <div className="contenedor-formulario">
                        <div className="grupo-formulario">
                            <label htmlFor="aerolinea">Nombre de la Aerolínea:</label>
                            <input type="text" id="aerolinea" name="aerolinea" onChange={comprobarCambiosAerolinea} required value={aerolinea} />
                            <br />
                            <label htmlFor="origen">Ingrese el punto de partida:</label>
                            <input type="text" id="origen" name="origen" onChange={comprobarCambiosOrigen} required value={origen} />
                            <br />
                            <label htmlFor="destino">Ingrese el punto de llegada:</label>
                            <input type="text" id="destino" name="destino" onChange={comprobarCambiosDestino} required value={destino} />
                            <br />
                            <label htmlFor="precio">Precio:</label>
                            <input type="number" id="precio" name="precio" onChange={comprobarCambiosPrecio} required value={precio} />
                            <br />
                            <label htmlFor="cantidad">Cantidad:</label>
                            <input type="number" id="cantidad" name="cantidad" onChange={comprobarCambiosCantidad} required value={cantidad} />
                            <br />
                            <label htmlFor="fechaVuelo">Fecha de Vuelo:</label>
                            <input type="date" id="fechaVuelo" name="fechaVuelo" onChange={comprobarCambiosFechavuelo} required value={fechavuelo} />
                            <br />
                            <label htmlFor="horaSalida">Hora de Salida:</label>
                            <input type="time" id="horaSalida" name="horaSalida" onChange={comprobarCambiosHorasalida} required value={horasalida} />
                            <br />
                        </div>
                        <button id="btnSave">Registrar Vuelo</button>
                    </div>
                </form>
            </html>
        </main>
    );
}
