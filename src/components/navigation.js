
import React from "react";
import Link from './link';
export const Navigation = (props) => {
  const [showDropDownMenu, setShowDropDownMenu] = React.useState(false);
    return (
    <div className={`topnav ${showDropDownMenu ? 'responsive': ''}` } >
    <Link className={props.location.pathname === '/' ? 'active' : undefined} to="/">Hem</Link>
    <Link className={props.location.pathname === '/accomendation/' ? 'active' : undefined} to="/accomendation/">Boende</Link>
    <Link className={props.location.pathname === '/wedding/' ? 'active' : undefined} to="/wedding/" >Vigsel</Link>
    <Link className={props.location.pathname === '/party/' ? 'active' : undefined}  to="/party/">Fest</Link>
    {/* <a href="#">Ölandstips</a> */}
    <a href="#" onClick={() => setShowDropDownMenu(!showDropDownMenu)}  className="icon" >&#9776;</a>
  </div>)
}