import React from 'react';
import { Text, View, Image } from 'react-native';

import { connect } from 'react-redux';

import { createUserWithFB, loginUserWithFB, setApp } from '~/redux/actions/app';
import styles from './styles';
import Input from '~/components/Input';
import Button from '~/components/Button';

const mapStateToProps = states => ({ app: states.app });

const mapDispatchToProps = dispatch => ({ dispatch });

const Login = connect(
  mapStateToProps,
  mapDispatchToProps,
)(props => {
  const { dispatch, app } = props;
  return (
    <View style={styles.container}>
      <View style={styles.body_container}>
        <Image source={require('~/assets/dijibook-logo-white.png')} style={styles.logo} />
        <Text style={styles.title}>Welcome</Text>
        <Text style={styles.subtitle}> Sign in to continue</Text>
        
        <Input
          placeholder="E-mail adress..."
          keyboardType="email-address"
          value={app.username}
          onChangeText={d => dispatch(setApp('username', d))}
        />
        <Input
          placeholder="Password..."
          isSecure
          value={app.password}
          onChangeText={d => dispatch(setApp('password', d))}
        />
      <Button icon="chevron-right" text="Sign in" onPress={() => dispatch(loginUserWithFB())} />
      <Button icon="chevron-right" text="Register" onPress={() => dispatch(createUserWithFB())} />
      </View>

      {/* Loaading logo if user wait due to internet connection issue */}
      {app.loginLoading}
    </View>
  );
});

export default Login;
