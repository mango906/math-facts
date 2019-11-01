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
   const [hint, setHint] = useState(false);

   useEffect(() => {
      setNumber(lib.randomNum());
      setBackground(lib.randomColor());
   }, [score]);

   useEffect(() => {
      const { num1, num2 } = number;
      if (num1 * num2 === parseInt(value)) {
         setScore(score + 20);
         setValue('');
         setHint(false);
      }
   }, [value]);

   const handleClick = val => {
      switch (val) {
         case 'CLEAR':
            setValue('');
            return;
         case 'HELP':
            setHint(true);
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

         <View style={{ marginTop: 'auto', alignItems: 'center' }}>
            <Text
               style={{
                  opacity: 0.5,
                  color: '#fff',
                  fontSize: 30,
                  marginBottom: 20,
                  display: hint ? 'block' : 'none'
               }}
            >
               The answer is {number.num1 * number.num2}
            </Text>
            <View style={styles.keyboard}>{keyboards}</View>
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

   keyboard: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap'
   }
});

export default Game;
