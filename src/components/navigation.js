
import React from "react";
import Link from './link';
import { FormattedMessage } from "react-intl";
export const Navigation = (props) => {
  const [showDropDownMenu, setShowDropDownMenu] = React.useState(false);
    return (
    <div className={`topnav ${showDropDownMenu ? 'responsive': ''}` } >
    <Link className={props.location.pathname === '/' ? 'active' : undefined} to="/"><FormattedMessage id="navigation.home"/></Link>
    <Link className={props.location.pathname === '/accomendation/' ? 'active' : undefined} to="/accomendation/"><FormattedMessage id="navigation.accomendation"/></Link>
    <Link className={props.location.pathname === '/wedding/' ? 'active' : undefined} to="/wedding/" ><FormattedMessage id="navigation.wedding"/></Link>
    <Link className={props.location.pathname === '/party/' ? 'active' : undefined}  to="/party/"><FormattedMessage id="navigation.party"/></Link>
    {/* <a href="#">Ölandstips</a> */}
    <a href="#" onClick={() => setShowDropDownMenu(!showDropDownMenu)}  className="icon" >&#9776;</a>
  </div>)
}