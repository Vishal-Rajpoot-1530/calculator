import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
 import counterStore from './store/App_Store.js'
import App from './App.jsx'
import {Provider} from "react-redux"
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={counterStore}>

    <App />
    </Provider>
  </StrictMode>,
)
