//import PropTypes from 'prop-types'
import React from 'react'
import india from './india.png'
import usa from './usa.png'
import uae from './uae.png'
import canada from './canada.png'
import mexico from './mexico.png'
import brazil from './brazil.png'
import japan from './japan.png'
import gbr from './gbr.png'
import germany from './germany.png'
import france from './france.png'
import australia from './autralia.png'
import {
  Link
} from "react-router-dom";
const Navbar=(props)=>{
  const{changeCountry}=props;
    return (
      <div>
        <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <Link className="" to="/"><img src="https://i.imgur.com/TnxcegF.png" alt="Waezel News" width="20%" height="12%"/></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item"><Link className="nav-link" aria-current="page" to="/">Home</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
                <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Country
                  </a>
                  <ul className="dropdown-menu">
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("us")}}>USA<img src={usa} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("ca")}}>CAN<img src={canada} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("mx")}}>MEX<img src={mexico} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("br")}}>BRA<img src={brazil} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("in")}}>IND <img src={india} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("ae")}}>UAE<img src={uae} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("jp")}}>JPN<img src={japan} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("gb")}}>GBR<img src={gbr} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("gr")}}>GER<img src={germany} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("fr")}}>FRA<img src={france} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                    <li style={{cursor:'pointer'}}><a className="dropdown-item" onClick={()=>{changeCountry("au")}}>AUS<img src={australia} alt="" style={{marginLeft:"15px",marginBottom:"3px"}}/></a></li>
                  </ul>
                </li>
            </ul>
            </div>
        </div>
        </nav>
      </div>
    )
}
export default Navbar