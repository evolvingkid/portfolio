import '../navBar.css';
import { useState, useEffect } from "react";

const NavTile = (props) => {

    const classNameOfTile = "nav-tile  " + (props.postionSecoundary === "false" ? "nav-left" : "nav-right");
    const [isUI, setisUI] = useState(true);

    const [width, setWindowWidth] = useState(0);

    const updateDimensions = () => {
        
        const scrnwidth = window.innerWidth
        setWindowWidth(scrnwidth);

        if (props.postionSecoundary === 'false') {
            setisUI(false);
        }
    }

    useEffect(() => {
        updateDimensions();
        window.addEventListener("resize", updateDimensions);
        return () =>
            window.removeEventListener("resize", updateDimensions);
    },);


    return (
        <div className={classNameOfTile} >

            {props.icon ? <img className="logo-Image" alt="nav-logo" src={props.icon} /> : null}

            {isUI ? props.title : width > 664 ? props.title : null}
        </div>
    );

}

export default NavTile;