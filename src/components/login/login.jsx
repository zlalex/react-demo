import React, {Component} from 'react';
import '../styles.scss';

class Login extends Component {
    constructor(props){
        super(props);
        this.state = {
            account:'',
            password:''
        }
        this.signIn = this.signIn.bind(this);
        this.handleChangeId = this.handleChangeId.bind(this);
        this.handleChangePassword = this.handleChangePassword.bind(this);
    }
    
    signIn(){
        this.props.history.push('/index')
    }

    handleChangeId(event){
        this.setState({
            account: event.target.value
        })
    }

    handleChangePassword(event){
        this.setState({
            password: event.target.value
        })
    }

    render(){
        let that = this.state;

        return (
            <div className="al-layout__page">
                <div className="al-layout__header">
                    <p className="al-align__center">登录</p>
                </div>
                <div className="al-layout__section">
                    <input type="text"
                        className="al-input al-sign__account al-block" 
                        value={that.account || ''}
                        onChange={this.handleChangeId}/>
                    <input type="password" 
                        value={that.password || ''}
                        className="al-input al-sign__password al-block" 
                        onChange={this.handleChangePassword}/>
                    <button className="al-block al-sign__in" onClick={this.signIn}>登录</button>
                </div>
                <div className="al-layout__bg"></div>
            </div>
        )
    }
}

export default Login