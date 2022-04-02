import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabNav from './BottomTabNav';

import Favorite from '../screens/Favorite';
import Faq from '../screens/Faq';
import Help from '../screens/Help';
import UpdateProfile from '../screens/UpdateProfile';
import Order from '../screens/Order';
import Payment from '../screens/Payment';
import Payment2 from '../screens/Payment2';
import Payment3 from '../screens/Payment3';
import PaymentFinish from '../screens/PaymentFinish';


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
      <MainStack.Screen name="Payment" component={Payment} />
      <MainStack.Screen name="Payment2" component={Payment2} />
      <MainStack.Screen name="Payment3" component={Payment3} />
      <MainStack.Screen name="PaymentFinish" component={PaymentFinish} />
    </MainStack.Navigator>
  );
};

export default MainStackNav;
