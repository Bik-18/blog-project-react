import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react/cjs/react.development";
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
                    <li><NavLink exact to="/" activeClassName="active-style" className="normal-link-style">Home</NavLink> </li>
                    <li><NavLink exact to={{
                        pathname: "/bollywood",
                        // hash: "#09543",
                        // search: "?titli"
                    }} activeClassName="active-style" className="normal-link-style">Bollywood</NavLink> </li>
                    <li><NavLink exact to="/technology" activeClassName="active-style" className="normal-link-style">Technology</NavLink> </li>
                    <li><NavLink exact to="/hollywood" activeClassName="active-style" className="normal-link-style">Hollywood</NavLink> </li>
                    <li><NavLink exact to="/fitness" activeClassName="active-style" className="normal-link-style">Fitness</NavLink> </li>
                    <li><NavLink exact to="/food" activeClassName="active-style" className="normal-link-style">Food</NavLink> </li>
                </ul>
            </nav>)}

        </>
    )
}
export default NavBar;