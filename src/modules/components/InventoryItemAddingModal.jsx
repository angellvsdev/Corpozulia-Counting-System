import React from "react";
import InventoryItemAddingModalInput from "./InventoryItemAddingModalInput";

const InventoryItemAddingModal = () => (
    <>  
        <div className="absolute top-0 content-center w-screen h-screen">
            <div className="flex flex-col w-full h-full mx-auto rounded-lg shadow-lg opacity-100 bg-gradient-to-r from-white to-gray-200 md:w-1/2 md:h-5/6 left-1/2">
                <button className="flex flex-col items-center self-end justify-center w-16 h-12 m-2 font-medium text-white bg-red-900 rounded-md plus-jakarta-light">Cerrar</button>
                <div className="self-center w-1/4 h-fit">
                    <img src="src\assets\undraw_order_delivered_re_v4ab (1).svg" alt="Mujer cargando cajas" className="object-cover my-8" />
                </div>
                <div className="w-full h-28 plus-jakarta-sans-light">
                    <h1 className="text-3xl font-extrabold text-center text-slate-400">Añadir Item</h1>
                    <p className="p-4 font-medium text-center text-32 text-slate-300">Bienvenido, para añadir un nuevo elemento al inventario de la empresa, rellena todos los campos y presiona el boton de "Listo".</p>
                    <div className="flex flex-col justify-center h-auto p-4 my-3 text-sm">
                        <InventoryItemAddingModalInput inputTitle="Nombre del Producto" />
                        <InventoryItemAddingModalInput inputTitle="Descripción del Producto" />
                        <InventoryItemAddingModalInput inputTitle="Cantidad en Stock" inputType="number" />
                        <div className="w-32 h-16 mx-auto my-4">
                            <button className="w-full h-full rounded-md bg-gradient-to-r from-emerald-700 from-10% via-emerald-600 via-30% to-emerald-500 to-90% text-center font-extrabold text-xl text-white transition border-2 border-emerald-900 hover:text-emerald-700 hover:border-emerald-500">Listo</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
)

export default InventoryItemAddingModal;