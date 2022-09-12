import { useContext } from 'react'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'

import './cartDropdown.styles.scss'
import CartItem from '../cartItem/cartItem.component'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {cartItems.map((item) => (
          <CartItem cartItem={item} key={item.id} />
        ))}
      </div>
      <Button>GO TO CHECKOUT</Button>
    </div>
  )
}

export default CartDropdown
