# Verificación y Vaidación - Oscar Laguna Santa Cruz
Practica 4 VV

## Reporte inicial de Sonarcloud (SonarLint):
Security (A): 0 issues

Reliability (C): 40 open issues (7 M, 17 L)

Maintanibility (A): 24 open issues (0 H, 0 M, 17 L)

Accepted issues: 0

Duplications: 0.5% on 21k lines

Security hotspots: 0

## Reporte final de Sonarcloud (SonarLint):
Security (A): 0 issues

Reliability (C): 40 open issues (0 M, 0 L)

Maintanibility (A): 24 open issues (0 H, 0 M, 0 L)

Accepted issues: 0

Duplications: 0.5% on 21k lines

Security hotspots: 0



# Lista de correcciones
Violación: A form label must be associated with a control.
>  label for="aerolinea"Nombre de la Aerolínea:</label>  
A form label must be associated with a control.  

                            <input type="text" name="aerolinea" onChange={comprobarCambiosAerolinea} required value={aerolinea}></input><br></br>  
                            <label for="origen">Ingrese el punto de partida:</label>  
                            <input type="text" id="origen" name="origen" onChange={comprobarCambiosOrigen} required value={origen}></input><br></br>  
                            <label for="origen">Ingrese el punto de llegada:</label>  
                            <input type="text" id="destino" name="destino" onChange={comprobarCambiosDestino} required value={destino}></input><br></br>  
                            <label for="precio">Precio:</label>  
                            <input type="number" id="precio" name="precio" onChange={comprobarCambiosPrecio} required value={precio}></input><br></br>  
                            <label for="cantidad">Cantidad:</label>  
                            <input type="number" id="cantidad" name="cantidad" onChange={comprobarCambiosCantidad} required value={cantidad}></input><br></br>  
                            <label for="fechaVuelo">Fecha de Vuelo:</label>  
                            <input type="date" id="fechaVuelo" name="fechaVuelo" onChange={comprobarCambiosFechavuelo} required value={fechavuelo}></input><br></br>  
                            <label for="horaSalida">Hora de Salida:</label>   
                            <input type="time" id="horaSalida" name="horaSalida" onChange={comprobarCambiosHorasalida} required value={horasalida}></input><br></br>  


Correccion: Reemplazar el atributo <for> por <htmlFor>, permitiendo el uso correcto del atributo

> label htmlFor="aerolinea">Nombre de la Aerolínea:</label>
   input type="text" id="aerolinea" name="aerolinea" onChange={comprobarCambiosAerolinea} required value={aerolinea} /><br />  
  label htmlFor="origen">Ingrese el punto de partida:</label>  
  input type="text" id="origen" name="origen" onChange={comprobarCambiosOrigen} required value={origen} /><br />  
  label htmlFor="destino">Ingrese el punto de llegada:</label>  
  input type="text" id="destino" name="destino" onChange={comprobarCambiosDestino} required value={destino} /><br />  
  label htmlFor="precio">Precio:</label>  
  input type="number" id="precio" name="precio" onChange={comprobarCambiosPrecio} required value={precio} /><br />  
  label htmlFor="cantidad">Cantidad:</label>  
  input type="number" id="cantidad" name="cantidad" onChange={comprobarCambiosCantidad} required value={cantidad} /><br />  
  label htmlFor="fechaVuelo">Fecha de Vuelo:</label>  
  input type="date" id="fechaVuelo" name="fechaVuelo" onChange={comprobarCambiosFechavuelo} required value={fechavuelo} /><br />  
  label htmlFor="horaSalida">Hora de Salida:</label>  
  input type="time" id="horaSalida" name="horaSalida" onChange={comprobarCambiosHorasalida} required value={horasalida} /><br />  

  
Violación: Unknown property 'class' found, use 'className' instead
>  div class="contenedor_todo"  
  ...  
  div class="contenedor_register"  
  ...    
  div class="contenedor_login"  

Corrección:  Utilizar 'claseName' en vez de 'class'
> div className="contenedor_todo"  
  ...  
  div className="contenedor_register"  
  ...  
  div className="contenedor_login"

Violación: Unknown property 'class' found, use 'className' instead
>  div class="contenedor_todo"  
...  
div class="registrosUser"
...
div class="datosPersonales"
...
div class="numeroTelefono"
...
div class="crearcontrasena"  
 

Corrección:  Reemplazar la etiqueta  'class' por 'className'
>  div className="contenedor_todo"  
...  
div className="registrosUser"
...
div className="datosPersonales"
...
div className="numeroTelefono"
...
div className="crearcontrasena"  
