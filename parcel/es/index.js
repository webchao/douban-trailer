
import React from 'react';
import { render } from 'react-dom';
import App from './app';

class AppContainer extends React.Component {
    constructor() {
        super();
        this.state = {
            name: 'parcel 大宝宝'
        }

    }

    componentDidMount() {
        setTimeout(() => this.setState({ name: 'parcel 打包包' }), 2000)
    }

    render() {
        return (<App name={this.state.name} />);
    }
}


render(
    <AppContainer />,
    document.getElementById('app')
)
