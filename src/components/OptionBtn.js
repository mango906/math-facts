import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const OptionBtn = ({ text, event }) => (
   <TouchableOpacity
      onPress={event}
      style={[
         styles.container,
         { backgroundColor: 'rgba(0,0,0, 0.2)', marginTop: 20 }
      ]}
   >
      <Text style={{ color: '#fff', fontSize: 35 }}>{text}</Text>
   </TouchableOpacity>
);

const styles = StyleSheet.create({
   container: {
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      height: 85
   }
});

export default OptionBtn;
