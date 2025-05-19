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
import { IoIosEye } from "react-icons/io";
import { FaCartShopping } from "react-icons/fa6";
import { useNavigate } from "react-router";
import { addToCart } from "../../redux/slice/cartSlice";


function MainFile() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  const images = [img1, img2, img3, img4];
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const handleAddToCart = (id) => {
  dispatch(addToCart(id))    
  };

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
                <div className="flex justify-evenly gap-2">
                  <button
                    className="btn-view w-20"
                    onClick={() => navigate(`/product/${item.id}`)}
                  >
                    <IoIosEye />
                    View
                  </button>
                  <button className="btn-cart w-35 " onClick={()=>handleAddToCart(item.id)}>
                    <FaCartShopping /> Add To Cart
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default MainFile;
