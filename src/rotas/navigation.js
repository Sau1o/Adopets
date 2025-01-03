import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../paginas/Home';
import Login from '../paginas/Login';

const Stack = createNativeStackNavigator();

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator>
            <Stack.Screen name='Home' component={Home}/>
            <Stack.Screen name='Login' component={Login}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;