import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import MainScreen from './MainScreen';
import GameScreen from './Game';
import EndGameScreen from './EndGameScreen';

const AppStack = createStackNavigator({
   MainScreen: {
      screen: MainScreen,
      navigationOptions: () => ({
         header: null,
         gesturesEnabled: false
      })
   },
   GameScreen: {
      screen: GameScreen,
      navigationOptions: () => ({
         header: null,
         gesturesEnabled: false
      })
   },

   EndGameScreen: {
      screen: EndGameScreen,
      navigationOptions: () => ({
         header: null,
         gesturesEnabled: false
      })
   }
});

export default createAppContainer(AppStack);
