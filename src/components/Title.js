import React, { useState } from "react";
import "./Title.css";
import "./NavBar.css";

const Title = () => {
    const [isMenu,setIsMenu]=useState(false);
    const handleMenu=()=>{
        setIsMenu(!isMenu);
;    }
    return (
        <>
            <div className="title">
                <div>The Siren</div>

                <i class="fas fa-bars icon" onClick={handleMenu}></i>
                {/* <NavBar data={isMenu}/> */}
            </div>
        </>
    )
}

export default Title;