import React, { Component } from 'react';
import Menu from './MenuComponent';
import DishDetail from './DishDetailComponent';
import { View, Platform } from 'react-native';
import{ createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

const MenuNavigator = createStackNavigator({
    Menu: {
        screen: Menu 
    },
    DishDetail: {
        screen: DishDetail
    }
},{
    initialRouteName: 'Menu',
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#512DA8'
        },
        headerTintColor: '#fff',
        headerTitleStyle: {
            color: '#fff'
        }
    }
});

const NavigatorContainer = createAppContainer(MenuNavigator);

class Main extends Component{

    render(){
        return(
            <View style={{flex: 1, paddingTop: Platform.OS === 'ios' ? 0 : Expo.Constants.statusBarHeight}}>
                <NavigatorContainer />
            </View>
        );
    }

}

export default Main;