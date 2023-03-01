import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import './styles.css';
// useSelector é responsavel por conectar redux com os reducers

export default function Header() {
  const reserveSize = useSelector((state) => state.reserve.length);

  console.log(reserveSize);

  return (
    <header className="container">
      <Link to="/">
        <img className="logo" src={logo} alt="logo do projeto" />
      </Link>
      <Link className="reserva" to="/reservas">
        <div>
          <strong>Minhas reservas</strong>
          <span>{reserveSize} Reservas</span>
        </div>
      </Link>
    </header>
  );
}
