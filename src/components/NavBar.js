import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import "./NavBar.css";
import "./Title.css";

const NavBar = (props) => {
    const [a, setA] = useState(false);
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const handeltoggle = () => {
        setA(!a);
    }
    useEffect(() => {
        const changeWidth = () => {
            setScreenWidth(window.innerWidth);
        }
        window.addEventListener("resize", changeWidth);
    }, [])
    return (

        <>
            <div className="title">
                <div>The Siren</div>

                <i className="fas fa-bars icon" onClick={handeltoggle} ></i>

            </div>
            {(a || screenWidth > 500) && (<nav >
                <ul onClick={handeltoggle}>
                    <li><NavLink exact to="/"  className="normal-link-style" activeClassName="active-style">Home</NavLink> </li>
                    <li><NavLink exact to="/bollywood"  className="normal-link-style" activeClassName="active-style">Bollywood</NavLink> </li>
                    <li><NavLink exact to="/technology"  className="normal-link-style" activeClassName="active-style">Technology</NavLink> </li>
                    <li><NavLink exact to="/hollywood"  className="normal-link-style" activeClassName="active-style">Hollywood</NavLink> </li>
                    <li><NavLink exact to="/fitness"  className="normal-link-style" activeClassName="active-style">Fitness</NavLink> </li>
                    <li><NavLink exact to="/food"  className="normal-link-style" activeClassName="active-style">Food</NavLink> </li>
                </ul>
            </nav>)}

        </>
    )
}
export default NavBar;