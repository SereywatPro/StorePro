import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { BrowserRouter, RouterProvider } from 'react-router-dom'
import { createBrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import About from './components/About.jsx'
import Contact from './components/Contact.jsx'

const router = createBrowserRouter([
  { path: '/', element: <App /> },
  { path: '/About', element: <About /> },
  { path: "/contact", element: <Contact/>}
])


createRoot(document.getElementById("root")).render(
  <StrictMode>
      <RouterProvider router={router}/>
  </StrictMode>
);
