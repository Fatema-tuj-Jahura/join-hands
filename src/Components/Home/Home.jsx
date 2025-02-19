import About from "../About/About";
import Contact from "../Contact/Contact";
import SliderComponent from "../Slider/Slider";
import VolunteerNeedsNow from "../VolunteerNeedsNow/VolunteerNeedsNow";


const Home = () => {
    return (
        <div>
           <SliderComponent></SliderComponent>
           <VolunteerNeedsNow></VolunteerNeedsNow>
           <About></About>
           <Contact></Contact>
        </div>
    );
};

export default Home;