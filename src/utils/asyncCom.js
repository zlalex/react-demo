import React, {Component} from 'react';

const asyncCom = function (importCom) {
    class AsyncCom extends Component {
        constructor(props){
            super(props);
            this.state = {
                component: null
            }
        }

        async componentDidMount(){
            const {default: component } = await importCom();
            this.setState({component});
        }

        render(){
            const COM = this.state.component;

            return COM ? <COM {...this.props} /> : null;
        }
    }
    return AsyncCom
}

export default asyncCom