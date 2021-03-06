import axios from "axios";
import { CART_ADD_ITEM } from "../Constants/cartConstants";

const addToCart = (productId, buyQuantity) => async (dispatch) => {
  try {
    const { data } = await axios.get("/api/products/" + productId);
    dispatch({
      type: CART_ADD_ITEM,
      payload: {
        product: data._id,
        name: data.name,
        image: data.image,
        price: data.price,
        quantity: data.quantity,
        buyQuantity,
      },
    });
  } catch (error) {}
};

export { addToCart };
