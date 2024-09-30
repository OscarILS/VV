import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Estilos/mainpage.css"; // Importas CSS

class MainPage extends Component {
  render() {
    return (
      <body>
        <main>
          <div className="contenedor_todo">
            <h1>Bienvenido a FlyEasy</h1>
            <div className="contenedor_register">
              <h3>¿Aún no tienes cuenta?</h3>
              <div>
                <Link to="/register">Regístrate</Link>
              </div>
            </div>
            <div className="contenedor_login">
              <h3>¿Ya tienes cuenta?</h3>
              <div>
                <Link to="/login">Inicia sesión</Link>
              </div>
            </div>
          </div>
        </main>
      </body>
    );
  }
}

export default MainPage;
