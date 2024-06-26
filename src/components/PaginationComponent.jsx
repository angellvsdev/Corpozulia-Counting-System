import React from 'react';
import { Pagination } from 'react-headless-pagination';

const PaginationComponent = ({ totalPages, currentPage, onPageChange }) => {
  // Verificar si hay más de una página
  if (totalPages <= 1) {
    return null; // No renderizar nada si no hay más de una página
  }

  return (
    <div className="bottom-0 left-0 w-full p-4 flex justify-center pointer-events-none">
      <div className="flex flex-col items-center w-full">
        <p className="mb-2">Current page: {currentPage + 1}</p>

        <Pagination
          currentPage={currentPage}
          setCurrentPage={onPageChange}
          totalPages={totalPages}
          className="flex"
          truncableText="..."
          truncableClassName=""
        >
          {/* Botón "Previous" */}
          <Pagination.PrevButton className="px-4 py-2 bg-blue-500 text-white rounded-md mr-2 pointer-events-auto">
            Previous
          </Pagination.PrevButton>

          {/* Lista de números de página */}
          <nav className="flex justify-center flex-grow">
            <ul className="flex items-center">
              <Pagination.PageButton
                activeClassName="bg-blue-500 text-white rounded-md px-4 py-2"
                inactiveClassName="text-gray-500 hover:bg-gray-200 rounded-md px-4 py-2"
                className="text-gray-700 hover:bg-gray-200 rounded-md px-4 py-2"
              />
            </ul>
          </nav>

          {/* Botón "Next" */}
          <Pagination.NextButton className="px-4 py-2 bg-blue-500 text-white rounded-md ml-2 pointer-events-auto">
            Next
          </Pagination.NextButton>
        </Pagination>
      </div>
    </div>
  );
};

export default PaginationComponent;
