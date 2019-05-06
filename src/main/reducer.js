import {LOAD_CATEGORY} from './actionTypes.js';

export default (state = [], action) => {
    switch(action.type) {
      case LOAD_CATEGORY: {
        return [
          {
            categories: ['头条','推荐']
          },
          ...state
        ]
      }
      
      default: {
        return state;
      }
    }
  }