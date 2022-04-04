import { View, Text, TextInput, ImageBackground, StyleSheet, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import Icon2 from 'react-native-vector-icons/MaterialIcons';

const Home = ({navigation}) => {
  const cars = [
    {image: require('../assets/img/avanza.jpeg'), text: 'test'},
    {image: require('../assets/img/xenia.jpg'), text: 'test'},
    {image: require('../assets/img/mazda.png'), text: 'test'},
  ];

  const motobike = [
    {image: require('../assets/img/beat.jpg'), text: 'test'},
    {image: require('../assets/img/vario.jpg'), text: 'test'},
    {image: require('../assets/img/satriafu.jpg'), text: 'test'},
  ];

  const bike = [
    {image: require('../assets/img/polygon.jpg'), text: 'test'},
    {image: require('../assets/img/onthel.jpg'), text: 'test'},
    {image: require('../assets/img/polygon2.jpeg'), text: 'test'},
  ];
  const typeProduct = ['Cars',];
  const typeProduct2 = ['Motorbike'];
  const typeProduct3 = ['Bike'];

  return (
    <View>
      <ScrollView>
        <ImageBackground
          source={require('../assets/img/home.png')}
          alt="home header"
          style={styles.image}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              placeholderTextColor="#fff"
              placeholder="Search Vehicle"
            />
            <Icon name="search" size={22} style={styles.searchIcon} />
          </View>
        </ImageBackground>
        {typeProduct.map((data, index) => {
          return (
            <View style={styles.wrapperProduct} key={index}>
              <View style={styles.topProduct}>
                <Text style={styles.type}>{data}</Text>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => navigation.navigate('DetailCategory')}>
                  <Text style={styles.viewMore}>View More</Text>
                  <Icon2 name="navigate-next" size={20} color='#0085DF' />
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={cars}
                  horizontal={true}
                  style={styles.flat}
                  renderItem={({item}) => {
                    return (
                      <ImageBackground
                        source={item.image}
                        style={styles.imgProduct}
                        resizeMode="cover"
                      />
                    );
                  }}
                />
              </View>
            </View>
          );
        })}
        {typeProduct2.map((data, index) => {
          return (
            <View style={styles.wrapperProduct} key={index}>
              <View style={styles.topProduct}>
                <Text style={styles.type}>{data}</Text>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => navigation.navigate('DetailCategory')}>
                  <Text style={styles.viewMore}>View More</Text>
                  <Icon2 name="navigate-next" size={20} color='#0085DF' />
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={motobike}
                  horizontal={true}
                  style={styles.flat}
                  renderItem={({item}) => {
                    return (
                      <ImageBackground
                        source={item.image}
                        style={styles.imgProduct}
                        resizeMode="cover"
                      />
                    );
                  }}
                />
              </View>
            </View>
          );
        })}
        {typeProduct3.map((data, index) => {
          return (
            <View style={styles.wrapperProduct} key={index}>
              <View style={styles.topProduct}>
                <Text style={styles.type}>{data}</Text>
                <TouchableOpacity
                  style={styles.more}
                  onPress={() => navigation.navigate('DetailCategory')}>
                  <Text style={styles.viewMore}>View More</Text>
                  <Icon2 name="navigate-next" size={20} color='#0085DF' />
                </TouchableOpacity>
              </View>
              <View>
                <FlatList
                  data={bike}
                  horizontal={true}
                  style={styles.flat}
                  renderItem={({item}) => {
                    return (
                      <ImageBackground
                        source={item.image}
                        style={styles.imgProduct}
                        resizeMode="cover"
                      />
                    );
                  }}
                />
              </View>
            </View>
          );
        })}
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
  searchIcon: {
    color: '#fff',
    position: 'absolute',
    right: 40,
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
