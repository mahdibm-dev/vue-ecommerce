export type fetcherProps = {
  url: string
  method: 'GET' | 'POST' | 'PUT' | 'DELETE'
  params?: any
  headers?: any
  data?: any
}
