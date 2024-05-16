import { useAuthContext } from './useAuthContext'
import { useState } from 'react'
import axios from 'axios'

export const useLogin = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)
  const { dispatch } = useAuthContext()

  const resetError = () => {
    setIsLoading(true)
    setError(null)
  }

  const login = async (email, password) => {
    resetError()

    try {
      const response = await axios.post('/api/user/login', {
        email,
        password,
      })

      localStorage.setItem('user', JSON.stringify(response.data))
      dispatch({ type: 'LOGIN', payload: response.data })
      setIsLoading(false)
    } catch (err) {
      setError(err.response?.data?.error || 'An unknown error occurred')
      setIsLoading(false)
    }
  }

  return { login, isLoading, error, resetError }
}
