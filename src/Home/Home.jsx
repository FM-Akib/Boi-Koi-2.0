import Hero from "../Hero/Hero";
import './Home.css';
import BookSection from "../BookSection/BookSection";
const Home = () => {

    return (
        <div className="home-container">
          <Hero/>
          <BookSection/>
        </div>
    );
};

export default Home;