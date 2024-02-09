import React from 'react'
import { NavLink } from 'react-router-dom';
import { useSelector} from 'react-redux';

function Navbar() {
  const state = useSelector((state)=> state.handleCart)
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary py-3 shado">
  <div className="container">
    <NavLink className="navbar-brand fw-bold fs-4" to="/">bi'MARKA</NavLink>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
      <li className="nav-item">
          <NavLink className="nav-link" to="/anasayfa">Anasayfa</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/ürünler">Ürünler</NavLink>
        </li>
        <li className="nav-item">
          <NavLink className="nav-link" to="/hakkımızda">Hakkımızda</NavLink>
        </li>
        <li className="nav-item dropdown">
          <NavLink className="nav-link " to="/iletişim" role="button" data-bs-toggle="dropdown" aria-expanded="false">
           İletişim
          </NavLink>
          <ul className="dropdown-menu">
            <li><NavLink className="dropdown-item" to="/">Action</NavLink></li>
            <li><NavLink className="dropdown-item" to="/">Another action</NavLink></li>
            <li><hr className="dropdown-divider"/></li>
            <li><NavLink className="dropdown-item" to="/">Something else here</NavLink></li>
          </ul>
        </li>
       
      </ul>
      <div className="buttons">
        <NavLink to="/giriş" className='btn btn-outline-dark'>
            <i className="fa fa-sign-in me-1"></i> Giriş</NavLink>
         <NavLink to="/kayıt " className='btn btn-outline-dark ms-2'>
            <i className="fa-solid fa-registered"></i> Kayıt</NavLink>
        <NavLink to="/sepet" className='btn btn-outline-dark ms-2'>
            <i className="fa fa-sign-in me-1"></i> Sepet ({state.length})</NavLink>
      </div>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
