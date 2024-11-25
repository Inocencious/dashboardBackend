import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { DataProvider } from './context/DataContext.tsx'
import { GoogleOAuthProvider } from '@react-oauth/google'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <GoogleOAuthProvider clientId="263836092252-bjb6425hroo5p9tpco97c7gv3ktshtdi.apps.googleusercontent.com">
      <DataProvider>
        <App />
      </DataProvider>
    </GoogleOAuthProvider>
    
  </StrictMode>,
)
