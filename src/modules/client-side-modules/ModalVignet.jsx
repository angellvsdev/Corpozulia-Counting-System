import React from "react";

export default function ModalVignet(props) {
    return(
        <>
            <div className="modal_vignet">
                <div className="modal_vignet__title"><i className={props.icon + ' ' + 'modal_vignet__title_emblem'}></i> <p className="modal_vignet__title_paragraph">{props.title}</p></div>
                <div className="modal_vignet__content">
                    {props.content}
                </div>
                <div className="modal_vignet__toggle">
                    <button className="modal_vignet__toggle_button"><i className="fa-solid fa-arrow-up"></i></button>
                </div>
            </div>
        </>
    )
}