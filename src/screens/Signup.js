import { View, Text, StyleSheet, ImageBackground, TouchableOpacity, ScrollView } from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Input from '../components/Input';
import Button from '../components/Button';


import {authSignup} from '../redux/actions/signup';

const Signup = ({navigation}) => {
  const [isEmpty, setIsEmpty] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [password, setPassword] = useState();

  const dispatch = useDispatch();

  const {signup} = useSelector(state => state);

  useEffect(() => {
    dispatch({
      type: 'SIGNUP_CLEAR',
    });
  }, [dispatch]);
  useEffect(() => {
    if (signup.isSuccess) {
      navigation.navigate('Verify');
    }
  }, [signup]);

  const handleSignup = () => {
    if (username && email && phone && password) {
      setIsEmpty(false);
      dispatch(authSignup(username, email, phone, password));
      if (signup.isSuccess) {
        navigation.navigate('Verify');
      }
    } else {
      setIsEmpty(true);
    }
  };
  
  return (
    <ScrollView>
      <ImageBackground
        source={require('../assets/img/bg-signup.jpg')}
        resizeMode="cover"
        style={styles.image}>
        <View style={styles.opacity}>
          <View style={styles.header}>
            <Text style={styles.head}>LET'S HAVE</Text>
            <Text style={styles.head}>SOME RIDE</Text>
          </View>
          <View style={styles.form}>
            {(isEmpty || signup.isError) && (
              <Text
                style={styles.message}
                fontSize="xl"
                bold>
                {signup.isError ? signup.errMessage : 'All data must be filled'}
              </Text>
            )}
            <Input placeholder="Username" onChangeText={setUsername} value={username} />
            <View style={styles.gap} />
            <Input
              placeholder="Email"
              keyboardType="email-address"
              onChangeText={setEmail}
              value={email}
            />
            <View style={styles.gap} />
            <Input
              placeholder="Phone Number"
              keyboardType="phone-pad"
              onChangeText={setPhone}
              value={phone}
            />
            <View style={styles.gap} />
            <Input placeholder="Password" secureTextEntry={true} onChangeText={setPassword} value={password} />
            <View style={styles.btn}>
              <Button color="primary" onPress={handleSignup}>Signup</Button>
            </View>
            <View style={styles.loginContain}>
              <Text style={styles.login}>Already have account?</Text>
              <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                <Text style={[styles.login, styles.linklogin]}> Login now</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  image: {
    height: '100%',
  },
  opacity: {
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
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
    // backgroundColor: 'rgba(15, 185, 177,0.7)',
    color: 'white',
    borderRadius: 10,
    marginBottom: 20,
  },
  gap: {
    marginTop: 20,
  },
  btn: {
    marginVertical: 30,
  },
  forgot: {
    color: '#fff',
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 118,
    marginVertical: 30,
  },
  loginContain: {
    flexDirection: 'row',
    marginTop: 20,
    marginBottom: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  ['login']: {
    color: '#fff',
  },
  linklogin: {
    borderBottomColor: '#fff',
    borderBottomWidth: 1,
    width: 80,
    fontWeight: 'bold',
  },
});

export default Signup;
