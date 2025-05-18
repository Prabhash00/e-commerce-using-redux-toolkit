import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { fetchData } from "../../../redux/slice/productSlice";

function ProductView() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { data } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  if (!data || !Array.isArray(data)) {
    return (
      <div className="flex justify-center items-center text-5xl h-[50vh]">
        Loading...
      </div>
    );
  }

  const product = data.find((item) => item.id === parseInt(id));

  return (
    <>
      <h1 className="text-3xl flex justify-center mt-2">
        Product Id No:- {id}
      </h1>
      <div className="productview-parent">
        <div className="productview-img-container">
          <img
            src={product.image}
            alt="product.title"
            className="productview-image"
          />
        </div>
        <div className="productview-details">
          <h2 className="text-4xl font-semibold ml-4">{product.title}</h2>
          <h3 className="text-3xl p-4">Category: {product.category}</h3>
          <p className="text-2xl p-4">₹{product.price}</p>
          <p className="text-lg p-4">
            <strong>Description: </strong>
            {product.description}
          </p>
          <button className="btn-cart w-50 h-15 ml-4 mb-8">Add To Cart</button>
        </div>
      </div>
    </>
  );
}

export default ProductView;
