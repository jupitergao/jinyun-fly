import {CHANGE_TAB} from './actionTypes.js';

export const changeTab = (index) => ({
    type: CHANGE_TAB,
    index: index
});
