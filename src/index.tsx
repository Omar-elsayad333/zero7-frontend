import App from './App'
import ReactDOM from 'react-dom/client'
import { UserProvider } from 'contexts/userContext'
import { GoogleOAuthProvider } from '@react-oauth/google'
const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <GoogleOAuthProvider clientId="31125203935-14ugtmtm5r5s3e90agqlrsnpqiuqiaf1.apps.googleusercontent.com">
    <UserProvider>
      <App />
    </UserProvider>
  </GoogleOAuthProvider>,
)
