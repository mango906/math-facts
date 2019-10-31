import React from 'react';
import { StyleSheet, View, Text, FlatList } from 'react-native';
import lib from '../lib';

import Button from '../components/Button';

const Game = () => {
   const randomColor = lib.randomColor();

   return (
      <View style={[styles.container, { backgroundColor: randomColor }]}>
         <View style={styles.keyboard}>
            <Button text={'1'} />
            <Button text={'2'} />
            <Button text={'3'} />
            <Button text={'4'} />
            <Button text={'5'} />
            <Button text={'6'} />
            <Button text={'7'} />
            <Button text={'8'} />
            <Button text={'9'} />
            <Button text={'HELP'} />
            <Button text={'0'} />
            <Button text={'CLEAR'} />
         </View>
      </View>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
   },

   keyboard: {
      display: 'flex',
      flexDirection: 'row',
      marginTop: 'auto',
      marginBottom: 30,
      flexWrap: 'wrap'
   }
});

export default Game;
