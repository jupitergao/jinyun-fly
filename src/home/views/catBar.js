import React from 'react';
import {connect} from 'react-redux';

import {mapState, mapDispatch} from './container'

import ons from 'onsenui';
import * as Ons from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';
import './style.css';

class CatBar extends React.Component{
    render(){
        return (
                <div className="ons-swiper catbar">
                    <div className="ons-swiper-target">
                    {
                        this.props.categories.map((category, index)=>(
                            <div className="inactiveCategory">{category.name}</div>
                        ))
                    }
                    </div>
                </div>
        );
    }
    componentDidMount(){
        catbar = ons.GestureDetector(document.querySelector('.catbar'));
        catbar.on("dragup dragdown",(ev)=>{
            console.log(ev);
        })
    }
}

export default connect(mapState,mapDispatch)(CatBar);