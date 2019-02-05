import React, { Component } from 'react'
import {render} from 'react-dom'

let bookList = [
    {"title":"A Little Life", "author":"Hanya Yanagihara", "pages":505},
    {"title":"Two From the Heart", "author":"Hanya Yanagihara", "pages":505},
    {"title":"Five Point Someone", "author":"Hanya Yanagihara", "pages":505}
]

const Book = ({title, author, pages, freeBookMark}) => {
    return (
        <section>
            <h2>{title}</h2>
            <p>by: {author}</p>
            <p>Pages: {pages} pages</p>
            <p>Free Bookmark Today: {freeBookMark ? 'Yes!' : 'No!'}</p>
        </section>
    )
}

const Hiring = () =>
    <div>
        <p>The library is hiring. Go to www.library.com for more details.</p>
    </div>

const NotHiring = () =>
    <div>
        <p>The library is not hiring. Check back later for more info.</p>
    </div>

class Library extends Component {
    state = {
        open: true,
        freeBookMark: true,
        hiring: false
    }

    componentDidMount() {
        console.log("The component is mounted.")
    }

    componentDidUpdate() {
        console.log("The component just updated.")
    }

    toggleOpenClosed = () => {
        this.setState(prevState => ({
            open: !prevState.open
        }))
    }

    render(){
        const {books} = this.props
        return (
            <div>
                {this.state.hiring ? <Hiring/> : <NotHiring/>}
                <h1>The library is {this.state.open ? 'open':'closed'}</h1>
                <button onClick={this.toggleOpenClosed}>Change</button>
                {books.map(
                    (book, i) => <Book 
                        key={i} 
                        title={book.title} 
                        author={book.author} 
                        pages={book.pages} 
                        freeBookMark={this.state.freeBookMark}/>
                )}  
            </div>
        )
    }
}

render(
    <Library books={bookList}/>,
    document.getElementById('root')
)
