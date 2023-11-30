import App from './App'
import 'styles/global.css'
import ReactDOM from 'react-dom/client'
import { UserProvider } from 'contexts/userContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GoogleOAuthProvider clientId={process.env.REACT_APP_CLIENT_ID || ''}>
    <UserProvider>
      <App />
    </UserProvider>
  </GoogleOAuthProvider>,
)
