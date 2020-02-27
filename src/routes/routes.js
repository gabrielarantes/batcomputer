import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

//importing screens
import Splash from '../screens/Splash';
import Home from '../screens/Home';
import ImageTest from '../screens/ImageTest';

const MainNavigator = createStackNavigator(
  {
    Splash,
    Home,
    
  },
  {
    headerMode: 'none',
  },
);

const Routes = createAppContainer(createSwitchNavigator({MainNavigator}));

export default Routes;
