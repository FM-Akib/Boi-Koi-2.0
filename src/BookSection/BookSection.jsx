import BookCard from "../BookCard/BookCard";
import './BookSection.css';
import { BookContext } from "../Layout/Layout";
import { useContext } from "react";

const BookSection = () => {
    const books=useContext(BookContext);
    console.log(books);
    return (
        
        <div className="book-section">
            {
                books.map(book => <BookCard
                 key={book.id}
                 bookg={book}
                />)
            }
        </div>
    );
};

export default BookSection;