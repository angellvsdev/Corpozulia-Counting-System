import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './Index.jsx'
import './styles/tailwind.css'
import './styles/index.css';

import { UserProvider } from './UserContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <UserProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </UserProvider>
)