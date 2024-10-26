import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
  import { store } from './Redux/Store.jsx'
import { Provider } from 'react-redux';

createRoot(document.getElementById('root')).render(
  <Provider store={store}>
  <App />
</Provider>

)
