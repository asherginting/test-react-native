import {View, StyleSheet, Switch} from 'react-native';
import React from 'react';
import {Text} from 'native-base';

const SwitchSection = ({title, state, setState}) => {
  return (
    <View style={styles.switchList}>
      <Text color={'black'} fontSize={'xl'}>
        {title}
      </Text>
      <View style={styles.switchWrapper}>
        <Switch
          trackColor={{false: '#767577', true: '#39A1E7'}}
          thumbColor={state ? '#0085DF' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={() => setState(previousState => !previousState)}
          value={state}
          style={styles.prepaymentBtn}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  switchList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 30,
  },
  prepaymentBtn: {
    transform: [{scaleX: 1.3}, {scaleY: 1.3}],
    marginRight: 30,
  },
});

export default SwitchSection;
