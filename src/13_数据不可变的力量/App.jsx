import React, { Component, PureComponent } from 'react'

export class App extends PureComponent {
    constructor() {
        super()

        this.state= {
            books: [
                {name: "a", price: 10, count: 6},
                {name: "b", price: 20, count: 1},
                {name: "c", price: 30, count: 5},
                {name: "d", price: 15, count: 4},
            ]
        }
    }
    addNewBook() {
        const newBook = {name: "e", price: 50, count: 1}
        this.setState({
            books: [
                ...this.state.books,
                newBook
            ]
        })
    }
    addCount(index) {
        this.setState({
            books: this.state.books.map((book, i) => {
                if(index === i)  {
                    book.count += 1
                }
                return book
            })
        })
    }
  render() {
    const { books } = this.state
    return (
      <div className='app'>
        <h3>App</h3>
        <ul>
            { 
                books.map((book, index) => 
                    <li key={index} onClick={ e => this.addCount(index)}>
                        {book.name} 
                    - {book.price} - {book.count}
                        <button>+1</button>
                    </li>) 
            }
        </ul>
        <button onClick={() => this.addNewBook()}>new book</button>
      </div>
    )
  }
}

export default App