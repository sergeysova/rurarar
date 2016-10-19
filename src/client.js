
import 'babel-polyfill'
import React from 'react'
import ReactDOM from 'react-dom'

import App from './app'

ReactDOM.render(React.createElement(App, null), document.getElementById('wbpp'))

// HOT-reloading
// https://github.com/glenjamin/ultimate-hot-reloading-example/blob/master/server.js#L33-L54
