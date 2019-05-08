import {CHANGE_CATEGORY,LOAD_CATEGORIES,LOAD_CATEGORY_NEWS_LIST} from './actionTypes.js';

export const changeCategory = (index) => ({
    type: CHANGE_CATEGORY,
    index: index
});

export const loadCategories = (categories) => ({
    type: LOAD_CATEGORIES,
    categories: categories
});

export const loadCategoryNewsList = (categoryId, newsList) => ({
    type: LOAD_CATEGORY_NEWS_LIST,
    categoryId: categoryId,
    newsList: newsList
});