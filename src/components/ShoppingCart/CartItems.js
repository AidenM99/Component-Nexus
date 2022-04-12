import StyledCartItems from "../MUIStyles/StyledCartItems";

const CartItems = ({ cart }) => {
  return (
    <>
      {cart.map((product) => (
        <StyledCartItems product={product}></StyledCartItems>
      ))}
    </>
  );
};

export default CartItems;
