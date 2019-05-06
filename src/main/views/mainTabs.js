import React from 'react';

import * as Ons from 'react-onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

class MainTabs extends React.Component {
    constructor(){
        super();
        this.renderHeader = this.renderHeader.bind(this);
        this.renderTabs = this.renderTabs.bind(this);
        this.state = {
            index: 0
        };
    }
    renderHeader(){
        const titles = ['首页', '视频', '融媒', '云上'];
        return (
        <Ons.Toolbar>
            <div className='center'>{titles[this.state.index]}</div>
        </Ons.Toolbar>
        ); 
    }
    renderTabs(){
        return [
            {
                content: <Ons.Page key='homePage'>
                <section style={{margin: '16px'}}>
                    <p>
                    home.
                    </p>
                </section>
                </Ons.Page>,
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
              swipeable={true}
              position='bottom'
              index={this.state.index}
              onPreChange={ (event) => {
                  if (event.index !== this.state.index) {
                    this.setState({index: event.index});
                  }
              } }
              renderTabs={this.renderTabs}
            />
          </Ons.Page>
        );
    }
}

export default MainTabs;