import React, { Component } from "react";
import { View } from "react-native";
import { DISHES } from "../../shared/dishes";
import MyCard from '../../components/my-card';

function RenderDish(props) {
    const dish = props.dish;

    return (dish) ? (
        <MyCard 
            image={require("../../assets/images/uthappizza.png")}
            title={dish.name}
            description={dish.description}
        />
    ) : (
        <View></View>
    );
}

class DishDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            dishId: this.props.route.params.dishId,
        };
    }

    render() {
        return <RenderDish dish={this.state.dishes[+this.state.dishId]} />;
    }
}

export default DishDetail;