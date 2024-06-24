import React from "react";

let mockItem = {
    itemName: "Pala",
    itemDescription: "Pala de acero inoxidable.",
    itemQuantity: 25
}

const InventoryListItem = (props) => (
    <div className="flex flex-wrap w-full h-24 my-0.5 rounded-lg bg-slate-300 p-1">
        <button className="flex justify-center w-16 h-full text-4xl rounded-lg bg-slate-400"><i class="fa-solid fa-box self-center text-white"></i></button>
        <div className="flex flex-col flex-grow mx-4 my-2 plus-jakarta-sans-light">
            <p className="text-xl font-extrabold text-slate-950">{mockItem.itemName}</p>
            <p className="text-sm text-slate-600 font-extralight">{mockItem.itemDescription}</p>
        </div>
        <button className="relative self-center w-10 h-10 mx-2 text-white border-2 rounded-full group bg-slate-400 border-slate-950">
            <i class="fa-solid fa-wrench"></i>
            <div className="top-0 hidden h-full group-focus:absolute group-focus:flex right-12">
                <button type="button" className="w-10 h-10 mx-1 border-2 rounded-full border-orange-950 bg-gradient-to-r from-orange-800 to-orange-700" ><i class="fa-solid fa-pen-to-square"></i></button>
                <button type="button" className="w-10 h-10 mx-1 border-2 rounded-full border-red-950 bg-gradient-to-r from-red-500 to-red-700" ><i class="fa-solid fa-ban"></i></button>
            </div>
        </button>
    </div>
)

export default InventoryListItem;