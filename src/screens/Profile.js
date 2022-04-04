import {View, StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {Image, Text} from 'native-base';
import FaIcon from 'react-native-vector-icons/FontAwesome';
import Button from '../components/Button';

const Profile = ({navigation}) => {
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch({
      type: 'AUTH_LOGOUT',
    });
  };

  return (
    <View style={styles.main}>
      <View style={styles.header}>
        <Image
          size={60}
          resizeMode={'contain'}
          borderRadius={200}
          source={require('../assets/img/no-pp.jpg')}
          alt="Photo profile"
        />
        <Text bold style={styles.name}>
          Example
        </Text>
      </View>
      <View style={styles.container}>
        <View>
          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Favorite')}>
            <Text fontSize="xl">Your favourites</Text>
            <FaIcon name="chevron-right" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Faq')}>
            <Text fontSize="xl">FAQ</Text>
            <FaIcon name="chevron-right" size={18} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.linkItem} onPress={() => navigation.navigate('Help')}>
            <Text fontSize="xl">Help</Text>
            <FaIcon name="chevron-right" size={18} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.linkItem}
            onPress={() => navigation.navigate('UpdateProfile')}>
            <Text fontSize="xl">Update profile</Text>
            <FaIcon name="chevron-right" size={18} />
          </TouchableOpacity>
        </View>
        <View style={styles.btnWrapper}>
          <Button color="primary" onPress={handleLogout}>LOGOUT</Button>
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
    padding: 20,
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
    marginLeft: 28,
    fontWeight: 'bold',
    fontSize: 22,
    color: '#393939',
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
