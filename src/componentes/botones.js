import React, { useState } from 'react';

const Contadordias = () => {
  const [contador, setContador] = useState(0);
  const [date, setDate] = useState(new Date());

  const masContador = () => {
    setContador(contador + 1);
  };

  const menosContador = () => {
    setContador(contador - 1);
  };

  const sumarDia = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() + contador);
    setDate(newDate);
  };

  const restarDia = () => {
    const newDate = new Date(date);
    newDate.setDate(newDate.getDate() - contador);
    setDate(newDate);
  };

  const español = (date) => {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return date.toLocaleDateString('es-ES', options);
  };

  return (
    <>
      <p>se sumaran o restaran {contador} días</p>
      <button onClick={menosContador}>Reducir</button>
      <button onClick={masContador}>Incrementar</button>
      <p>{español(date)}</p>
      <button onClick={restarDia}>Restar días</button>
      <button onClick={sumarDia}>Sumar días</button>
    </>
  );
};

export default Contadordias;
