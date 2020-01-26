
import React from "react";
import Link from './link';
import { FormattedMessage } from "react-intl";
import { navigate } from "gatsby";
export const Navigation = (props) => {
  const [showDropDownMenu, setShowDropDownMenu] = React.useState(false);
    return (
    <div className={`topnav ${showDropDownMenu ? 'responsive': ''}` } >
    <Link className={props.location.pathname === '/' ? 'active' : undefined} to="/" onClick={() =>{setShowDropDownMenu(false);}}><FormattedMessage id="navigation.home"/></Link>
    <Link className={props.location.pathname === '/accommodation/' ? 'active' : undefined} to="/accommodation/" onClick={() =>{setShowDropDownMenu(false);}}><FormattedMessage id="navigation.accommodation"/></Link>
    <Link className={props.location.pathname === '/wedding/' ? 'active' : undefined} to="/wedding/" onClick={() =>{setShowDropDownMenu(false);}} ><FormattedMessage id="navigation.wedding"/></Link>
    <Link className={props.location.pathname === '/party/' ? 'active' : undefined}  to="/party/" onClick={() =>{setShowDropDownMenu(false);}}><FormattedMessage id="navigation.party"/></Link>
    <Link className={props.location.pathname === '/rsvp/' ? 'active' : undefined}  to="/rsvp/" onClick={() =>{setShowDropDownMenu(false);}}><FormattedMessage id="navigation.rsvp"/></Link>
    {/* <a href="#">Ölandstips</a> */}
    <a href="#" onClick={() => setShowDropDownMenu(!showDropDownMenu)}  className="icon" >&#9776;</a>
  </div>)
}