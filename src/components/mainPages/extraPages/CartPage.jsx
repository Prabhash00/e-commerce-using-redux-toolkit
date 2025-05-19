import { useDispatch, useSelector } from "react-redux";
import {
  clearCart,
  removeFromCart,
  decreaseQuantity,
  increaseQuantity,
} from "../../../redux/slice/cartSlice";
import { IoIosEye } from "react-icons/io";
import { useNavigate } from "react-router";

function CartPage() {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.items);
  const products = useSelector((state) => state.products.data);

  const cartProducts = cartItems.map((cartItem) => {
    const product = products?.find((p) => p.id === cartItem.id);
    return { ...product, quantity: cartItem.quantity };
  });

  const navigate = useNavigate();

  return (
    <>
      <div className="cart-container">
        <h1 className="text-3xl p-6 font-semibold flex justify-center">
          Cart Page
        </h1>
        {cartProducts.length === 0 ? (
          ""
        ) : (
          <div>
            <p className="text-3xl flex justify-center mt-4 mb-4 ">
              Final Price: ₹
              {cartProducts.reduce(
                (total, item) => total + item.price * item.quantity,
                0
              )}
            </p>
            <div className="button2-cart flex justify-center">
              <button
                className="btn-remove"
                onClick={() => dispatch(clearCart())}
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}

        {cartProducts.length === 0 ? (
          <p className="h-[30vh] text-3xl flex items-center justify-center">
            Your Cart is Empty
          </p>
        ) : (
          cartProducts.map((item) => (
            <div className="cart-card" key={item.id}>
              <img src={item.image} alt={item.title} />
              <span>{item.title}</span>
              <div className="cart-quantity-group">
                <span>Quantity:</span>
                <button
                  className="btn-remove"
                  onClick={() => dispatch(decreaseQuantity(item.id))}
                  disabled={item.quantity === 1}
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="btn-view"
                  onClick={() => dispatch(increaseQuantity(item.id))}
                >
                  +
                </button>
              </div>
              <span>Price: ₹{item.price}</span>
              <button
                onClick={() => dispatch(removeFromCart(item.id))}
                className="btn-remove"
              >
                Remove
              </button>
              <span>
                Total Price: ₹{(item.price * item.quantity).toFixed(2)}
              </span>
              <button
                className="btn-view"
                onClick={() => navigate(`/product/${item.id}`)}
              >
                <IoIosEye />
                View
              </button>
            </div>
          ))
        )}
      </div>
    </>
  );
}

export default CartPage;
