import About from "../About/About";
import Contact from "../Contact/Contact";
import SliderComponent from "../Slider/Slider";


const Home = () => {
    return (
        <div>
           <SliderComponent></SliderComponent>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;