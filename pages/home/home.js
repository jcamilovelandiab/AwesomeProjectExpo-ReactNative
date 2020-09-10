import React, { Component } from 'react';
import { ScrollView, View, Text } from 'react-native';
import { DISHES } from '../../shared/dishes';
import { PROMOTIONS } from '../../shared/promotions';
import { LEADERS } from '../../shared/leaders';
import MyCard from '../../components/my-card';

function RenderItem(props){
    const item = props.item;
    if(item!==null){
        return (
          <MyCard
            image={require("../../assets/images/uthappizza.png")}
            title={item.name}
            description={item.description}
          />
        );
    }else{
        return <View></View>;
    }

}

class Home extends Component {

    constructor(props){
        super(props);
        this.state = {
            dishes: DISHES,
            promotions: PROMOTIONS,
            leaders: LEADERS
        }
    }

    static navigationOptions = {
        title: 'Home'
    }

    render(){
        return (
            <ScrollView>
                <RenderItem
                    item={this.state.dishes.filter((dish) => dish.featured)[0]}
                />
                <RenderItem
                    item={
                    this.state.promotions.filter(
                        (promotion) => promotion.featured
                    )[0]
                    }
                />
                <RenderItem
                    item={this.state.leaders.filter((leader) => leader.featured)[0]}
                />
                <Text style={{height: 10}}></Text>
            </ScrollView>
        );
    }
}

export default Home;