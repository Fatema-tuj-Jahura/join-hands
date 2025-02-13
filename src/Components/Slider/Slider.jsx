import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // Import carousel styles

// Import images
import img1 from "../../assets/slider1.jpg"; 
import img2 from "../../assets/slider2.jpg"; 
import img3 from "../../assets/slider3.jpg";

const SliderComponent = () => {
  return (
    <Carousel 
      showThumbs={false} 
    //   autoPlay 
    //   infiniteLoop 
    //   interval={3000} 
      showArrows={true} 
      showStatus={false} 
    >
      <div className="relative">
        <img src={img1} alt="Slide 1" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-4">
          <p className="text-[#EBECCc] text-lg md:text-3xl font-semibold text-center">
          Join hands, uplift hearts and volunteer now!
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={img2} alt="Slide 2" className="object-cover" />
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-4">
          <p className="text-[#EBECCc] text-lg md:text-3xl font-semibold text-center">
          Small acts, big impact , connect, volunteer, change lives.
          </p>
        </div>
      </div>
      <div className="relative">
        <img src={img3} alt="Slide 3" className="object-cover"/>
        <div className="absolute inset-0 flex items-center justify-center bg-black/30 px-4">
          <p className="text-[#EBECCc] text-lg md:text-3xl font-semibold text-center">
          Volunteering: where kindness meets action.
          </p>
        </div>
      </div>
    </Carousel>
  );
};

export default SliderComponent;

