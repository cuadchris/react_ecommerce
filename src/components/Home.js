import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

function Home() {
  const {user, isAuthenticated} = useAuth0()
  return (
    <div>
      {isAuthenticated ? (
        <h1>Hello, {user.email}</h1>
      ):(
        <h1>Home page</h1>
      )}
    </div>
  )
}

export default Home