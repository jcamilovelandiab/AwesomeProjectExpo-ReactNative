import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import { ListItem } from 'react-native-elements';
import { DISHES } from '../../shared/dishes';

class Menu extends Component{
    
    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES
        }
        this.onSelectDish = this.onSelectDish.bind(this);
    }

    onSelectDish(dishId){
        this.setState({
            selectedDish: dishId
        });
    }

    render(){

        const navigation = this.props.navigation;

        const renderMenuItem = ({item, index}) =>{
            return (
              <ListItem
                key={index}
                title={item.name}
                subtitle={item.description}
                hideChevron={true}
                leftAvatar={{
                  source: require("../../assets/images/uthappizza.png"),
                }}
                onPress={() =>
                  navigation.push("DishDetail", { dishId: item.id })
                }
              />
            );
        }

        return(
            <FlatList
                data={this.state.dishes}
                renderItem={renderMenuItem}
                keyExtractor={item => item.id.toString()}
            />
        );
    }

}

export default Menu;