import React from 'react';

import { StyleSheet, Text, TouchableOpacity, Dimensions } from 'react-native';

const Button = ({ text, handleClick }) => {
   const width = Dimensions.get('window').width / 3 - 6;

   return (
      <TouchableOpacity
         onPress={() => handleClick(text)}
         style={[styles.container, { width: width }]}
      >
         <Text style={{ color: '#fff', fontSize: 20 }}>{text}</Text>
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   container: {
      alignItems: 'center',
      justifyContent: 'center',
      height: 75,
      margin: 3,
      backgroundColor: 'rgba(0, 0, 0, 0.05)'
   }
});

export default Button;
