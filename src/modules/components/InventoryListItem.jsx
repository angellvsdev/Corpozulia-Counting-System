import React from "react";

let mockItem = {
    itemName: "Pala",
    itemDescription: "Pala de acero inoxidable.",
    itemQuantity: 25
}

const InventoryListItem = (props) => (
    <tr className="flex w-full h-16 my-0.5 rounded-lg bg-slate-300 content-evenly p-1">
        <div className="flex justify-center w-16 h-full text-4xl bg-red-800 rounded-lg"><i class="fa-solid fa-box self-center text-white"></i></div>
        <tr className="flex justify-between w-full">
            <td>{mockItem.itemName}</td>
            <td>{mockItem.itemDescription}</td>
            <td>{mockItem.itemQuantity}</td>
        </tr>
    </tr>
)

export default InventoryListItem;