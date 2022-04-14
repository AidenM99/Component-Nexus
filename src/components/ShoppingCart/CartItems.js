import StyledCartItems from "../MUIStyles/StyledCartItems";

const CartItems = ({ cart, handleQuantityChange }) => {
  const quantities = [1, 2, 3, 4, 5];

  return (
    <>
      {cart.map((product) => (
        <StyledCartItems
          key={product.id}
          product={product}
          quantities={quantities}
          handleQuantityChange={handleQuantityChange}
        ></StyledCartItems>
      ))}
    </>
  );
};

export default CartItems;
