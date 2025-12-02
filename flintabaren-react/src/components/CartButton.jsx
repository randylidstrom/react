import { Link } from 'react-router-dom';

const CartButton = () => {
  return (
    <Link to="/bestall" className="cart-fab" aria-label="Beställ online" title="Beställ online">
      <img src="/Media/shopping-cart.svg" alt="" aria-hidden="true" />
    </Link>
  );
};

export default CartButton;