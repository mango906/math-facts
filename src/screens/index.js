import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './MainScreen';
import GameScreen from './Game';
import EndGameScreen from './EndGameScreen';

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
   },

   EndGameScreen: {
      screen: EndGameScreen,
      navigationOptions: () => ({
         header: null
      })
   }
});

export default createAppContainer(AppStack);
