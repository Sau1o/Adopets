import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from '../paginas/Home';
import Login from '../paginas/Login';
import Cadastro from '../paginas/Cadastro';
import ListaPets from '../paginas/ListaPets';
import Mensagem from '../paginas/Mensagem';
import { Image } from 'react-native';
import Sobre from '../paginas/Sobre';
import Perfil from '../paginas/Perfil';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

const DrawerRoutes = () => {
    return(
        <Drawer.Navigator>
            <Drawer.Screen name='Lista de Pets' component={TabRoutes}/>
            <Drawer.Screen name='Perfil' component={Perfil}/>
            <Drawer.Screen name='Sair' component={Home} />
        </Drawer.Navigator>
    )
}

const TabRoutes = () => {
    return(
        <Tab.Navigator
        screenOptions={{
            headerShown: false,
        }}>
            <Tab.Screen name='Lista de Pets' component={ListaPets} 
            options={{
                tabBarIcon: () => (
                    <Image source={require('../assets/pets-green.png')} style={{
                        width:24, height:24}} />
                )
            }}/>
            <Tab.Screen name='Mensagens' component={Mensagem} 
            options={{
                tabBarIcon: () => (
                    <Image source={require('../assets/mensagens.png')} style={{
                        width:24, height:24}} />
                )
            }}
            />
        </Tab.Navigator>
    )
}

const Navigation = () => {
  return (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='Home'
        screenOptions={{
            headerTitle:'',
            headerShown:false
        }}>
            <Stack.Screen name='Home' 
            component={Home}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='Cadastro' component={Cadastro}/>
            <Stack.Screen name='Drawer' component={DrawerRoutes}/>
            <Stack.Screen name='Sobre' component={Sobre} />
            <Stack.Screen name='DrawerRoutes' component={DrawerRoutes} />
            </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;