import App from './App'
import 'styles/global.css'
import ReactDOM from 'react-dom/client'
import { UserProvider } from 'contexts/userContext'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <UserProvider>
    <App />
  </UserProvider>,
)
