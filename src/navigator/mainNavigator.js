import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen9202750Navigator from '../features/CopyOfBlankScreen9202750/navigator';
import CopyOfBlankScreen9202749Navigator from '../features/CopyOfBlankScreen9202749/navigator';
import BlankScreen18202748Navigator from '../features/BlankScreen18202748/navigator';
import BlankScreen19202747Navigator from '../features/BlankScreen19202747/navigator';
import BlankScreen9202741Navigator from '../features/BlankScreen9202741/navigator';
import Settings4202739Navigator from '../features/Settings4202739/navigator';
import Settings5202738Navigator from '../features/Settings5202738/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen9202750: { screen: CopyOfBlankScreen9202750Navigator },
CopyOfBlankScreen9202749: { screen: CopyOfBlankScreen9202749Navigator },
BlankScreen18202748: { screen: BlankScreen18202748Navigator },
BlankScreen19202747: { screen: BlankScreen19202747Navigator },
BlankScreen9202741: { screen: BlankScreen9202741Navigator },
Settings4202739: { screen: Settings4202739Navigator },
Settings5202738: { screen: Settings5202738Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
