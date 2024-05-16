import { useState } from 'react'
import axios from 'axios'
import { useAuthContext } from './useAuthContext'

export const useSignup = () => {
  const [error, setError] = useState(null)
  const [isLoading, setIsLoading] = useState(true)
  const { dispatch } = useAuthContext()

  const resetError = () => {
    setIsLoading(true)
    setError(null)
  }

  const signup = async (name, email, password, role = 'user') => {
    resetError()
    try {
      const response = await axios.post('/api/user/signup', {
        name,
        email,
        password,
        role,
      })

      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: 'LOGIN', payload: response.data })
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      setError(error.response?.data?.error || 'Failed to sign up')
    }
  }

  return { signup, isLoading, error, resetError }
}
