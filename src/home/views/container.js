import {changeCategory,loadCategories} from '../actions.js';


export const mapState = (state) => {
    return {
        categoryindex: state.home.categoryindex,
        categories: state.home.categories
    };
}
  
export const mapDispatch = (dispatch) => {
    return {
        changeCategory: (index) => {
            dispatch(changeCategory(index));
        },
        loadCategories: () => {

            dispatch(loadCategories());
        }
    };
};