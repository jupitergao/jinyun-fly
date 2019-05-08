import {CHANGE_CATEGORY,LOAD_CATEGORIES,LOAD_CATEGORY_NEWS_LIST} from './actionTypes.js';

const initState = {
    categoryindex: 0,
    categories: [
        {name:"头条",id:"44_G_001"},
        {name:"推荐",id:"44_G_002"},
        {name:"热点",id:"44_G_003"},
        {name:"天津",id:"44_G_004"},
        {name:"政情",id:"44_G_005"},
        {name:"工作室",id:"44_G_006"},
        {name:"财经",id:"44_G_007"}
    ],
    categoryNewsList:{}
}

export default (state = initState, action) => {
    switch(action.type) {
      case CHANGE_CATEGORY: {
        return {...state, categoryindex: action.index};
      }
      case LOAD_CATEGORIES: {
        return state;
      }
      case LOAD_CATEGORY_NEWS_LIST: {
        var newList = {...state.categoryNewsList};
        newList[action.categoryId] = action.newsList;
        return {...state, categoryNewsList: newList};
      }
      
      default: {
        return state;
      }
    }
}