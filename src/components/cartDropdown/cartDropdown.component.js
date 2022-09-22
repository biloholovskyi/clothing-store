import { useContext } from 'react'
import { useNavigate } from 'react-router-dom'

import { CartContext } from '../../contexts/cart.context'

import Button from '../button/button.component'
import CartItem from '../cartItem/cartItem.component'

import {
  EmptyMessage,
  CartDropdownContainer,
  CartItems,
} from './cartDropdown.styles'

const CartDropdown = () => {
  const { cartItems } = useContext(CartContext)

  const navigate = useNavigate()

  const goToCheckoutHandler = () => navigate('/checkout')

  return (
    <CartDropdownContainer>
      <CartItems>
        {cartItems.length ? (
          cartItems.map((item) => <CartItem cartItem={item} key={item.id} />)
        ) : (
          <EmptyMessage>Your cart is empty</EmptyMessage>
        )}
      </CartItems>
      <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
    </CartDropdownContainer>
  )
}

export default CartDropdown
