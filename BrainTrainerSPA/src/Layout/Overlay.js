import React, {Component} from 'react';
import './Overlay.css'

class Overlay extends Component {

    state = {
        visible:false
    }


    componentDidMount() {
        setTimeout(() => this.setState({visible:true}),100)
    }


    render() {
        return <div className={`overlay ${this.state.visible ? 'appear' : ''}`}></div>;
    }

}

export default Overlay;

