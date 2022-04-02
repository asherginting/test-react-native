import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import React, {useState} from 'react';
import {Box, Text} from 'native-base';
import EntypoIcon from 'react-native-vector-icons/Entypo';
import Stepper from '../components/Stepper';
import Button from '../components/Button';
import priceFormat from '../helper/priceFormat';

const Payment3 = ({navigation}) => {
  const dataOrder = {
    qty: 2,
    name: 'Vespa',
    perpayment: 'no tax',
    days: 4,
    startDate: 'April 7 2022',
    endDate: 'April 11 2022',
    price: 20000,
  };
  return (
    <Box p="5">
      <TouchableOpacity style={styles.back} onPress={() => navigation.goBack()}>
        <EntypoIcon name="chevron-left" color="black" size={35} />
        <Text fontSize={'2xl'} pl="2" bold>
          Payment
        </Text>
      </TouchableOpacity>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Box py={'10'}>
          <Stepper currentlyActive={3} />
        </Box>
        <Box
          justifyContent={'center'}
          flexDirection="column"
          alignItems={'center'}>
          <Text fontSize="lg" bold>
            Payment Code:
          </Text>
          <Text py="4" fontSize={'4xl'} bold>
          90887620
          </Text>
          <Text fontSize={12}>Insert your payment code while you transfer booking order</Text>
          <Text fontSize={12}>Pay before:</Text>
          <Text fontSize={'2xl'} py="5" color="red.700" bold>
            23:59:59
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Bank account information:
          </Text>
          <Text fontSize={'2xl'} py="5" bold>
          0290-90203-345-2
          </Text>
          <Text fontSize="md" color="gray.500" bold>
            Vespa Rental Jogja
          </Text>
          <Box py="5" style={styles.borderBtm} />
          <Text fontSize={'md'} pt="5" bold>
            Booking code:{' '}
            <Text color="success.700" fontSize="lg">
              VSP901222
            </Text>
          </Text>
          <Text>Use your booking code to pick your vespa</Text>
          <Box py="5">
            <Button color={'primary'}>
              Copy payment & Booking Code
            </Button>
          </Box>
        </Box>
        <Box>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.qty} {dataOrder.name}
          </Text>
          <Text fontSize={'lg'}>Prepayment (no tax)</Text>
          <Text fontSize={'lg'}>
            {dataOrder.days} {dataOrder.days > 1 ? 'Days' : 'Day'}
          </Text>
          <Text fontSize={'lg'}>Order Details:</Text>
          <Text fontSize={'lg'}>
            {dataOrder.startDate} to {dataOrder.endDate}
          </Text>
          <Box py="5" style={styles.borderBtm} />
        </Box>
        <Box py="5" flexDirection={'row'} justifyContent="space-between">
          <Text fontSize={'3xl'} bold>
            {priceFormat(dataOrder.price * dataOrder.days * dataOrder.qty)}
          </Text>
          <TouchableOpacity>
            <EntypoIcon name="info-with-circle" size={36} color="#d2dae2" />
          </TouchableOpacity>
        </Box>
        <Button
          color="primary"
          onPress={() => navigation.navigate('PaymentFinish')}>
          Finish Payment
        </Button>
        <Box mb={'20'} />
      </ScrollView>
    </Box>
  );
};

const styles = StyleSheet.create({
  back: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  borderBtm: {
    borderBottomColor: 'gray',
    borderBottomWidth: 1,
    width: '100%',
  },
});

export default Payment3;
