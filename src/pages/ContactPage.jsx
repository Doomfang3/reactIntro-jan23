import { Navigate } from 'react-router-dom'

const ContactPage = () => {
  const isUserConnected = true

  if (!isUserConnected) {
    return <Navigate to='/' />
  }

  return <h1>Contact Page</h1>
}

export default ContactPage
