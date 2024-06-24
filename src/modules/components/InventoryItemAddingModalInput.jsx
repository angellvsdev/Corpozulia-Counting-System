import React from "react";

const InventoryItemAddingModalInput = (props) => (
    <>
        <label htmlFor="product_entry_name" className="my-1 mt-2 font-extrabold text-slate-400">{props.inputTitle}</label>
        <input type={props.inputType || "text"} name="product_entry_name" id="product_entry_name" className="h-8 p-2 mb-2 font-medium text-white rounded-md bg-slate-300" required />
    </>
);

export default InventoryItemAddingModalInput;