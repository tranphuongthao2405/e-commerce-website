import { CART_ADD_ITEM } from "../Constants/cartConstants";

const cartReducer = (state = { cartItems: [] }, action) => {
  switch (action.type) {
    case CART_ADD_ITEM:
      const item = action.payload;
      const product = state.cartItems.find((p) => p.product === item.product);

      // update quantity of item if that item already in cart
      if (product) {
        return {
          ...state,
          cartItems: state.cartItems.map((p) =>
            p.product === product.product ? product : p
          ),
        };
      }

      return { cartItems: [...state.cartItems, item] };
    default:
      return state;
  }
};

export { cartReducer };
