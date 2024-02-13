import BookCard from "../BookCard/BookCard";
import './BookSection.css';
import { BookContext } from "../Layout/Layout";
import { useContext, useState } from "react";

const BookSection = () => {
    const books=useContext(BookContext);
     const [datalength,setdatalength] = useState(6)
    
    return (
        <>
        <div className="book-section">
            {
                books.slice(0,datalength).map(book => <BookCard
                 key={book.id}
                 bookg={book}
                />)
            }
        </div>
        <div className={`flex justify-center mt-5 mb-8 ${datalength===books.length && 'hidden'}`}>
            <button onClick={()=>setdatalength(books.length)} className="see-more-btn"  role="button">see more</button>
        </div>
        </> 
    );
};

export default BookSection;