import { FC, memo } from 'react';

import { CartItemContainer, ItemDetais } from './cart-item.styles';
import { CartItem as TCartItem } from '../../store/cart/cart.types';

type CartItemProps = {
	cartItem: TCartItem;
}

const CartItem: FC<CartItemProps> = memo(({ cartItem }) => {
	const { name, imageUrl, price, quantity } = cartItem;
	return (
		<CartItemContainer>
			<img src={imageUrl} alt={`${name}`} />
			<ItemDetais>
				<span className="name">{name}</span>
				<span className="price">
					{quantity} x ${price}
				</span>
			</ItemDetais>
		</CartItemContainer>
	);
});

export default CartItem;
