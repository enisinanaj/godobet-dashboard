/*!
 *
 * Angle - Bootstrap Admin Template
 *
 * Version: 4.7.5
 * Author: @themicon_co
 * Website: http://themicon.co
 * License: https://wrapbootstrap.com/help/licenses
 *
 */

import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';

// App Routes
import Routes from './Routes';
import RoutesTemplate from './RoutesTemplate';

// Vendor dependencies
import "./Vendor";
// Application Styles
import './styles/bootstrap.scss';
import './styles/app.scss'


class App extends Component {

  constructor(props) {
    super(props)

  }

  render() {

    // specify base href from env varible 'PUBLIC_URL'
    // use only if application isn't served from the root
    // for development it is forced to root only
    /* global PUBLIC_URL */
    const basename = process.env.NODE_ENV === 'development' ? '/' : (PUBLIC_URL || '/');

    if (window.location.href.indexOf('/template') >= 0) {

      return (
        <BrowserRouter basename={"/template"}>
            <RoutesTemplate />
        </BrowserRouter>
      );
    }

    return (
      <BrowserRouter basename={basename}>
          <Routes />
      </BrowserRouter>
    );

  }
}

export default App;
