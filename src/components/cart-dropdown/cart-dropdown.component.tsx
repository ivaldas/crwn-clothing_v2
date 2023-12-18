// import { useState, useCallback, useMemo } from 'react';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import Button from '../button/button.component';
import CartItem from '../cart-item/cart-item.component';
import { selectCartItems } from '../../store/cart/cart.selector';
import { CartDropdownContainer, EmptyMessage, CartItems } from './cart-dropdown.styles';

// const sleep = (milliseconds: number): void => {
// 	var start = new Date().getTime();
// 	for(var i = 0; i < 1e7; i++) {
// 		if(new Date().getTime() - start > milliseconds) {
// 			break
// 		}
// 	}
// }

const CartDropdown = () => {
	const cartItems = useSelector(selectCartItems);
	const navigate = useNavigate();
	// const [count, setCount] = useState(0);

	// const hundredCount = useMemo(() => {
	// 	console.log('start')
	// 	sleep(2000)
	// 	console.log('end')
	// 	return 100 + count
	// }, [count]);

	// const goToCheckoutHandler = () => {
	const goToCheckoutHandler = useCallback(() => {
		navigate('/checkout');
	}, []);
	// };
	return (
		<CartDropdownContainer>
			<CartItems>
				{/* {hundredCount} */}
				{cartItems.length ? (
					cartItems.map((item) => <CartItem key={item.id} cartItem={item} />)
				) : (
					<EmptyMessage>Your Cart Is Empty</EmptyMessage>
				)}
			</CartItems>
			<Button onClick={goToCheckoutHandler}>Checkout</Button>
			{/* <Button onClick={() => setCount(count + 1)}>Checkout</Button> */}
		</CartDropdownContainer>
	);
};

export default CartDropdown;
