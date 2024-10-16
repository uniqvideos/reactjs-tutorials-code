import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'


/*
"emmet.includeLanguages": {
  "javascript": "javascriptreact",
  "javascriptreact": "html"
}  
*/

createRoot(document.getElementById('root')).render(
    <App />
)
