import {View, Text, StyleSheet, ImageBackground,TouchableOpacity,} from 'react-native';
import React, {useState, useEffect } from 'react';
import Input from '../components/Input';
import Button from '../components/Button';
import { authLogin } from '../redux/actions/auth';
import { useDispatch, useSelector } from 'react-redux';

const Login = ({navigation}) => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [isError, setIsError] = useState();

  const dispatch = useDispatch();
  const {auth} = useSelector(state => state);
  useEffect(() => {
    dispatch({
      type: 'AUTH_CLEAR_ERR',
    });
  }, [dispatch]);

  const handleLogin = () => {
    if (username && password) {
      setIsError(false);
      dispatch(authLogin(username, password));
    } else {
      setIsError(true);
    }
  };

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
            {(isError || auth.isError) && (
              <Text
                style={styles.message}
                bold>
                {auth.isError ? auth.errMessage : 'Empty Username or Password!'}
              </Text>
            )}
            <Input placeholder="Username" onChangeText={setUsername} value={username}/>
            <View style={styles.gap} />
            <Input placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
            <TouchableOpacity onPress={() => navigation.navigate('Forgot')}>
              <Text style={styles.forgot}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={styles.btn}>
              <Button
                color="primary"
                onPress={handleLogin}>
                LOGIN
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
  message: {
    // backgroundColor: '#0085DF',
    color: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    marginBottom: 20,
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

