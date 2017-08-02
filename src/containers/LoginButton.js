import React, { Component } from 'react';
import { connect } from 'react-redux';
// import { Button, Text } from '@shoutem/ui';
import { Button, Text } from 'react-native';
import { login } from '../actions';

class LoginButton extends Component {
    onLogin = () => {
        this.props.dispatch(login());
    }

    render() {
        return (
            <Button title="Start Chatting" styleName="light" onPress={this.onLogin}/>
        )
    }
}

export default connect()(LoginButton);