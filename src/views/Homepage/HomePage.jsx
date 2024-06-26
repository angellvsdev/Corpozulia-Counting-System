import React from "react";
import Header from "../Homepage/HomepageHeader.jsx";
import InformationModule from "../Homepage/InformationModule.jsx";
import HomepageFooter from "../Homepage/HomepageFooter.jsx";
import "../../styles/index.css";
import "../../styles/responsive-adaptations/general_responsive.css";


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