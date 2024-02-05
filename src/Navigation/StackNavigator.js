import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../Screens/HomeScreen';
import DetailsScreen from '../Screens/DetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DrawerContent from '../Components/DrawerContent';
import AboutScreen from '../Screens/AboutScreen';

const Stack = createStackNavigator();
const Drawer = createDrawerNavigator();
const DrawerNavigator = () => {
  return (
    <Drawer.Navigator drawerContent={props => <DrawerContent {...props} />}>
      <Drawer.Screen name="Home" component={HomeScreen} />
      <Drawer.Screen name="About" component={AboutScreen} />
    </Drawer.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <Stack.Navigator  initialRouteName="Drawer">
       <Stack.Screen name="Drawer" component={DrawerNavigator} options={{headerShown:false}}/>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
      <Stack.Screen name="Details" component={DetailsScreen} options={{headerShown:true}}/>
    </Stack.Navigator>
  );
};

export default StackNavigator;
