import { FC } from 'react';

import ProductCard from '../product-card/product-card.component';
import { CategoryPreviwContainer, Title, Preview } from './category-preview.styles';
import { CategoryItem } from '../../store/categories/category.types';

type CategoryPreviewProps = {
	title: string;
	products: CategoryItem[];
}

const CategoryPreview: FC<CategoryPreviewProps> = ({ title, products }) => {
	return (
		<CategoryPreviwContainer>
			<h2>
				<Title to={title}>{title.toUpperCase()}</Title>
			</h2>
			<Preview>
				{products
					.filter((_, index) => index < 4)
					.map((product) => <ProductCard key={product.id} product={product} />)}
			</Preview>
		</CategoryPreviwContainer>
	);
};

export default CategoryPreview;
