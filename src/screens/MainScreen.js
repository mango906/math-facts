import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const MainScreen = ({ navigation }) => {
   const handleMove = () => {
      navigation.navigate('GameScreen');
   };

   return (
      <View style={styles.container}>
         <TouchableOpacity onPress={handleMove}>
            <Ionicons
               size={200}
               color={'#20639B'}
               name="md-arrow-dropright-circle"
            />
         </TouchableOpacity>
         <Text style={{ color: '#20639B', fontSize: 30, fontWeight: 'bold' }}>
            PLAY!
         </Text>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
   },

   bold: {
      fontWeight: 'bold'
   }
});

export default MainScreen;
