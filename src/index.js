import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import ons from 'onsenui';

import 'onsenui/css/onsenui.css';
import 'onsenui/css/onsen-css-components.css';

import store from './store.js';
import {view as Main} from './main'

ons.enableAutoStatusBarFill();
ons.disableAutoStyling();
ons.ready(() => {
    if (ons.platform.isIPhoneX()) {
        document.documentElement.setAttribute('onsflag-iphonex-portrait', '');
        document.documentElement.setAttribute('onsflag-iphonex-landscape', '');
    }
    render(
        <Provider store={store}>
            <Main />
        </Provider>,
        document.getElementById('root')
    )
});
