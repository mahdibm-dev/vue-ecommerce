export type Product = {
  id: number
  name: string
  description: string
  price: number
  image: string
  slug: string
  quantity: number
}

export type ProductsData = {
  currentPage: number
  totalPages: number
  totalItems: number
  products: Product[]
}
export type ProductFilterQuery = {
  page?: number
  perPage?: number
}
