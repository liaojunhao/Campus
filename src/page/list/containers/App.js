import React, { Component } from 'react';
import RouterMap from '../router/routerMap';

import Footer from '../../../components/footer/Booter';


class App extends Component {
    render() {
        return (
            <div>
                <RouterMap/>
                <Footer/>
            </div>
        )
    }
}

export default App
