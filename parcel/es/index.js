import React from 'react'
import { render } from 'react-dom'
import App from './app'

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

        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}


render(
    <AppContainer />,
    document.getElementById('app')
)
