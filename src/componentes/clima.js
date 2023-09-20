import React, { useState, useEffect } from 'react';
import sol from '../img/sol.png';
import tarde from '../img/tarde.png';
import luna from '../img/luna.png';

function Horadia() {
  const [horaDelDia, setHoraDelDia] = useState('');
  const [img, setImagen] = useState(null);

  useEffect(() => {
    const hsActual = new Date().getHours();

    if (hsActual >= 5 && hsActual < 12) {
      setHoraDelDia('A LA HORA QUE USA LA APP ES DE MAÑANA/DIA');
      setImagen(sol);
    } else if (hsActual >= 12 && hsActual < 18) {
      setHoraDelDia('A LA HORA QUE USA LA APP ES DE TARDE');
      setImagen(tarde);
    } else {
      setHoraDelDia('A LA HORA QUE USA LA APP ES DE NOCHE');
      setImagen(luna);
    }
  }, []);

  return (
    <div className="Hora">
      <p>{horaDelDia}</p>
      {img && <img className= "imagenes" src={img} alt={`la hora marca que es: ${horaDelDia}`} />}
    </div>
  );
}

export default Horadia;