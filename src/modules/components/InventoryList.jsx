import React from "react";
import InventoryListItem from "./InventoryListItem.jsx"

const InventoryList = ({ items }) => (
    <div className="flex flex-col w-4/5 h-auto p-1 mx-auto my-8 overflow-auto overflow-y-auto bg-gray-300 rounded-lg shadow-lg shadow-slate-600 max-h-96 lg:max-h-72 lg:my-12 lg:ml-8 xl:mx-auto xl:max-h-96">
        <div className="plus-jakarta-sans-bold w-full h-12 bg-gradient-to-r from-emerald-700 from-10% via-emerald-600 via-30% to-emerald-500 to-90% rounded-lg">
            <button type="button" className="w-full h-full p-2 font-bold text-white transition border-2 rounded-lg border-emerald-900 hover:bg-slate-200 hover:text-emerald-700 hover:border-emerald-500"><i class="fa-solid fa-truck-ramp-box"></i> Añadir Insumo</button>
        </div>
        <div className="flex flex-col flex-grow w-full p-1 my-0.5 bg-yellow-500 rounded-lg">
            {
                items.map(item => (
                    <InventoryListItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)

export default InventoryList;