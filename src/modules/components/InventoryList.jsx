import React from "react";
import Item from "./Item";
import InventoryListItem from "./InventoryListItem.jsx"

const InventoryList = (props) => (
    <div className="flex flex-col w-4/5 h-auto p-1 mx-auto my-8 overflow-y-auto bg-gray-300 rounded-lg shadow-lg shadow-slate-600 max-h-96">
        <div className="plus-jakarta-sans-bold w-full h-12 bg-gradient-to-r from-emerald-700 from-10% via-emerald-600 via-30% to-emerald-500 to-90% rounded-lg">
            <button type="button" className="w-full h-full font-bold text-white transition border-2 rounded-lg border-emerald-900 hover:bg-slate-200 hover:text-emerald-700 hover:border-emerald-500"><i class="fa-solid fa-truck-ramp-box"></i> Añadir Insumo</button>
        </div>
        <table className="flex flex-col flex-grow w-full p-1 my-0.5 bg-yellow-500 rounded-lg">
            <tr className="flex justify-between pl-20 text-slate-50 plus-jakarta-sans-bold">
                <th>Nombre</th>
                <th>Descripción</th>
                <th>Cantidad</th>
            </tr>
            <InventoryListItem />
            <InventoryListItem />
            <InventoryListItem />
            <InventoryListItem />
        </table>
    </div>
)

export default InventoryList;