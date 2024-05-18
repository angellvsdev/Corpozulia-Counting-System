import React from "react";
import Header from "./HomepageHeader";
import InformationModule from "./InformationModule";
import HomepageFooter from "./HomepageFooter";

export default function Homepage(props) {
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