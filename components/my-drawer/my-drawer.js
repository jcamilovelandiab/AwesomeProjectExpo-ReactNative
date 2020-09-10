import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from "@react-navigation/native";
import {
  createStackNavigator
} from "@react-navigation/stack";
import Home from '../../pages/home';
import Menu from '../../pages/menu';
import DishDetail from '../../pages/dish-details';
import Contact from '../../pages/contact';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const MenuNavigator = () => {
    return (
      <Stack.Navigator initialRouteName="Menu">
        <Stack.Screen
          name="Menu"
          component={Menu}
          options={{
            title: "Menu",
          }}
        />
        <Stack.Screen
          name="DishDetail"
          component={DishDetail}
          options={{
            title: "Dish detail",
          }}
        />
      </Stack.Navigator>
    );
}

export default function MyDrawer(){
    return (
      <NavigationContainer>
        <Drawer.Navigator initialRouteName="Home">
          <Drawer.Screen
            name="Home"
            component={Home}
          />
          <Drawer.Screen
            name="Menu"
            component={MenuNavigator}
          />
          <Drawer.Screen
            name="Contact"
            component={Contact}
            options={{
              title: "Contact"
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    );
}