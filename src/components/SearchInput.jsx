import { XMarkIcon } from '@heroicons/react/16/solid';
import React, { useState, useEffect } from 'react';

const SearchInput = ({ onSearch }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchTimer, setSearchTimer] = useState(null);

    const handleSearchChange = (e) => {
        const searchTerm = e.target.value.trim();
        setSearchTerm(searchTerm);

        if (searchTimer) {
            clearTimeout(searchTimer);
        }

        setSearchTimer(setTimeout(() => {
            onSearch(searchTerm);
        }, 150));
    };

    const handleClearSearch = () => {
        setSearchTerm('');
        clearTimeout(searchTimer);
        onSearch('');
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleSearchChange(e);
        }
    };

    return (
        <div className="relative">
            <input
                type="text"
                value={searchTerm}
                onChange={handleSearchChange}
                onKeyPress={handleKeyPress}
                placeholder="Buscar items..."
                className="w-full px-3 placeholder-gray-400 border border-gray-300 rounded-md shadow-sm focus:ring-gray-500 focus:border-gray-400 sm:text-sm"
                pattern="[a-zA-Z0-9\s]*"
                title="Solo letras, números y espacios son permitidos"
            />
            {searchTerm !== '' && (
                <button
                    type="button"
                    onClick={handleClearSearch}
                    className="absolute inset-y-0 right-0 flex items-center px-3 font-medium text-gray-500 hover:text-gray-700 focus:outline-none"
                    style={{ top: '50%', transform: 'translateY(-50%)', marginRight: '10px' }} // Ajuste para centrar verticalmente y espacio de margen derecho
                >
                    <XMarkIcon className="h-4 w-4" /> {/* Icono X */}
                </button>
            )}
        </div>
    );
};

export default SearchInput;
