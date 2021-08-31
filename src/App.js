import axios from "axios"
import React, { useState, useEffect } from "react"
import BookForm from "./BookForm"


const App = () => {
  const [books, setBooks] = useState([])

  useEffect(() => {
    getBooks()
  }, [])

  const getBooks = async () => {
    try {
      let bks = await axios.get("https://fakerapi.it/api/v1/books?_quantity=5")
      setBooks(bks.data.data)
    } catch {
      alert('Hit an error')
    }
  }

  const addBook = (book) => {
    let newBooks = [book, ...books]
    setBooks(newBooks)
  }
  
  const updateBook = (book) => {
    let newBooks = books.map(b => b.isbn == book.isbn ? book : b)
    setBooks(newBooks)
  }

  const deleteBook = (isbn) => {
    let filteredBooks = books.filter((book) => book.isbn !== isbn)
    setBooks(filteredBooks)
  }

  const renderBooks = () => {
    if (books.length === 0){
      return <p>No bookssss here</p>
    }

    return books.map((book) => {
      return (
      <div className="book" key={book.isbn}>
        <h1>{book.title}</h1>
        <h3>by: {book.author}</h3>
        <p>{book.description}</p>
        <button onClick={() => {deleteBook(book.isbn)}}>Delete</button>
        <BookForm updateBook={updateBook} book={book}/>
      </div>
      )
    })
  }

  return (
    <div className="main-container">
      <h1>Book List App</h1>
      <BookForm addBook={addBook}/>
      <div className="books">
      {renderBooks()}
      </div>
    </div>
  )
}

export default App