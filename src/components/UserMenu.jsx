import { useState } from 'react';
import { Transition } from '@headlessui/react';
import { Link } from 'react-router-dom';

const SideMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMouseEnter = () => {
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    setIsOpen(false);
  };

  return (
    <div className="fixed top-0 right-0 z-10">
      <div
        className="bg-gray-800 text-white p-4 rounded-br-lg shadow-md cursor-pointer"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        ☰
      </div>

      <Transition
        show={isOpen}
        enter="transition-transform duration-300"
        enterFrom="translate-y-full"
        enterTo="translate-y-0"
        leave="transition-transform duration-300"
        leaveFrom="translate-y-0"
        leaveTo="translate-y-full"
      >
        <div
          className="bg-white w-64 h-screen shadow-lg p-4 rounded-bl-lg"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <ul className="space-y-2">
            <li>
              <Link
                to="/admin/profile"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
              >
                Perfil
              </Link>
            </li>
            <li>
              <Link
                to="/admin/requests"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
              >
                Peticiones
              </Link>
            </li>
            <li>
              <Link
                to="/admin/benefits"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
              >
                Prestaciones
              </Link>
            </li>
            <li>
              <Link
                to="/admin/inventory"
                className="block px-4 py-2 text-gray-800 hover:bg-gray-200 rounded"
                onClick={() => setIsOpen(false)} // Cerrar el menú al hacer clic en un enlace
              >
                Inventario
              </Link>
            </li>
          </ul>
        </div>
      </Transition>
    </div>
  );
};

export default SideMenu;
