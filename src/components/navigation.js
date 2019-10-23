
import React from "react";
import Link from './link';
export const Navigation = (props) => {
    return (
    <div className="topnav" >
    <Link className={props.location.pathname === '/' ? 'active' : undefined} to="/">Hem</Link>
    <Link to="vigsel" >Vigsel</Link>
    <a href="#">Fest</a>
    <a href="#">Ölandstips</a>
    <Link to="accomendation">Boende</Link>
    <a href="javascript:void(0);"  className="icon" >&#9776;</a>
  </div>)
}