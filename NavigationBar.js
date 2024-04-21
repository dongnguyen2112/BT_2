import HomeScreen from "./HomeScreen";
import DetailsScreen from "./DetailsScreen";
import { createStackNavigator } from "@react-navigation/stack";   
import CustomNavigationBar from "./CustomNavigationBar";

const Stack = createStackNavigator();

const NavigationBar = () => {
  return (
    <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            header: (props) => <CustomNavigationBar {...props} />,
          }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Contact" component={DetailsScreen} />
        </Stack.Navigator>
  );
};

export default NavigationBar;
