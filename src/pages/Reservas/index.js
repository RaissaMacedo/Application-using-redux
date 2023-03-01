import React from 'react';
import './styles.css';
import { MdDelete } from 'react-icons/md';
export default function Reservas() {
  return (
    <div>
      <h1 className="title">Você solicitou 1 reserva</h1>
      <div className="reservas">
        <img
          src="https://sujeitoprogramador.com/wp-content/uploads/2019/12/fernand-noronha.jpg"
          alt="Maceio"
        />
        <strong>Viagem Maceio 7 dias</strong>
        <span>Quantidade: 2</span>
        <button type="button" onClick={() => {}}>
          <MdDelete size={26} color="#191919" />
        </button>
      </div>

      <footer>
        <button type="button">Solicitar Reservas</button>
      </footer>
    </div>
  );
}