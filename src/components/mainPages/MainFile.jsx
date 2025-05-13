import { useEffect } from "react";
import { fetchData } from "../../redux/slice/productSlice";
import "./mainFile.css";
import { useDispatch, useSelector } from "react-redux";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function MainFile() {
  const dispatch = useDispatch();
  const { isLoading, data } = useSelector((state) => state.products);
  const images = [
    "https://mobirise.com/extensions/commercem4/assets/images/galleries-1-1200x800.png",
    "https://png.pngtree.com/thumb_back/fh260/background/20221218/pngtree-technology-and-multimedia-online-shopping-concept-sale-tv-buy-photo-image_43548278.jpg",
  ];

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (isLoading) return <h1>Loading...</h1>;

  return (
    <>
      <Carousel
        useKeyboardArrows
        autoPlay
        interval={1500}
        infiniteLoop
        showThumbs={true}
        showStatus={true}
        className="w-full"
      >
        {images.map((URL, index) => (
          <div key={index} className="w-full h-full">
            <img
              src={URL}
              alt={`carousel-image-${index}`}
              className="w-[auto] h-auto max-h-[950px] object-contain"
            />
          </div>
        ))}
      </Carousel>

      <ul>{data && data.map((item) => <li key={item.id}>{item.title}</li>)}</ul>
    </>
  );
}

export default MainFile;
