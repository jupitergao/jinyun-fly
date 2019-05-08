import React from 'react';
import {connect} from 'react-redux';
import {loadCategoryNewsList} from '../actions.js';

import * as Ons from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style.css';

class CategoryNewsList extends React.Component {
    constructor(props){
        super(props);
        this.props.loadCategoryNewsList(this.props.categoryId);
    }
    render(){
        return (
            <Ons.Page>
                <div>
                    {this.props.categoryId}
                </div>
            </Ons.Page>
        );
    }
}

const mapState = (state) => {
    return {
        categoryNewsList: state.main.categoryNewsList
    };
}
  
const mapDispatch = (dispatch) => {
    return {
        loadCategoryNewsList: (categoryId) => {

            dispatch(loadCategoryNewsList(categoryId,{}));
        }
    };
};

export default connect(mapState,mapDispatch)(CategoryNewsList);