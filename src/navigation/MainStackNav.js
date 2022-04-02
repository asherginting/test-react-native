import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';

import Favorite from '../screens/Favorite';
import Faq from '../screens/Faq';
import Help from '../screens/Help';
import UpdateProfile from '../screens/UpdateProfile';
import Order from '../screens/Order';


const MainStack = createNativeStackNavigator();
const MainStackNav = () => {
  return (
    <MainStack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <MainStack.Screen name="Bottom" component={BottomTabNav} />
      <MainStack.Screen name="Favorite" component={Favorite} />
      <MainStack.Screen name="Faq" component={Faq} />
      <MainStack.Screen name="Help" component={Help} />
      <MainStack.Screen name="UpdateProfile" component={UpdateProfile} />
      <MainStack.Screen name="Order" component={Order} />
    </MainStack.Navigator>
  );
};

export default MainStackNav;
