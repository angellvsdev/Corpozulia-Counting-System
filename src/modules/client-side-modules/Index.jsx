import React from "react";
import Header from "./Mainpage/HomepageHeader";
import InformationModule from "./Mainpage/InformationModule";
import HomepageFooter from "./Mainpage/HomepageFooter";
import SignInForm from "./Login/SignIn";
import SignUpForm from "./Login/SignUp";

export default function Index(props) {
    return(
        <>
            <Header />
            <div className="information_title_container">
                <h2 className="information_title plus-jakarta-sans-bold"><i class="fa-solid fa-wheat-awn"></i> ¿Quienes somos?</h2>
            </div>
            <InformationModule />
            <HomepageFooter />
            <SignInForm></SignInForm>
            <SignUpForm></SignUpForm>
        </>
    )
}