import React, { Component } from 'react';
import RouterMap from '../router/routerMap';

// 公共组件
import Footer from '../../../components/Bottom/Footer';

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
