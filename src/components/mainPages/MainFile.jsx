import { useEffect } from "react";
import { fetchData } from "../../redux/slice/productSlice";
import "./mainFile.css";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpg";
import img3 from "../images/img3.jpg";
import img4 from "../images/img4.jpg";

function MainFile() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  const images = [img1, img2, img3, img4];

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="carousel-fullwidth"
      >
        {images.map((URL, index) => (
          <div key={index}>
            <img
              src={URL}
              alt={`carousel-image-${index}`}
              className="carousel-img"
            />
          </div>
        ))}
      </Carousel>

      <div className="grid-container">
        <div className="card-container">
        <h2 className="text-[28px] font-bold ">Products</h2>
          <div className="product-grid">
            {data?.map((item) => (
              <div className="product-card" key={item.id}>
                <img
                  src={item.image}
                  alt="{item.title}"
                  className="product-image"
                />
                <h4 className="product-title">{item?.title}</h4>
                <p className="product-price">₹{item?.price}</p>
                
                <button className="bg-blue-500 p-2 text-white rounded mt-2 hover:bg-blue-600 hover:cursor-pointer">Add To Cart</button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFile;
