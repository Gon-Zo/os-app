import {createBottomTabNavigator} from "react-navigation-tabs";
import SettingScreen from "./setting";
import HomeScreen from "./home";
import Test2Screen from "./temp";

const MainRoot = createBottomTabNavigator({
    Temp: {screen: Test2Screen},
    Setting: {screen: SettingScreen},
    Home: {screen: HomeScreen, navigationOptions: {}},
});

export default MainRoot
