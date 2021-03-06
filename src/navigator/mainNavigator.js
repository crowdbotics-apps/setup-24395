import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen12202791Navigator from '../features/BlankScreen12202791/navigator';
import BlankScreen13202790Navigator from '../features/BlankScreen13202790/navigator';
import BlankScreen14202789Navigator from '../features/BlankScreen14202789/navigator';
import CopyOfBlankScreen9202757Navigator from '../features/CopyOfBlankScreen9202757/navigator';
import CopyOfBlankScreen9202756Navigator from '../features/CopyOfBlankScreen9202756/navigator';
import CopyOfBlankScreen9202755Navigator from '../features/CopyOfBlankScreen9202755/navigator';
import CopyOfBlankScreen9202754Navigator from '../features/CopyOfBlankScreen9202754/navigator';
import CopyOfBlankScreen9202753Navigator from '../features/CopyOfBlankScreen9202753/navigator';
import CopyOfBlankScreen9202751Navigator from '../features/CopyOfBlankScreen9202751/navigator';
import CopyOfBlankScreen9202750Navigator from '../features/CopyOfBlankScreen9202750/navigator';
import CopyOfBlankScreen9202749Navigator from '../features/CopyOfBlankScreen9202749/navigator';
import BlankScreen18202748Navigator from '../features/BlankScreen18202748/navigator';
import BlankScreen19202747Navigator from '../features/BlankScreen19202747/navigator';
import BlankScreen9202741Navigator from '../features/BlankScreen9202741/navigator';
import Settings4202739Navigator from '../features/Settings4202739/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen12202791: { screen: BlankScreen12202791Navigator },
BlankScreen13202790: { screen: BlankScreen13202790Navigator },
BlankScreen14202789: { screen: BlankScreen14202789Navigator },
CopyOfBlankScreen9202757: { screen: CopyOfBlankScreen9202757Navigator },
CopyOfBlankScreen9202756: { screen: CopyOfBlankScreen9202756Navigator },
CopyOfBlankScreen9202755: { screen: CopyOfBlankScreen9202755Navigator },
CopyOfBlankScreen9202754: { screen: CopyOfBlankScreen9202754Navigator },
CopyOfBlankScreen9202753: { screen: CopyOfBlankScreen9202753Navigator },
CopyOfBlankScreen9202751: { screen: CopyOfBlankScreen9202751Navigator },
CopyOfBlankScreen9202750: { screen: CopyOfBlankScreen9202750Navigator },
CopyOfBlankScreen9202749: { screen: CopyOfBlankScreen9202749Navigator },
BlankScreen18202748: { screen: BlankScreen18202748Navigator },
BlankScreen19202747: { screen: BlankScreen19202747Navigator },
BlankScreen9202741: { screen: BlankScreen9202741Navigator },
Settings4202739: { screen: Settings4202739Navigator },

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
