import type { fetcherProps } from '@/types'
import axios from 'axios'

const axiosInstance = axios.create({ baseURL: 'https://some-domain.com/api' })

export async function fetcher(options: fetcherProps) {
  const token = localStorage.getItem('auth-token')
  const response = await axiosInstance({
    ...options,
    headers: {
      ...options.headers,
      Authorization: token
    }
  })
  return response
}
