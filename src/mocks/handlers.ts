import { http, HttpResponse } from 'msw'
import { faker } from '@faker-js/faker'

// Generate a large dataset of users
const generateUsers = (count: number) => {
  return Array.from({ length: count }, () => ({
    id: faker.string.uuid(),
    firstName: faker.person.firstName(),
    lastName: faker.person.lastName(),
    email: faker.internet.email(),
    role: faker.helpers.arrayElement(['Admin', 'User']),
    status: faker.helpers.arrayElement(['Active', 'Inactive'])
  }))
}

// Generate 100 users for our mock database
const mockUsers = generateUsers(100)

export const handlers = [
  http.get('/api/users', ({ request }) => {
    const url = new URL(request.url)
    const page = parseInt(url.searchParams.get('page') || '1')
    const pageSize = parseInt(url.searchParams.get('pageSize') || '5')
    const searchTerm = url.searchParams.get('search') || ''

    // Filter users based on search term
    let filteredUsers = mockUsers
    if (searchTerm) {
      const searchLower = searchTerm.toLowerCase()
      filteredUsers = mockUsers.filter(user => 
        user.firstName.toLowerCase().includes(searchLower) ||
        user.lastName.toLowerCase().includes(searchLower) ||
        user.email.toLowerCase().includes(searchLower) ||
        user.role.toLowerCase().includes(searchLower)
      )
    }

    // Calculate pagination
    const totalCount = filteredUsers.length
    const start = (page - 1) * pageSize
    const end = start + pageSize
    const paginatedUsers = filteredUsers.slice(start, end)

    return HttpResponse.json({
      data: paginatedUsers,
      totalCount,
      page,
      pageSize
    })
  })
] 