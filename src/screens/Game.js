import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, SafeAreaView, Alert } from 'react-native';
import lib from '../lib';
import config from '../config';
import Button from '../components/Button';

const Game = () => {
   const [number, setNumber] = useState({});
   const [value, setValue] = useState('');
   const [background, setBackground] = useState('#fff');
   const [score, setScore] = useState(0);

   useEffect(() => {
      setNumber(lib.randomNum());
      setBackground(lib.randomColor());
   }, [score]);

   useEffect(() => {
      const { num1, num2 } = number;
      if (num1 * num2 === parseInt(value)) {
         setScore(score + 20);
         setValue('');
      }
   }, [value]);

   const handleClick = val => {
      switch (val) {
         case 'CLEAR':
            setValue('');
            return;
         case 'HELP':
            return;
         default:
            setValue(value + val);
      }
   };

   const keyboards = config.keyboardType.map((el, i) => (
      <Button key={i} text={el} handleClick={handleClick} />
   ));

   return (
      <SafeAreaView style={[styles.container, { backgroundColor: background }]}>
         <Text style={{ color: '#fff', fontSize: 60, marginTop: 100 }}>
            {number.num1} × {number.num2}
         </Text>
         <Text style={{ color: '#fff', fontSize: 100 }}>{value}</Text>
         <View style={styles.keyboard}>{keyboards}</View>
      </SafeAreaView>
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
