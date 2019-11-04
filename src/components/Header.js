import React from 'react';

import { StyleSheet, View, Text } from 'react-native';
import BackBtn from './BackBtn';

const Header = ({ score }) => (
   <View style={styles.container}>
      <BackBtn />
      <View
         style={{ marginLeft: 'auto', marginRight: 20, flexDirection: 'row' }}
      >
         <Text style={styles.points}>{score} </Text>
         <Text style={{ color: 'rgba(255, 255, 255, 0.5)', fontSize: 25 }}>
            points
         </Text>
      </View>
   </View>
);

const styles = StyleSheet.create({
   container: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: 'rgba(0,0,0, 0.1)',
      width: '100%',
      height: 85,
      zIndex: 100
   },

   points: {
      fontSize: 30,
      color: '#fff',
      fontWeight: 'bold'
   }
});

export default Header;
