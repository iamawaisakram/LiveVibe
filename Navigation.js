import {
  createSwitchNavigator,
  createStackNavigator,
  createAppContainer
} from 'react-navigation';

// * Splash Screen Intro
import Intro from './containers/Intro';

// * SplahsScreen
import SplahsScreen from './containers/SplashScreen';

// * Login
import Login from './containers/Login';

// * Forgot password
import ForgotPassword from './containers/ForgotPassword';

// * Signup
import Signup from './containers/Signup';

const RootStack = createAppContainer(
  createSwitchNavigator(
    {
      Splash: SplahsScreen,
      Login,
      Signup,
      Intro,
      ForgotPassword
    },
    {
      headerMode: 'none',
      initialRouteName: 'Splash'
    }
  )
);

export default RootStack;
