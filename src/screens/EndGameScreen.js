import React from 'react';
import { StyleSheet, View, Text, SafeAreaView, Button } from 'react-native';
import OptionBtn from '../components/OptionBtn';

const EndGameScreen = ({ navigation }) => {
   const { background, score } = navigation.state.params;

   const playAgain = () => {
      navigation.navigate('GameScreen');
   };

   const back = () => {
      navigation.navigate('MainScreen');
   };

   return (
      <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
         <Text style={[styles.colorWhite, { fontSize: 60, marginTop: 100 }]}>
            Time's up!
         </Text>
         <Text style={[styles.colorWhite, { fontSize: 30, marginTop: 30 }]}>
            You earned
         </Text>
         <Text
            style={[styles.colorWhite, { fontSize: 45, fontWeight: 'bold' }]}
         >
            {score}
         </Text>
         <Text style={[styles.colorWhite, { fontSize: 30 }]}>points!</Text>

         <View style={{ width: '100%', marginTop: 'auto' }}>
            <OptionBtn text="Play Again!" event={playAgain} />
            <OptionBtn text="Back" event={back} />
         </View>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   colorWhite: {
      color: '#fff'
   }
});

export default EndGameScreen;
