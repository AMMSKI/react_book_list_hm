import React, { useState } from 'react'

const BookForm = (props) => {
  const [title, setTitle] = useState(props.book ? props.book.title : '')
  const [author, setAuthor] = useState(props.book ? props.book.author : '')
  const [isbn, setIsbn] = useState(props.book ? props.book.isbn : '')
  const handleClick = (e) => {
    e.preventDefault()
    if(props.book){
      props.updateBook({isbn, title, author})
    }else {
      props.addBook({ isbn: Math.random(), title, author })
    }
  }

  return( 
    <div>
      <h3>{props.book ? "Edit Book" : "New Book"}</h3>
      <form onSubmit={handleClick}>
        <p>New Book</p>
        <input value={title} onChange={(e) => {setTitle(e.target.value)}}/>
        <p>Author</p>
        <input value={author} onChange={(e) => {setAuthor(e.target.value)}}/>
        <button type="submit">{props.book ? "Update" : "Add"}</button>
      </form>
    </div>
  )
}

export default BookForm