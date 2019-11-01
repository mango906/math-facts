import React from 'react';
import { View, StyleSheet, Dimensions } from 'react-native';

const ProgressBar = ({ time }) => {
   const width = Dimensions.get('window').width / 20;

   return (
      <View style={{ width: '100%', backgroundColor: 'rgba(0,0,0,0.1)' }}>
         <View style={[styles.progressBar, { width: width * time }]} />
      </View>
   );
};

const styles = StyleSheet.create({
   progressBar: {
      height: 10,
      marginRight: 'auto',
      backgroundColor: '#fff'
   }
});

export default ProgressBar;
