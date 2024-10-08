import React from 'react'
import Book from './Book'

function RenderingLists() {

    const bookList = [
        "to kill a mocking bird",
        "the great gatsby",
        "the catcher in the rye"
    ]

    const books = [

        {
        title: "to kill the mocking bird",
        author: "harper lee",
        pages: 281
    },
    {
        title: "the great gatsby",
        author: "f. scott fitzgerald",
        pages: 218
    },
    {
        title: "the catcher on the rye",
        author: "j. d. salinger",
        pages: 234
    }
    ]

  return (
    <div>
        { bookList.map(book => {
            return <h2 key = {book}>{book}</h2>
        }) }
        <hr/>
        {
            books.map((book, index) => {
                return (
                    <div key = {book.title}>
                        <h5>{book.title}</h5>
                        <p>{book.author}</p>
                        <p>{book.pages}</p>
                    </div>
                )
                
            })
        }
        {
            books.map(book => {
                return <Book key = {book.title} book={book} />
            })
        }

    </div>
  )
}

export default RenderingLists