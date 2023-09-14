import { useState } from 'react'
import './App.css'
import Bloogs from './Componends/Blogs/Bloogs'
import Bookmark from './Componends/Bookmark/Bookmark'
import Header from './Componends/Headar/Header'

function App() {

  const [books, setBooks] = useState([]);
  const [readings, setReadings] = useState(0);

  const handlebookmark = (book) =>{
    const newbooks = [...books, book]
    setBooks(newbooks);
  }

  const handleReadingtime = (id, time) => {
    const newreadTime = readings + time;
    setReadings(newreadTime);
    const removetittle = books.filter(book => book.ID !== id)
    setBooks(removetittle);
    console.log('id select', id)
  }

  return (
    <>
      <Header></Header>
      <div className='md:flex gap-2 justify-between w-11/12 mx-auto'>
        <Bloogs handlebookmark={handlebookmark} 
        handleReadingtime={handleReadingtime}
        ></Bloogs>
        <Bookmark books={books} readings={readings}></Bookmark>
        </div>      
    </>
  )
}

export default App
