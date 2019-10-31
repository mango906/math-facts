import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import GameScreen from './Game';

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

const AppStack = createStackNavigator({
   MainScreen: {
      screen: MainScreen,
      navigationOptions: () => ({
         header: null
      })
   },
   GameScreen: {
      screen: GameScreen,
      navigationOptions: () => ({
         header: null
      })
   }
});

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

export default createAppContainer(AppStack);
