import React from 'react';
import {connect} from 'react-redux';

import {mapState, mapDispatch} from './container'

import * as Ons from 'react-onsenui';

import CatBar from './catBar';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style.css';

class HomePage extends React.Component {
    constructor(props){
        super(props);
    }
    render(){
        return (
            <Ons.Page>
                <CatBar />
            </Ons.Page>
        );
    }
}


export default connect(mapState,mapDispatch)(HomePage);