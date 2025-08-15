import {useEffect, useState} from "react";
import "./App.css";
import Carousel from "./components/Carousel";
import axios from "axios";

const App = () => {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchImages = async (imgLimit) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://jsonplaceholder.typicode.com/photos?_limit=${imgLimit}`
      );
      const {data} = response;
      setImages(data);
    } catch (error) {
      console.error("Error fetching images:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages(8);
  }, []);

  return (
    <div className="carousel-container">
      <Carousel
        images={images}
        isLoading={loading}
        onImgClick={(image, index) => {}}
        imgPerSlide={2}
        imageLimit={4}
        customPrevButton={(onClick) => (
          <button
            className="btn prev"
            style={{background: "red"}}
            onClick={onClick}
          >
            Prev
          </button>
        )}
        customNextButton={(onClick) => (
          <button
            className="btn next"
            style={{background: "blue"}}
            onClick={onClick}
          >
            Prev
          </button>
        )}
      />
    </div>
  );
};

export default App;
