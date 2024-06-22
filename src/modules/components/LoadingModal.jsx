import React from "react";

const LoadingModal = () => (
    <div className="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-50 flex justify-center items-center">
        <div className="bg-white rounded-lg shadow-md p-4 flex">
            <div className="mr-2">
                <svg className="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle className="fill-current text-gray-500" cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" />
                </svg>
            </div>
            <span className="text-gray-500">Cargando...</span>
        </div>
    </div>
);

export default LoadingModal;
