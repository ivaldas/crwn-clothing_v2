import { useDispatch } from 'react-redux';
import { addItemToCart } from '../../store/cart/cart.reducer';
import Button, { BUTTON_TYPE_CLASSES } from '../button/button.component';
import { ProductCardContainer, Footer, Name, Price } from './product-card.styles';

const ProductCard = ({ product }) => {
	const { name, price, imageUrl } = product;
	const dispatch = useDispatch();
	const addProductToCard = () => dispatch(addItemToCart(product));
	return (
		<ProductCardContainer>
			<img src={imageUrl} alt={`${name}`} />
			<Footer>
				<Name>{name}</Name>
				<Price>{price}</Price>
			</Footer>
			<Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCard}>
				Add To Cart
			</Button>
		</ProductCardContainer>
	);
};

export default ProductCard;