
import React from "react";
import '../estilos/estilos.css'

function Testimonio() {
    return(
       <div className="contenedor-testimonio">
           <img className="imagen-testimonio" src={require("../imagenes/img-shaw.png")} alt="imagen-testimonio" title="imagen-testimonio"/>
           <div className="contenedor-texto-testimonio">
                <p className="nombre-testimonio">Shawn Wang en Singapur</p>
                <p className="cargo-testimonio">Ingeniero de Software en Amazon</p>
                <p className="texto-testimonio">"Da miedo cambiar de carrera. Solo gané la confianza de que podía programar trabajando a través de los cientos de horas de lecciones gratuitas en freeCodeCamp. Dentro de un año tuve un trabajo de seis cifras como ingeniero de software. freeCodeCamp cambió mi vida."</p> 
           </div>
       </div>

    );
};

export default Testimonio;