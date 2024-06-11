import React from "react";
import "../../styles/index.css";

export default function HomepageFooter(props) {
    return(
        <>
            <footer className="homepage_footer">
                <div className="homepage_footer__developer_credits plus-jakarta-sans-bold">
                    <p className="developer_credits__credit_line"><i className="fa-solid fa-laptop-code"></i> Proyecto creado y dirigido por <a target="blank" href="https://github.com/angellvsdev">@angellsdev</a>. Todos los derechos reservados. ©</p>
                </div>
                <div className="homepage_footer__company_information">
                    <div className="company_information__logo">
                        <img src="src\assets\corpozulia-logo.png" alt="Logotipo de Corpozulia" className="company_information__logo_image" />
                        <address className="company_information__address plus-jakarta-sans-bold">
                            Machiques - Avenida Artes con Calle Bolívar<br />
                            Municipio Machiques de Perija - Parroquia Libertad<br />
                            Edo. Zulia<br />
                            +58-412-5349370<br />
                        </address>
                    </div>
                    <div className="company_information__social_media">
                        <a href="https://www.instagram.com/corpozulia_oficial?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" target="blank" className="company_information__social_media__icon_container"><i className="social_media__icon fa-brands fa-square-instagram"></i></a>
                    </div>
                </div>
            </footer>
        </>
    )
}