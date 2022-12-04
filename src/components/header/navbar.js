import React from 'react'

const Navbar = () => {
  return (
    <div id="header-nav" className="collapse navbar-collapse w-100 my-lg-auto">
          <ul className="navbar-nav text-lg-center my-lg-auto py-lg-3">
            <li className="nav-item"><a className="nav-link smooth-scroll active" href="#home">Anasayfa</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#about">Hakkımızda</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#services">Hizmetlerimiz</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#resume">Özgeçmiş</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#portfolio">Çalışma Alanları</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#testimonial">Çalışanlarımız</a></li>
            <li className="nav-item"><a className="nav-link smooth-scroll" href="#contact">İletişim</a></li>
          </ul>
        </div>
        
  )
}

export default Navbar