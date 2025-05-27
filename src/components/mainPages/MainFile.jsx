import { useEffect, useState } from "react";
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
import Slider from "rc-slider";
import "rc-slider/assets/index.css";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

function MainFile() {
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);
  const images = [img1, img2, img3, img4];
  const navigate = useNavigate();

  
  const prices = data?.map((item) => item.price) || [];
  const minPrice = 0;
  const maxPrice = prices.length > 0 ? Math.ceil(Math.max(...prices)) : 1000;
  const [value, setValue] = useState(maxPrice);
  const [currentCategories, setCurrentCategories] = useState("");

  
  const categories = data
    ? ["All", ...new Set(data.map((item) => item.category))]
    : ["All"];

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  useEffect(() => {
    setValue(maxPrice);
  }, [maxPrice]);

  const handleAddToCart = (id) => {
    dispatch(addToCart(id));
  };

  const handleChange = (newValue) => {
    setValue(newValue);
  };

  const handleCategoryChange = (event) => {
    setCurrentCategories(event.target.value);
  };

  const handleReset = () => {
    setValue(maxPrice);
    setCurrentCategories("");
  };

  
  const filteredData = data?.filter((item) => {
    const priceMatch = item.price <= value;
    const categoryMatch =
      currentCategories === "" ||
      currentCategories === "All" ||
      item.category === currentCategories;
    return priceMatch && categoryMatch;
  });

  
  if (!data) {
    return <div className="text-5xl flex justify-center mt-[30vh]">Loading...</div>;
  }

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
          <h2 className="text-3xl font-bold">Products</h2>
          <br />

          <div className="filter">
            <p>Filter by</p>
            <div className="flex items-center gap-6">
              <div>
                <p>Price:</p>
                <div className="w-52 my-2.5">
                  <Slider
                    min={minPrice}
                    max={maxPrice}
                    value={value}
                    onChange={handleChange}
                    step={10}
                    trackClassName="slider-track"
                    handleClassName="slider-handle"
                    railClassName="slider-rail"
                  />
                  <div className="flex justify-center mt-1.5">
                    <span className="border border-gray-300 px-2 py-1 rounded">
                      Up to ${value}
                    </span>
                  </div>
                </div>
              </div>

              <div className="filter-categories">
                <Box sx={{ minWidth: 120 }}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">
                      Category
                    </InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      value={currentCategories}
                      label="Category"
                      onChange={handleCategoryChange}
                    >
                      {categories.map((category, index) => (
                        <MenuItem key={index} value={category}>
                          {category}
                        </MenuItem>
                      ))}
                    </Select>
                  </FormControl>
                </Box>
              </div>

              <button
                className="bg-gray-100 p-2 border border-gray-400 rounded hover:bg-red-800 hover:text-white hover:cursor-pointer w-24"
                onClick={handleReset}
              >
                Reset
              </button>
            </div>
          </div>

          <div className="product-grid">
            {filteredData?.map((item) => (
              <div className="product-card" key={item.id}>
                <img
                  src={item.image}
                  alt={item.title}
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
                  <button
                    className="btn-cart w-35"
                    onClick={() => handleAddToCart(item.id)}
                  >
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
