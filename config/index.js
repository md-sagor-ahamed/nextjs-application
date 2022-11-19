const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'https://jsonplaceholder.typicode.com/posts?_limit=6' : 'https://localhost:3000'