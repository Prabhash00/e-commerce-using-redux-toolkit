import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchData } from "../../../redux/slice/productSlice";
import { IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router";

function ProductCategories() {
  const { data } = useSelector((state) => state.products);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  const uniqueCategories = data
    ? [...new Set(data.map((item) => item.category))]
    : [];

  return (
    <>
      <div className="category-parent">
        <div className="categorywise">
          <h1 className="flex justify-center text-4xl font-semibold p-4">
            Product Categories
          </h1>
          {uniqueCategories.map((category) => (
            <div className="category-card p-[3rem]" key={category}>
              <h1 className="text-2xl font-semibold">
                {category.toUpperCase()}
              </h1>

              <div className="products-under-category flex gap-[20px]">
                {data
                  .filter((item) => item.category === category)
                  .map((item) => (
                    <div className="product-card" key={item.id}>
                      <img src={item.image} alt={item.title} />
                      <p>{item.title}</p>
                      <p>₹{item.price}</p>
                      <button
                        className="btn-view"
                        onClick={() => navigate(`/product/${item.id}`)}
                      >
                        <IoIosEye /> View
                      </button>
                    </div>
                  ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default ProductCategories;
