import {View, Text, StyleSheet, ImageBackground,TouchableOpacity,
} from 'react-native';
import React from 'react';
import Input from '../components/Input';
import Button from '../components/Button';

const Login = ({navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/img/bg-login.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.opacity}>
          <View style={styles.header}>
            <Text style={styles.head}>LET'S EXPLORE</Text>
            <Text style={styles.head}>THE WORLD</Text>
          </View>
          <View style={styles.form}>
            <Input placeholder="Email" />
            <View style={styles.gap} />
            <Input placeholder="Password" secureTextEntry={true} />
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
              <Button
                color="primary"
                onPress={() => navigation.navigate('Home')}>
                Login
              </Button>
            </View>
            <View style={styles.signupContain}>
              <Text style={styles.signup}>Don't have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
                <Text style={[styles.signup, styles.linkSignup]}>
                  {' '}
                  Sign up now
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};

// let ScreenHeight = Dimensions.get('window').height;
const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  opacity: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    padding: 20,
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  header: {
    marginVertical: 60,
  },
  head: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 35,
  },
  form: {
    bottom: 0,
  },
  gap: {
    marginTop: 20,
  },
  btn: {
    marginBottom: 30,
  },
  forgot: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 125,
    marginVertical: 30,
    marginTop: 10
  },
  signupContain: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ['signup']: {
    color: '#fff',
  },
  linkSignup: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 90,
  },
});

export default Login;

