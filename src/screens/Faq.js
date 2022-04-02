import { View, TouchableOpacity, StyleSheet, ScrollView } from 'react-native';
import React from 'react';
import {Text} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';

const Faq = ({navigation: {goBack}}) => {
  return (
    <View>
      <ScrollView>
        <View style={styles.wrapper}>
          <TouchableOpacity style={styles.back} onPress={() => goBack()}>
            <EntypoIcon
              name="chevron-left"
              color="black"
              size={35}
              style={styles.icon}
            />
            <Text fontSize={20} bold style={styles.textBack}>
              FAQ
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    padding: 20,
  },
  back: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 10,
  },
  icon: {
    fontWeight: 'bold',
  },
  textBack: {},
});

export default Faq;
