import React, { Component } from 'react';
import { connect } from 'react-redux';
import ReactNative from 'react-native';
//import { Screen, Title, Text, Divider, Button, Spinner } from '@shoutem/ui';
import { View, TextInput, ActivityIndicator, Button,Alert } from 'react-native';

import Input from '../containers/Input';
import LoginButton from '../containers/LoginButton';
import { setUserName, setUserAvatar } from '../actions';

const mapStateToProps = (state) => ({
    authorizing: state.user.authorizing
});

class LoginUI extends Component {
    render() {
        //alert(this.props.authorizing);
        return (         
            <View style={{padding: 10}}>
              <Input placeholder="Yours name here"
                     submitAction={setUserName}
                     submitOnBlur
                     noclear
                     ref="username"/>

              <Input placeholder="Your avatar URL here"
                 submitAction={setUserAvatar}
                 submitOnBlur
                 noclear
                 ref="avatar"/>
              
              
              {this.props.authorizing ? <ActivityIndicator /> : <LoginButton />}
              
            </View>
        );
    }
}

/*


<TextInput 
                style={{height: 40}}
                placeholder="Your name here"
                submitAction={setUserName}
                submitOnBlur
                noclear
                ref="username"
              />

              <TextInput 
                placeholder="Your avatar URL here"
                submitAction={setUserAvatar}
                submitOnBlur
                noclear
                ref="avatar"
              />

<Screen style={{alignItems: 'center', justifyContent: 'center'}}>
    <Title>Who are you?</Title>
    <Divider />

    <Input placeholder="Your name here"
           submitAction={setUserName}
           submitOnBlur
           noclear
           ref="username"/>
    <Divider />

    <Input placeholder="Your avatar URL here"
           submitAction={setUserAvatar}
           submitOnBlur
           noclear
           ref="avatar"/>
    <Divider />

    {this.props.authorizing ? <Spinner /> : <LoginButton />}
</Screen>

*/

export default connect(mapStateToProps)(LoginUI);