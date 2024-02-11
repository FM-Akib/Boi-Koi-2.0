import { useContext } from "react";
import Hero from "../Hero/Hero";
import './Home.css';
import { BookContext } from "../Layout/Layout";
import BookSection from "../BookSection/BookSection";
const Home = () => {
  const books=useContext(BookContext);
  console.log(books);
    return (
        <div className="home-container">
          <Hero/>
          <BookSection books={books} />
        </div>
    );
};

export default Home;