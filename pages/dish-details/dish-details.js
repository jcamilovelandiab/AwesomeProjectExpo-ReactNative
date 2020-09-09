import React, { Component } from "react";
import { View, Text } from "react-native";
import { Card } from "react-native-elements";
import { DISHES } from "../../shared/dishes";

function RenderDish(props) {
    const dish = props.dish;
    if (dish) {
        return (
            <Card>
                <Card.Title>{dish.name}</Card.Title>
                <Card.Image
                    source={require("../../assets/images/uthappizza.png")}
                />
                <Text style={{ marginTop: 10 }}>{dish.description}</Text>
            </Card>
        );
    } else {
        return <View></View>;
    }
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