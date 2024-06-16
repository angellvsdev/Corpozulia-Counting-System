import React from "react";
<<<<<<< Updated upstream
import Header from "./HomepageHeader";
import InformationModule from "./InformationModule";
import HomepageFooter from "./HomepageFooter";
import '../../modules-styling/index.css'
=======
import Header from "../Homepage/HomepageHeader.jsx";
import InformationModule from "../Homepage/InformationModule.jsx";
import HomepageFooter from "../Homepage/HomepageFooter.jsx";
import "../../styles/index.css";
>>>>>>> Stashed changes

export default function Index(props) {
    return(
        <>
            <Header />
            <div className="information_title_container">
                <h2 className="information_title plus-jakarta-sans-bold"><i class="fa-solid fa-wheat-awn"></i> ¿Quienes somos?</h2>
            </div>
            <InformationModule />
            <HomepageFooter />
        </>
    )
}