import React from "react";

const LoadingModal = () => {
    <div class="fixed top-0 left-0 w-full h-full bg-black opacity-75 z-50 flex justify-center items-center">
      <div class="bg-white rounded-lg shadow-md p-4 flex">
        <div class="mr-2">
          <svg class="animate-spin h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <circle class="fill-current text-gray-500" cx="12" cy="12" r="10" stroke-width="4" stroke="currentColor" />
          </svg>
        </div>
        <span class="text-gray-500">Cargando...</span>
      </div>
    </div>
}

export default LoadingModal;