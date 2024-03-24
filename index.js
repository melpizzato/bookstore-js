const App = require('./App')

const app = new App()

app.createAuthor('J. R. R. Tolkien', 'South-African', '...')
app.createAuthor('Rick Riordan', 'American', '...')

const authors = app.getAuthors()

app.createBook('The Hobbit', '...', 'fantasy', 300, authors[0], '...', 19.99, 100)
app.createBook('The Fellowship of The Ring', '...', 'fantasy', 400, authors[0], '...', 24.99, 100)
app.createBook('The Lightning Thief', '...', 'fantasy', 500, authors[1], '...', 24.99, 100)
app.createBook('Sea of Monsters', '...', 'fantasy', 600, authors[1], '...', 24.99, 100)
app.createPoster('Lord of The Rings', '...', '60cm', '40cm', 14.99, 20)

const books = app.getBooks()
const posters = app.getPosters()

app.createUser('Melissa', 'melissa@email.com', '123456')

const users = app.getUsers()

app.showDatabase()

const items = [
  {
    product: books[0],
    quantity: 2
  },
  {
    product: books[1],
    quantity: 1
  },
  {
    product: books[3],
    quantity: 1
  },
  {
    product: posters[0],
    quantity: 3
  }
]

app.createOrder(items, users[0])

app.showDatabase()