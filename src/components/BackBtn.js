import React from 'react';
import { TouchableOpacity, Text, Alert } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { withNavigation } from 'react-navigation';

const BackBtn = ({ navigation }) => {
   return (
      <TouchableOpacity
         style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginLeft: 10,
            opacity: 0.3
         }}
         onPress={() => navigation.goBack()}
      >
         <AntDesign size={30} name="left" />
         <Text style={{ paddingLeft: 10, fontSize: 25 }}>Back</Text>
      </TouchableOpacity>
   );
};

export default withNavigation(BackBtn);
