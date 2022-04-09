import { View, Text, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';
import {getCategory, getFilter} from '../redux/actions/vehicles';
import {getDetailCategory} from '../redux/actions/detailCategory';
import {myOrder} from '../redux/actions/transaction';
import {getProfile} from '../redux/actions/user';

const DetailTop = ({category, onPress}) => {
  return (
    <View style={styles.topProduct}>
      <Text style={styles.type}>{category}</Text>
      <TouchableOpacity style={styles.more} onPress={onPress}>
        <Text>View More</Text>
        <Icon2 name="navigate-next" size={20} />
      </TouchableOpacity>
    </View>
  );
};
const FlatListSection = ({dataList, onPress, navigation}) => {
  const dispatch = useDispatch();
  const handleOrder = id => {
    dispatch(myOrder(id));
    navigation.navigate('Order');
  };
  return (
    <FlatList
      data={dataList}
      horizontal={true}
      style={styles.flat}
      renderItem={({item, index}) => {
        if (index < 5) {
          return (
            <TouchableOpacity onPress={() => handleOrder(item.idVehicle)}>
              <ImageBackground
                source={
                  item.image
                    ? {uri: item.image}
                    : require('../assets/img/no-image.jpg')
                }
                style={styles.imgProduct}
                resizeMode="cover"
                width={265}
                height={168}
              />
            </TouchableOpacity>
          );
        }
      }}
    />
  );
};

const Home = ({navigation}) => {
  const [key, setKey] = useState();

  const dispatch = useDispatch();
  const {cars, motorbike, bike, auth, pickup} = useSelector(state => state);

  useEffect(() => {
    dispatch(getCategory('CAR'));
    dispatch(getCategory('MOTORBIKE'));
    dispatch(getCategory('BIKE'));
    dispatch(getCategory('PICKUP'));
    dispatch(getProfile(auth.token));
  }, []);

  const gotoDetail = (nameCategory, idCategory) => {
    dispatch(getDetailCategory(nameCategory, idCategory));
    navigation.navigate('DetailCategory');
  };

  const handleSearch = () => {
    dispatch(getFilter(key));
    navigation.navigate('SearchList');
  };

  const handleOrder = id => {
    dispatch(myOrder(id));
    navigation.navigate('Order');
  };

  // const cars = [
  //   {image: require('../assets/img/avanza.jpeg'), text: 'test'},
  //   {image: require('../assets/img/xenia.jpg'), text: 'test'},
  //   {image: require('../assets/img/mazda.png'), text: 'test'},
  // ];

  // const motobike = [
  //   {image: require('../assets/img/beat.jpg'), text: 'test'},
  //   {image: require('../assets/img/vario.jpg'), text: 'test'},
  //   {image: require('../assets/img/satriafu.jpg'), text: 'test'},
  // ];

  // const bike = [
  //   {image: require('../assets/img/polygon.jpg'), text: 'test'},
  //   {image: require('../assets/img/onthel.jpg'), text: 'test'},
  //   {image: require('../assets/img/polygon2.jpeg'), text: 'test'},
  // ];
  // const typeProduct = ['Cars',];
  // const typeProduct2 = ['Motorbike'];
  // const typeProduct3 = ['Bike'];



  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <ImageBackground
          source={require('../assets/img/home.png')}
          alt="home header"
          style={styles.image}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="Search Vehicle"
              onChangeText={setKey}
              value={key}
            />
            <TouchableOpacity
              style={styles.iconSearchWrap}
              onPress={handleSearch}>
              <Icon name="search" size={20} style={styles.searchIcon} />
            </TouchableOpacity>
          </View>
        </ImageBackground>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() => gotoDetail('cars', cars.results[0].idCategory)}
            category="Car"
          />
          <View>
            <FlatListSection
              dataList={cars.results}
              // onPress={() => navigation.navigate('Order')}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() =>
              gotoDetail('motorbike', motorbike.results[0].idCategory)
            }
            category="Motorbike"
          />
          <View>
            <FlatListSection
              dataList={motorbike.results}
              // onPress={() => navigation.navigate('Order')}
              navigation={navigation}
            />
          </View>
        </View>
        <View style={styles.wrapperProduct}>
          <DetailTop
            onPress={() => gotoDetail('bike', bike.results[0].idCategory)}
            category="Bike"
          />
          <View>
            <FlatListSection
              dataList={bike.results}
              // onPress={() => navigation.navigate('Order')}
              navigation={navigation}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 290,
  },
  form: {
    padding: 20,
    justifyContent: 'center',
    marginTop: 45,
    position: 'relative',
  },
  input: {
    height: 60,
    color: '#fff',
    backgroundColor: 'rgba(34, 47, 62,0.6)',
    borderRadius: 10,
    fontSize: 14,
    paddingHorizontal: 15,
  },
  iconSearchWrap: {
    position: 'absolute',
    right: 40,
    height: '100%',
    width: 90,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  searchIcon: {
    color: '#fff',
  },
  wrapperProduct: {
    padding: 20,
  },
  topProduct: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: 20,
  },
  type: {
    fontWeight: 'bold',
    fontSize: 22,
    color: '#393939',
  },
  more: {
    flexDirection: 'row',
  },
  imgWrapper: {
    width: 250,
    marginTop: 10,
    height: 200,
    borderRadius: 10,
  },
  imgProduct: {
    marginRight: 20,
    width: 300,
    height: 200,
    borderRadius: 20,
    overflow: 'hidden',
  },
  viewMore: {
    color: '#0085DF'
  }
});

export default Home;
