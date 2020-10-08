import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { detailsProduct } from "../Actions/productActions";
import "./screens.css";

const Product = (props) => {
  const [quantity, setQuantity] = useState(1);
  const productDetails = useSelector((state) => state.productDetails);
  const { product, loading, error } = productDetails;
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(detailsProduct(props.match.params.id));
  }, []);

  const handleAddToCart = () => {
    props.history.push(
      "/cart/" + props.match.params.id + "?quantity=" + quantity
    );
  };

  return (
    <div>
      <div className="back-to-home">
        <Link to="/">Trở về trang chủ</Link>
      </div>
      {loading ? (
        <div>Đang tải...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        <div className="details">
          <div className="details-image">
            <img src={product.image} alt="product"></img>
          </div>
          <div className="details-info">
            <ul>
              <li>
                <h4>{product.name}</h4>
              </li>
              <li>
                {product.rating}/5 ({product.numReviews} nhận xét)
              </li>
              <li>
                Giá: <b>{product.price}</b>
              </li>
              <li>Mô tả: {product.description}</li>
            </ul>
          </div>

          <div className="details-action">
            <ul>
              <li>Giá: {product.price}</li>
              <li>
                Trạng thái: {product.quantity > 0 ? "Còn hàng" : "Hết hàng"}
              </li>
              <li>
                Số lượng:{" "}
                <select
                  value={quantity}
                  onChange={(e) => setQuantity(e.target.value)}
                >
                  {[...Array(product.quantity).keys()].map((count) => (
                    <option value={count + 1}>{count + 1}</option>
                  ))}
                </select>
              </li>
              <li>
                {product.quantity > 0 && (
                  <button className="button" onClick={handleAddToCart}>
                    Thêm vào giỏ hàng
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
  );
};

export default Product;
