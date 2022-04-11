import {FlatList, View, TouchableOpacity, StyleSheet} from 'react-native';
import {Box, Image, Text} from 'native-base';
import React, {useState} from 'react';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import AntIcon from 'react-native-vector-icons/AntDesign';
import moment from 'moment';
import priceFormat from '../helper/priceFormat';

const Favourites = ({navigation}) => {
  const dataDummy = [
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Toyota Avanza',
      location: 'Bandung',
      prepayment: 350000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/avanza.jpeg'),
    },
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Beat Street',
      location: 'Jakarta',
      prepayment: 120000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/beat.jpg'),
    },
    {
      brand: 'Toyota Avanza',
      location: 'Bandung',
      prepayment: 350000,
      rentStartDate: '2022-04-11',
      rentEndDate: '2022-04-13',
      image: require('../assets/img/avanza.jpeg'),
    },
  ];
  const [favourite, setFavourite] = useState(true);

  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={39} />
        <Text fontSize={'2xl'} pl="2" bold>
          Your Favorites
        </Text>
      </TouchableOpacity>
      <Text color={'gray.500'} my="5" textAlign={'center'}>
        Tap love to unlike
      </Text>
      <Box style={styles.listWrapper}>
        <FlatList
          showsVerticalScrollIndicator={false}
          data={dataDummy}
          renderItem={({item, index}) => (
            <Box
              justifyContent={'space-between'}
              alignItems="center"
              flexDirection="row">
              <View style={styles.listVehicles}>
                <View style={styles.left}>
                  <Image
                    source={item.image}
                    alt="photo product"
                    resizeMode={'cover'}
                    width={130}
                    height={100}
                    borderRadius={30}
                    style={styles.image}
                  />
                </View>
                <Box style={styles.right} ml="5">
                  <Text fontSize={'lg'} bold>
                    {item.brand}
                  </Text>
                  <Text>
                    {moment(item.rentStartDate).format('MMM DD')} to{' '}
                    {moment(item.rentEndDate).format('MMM DD YYYY')}
                  </Text>
                  {item.prepayment ? (
                    <Text bold>Prepayment: {priceFormat(item.prepayment)}</Text>
                  ) : (
                    <Text bold>No prepayment</Text>
                  )}
                  <Text bold>{item.location}</Text>
                </Box>
              </View>
              <TouchableOpacity
                style={styles.badgeDelete}
                onPress={() => setFavourite(false)}>
                <AntIcon name="heart" color={'red'} size={30} />
              </TouchableOpacity>
            </Box>
          )}
        />
      </Box>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  listWrapper: {
    paddingBottom: 200,
  },
  listVehicles: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 18,
    width: '90%',
  },
});

export default Favourites;
