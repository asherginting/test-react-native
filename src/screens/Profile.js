import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Box, Image, Text} from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';
import {goToVerify} from '../redux/actions/verify';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const {profile} = useSelector(state => state);
  const handleLogout = () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });
  };
  const handleVerify = () => {
    dispatch({type: 'AUTH_LOGOUT'});
    dispatch(goToVerify);
    // navigation.navigate('Verify');
  };
  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          size={69}
          resizeMode={'contain'}
          borderRadius={200}
          source={
            profile.results.image
              ? {
                  uri: profile.results.image.replace(
                    /localhost/g,
                    '192.168.247.222',
                  ),
                }
              : require('../assets/img/no-pp.jpg')
          }
          alt="Photo profile"
        />
        <Text bold fontSize="2xl" style={styles.name}>
          {profile.results.name || profile.results.username}
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          {profile.results?.confirm !== '0' && (
            <TouchableOpacity
              style={styles.linkItem}
              onPress={() => navigation.navigate('Favorite')}>
              <Text fontSize="xl">Your Favorites</Text>
              <FaIcon name="chevron-right" size={20} />
            </TouchableOpacity>
          )}
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => navigation.navigate('Faq')}>
            <Text fontSize="xl">FAQ</Text>
            <FaIcon name="chevron-right" size={20} />
          </TouchableOpacity>
          <TouchableOpacity 
            style={styles.linkItem}
            onPress={() => navigation.navigate('Help')}>
            <Text fontSize="xl">Help</Text>
            <FaIcon name="chevron-right" size={20} />
          </TouchableOpacity>
          {profile.results?.confirm !== '0' && (
            <TouchableOpacity
              style={styles.linkItem}
              onPress={() => navigation.navigate('UpdateProfile')}>
              <Text fontSize="xl">Update Profile</Text>
              <FaIcon name="chevron-right" size={20} />
            </TouchableOpacity>
          )}
        </View>
        <View style={styles.btnWrapper}>
          {profile.results?.confirm === '0' && (
            <Box mb="7">
              <Text mt="5" mb="2" bold textAlign={"center"}>
              Please verify your account first!
              </Text>
              <Text color="#0085DF" textAlign={"center"} onPress={handleVerify}>Click Here</Text>
            </Box>
          )}
          <Button color="primary" onPress={handleLogout}>
            LOGOUT
          </Button>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  main: {
    backgroundColor: '#fff',
    height: '100%',
  },
  container: {
    padding: 30,
    flexDirection: 'column',
    justifyContent: 'space-between',
    height: '80%',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    elevation: 19,
    paddingHorizontal: 20,
    paddingVertical: 30,
  },
  name: {
    marginLeft: 30,
  },
  list: {
    paddingVertical: 20,
  },
  linkItem: {
    marginVertical: 25,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  btnWrapper: {
    // flex: 1,
  },
});

export default Profile;

