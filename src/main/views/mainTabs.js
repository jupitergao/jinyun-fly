import React from 'react';
import {connect} from 'react-redux';

import {mapState, mapDispatch} from './container'

import * as Ons from 'react-onsenui';

import {view as HomePage} from '../../home';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class MainTabs extends React.Component {
    constructor(props){
        super(props);
        this.renderHeader = this.renderHeader.bind(this);
        this.renderTabs = this.renderTabs.bind(this);

    }
    renderHeader(){
        const titles = ['首页', '视频', '融媒', '云上'];
        console.log(this.props.tabindex);
        return (
        <Ons.Toolbar>
            <div className='center'>{titles[this.props.tabindex]}</div>
        </Ons.Toolbar>
        ); 
    }
    renderTabs(){
        return [
            {
                content: <HomePage key='homePage'/>,
                tab: <Ons.Tab label='首页' icon='fa-home' key='home' />
            },
            {
                content: <Ons.Page key='videoPage'>
                <section style={{margin: '16px'}}>
                    <p>
                    video.
                    </p>
                </section>
                </Ons.Page>,
                tab: <Ons.Tab label='视频' icon='fa-film' key='video' />
            },
            {
                content: <Ons.Page key='convPage'>
                <section style={{margin: '16px'}}>
                    <p>
                    conv.
                    </p>
                </section>
                </Ons.Page>,
                tab: <Ons.Tab label='融媒' icon='fa-newspaper' key='conv' />
            },
            {
                content: <Ons.Page key='cloudPage'>
                <section style={{margin: '16px'}}>
                    <p>
                    cloud.
                    </p>
                </section>
                </Ons.Page>,
                tab: <Ons.Tab label='云上' icon='fa-mixcloud' key='cloud' />
            }
        ];
    }
    render(){
        return (
            <Ons.Page renderToolbar={this.renderHeader}>
            <Ons.Tabbar
              swipeable={false}
              position='bottom'
              index={this.props.tabindex}
              onPostChange={ (event) => {
                  console.log("onPostChange tab");
                  console.log(event);
                  if (event.index !== this.props.tabindex) {
                    this.props.onPreChange(event.index);
                  }
              } }
              renderTabs={this.renderTabs}
            />
          </Ons.Page>
        );
    }
}

export default connect(mapState,mapDispatch)(MainTabs);