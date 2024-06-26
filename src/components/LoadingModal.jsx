import React from "react";

const LoadingModal = () => (
    <div className="fixed top-0 left-0 z-50 flex items-center justify-center w-full h-full bg-red-900 opacity-1">
        <div className="flex p-4 bg-white rounded-lg shadow-md">
            <div className="mr-2">
                <svg className="w-5 h-5 animate-spin" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <circle className="text-black fill-current" cx="12" cy="12" r="10" strokeWidth="4" stroke="currentColor" />
                </svg>
            </div>
            <span className="text-black">Cargando...</span>
        </div>
    </div>
);

export default LoadingModal;
