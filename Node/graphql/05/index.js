const { ApolloServer, gql } = require('apollo-server')

// 1. 定义 schema
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }
`

const books = [
  {
    title: 'The Awakening',
    author: 'Kate Chopin'
  },
  {
    title: 'City of Glass',
    author: 'Paul Auster'
  }
]

// 2. 定义 resolver
const resolvers = {
  // 所有的 Query 都走这里
  Query: {
    books: () => books
  }
}

// 创建apollo实例
const server = new ApolloServer({ typeDefs, resolvers })

// 默认localhost:4000
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
