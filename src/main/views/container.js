import {changeTab} from '../actions.js';

export const mapState = (state) => {
    return {
        tabindex: state.main.tabindex
    };
  }
  
export const mapDispatch = (dispatch) => {
    return {
        onPreChange: (index) => {
            dispatch(changeTab(index));
        }
    };
};