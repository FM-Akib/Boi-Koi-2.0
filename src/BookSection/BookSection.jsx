import BookCard from "../BookCard/BookCard";

const BookSection = ({books}) => {
    // console.log(books)
    return (
        <div>
            {
                books.map(book=> <BookCard
                 key={book.id}
                 book={book}
                ></BookCard>)
            }
        </div>
    );
};

export default BookSection;