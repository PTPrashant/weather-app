import React from 'react'
import { HashLink } from 'react-router-hash-link';

// <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//   <span className="navbar-toggler-icon"></span>
// </button>
const Navbar = () => {
  return (
    <div style={{position: 'fixed' }}>
        <nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-light" href="/">Weather App</a>
   

    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <HashLink to='#weather' smooth className="nav-link active text-light" aria-current="page">Weather</HashLink>
        </li>

        <li className="nav-item">
        <HashLink to='#about' smooth className="nav-link active text-light" aria-current="page">About</HashLink>
      </li>

      <li className="nav-item">
      <HashLink to='#footer' smooth className="nav-link active text-light" aria-current="page">Footer</HashLink>
    </li>



      </ul>

    </div>
  </div>
</nav>
      
    </div>
  )
}

export default Navbar
