import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { BrowserRouter } from 'react-router-dom'
import styles, { theme } from './styles.js'
import { ConfigProvider } from 'antd'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <ConfigProvider theme={theme}>
        <App />
      </ConfigProvider>
    </BrowserRouter>
  </StrictMode>
)
