import { createSelector } from 'reselect';

import { RootState } from '../store';
import { CategoriesState } from './category.reducer';
import { CategoryMap } from './category.types';

const selectCategoryReducer = (state: RootState): CategoriesState => state.categories;

export const selectCategories = createSelector(
	[ selectCategoryReducer ],
	(categoriesSlice) => categoriesSlice.categories
);

export const selectCategoriesMap = createSelector([ selectCategories ], (categories): CategoryMap =>
	categories.reduce((accum, category) => {
		const { title, items } = category;
		accum[title.toLowerCase()] = items;
		return accum;
	}, {} as CategoryMap)
);

export const selectCategoriesIsLoading = createSelector(
	[ selectCategoryReducer ],
	(categoriesSlice) => categoriesSlice.isLoading
);
